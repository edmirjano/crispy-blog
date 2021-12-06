import './PostList.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Post } from '../../models/postModel';
import { config } from '../../config/config';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import moment from 'moment';

export const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get(`${config.base_url}posts`)
      .then(res => {
        setPosts(res.data);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {posts.map(({ _id, title, description, date }, index) => (
        <List key={index}>
          <Link to={`/posts/${_id}`} className="no-decoration-posts">
            <ListItem>
              <article style={{ lineHeight: 1.35 }}>
                <h2>
                  <strong>{title}</strong>
                </h2>
                <p>{truncate(description, 250)}&hellip;</p>
                <div style={{ textAlign: 'right' }}>
                  <time dateTime={date}>{moment(date).fromNow()}</time>
                </div>
              </article>
            </ListItem>
          </Link>
          <Divider />
        </List>
      ))}
      <br />
      <br />
      <br />
      <br />
    </div>
  )
};

function truncate(text: string, limit: number): React.ReactNode {
  if (typeof text !== 'string') return '';

  if (text.length > limit) {
    text = text.substring(0, limit);
  }
  const lastSpaceIndex = text.lastIndexOf(' ');
  if (lastSpaceIndex !== -1) {
    text = text.substring(0, lastSpaceIndex);
  }
  return text.replace(/[\s.]+$/g, '');
}