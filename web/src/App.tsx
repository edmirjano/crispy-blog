import './App.css';
import { PostList } from './components/postList/PostList';
import { Route, Router } from 'react-router-dom';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <main>
        {/* <Router location='/' navigator={undefined}>
          <header />
          <Switch>
            <Route path="/auth" component={Auth} exact />
            <Route path="/" component={PostList} exact />
          </Switch>
        </Router> */}
 git       <Footer />
      </main>
    </div>
  );
}

export default App;
