import './App.css'
import Banner from './componenets/Banner/Banner';
import NavBar from './componenets/NavBar/NavBar';
import RowPost from './componenets/RowPost/RowPost';
import {originals,actionMovies,comedyMovies,romanceMovies,documentaries} from './apis/urls'



function App() {

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title='Netflix Originals' url={originals}/>
      <RowPost title='Action Movies' url={actionMovies}/>
      <RowPost title='Comedy Movies' url={comedyMovies}/>
      <RowPost title='Romance Movies' url={romanceMovies}/>
      <RowPost title='Documentaries' url={documentaries}/>
      
    </div>
  );
}

export default App;
