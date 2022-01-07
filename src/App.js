import './App.css'
import Banner from './componenets/Banner/Banner';
import NavBar from './componenets/NavBar/NavBar';
import RowPost from './componenets/RowPost/RowPost';



function App() {

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost/>
    </div>
  );
}

export default App;
