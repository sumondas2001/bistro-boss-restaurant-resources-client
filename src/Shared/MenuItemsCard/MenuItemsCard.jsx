
const MenuItemsCard = ({ item }) => {
     const { name, recipe, image, price } = item;
     return (
          <div className="flex space-x-2">
               <div>
                    <img style={{ borderRadius: '0px 200px 200px 200px' }} className="w-[100px]" src={image} alt="" />
               </div>
               <div className="flex">
                    <div>
                         <h3 className="uppercase">{name}----------</h3>
                         <p>{recipe}</p>
                    </div>
                    <div>
                         <p className="text-yellow-500">${price}</p>
                    </div>
               </div>
          </div>
     );
};

export default MenuItemsCard;