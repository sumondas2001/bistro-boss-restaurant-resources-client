import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItemsCard from "../../../Shared/MenuItemsCard/MenuItemsCard";

const MenuCategory = ({ items, buttonText, img, title, description }) => {
     return (
          <div>
               <Cover img={img} title={title} description={description} />
               <div className=" mt-24 mb-14">
                    <div className="grid md:grid-cols-2 mb-10 gap-10">
                         {
                              items.map(item => <MenuItemsCard
                                   key={item._id}
                                   item={item}
                              ></MenuItemsCard>)
                         }
                    </div>
                    <div className="flex justify-center">
                         {
                              buttonText && <Link to={`/order/${title}`}>
                                   <button className="btn  btn-primary uppercase">{buttonText}</button>
                              </Link>
                         }
                    </div>


               </div>
          </div>

     );
};

export default MenuCategory;