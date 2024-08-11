import { Link } from "react-router-dom";


const ErroPage = () => {
    return (
        <div className="w-96 mt-32 mx-auto flex gap-4">
            <button className="btn text-3xl font-bold"><span className="text-red-500 text-3xl font-bold">404</span> Error 
                OH NO!
            </button>
           <Link to='/'>
           <button className="btn text-3xl font-bold"> Home 
           </button>
           </Link>
        </div>
    );
};

export default ErroPage;