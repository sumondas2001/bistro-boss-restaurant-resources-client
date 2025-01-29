import { Parallax } from 'react-parallax';

const Cover = ({ img, title, description }) => {
     return (
          <div>

               <Parallax
                    className='object-cover'
                    blur={{ min: -50, max: 50 }}
                    bgImage={img}
                    bgImageAlt="the dog"
                    strength={-200}
               >
                    <div
                         className="hero h-[400px]"
                    >
                         <div className="hero-overlay bg-opacity-60"></div>
                         <div className="hero-content text-neutral-content text-center">
                              <div className="max-w-md">
                                   <h1 className="mb-5 text-5xl text-amber-400 font-bold uppercase">{title}</h1>
                                   <p className="mb-5 uppercase ">
                                        {description}
                                   </p>
                              </div>
                         </div>
                    </div>

               </Parallax>


          </div >
     );
};

export default Cover;