import { welcome } from '../controllers/mainController.js';
import { getPost,addPost, getSinglePost } from '../controllers/postController.js';

export const appRoutes = (app) => {
  
  app.get('/', welcome);

  app.get('/posts', getPost);

  app.get('/posts/:id', getSinglePost);

  app.post('/add-post', addPost);
};