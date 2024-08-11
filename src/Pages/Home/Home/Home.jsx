import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Experiences from "../Experiences/Experiences";
import Sustain from "../Sustain/Sustain";

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Coco-cola | Home</title>
            </Helmet>
              <Banner></Banner>
              <Experiences></Experiences>
              <Sustain></Sustain>
              <Brands></Brands>
        </div>
    );
};

export default Home;