import { useEffect, useState } from "react";
import PagesTittle from "../../../component/PagesTittle/PagesTittle";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating'
import { FaQuoteLeft } from "react-icons/fa";
import '@smastrom/react-rating/style.css'

// import required modules
import { Navigation } from 'swiper/modules';


const Testimonials = () => {
     const [reviews, setReviews] = useState([]);
     useEffect(() => {
          fetch('reviews.json')
               .then(res => res.json())
               .then(data => setReviews(data))
     }, [])
     return (
          <section>
               <div>
                    <PagesTittle tittle={'TESTIMONIALS'} subTittle={'What Our Clients Say'}></PagesTittle>
               </div>
               <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                         reviews.map(review => <SwiperSlide key={review._id} >
                              <div className="m-24 space-y-4 flex-col flex items-center">
                                   <Rating style={{ maxWidth: 180 }} value={review.rating} />
                                   <FaQuoteLeft className="size-20" />
                                   <p className=" text-sm">{review.details}</p>
                                   <h3 className="text-2xl text-orange-400">{review.name}</h3>
                              </div>
                         </SwiperSlide>
                         )
                    }

               </Swiper>
          </section>
     );
};

export default Testimonials;