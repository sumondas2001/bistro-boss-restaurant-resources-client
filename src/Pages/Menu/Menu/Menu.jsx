import { Helmet } from "react-helmet";
import menuImg1 from "../../../assets/menu/banner3.jpg"
import menuImg2 from "../../../assets/menu/dessert-bg.jpeg"
import menuImg3 from "../../../assets/menu/pizza-bg.jpg"
import menuImg4 from "../../../assets/menu/salad-bg.jpg"
import menuImg5 from "../../../assets/menu/soup-bg.jpg"
import UseMenu from "../../../hooks/UseMenu";
import MenuCategory from "../MenuCategory/MenuCategory";



const Menu = () => {
     const [menu] = UseMenu();
     const dessert = menu.filter(item => item.category === 'dessert');
     const soup = menu.filter(item => item.category === 'soup');
     const salad = menu.filter(item => item.category === 'salad');
     const pizza = menu.filter(item => item.category === 'pizza');
     const offered = menu.filter(item => item.category === 'offered');

     const description = 'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
     return (
          <div>
               <Helmet>
                    <title>
                         Bistro Boss || Menu
                    </title>
               </Helmet>

               <MenuCategory img={menuImg1} title={'OUR MENU'} description={'Would you like to try a dish?'} items={offered} buttonText={'ORDER YOUR FAVOURITE FOOD'} />

               <MenuCategory img={menuImg2} title={'SALADS'} description={description} items={salad} buttonText={'ORDER YOUR FAVOURITE FOOD'} />

               <MenuCategory img={menuImg3} title={'dessert'} description={description} items={dessert} buttonText={'ORDER YOUR FAVOURITE FOOD'} />

               <MenuCategory img={menuImg4} title={'PIZZA'} description={description} items={pizza} buttonText={'ORDER YOUR FAVOURITE FOOD'} />

               <MenuCategory img={menuImg5} title={'SOUPS'} description={description} items={soup} buttonText={'ORDER YOUR FAVOURITE FOOD'} />
          </div>
     );
};

export default Menu;