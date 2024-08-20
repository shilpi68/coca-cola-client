import FirstBottle from "../FirstBottle/FirstBottle";
import Origin from "../Origin/Origin";
import SusatainHistory from "../SusatainHistory/SusatainHistory";


const History = () => {
    return (
        <div className="text-center">
            <h1 className="mb-4 font-bold text-4xl"
            data-aos="fade-right" 
            data-aos-easing="linear"
            data-aos-duration="1000">History</h1>
            <p className="font-medium text-2xl w-3/6 mx-auto"
            data-aos="fade-right" 
            data-aos-easing="linear"
            data-aos-duration="1000">Since its birth at a soda fountain in downtown Atlanta,
                 Georgia, in 1886, Coca‑Cola has been a catalyst for social 
                 interaction and inspired innovation.</p>

                 <Origin></Origin>
                 <FirstBottle></FirstBottle>
                 <SusatainHistory></SusatainHistory>
            
        </div>
    );
};

export default History;