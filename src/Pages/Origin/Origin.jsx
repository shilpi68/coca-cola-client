import { Link } from 'react-router-dom';
import orginPic from '../../assets/orgen.jpeg'
import SectionTitle from '../../component/SectionTitle/SectionTitle';

const Origin = () => {
    return (
       <section className="mt-10">
        <SectionTitle
        Heading='Orign Coca-Cola'
        ></SectionTitle>
         <div className="mt-10 flex hero-content flex-col lg:flex-row"
         data-aos="fade-up" 
         data-aos-easing="linear"
         data-aos-duration="1000">
            <div className="flex-1 ">
                <img className='w-96 h-96 border-8 rounded-xl ml-20' src={orginPic} alt="" />
            </div>
            <div><div className="card bg-base-100 w-96 shadow-xl flex-1 relative mr-32">
                <div className="card-body ">
                    <h2 className="card-title font-serif text-2xl">The Origin of Coca-Cola</h2>
                    <p className="font-medium">On May 8, 1886, Dr. John Pemberton brought his
                         perfected syrup to Jacobs Pharmacy in downtown
                          Atlanta where the first glass of Coca‑Cola was
                           poured.  Serving about nine drinks per day in 
                           its first year, Coca‑Cola was an exciting new
                            drink in the beginning.  See the story here of
                             how it all began.</p>
                            <Link to='/originDetails'> 
                            <button className="btn btn-outline rounded-full btn-block">Read More</button>
                            </Link>
                </div>
                
            </div>
            </div>

        </div>
       </section>
    );
};

export default Origin;