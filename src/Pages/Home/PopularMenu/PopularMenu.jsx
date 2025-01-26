import { useEffect, useState } from "react";
import PagesTittle from "../../../component/PagesTittle/PagesTittle";
import MenuItemsCard from "../../../Shared/MenuItemsCard/MenuItemsCard";

const PopularMenu = () => {
     const [menu, setMenu] = useState([]);
     useEffect(() => {
          fetch('menu.json')
               .then(res => res.json())
               .then(data => {
                    const popularItems = data.filter(item => item.category === 'popular')
                    setMenu(popularItems)
               })
     }, [])
     return (
          <section className="mb-20">
               <div>
                    <PagesTittle tittle={'FROM OUR MENU'} subTittle={'Popular Menu'}></PagesTittle>
               </div>
               <div className="grid md:grid-cols-2 gap-10">
                    {
                         menu.map(item => <MenuItemsCard
                              key={item._id}
                              item={item}
                         ></MenuItemsCard>)
                    }
               </div>


          </section>
     );
};

export default PopularMenu;