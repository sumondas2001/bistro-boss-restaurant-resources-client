import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Slider from "./Slider/Slider";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
     return (
          <div>
               <Slider />
               <Category />
               <PopularMenu />
               <Featured />
               <Testimonials />
          </div>
     );
};

export default Home;