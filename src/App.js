import logo from './logo.svg';
import './App.css';
import LoadCountries from './Component/LoadCountries/LoadCountries';
import Navbar from './Component/Navbar/Navbar';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
// import Country from './Component/Country/Country';
// import Countries from './Component/Countries/LoadCountries';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <LoadCountries></LoadCountries>
      <Footer></Footer>
    </div>
  );
}

export default App;
