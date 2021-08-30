import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/NavigationBar';
import {Route, BrowserRouter as Router} from 'react-router-dom';
//import MovieData from './components/MovieData';
import MovieCard from './components/MovieCard';

function App() {
  
  return (
   
    <div className="App">
     <Header/>
     <MovieCard/>
        
     
    </div>
  );
}

export default App;
