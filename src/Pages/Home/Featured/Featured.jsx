import PagesTittle from "../../../component/PagesTittle/PagesTittle";
import img from '../../../assets/home/featured.jpg';
import './featured.css'
const Featured = () => {
     return (
          <div className=" featured-item bg-fixed mt-20 mb-20 ">
               <div className=" py-12 px-6 text-white ">
                    <PagesTittle tittle="FROM OUR MENU" subTittle="Check it out"></PagesTittle>
                    <div className="md:flex justify-center items-center pb-20 pt-12 md:px-36">
                         <div className="md:w-1/2">
                              <img src={img} alt="Featured Dish" className="rounded-lg shadow-lg" />
                         </div>
                         <div className="md:w-1/2 md:ml-10 mt-6 md:mt-0">
                              <p className="block text-sm text-gray-300">March 20, 2023</p>
                              <h3 className="uppercase text-lg font-bold mt-2">WHERE CAN I GET SOME?</h3>
                              <p className="mt-4 text-sm leading-6 text-gray-300">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                              </p>

                              <button className="btn btn-outline mt-4">Read More</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Featured;
