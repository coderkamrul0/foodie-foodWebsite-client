import './App.css';
import AboutFood from './Components/AboutFood/AboutFood';
import Banner from './Components/Banner/Banner';
import Delivery from './Components/Delivery/Delivery';
import PopularFood from './Components/PopularFood/PopularFood';
import HomeMenu from './Components/homeMenu/homeMenu';

function App() {
  return (
    <div>
      <Banner/>
      <HomeMenu/>
      <Delivery/>
      <PopularFood/>
      <AboutFood/>
    </div>
  );
}

export default App;
