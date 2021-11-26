import { welcome } from '../controllers/mainController.js';
import { getPost,addPost } from '../controllers/postController.js';

export const appRoutes = (app) => {
  
  app.get('/', welcome);

  app.get('/posts', getPost);

  app.post('/add-post', addPost);
};