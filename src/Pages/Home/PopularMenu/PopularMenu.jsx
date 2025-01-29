import PagesTittle from "../../../component/PagesTittle/PagesTittle";
import UseMenu from "../../../hooks/UseMenu";
import MenuCategory from "../../Menu/MenuCategory/MenuCategory";

const PopularMenu = () => {
     const [menu] = UseMenu();
     const popular = menu.filter(item => item.category === 'popular')

     return (
          <section className="mb-20">
               <div>
                    <PagesTittle tittle={'FROM OUR MENU'} subTittle={'Popular Menu'}></PagesTittle>
               </div>
               <MenuCategory items={popular} />


          </section>
     );
};

export default PopularMenu;