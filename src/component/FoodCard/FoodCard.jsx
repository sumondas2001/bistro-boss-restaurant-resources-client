
const FoodCard = ({ item }) => {
     const { name, recipe, image, price } = item;
     return (
          <div>
               <div className='space-y-3 relative'>
                    <div className="">
                         <img className='h-72' src={image} alt="" />
                    </div>
                    <div className="absolute top-2 right-2 bg-black p-2">
                         <p className="text-lg text-amber-400 ">$ {price}</p>
                    </div>
                    <div className='text-center space-y-3'>
                         <h1 className='text-xl font-normal '>{name}</h1>
                         <p>  {recipe}</p>
                    </div>
                    <div className="flex justify-end mt-10">
                         <button className='btn btn-secondary'>ADD TO CARD</button>
                    </div>
               </div>
          </div>
     );
};

export default FoodCard;