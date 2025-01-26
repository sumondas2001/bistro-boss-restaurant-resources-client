
const PagesTittle = ({ tittle, subTittle }) => {
     return (
          <div className="md:w-4/12 my-8 mx-auto text-center" >
               <p className="text-yellow-400  mb-4">---- <i>{subTittle}</i> ----</p>
               <h3 className="text-3xl font-medium uppercase  border-y-2 py-4">{tittle}</h3>
          </div>
     );
};

export default PagesTittle;