import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Post } from '../../models/postModel';
import { config } from '../../config/config';

export const PostList = () => {
    
  const [posts, setPosts] = useState<Post[]>([]);
    
  useEffect(() => {
    axios.get(`${config.base_url}posts`)
    .then(res => {
      setPosts(res.data);
    });
  }, [])

  return (
    <div>
    <ul>
      { posts.map(post => <li> {post.title} </li> )}
    </ul>
    </div>
  )
};
