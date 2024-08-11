import SectionTitle from "../../component/SectionTitle/SectionTitle";
import bottleImg from '../../assets/bottle.jpeg'
import { Link } from "react-router-dom";

const FirstBottle = () => {
    return (
        <section>
            <SectionTitle Heading='First Bottle'></SectionTitle>
            <div  className="mt-10 flex hero-content flex-col lg:flex-row gap-10">
            <div><div className="card bg-base-100 w-96 shadow-xl  flex-1">
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">Coca‑Cola’s First Bottle</h2>
                    <p className="font-semibold">The contour bottle has been celebrated in art, music and 
                        advertising. Read the story of the collaboration that began
                         in 1915 and turned into one of the most famous shapes in the world.</p>
                    <Link to='/bottleDetails'>
                    <div className="card-actions justify-end">
                    <button className="btn btn-outline font-bold text-lg rounded-full btn-block">History of Coca-Cola Bottle</button>
                    </div>
                    </Link>
                </div>
            </div>
            </div>
            <div >
                <img className='w-96 flex-1 h-96  border-8 rounded-xl ' src={bottleImg} alt="" />
            </div>

        </div>
        </section>
    );
};

export default FirstBottle;