import './App.css';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SinglePost } from './components/singlePost/SinglePost';
import { PostList } from './components/postList/PostList';
import { AddPost } from './components/addPost/AddPost';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="posts/:postId" element={<SinglePost />} />
          <Route path="/add-post" element={<AddPost />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
