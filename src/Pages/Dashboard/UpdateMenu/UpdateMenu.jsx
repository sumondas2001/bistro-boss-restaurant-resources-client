import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import PagesCover from "../DashboardSherad/PagesCover/PagesCover";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { FaUtensils } from "react-icons/fa";
const image_hosting_key = 'bcd3630cf091a55f70b1cb2e88c58397';
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateMenu = () => {

     const { register, handleSubmit, reset, formState: { errors } } = useForm();
     const axiosPublic = useAxiosPublic();
     const { id } = useParams();
     const axiosSecure = useAxiosSecure();
     const { data: updateData } = useQuery({
          queryKey: ['update'],
          queryFn: async () => {
               const res = await axiosSecure.get(`/updateMenu/${id}`)
               return res.data
          }
     })
     console.log(id);
     // useEffect(() => {
     //      axiosPublic.get(`updateMenu/${id}`)
     //           .then(res => {
     //                console.log(res.data);
     //           })
     // }, [axiosPublic, id])


     const onSubmit = async (data) => {
          console.log(data);
          const imageFile = { image: data.image[0] }
          // image upload to imgbb and then get url
          const res = await axiosPublic.post(image_hosting_api, imageFile, {
               headers: {
                    "Content-Type": "multipart/form-data",
               },
          })

          // console.log(res.data.data.display_url);
          if (res.data.success) {
               const menuItem = {
                    name: data.name,
                    category: data.category,
                    price: parseFloat(data.price),
                    recipe: data.recipe,
                    image: res.data.data.display_url
               };


               const menuRes = await axiosSecure.patch(`/updateItem/${id}`, menuItem);
               console.log(menuRes);
               if (menuRes.data.modifiedCount > 0) {
                    reset()
                    Swal.fire({
                         position: "top-end",
                         icon: "success",
                         title: "Menu Item Update Successfully",
                         showConfirmButton: false,
                         timer: 1000
                    });
               }
          }
     }

     return (
          <div>
               <PagesCover title={'UPDATE AN ITEM'} pagesName={"---What's new?---"} />

               <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                         <div className="space-y-6">
                              {/* Recipe Name */}
                              <div className="flex flex-col w-full">
                                   <label className="mb-2 font-semibold">Recipe Name*</label>
                                   <input
                                        defaultValue={updateData?.name}
                                        {...register("name", { required: "Recipe Name is required" })}
                                        type="text"
                                        placeholder="Recipe Name"
                                        className="input input-bordered w-full"
                                   />
                                   {errors.name && <p className="text-sm mt-1 text-red-400">{errors.name.message}</p>}
                              </div>

                              {/* Category & Price */}
                              <div className="flex gap-6">
                                   {/* Category */}
                                   <div className="flex flex-col w-full">
                                        <label className="mb-2 font-semibold">Category*</label>
                                        <select
                                             defaultValue={updateData?.category}
                                             {...register("category", { required: "Category is required" })}
                                             className="select select-bordered w-full">
                                             <option value="default" disabled >Select a category</option>
                                             <option value="salad">Salad</option>
                                             <option value="drinks">Drinks</option>
                                             <option value="popular">Popular</option>
                                             <option value="dessert">Dessert</option>
                                             <option value="pizza">Pizza</option>
                                             <option value="soup">Soup</option>
                                             <option value="offered">Offered</option>
                                        </select>
                                        {errors.category && <p className="text-sm mt-1 text-red-400">{errors.category.message}</p>}
                                   </div>

                                   {/* Price */}
                                   <div className="flex flex-col w-full">
                                        <label className="mb-2 font-semibold">Price*</label>
                                        <input
                                             defaultValue={updateData?.price}
                                             {...register("price", { required: "Price is required", pattern: { value: /^[0-9]+$/, message: "Price must be a number" } })}
                                             type="text"
                                             placeholder="Price"
                                             className="input input-bordered w-full"
                                        />
                                        {errors.price && <p className="text-sm mt-1 text-red-400">{errors.price.message}</p>}
                                   </div>
                              </div>

                              {/* Recipe Details */}
                              <div className="flex flex-col w-full">
                                   <label className="mb-2 font-semibold">Recipe Details*</label>
                                   <textarea
                                        defaultValue={updateData?.recipe}
                                        {...register("recipe", { required: "Recipe details are required" })}
                                        className="p-4  textarea-bordered h-24"
                                        placeholder="Recipe Details">
                                   </textarea>
                                   {errors.recipe && <p className="text-sm mt-1 text-red-400">{errors.recipe.message}</p>}
                              </div>

                              {/* Image Upload */}
                              <div className="flex flex-col w-full">
                                   <label className="mb-2 font-semibold">Upload Image*</label>
                                   <input
                                        {...register("image", { required: "Image is required" })}
                                        type="file"
                                        className="file-input file-input-bordered w-full max-w-xs"
                                   />
                                   {errors.image && <p className="text-sm mt-1 text-red-400">{errors.image.message}</p>}
                              </div>

                              {/* Submit Button */}
                              <button type="submit" className="btn bg-[#835D23] text-white flex items-center gap-2">
                                   <FaUtensils />
                                   Update Item
                              </button>
                         </div>
                    </form>
               </div >
          </div>
     );
};

export default UpdateMenu;