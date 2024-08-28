import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const ManageItems = () => {
    const [menu,,refetch] = useMenu();
    const axiosSecure = useAxiosSecure()

    const  handleDeleteItem = (item) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async (result) => {
            if (result.isConfirmed) {
                const res= await axiosSecure.delete(`/menu/${item._id}`)
                // console.log(res.data)
            if(res.data.deletedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${item.name}has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500
                  }); 
            }
            }
          });

    }
    return (
        <div>
            <SectionTitle Heading='Manage All items'></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                      {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item,index) => <tr key={item._id}>
                                    <th>
                                        {index+1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img src={item.img}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </td>
                                    <td>{item.name}
                                      </td>
                                    <td className="text-right">{item.price}</td>
                                    <th>
                                   <Link to={`/dashboard/updateItem/${item._id}`}>
                                   <button
                                        className="btn btn-ghost btn-md">
                                        <FaEdit className="text-xl text-rose-300"></FaEdit>
                                    </button>
                                   </Link>
                                    </th>
                                    <th>
                                    <button
                                        onClick={() => handleDeleteItem(item)}
                                        className="btn btn-ghost btn-md">
                                        <FaTrashAlt className="text-xl text-rose-300"></FaTrashAlt>
                                    </button>
                                    </th>
                                </tr>)
                            }
                           
                           
                           
                            
                        </tbody>
                      
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;