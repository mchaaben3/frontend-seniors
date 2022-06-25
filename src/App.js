import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';
import Main from './components/Main/Main';
import Posts from './components/Posts/Posts';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
