import SectionTitle from "../../component/SectionTitle/SectionTitle";
import sustainImg from '../../assets/susatina.png'

const SusatainHistory = () => {
    return (
        <div>
            <section className="mt-10">
        <SectionTitle
        Heading='Susatainability Coca-Cola'
        ></SectionTitle>
         <div className="mt-10 flex hero-content flex-col lg:flex-row">
            <div className="flex-1 ">
                <img className='border-8 rounded-xl ml-20' src={sustainImg} alt="" />
            </div>
            <div><div className="card bg-base-100 w-96 shadow-xl flex-1 ">
                <div className="card-body ">
                    <h2 className="card-title font-serif text-2xl">Coca-Cola Sustainability History</h2>
                    <p className="font-medium">Sustainability is not something new at The Coca‑Cola Company.
                         Since 1917, our efforts have covered a wide range of topics including: water 
                         sustainability, women empowerment, community well-being, sustainable packaging,
                          climate protection, human and workplace rights, and sustainable agriculture.</p>
                             <button className="btn btn-outline rounded-full btn-block font-bold text-lg">Coca-Cola Sustainability History</button>
                </div>
                
            </div>
            </div>

        </div>
       </section>
            
        </div>
    );
};

export default SusatainHistory;