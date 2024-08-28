import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpdateItem = () => {
    const {name,category,description,price,_id} = useLoaderData();
    const { register, handleSubmit,reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit =async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const  imageFile ={image:data.img[0]}
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        });
        if(res.data.success){
            const menuItem ={
                name: data.name,
                category:data.category,
                price:parseFloat(data.price),
                description:data.description,
                img:res.data.data.display_url

            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`,menuItem);
            console.log(menuRes.data)
            if(menuRes.data.modefiedCount > 0){
                // show success popup
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is Updated to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log(res.data);
    };
   
    return (
        <div>
            <SectionTitle Heading='Update Item'></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control my-6 w-full ">
                        <label className="label">
                            <span className="label-text">Drinks name*</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={name}
                            {...register("name",{required:true})}
                            required
                            placeholder="Drinks Name"
                            className="input input-bordered w-full" />

                    </div>
                    <div className="flex gap-6">
                        {/*category  */}
                        <div className="form-control my-6 w-full ">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={category} {...register("category",{required:true})}
                                className="select select-bordered w-full">
                                <option disabled value='default'>Select a category</option>
                                <option value="coca-cola">Coca-Cola</option>
                                <option value="sprite">Sprite</option>
                                <option value="fanta">Fanta</option>
                                <option value="kinley">Kinley</option>

                            </select>

                        </div>

                        {/* price */}
                        <div className="form-control my-6 w-full ">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                defaultValue={price}
                                {...register("Price",{required:true})}
                                placeholder="Price"
                                className="input input-bordered w-full" />

                        </div>
                      
                    </div>

                      {/* drinks details */}
                      <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your bio</span>
                             </label>
                            <textarea 
                            defaultValue={description}
                             {...register("description")}
                            className="textarea textarea-bordered h-24" 
                            placeholder="Bio"></textarea>
                            
                        </div>

                        <div className="form-control my-6 w-full">
                        <input
                         {...register("img",{required:true})}
                         type="file"
                          className="file-input file-input-bordered w-full max-w-xs" />
                        </div>

                    <button className="btn outline-double bg-pink-500 hover:bg-gradient-to-r from-indigo-300  to-pink-300 ">
                        Update Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;