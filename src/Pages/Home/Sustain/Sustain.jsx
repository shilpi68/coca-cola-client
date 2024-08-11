import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import cocacolaImg from '../../../assets/coca-cola.jpeg'

const Sustain = () => {
    return (
      <section className="mt-10 mb-6">
        <SectionTitle
        Heading={'Sustainability'}
        ></SectionTitle>
          <div className="flex mt-10  hero-content flex-col lg:flex-row">
            <div
             className="flex-1"
              data-aos="zoom-in-down"
              data-aos-easing="linear"
              data-aos-duration="1000">
                <h1 className="font-bold text-2xl">Sustainability projects</h1>
                <p>We aim to create a more sustainable
                     and better shared future. To make a 
                     difference in peoples lives, communities
                      and our planet by doing business the 
                      right way.</p>
                      <button className='btn btn-outline border-0 border-b-4 hover:bg-red-500 hover:text-white'>Read more</button>
            </div>
            <div className="flex-1">
                <img 
                className=" border-8 rounded-xl" 
                src={cocacolaImg} alt="" 
                data-aos="zoom-in-down"
              data-aos-easing="linear"
              data-aos-duration="1000"/>
            </div>
            
        </div>
      </section>
    );
};

export default Sustain;