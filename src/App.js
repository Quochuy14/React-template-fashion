import Header from './Structure/Header';
import Category from './Structure/Categories';
import Product from './Structure/Products';
import Banner from './Structure/Banner';
import Trend from './Structure/Trend';
import Discount from './Structure/Discount';
import Services from './Structure/Services';
import Instagram from './Structure/Instagram';
import Footer from './Structure/Footer';

function App() {
  return (
    <div className="App">
      <div className="maincontainer">
        <Header/>
        <Category/>
        <Product/>
        <Banner/>
        <Trend/>
        <Discount/>
        <Services/>
        <Instagram/>
        <Footer/>
      </div>
    </div>
  );
  }

export default App;