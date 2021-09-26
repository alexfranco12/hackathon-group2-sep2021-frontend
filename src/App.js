import './App.css';
import { Route, Switch } from 'react-router-dom';
import { LikedDogsContext } from './utilities/LikedDogsContext';
import NavBar from './components/NavBar/NavBar';
import DogDetailPage from './pages/DogDetailPage/DogDetailPage';
import HomePage from './pages/HomePage/HomePage';
import BookmarkPage from './pages/BookmarkPage/BookmarkPage';
import Footer from './components/Footer/Footer';


const App = () => {
  let likedDogs = []

  return (
    <div className="App">
      <NavBar />

      <div className="Main">
        <Switch>
          {/* Landing Page */}

          <LikedDogsContext.Provider value={likedDogs}>
            <Route exact path="/" component={HomePage} />
            <Route path="/bookmark" component={BookmarkPage} />
          </LikedDogsContext.Provider>

          <Route path="/detail/:id" component={DogDetailPage} />

          {/* chat component */}
          
          {/* not found page */}
          
        </Switch>
      </div>
      

      <Footer />
    </div>
  );
}

export default App;