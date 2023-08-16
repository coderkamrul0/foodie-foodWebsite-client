import  { useEffect, useState } from "react";
import "./Banner.css";
import bannerImageOne from "../../assets/banner-img-5.png";
import bannerImageTwo from "../../assets/banner-img-2.png";

const data = [
  {
    id: 1,
    subHeading: "Hot & Special",
    heading: "SPICY FRIED CHICKEN",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero animi soluta corporis earum necessitatibus placeat similique consequuntur ex officia repellat.",
    image: bannerImageOne,
    bg: "bannerBgOne",
  },
  {
    id: 2,
    subHeading: "Limited Edition",
    heading: "NEW ONION BURGER",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero animi soluta corporis earum necessitatibus placeat similique consequuntur ex officia repellat.",
    image: bannerImageTwo,
    bg: "bannerBgTwo",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className={`h-[calc(100vh-60px)] ${data[currentSlide].bg}`}>
        <div className="max-w-screen-xl mx-auto md:flex items-center justify-center px-2 py-3">
          {/* Text Container  */}
          <div className="md:w-1/2">
            <div>
            <h5 className="text-[#FFC222] text-xl font-bold">{data[currentSlide].subHeading}</h5>
            <h1 className="text-5xl md:text-7xl font-bold text-white py-5">{data[currentSlide].heading}</h1>
            <p className="text-[#F7F5F4] font-bold pb-5">{data[currentSlide].desc}</p>
            <button className="bg-[#ffc222] font-bold px-6 py-3 text-black rounded-lg ">Explore more</button>
            </div>
          </div>
          {/* Image Container  */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={data[currentSlide].image}
              alt={data[currentSlide].heading}
              className="w-[60%] md:w-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
