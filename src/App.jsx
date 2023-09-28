import './App.css';
import Banner from './Component/Banner/Banner';
import Nav from './Component/Nav/Nav';
import Row from './Component/Row/Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Nav/>


      <Banner/>


      <Row title="NETFLIX ORGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        islargeRow />
      <Row title="Trending Now"
        fetchUrl={requests.fetchTrending} />
      
      <Row title="Top Rated"
        fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies"
        fetchUrl={requests.fechActionMovies } />
      <Row title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies } />
      <Row title="Horror Movies"
        fetchUrl={requests.fechHorrorMovies} />
      <Row title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies } />
      <Row title="Documentaries Movies"
        fetchUrl={requests.fetchDocumentaries } />
      
    </div>
  );
}

export default App;
