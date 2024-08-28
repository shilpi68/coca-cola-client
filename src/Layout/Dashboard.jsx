import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart,  FaUsers, FaUtensils, } from "react-icons/fa";
import { FaShapes } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {

    // todo:get isAdmin value from the database
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-rose-300">
                <ul className="menu p-4">
                  {
                    isAdmin ? <>
                      <li>
                        <NavLink to='/dashboard/adminHome'>
                            <FaHome></FaHome>
                            Admin Home</NavLink></li>
                    <li>
                        <NavLink to='/dashboard/addItems'>
                            <FaUtensils></FaUtensils>
                            Add Items</NavLink></li>
                    <li>
                        <NavLink to='/dashboard/manageItems'>
                            <FaList></FaList>
                            Manage Items</NavLink></li>
                    <li>
                        <NavLink to='/dashboard/bookings'>
                            <FaBook></FaBook>
                            Manage Bookings</NavLink></li>
                    <li>
                        <NavLink to='/dashboard/users'>
                            <FaUsers></FaUsers>
                            All Users</NavLink></li>
                    </> :
                    <>
                      <li>
                        <NavLink to='/dashboard/userHome'>
                            <FaHome></FaHome>
                            User Home</NavLink></li>
                    <li>
                        <NavLink to='/dashboard/cart'>
                            <FaShoppingCart></FaShoppingCart>
                            My Cart</NavLink></li>
                    <li>
                        <NavLink to='/dashboard/reservation'>
                            <FaCalendar></FaCalendar>
                            Reservation</NavLink></li>
                    <li>
                        <NavLink to='/dashboard/review'>
                            <FaAd></FaAd>
                            Add a Review</NavLink></li>
                    <li>
                        <NavLink to='/dashboard/bookings'>
                            <FaList></FaList>
                            My Booking</NavLink></li>
                    </>
                  }
                    {/*shared nav links  */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'>
                            <FaHome></FaHome>
                            Home</NavLink></li>
                    <li>
                        <NavLink to='/about'>
                            <FaShapes></FaShapes>
                            About Us</NavLink></li>
                    <li>
                        <NavLink to='/shop/cocacolo'>
                            <FaShoppingCart></FaShoppingCart>
                            shop</NavLink></li>
                    <li>
                        <NavLink to='/shop/contact'>
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink></li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;