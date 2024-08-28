import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useCart = () => {
    // tan stack query
    const axiosSecure = useAxiosSecure();
    const {user} =useAuth();
    const {refetch,data:cart=[]} = useQuery({
      queryKey:['cart',user?.email],
      queryFn:async () =>{
         console.log('useCart checking',user?.email)
        const res = await axiosSecure.get(`/carts?email=${user.email}`)
        return res.data;
      }
    })
    return[cart,refetch]
};

export default useCart;