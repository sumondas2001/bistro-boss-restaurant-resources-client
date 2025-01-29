import { Helmet } from "react-helmet";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Slider from "./Slider/Slider";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
     return (
          <div>
               <Helmet>
                    <title>
                         Bistro Boss || Home
                    </title>
               </Helmet>
               <Slider />
               <Category />
               <PopularMenu />
               <Featured />
               <Testimonials />
          </div>
     );
};

export default Home;