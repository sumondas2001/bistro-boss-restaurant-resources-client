
const PagesCover = ({ title, pagesName }) => {
     return (
          <div className="text-center space-y-4 mb-20">
               <p className=" text-[#D1A054]">{pagesName}</p>
               <h1 className=" text-2xl">{title}</h1>
          </div>
     );
};

export default PagesCover;