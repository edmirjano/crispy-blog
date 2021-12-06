import './SinglePost.css';
import Paper from '@mui/material/Paper';
import { Post } from '../../models/postModel';
import moment from 'moment';
import Divider from '@mui/material/Divider';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { config } from '../../config/config';
import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const SinglePost = () => {
  const [post, setPost] = useState<Post>();
  let params = useParams();

  useEffect(() => {
    axios.get(`${config.base_url}posts/${params.postId}`)
      .then(res => {
        setPost(res.data);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Paper className="box">
      <Link to={`/posts`} className="back-button">
        <Button variant="outlined" startIcon={<ArrowBackIcon />}>
          Back
        </Button>
      </Link>
      <article>
        <h1>{post && post.title}</h1>
        <time dateTime={post && post.date}>{moment(post && post.date).fromNow()}</time>
        <br />
        <br />
        <Divider />
        {post &&
          post.description
            .split('\n')
            .map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      </article>
    </Paper>
  )
};