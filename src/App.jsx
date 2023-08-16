import './App.css';
import AboutFood from './Components/AboutFood/AboutFood';
import Banner from './Components/Banner/Banner';
import Delivery from './Components/Delivery/Delivery';
import NewsLetter from './Components/NewsLetter/NewsLetter';
import PopularFood from './Components/PopularFood/PopularFood';
import Testimonials from './Components/Testimonials/Testimonials';
import WhyChose from './Components/WhyChose/WhyChose';
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
      <NewsLetter/>
      <WhyChose/>
    </div>
  );
}

export default App;
