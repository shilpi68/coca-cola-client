import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";




const DrinksCard = ({item}) => {
    const {name,price,description,category,img,_id}= item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [,refetch] =useCart();

   
    const handleAddToCart = () =>{
      console.log("user",user)
      if(user  && user.email){
        // send cart item to the database
        
        
        const cartItem ={
          menuId:_id,
          email:user.email,
          name,
          img,
          price
        }
        axiosSecure.post('/carts',cartItem)
        .then(res =>{
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name}add to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
            refetch()
          }
          
        })
      }
      else{
        Swal.fire({
          title: "You are not Logged In",
          text: "please login to add the cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes,login!"
        }).then((result) => {
         if (result.isConfirmed){
          //  send the user to the login pagge
          navigate('/login',{state: {from:location}})
          }
        });
      }
    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={img}alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-lg text-center"> {description}</p>
          <p className="font-bold">Category = {category}</p>
          <p className="font-medium"> price = ${price}</p>
          <div className="card-actions justify-end">
            <button 
            onClick={handleAddToCart}
            className="btn btn-block bg-red-400 text-white hover:bg-red-700">
              Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default DrinksCard;