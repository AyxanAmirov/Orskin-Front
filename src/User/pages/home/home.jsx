import React from "react";
import HomeSlider from "../../components/HomeSlider/HomeSlider.jsx";
const slides = [
  { image: 'https://orskin.ae/wp-content/uploads/2023/07/home-banner1.jpg' },
  { image: 'https://orskin.ae/wp-content/uploads/2023/07/home-banner2.jpg'},
  { image: 'https://orskin.ae/wp-content/uploads/2023/07/home-banner3.jpg' }
];
function Home() {
  return (
    <>
    <HomeSlider slides={slides}/>
       <div className="w-full h-64 bg-walpaper bg-no-repeat bg-center bg-cover">

       </div>
    </>
  );
}

export default Home;
