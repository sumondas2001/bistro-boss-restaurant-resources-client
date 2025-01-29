import FoodCard from "../../../component/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const OrderTab = ({ item }) => {
     const pagination = {
          clickable: true,
          renderBullet: function (index, className) {
               return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
     };
     return (
          <div>
               <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
               >
                    <SwiperSlide>

                         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-8 gap-2">
                              {item.map(item => <FoodCard key={item._id} item={item} />)}
                         </div>
                    </SwiperSlide>

               </Swiper>
          </div>
     );
};

export default OrderTab;