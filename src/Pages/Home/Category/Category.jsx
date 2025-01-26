// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import PagesTittle from '../../../component/PagesTittle/PagesTittle';



const Category = () => {
     return (
          <div>
               <PagesTittle
                    tittle={'ORDER ONLINE'}
                    subTittle={'From 11:00am to 10:00pm'}
               />
               <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    centeredSlides={true}
                    pagination={{
                         clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-20"
               >
                    <SwiperSlide>

                         <img src={img1} alt="" />
                         <h3 className='text-2xl -mt-32 text-white uppercase font-medium text-center'>Salads</h3>
                    </SwiperSlide>
                    <SwiperSlide>

                         <img src={img2} alt="" />
                         <h3 className='text-2xl -mt-32 text-white uppercase font-medium text-center'>pizzas</h3>
                    </SwiperSlide>
                    <SwiperSlide>

                         <img src={img3} alt="" />
                         <h3 className='text-2xl -mt-32 text-white uppercase font-medium text-center'>desserts</h3>
                    </SwiperSlide>
                    <SwiperSlide>

                         <img src={img4} alt="" />
                         <h3 className='text-2xl -mt-32 text-white uppercase font-medium text-center'>Salads</h3>
                    </SwiperSlide>
                    <SwiperSlide>

                         <img src={img5} alt="" />
                         <h3 className='text-2xl -mt-32 text-white uppercase font-medium text-center'>Salads</h3>
                    </SwiperSlide>


               </Swiper>
          </div>
     );
};

export default Category;