import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { FaShapes } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-rose-300">
                <ul className="menu p-4">
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