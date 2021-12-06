import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AddPost, PostList, SinglePost, Footer, Header } from './components';

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
