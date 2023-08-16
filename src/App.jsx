import './App.css';
import AboutFood from './Components/AboutFood/AboutFood';
import Banner from './Components/Banner/Banner';
import Delivery from './Components/Delivery/Delivery';
import PopularFood from './Components/PopularFood/PopularFood';
import Testimonials from './Components/Testimonials/Testimonials';
import HomeMenu from './Components/homeMenu/homeMenu';

function App() {
  return (
    <div>
      <Banner/>
      <HomeMenu/>
      <Delivery/>
      <PopularFood/>
      <AboutFood/>
      <Testimonials/>
    </div>
  );
}

export default App;
