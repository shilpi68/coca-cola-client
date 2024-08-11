import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import cardcoca from '../../../assets/card1.jpeg'
import cardSprite from '../../../assets/card2.jpeg'
import cardfanta from '../../../assets/card3.jpeg'
import cardkenley from '../../../assets/card.jpeg'

const Brands = () => {
    return (
        <section className="mb-10">
            <SectionTitle
                Heading={'Brands'}
            ></SectionTitle>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 rounded-2xl">
                    <img data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        className="w-96 h-96  rounded-2xl" src={cardcoca} alt="" />
                    <img data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        className="w-96 h-96 rounded-2xl" src={cardSprite} alt="" />
                    <img data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        className="w-96 h-96 rounded-2xl" src={cardfanta} alt="" />
                    <img data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                         className="w-96 h-96 rounded-2xl" src={cardkenley} alt="" />
                </div>
                <div className="m-10">
                    <p><span className="uppercase underline font-bold">coca-cola:</span> Vegetarian product,carbonaated water.Trademark Owner:The coca-cola Company</p>
                    <p><span className="uppercase underline font-bold">sprite:</span> Vegetarian product,carbonaated water.Trademark Owner:The coca-cola Company</p>
                    <p><span className="uppercase underline font-bold">fanta:</span> Vegetarian product,carbonaated water.Trademark Owner:The coca-cola Company</p>
                    <p><span className="uppercase underline font-bold">kinley:</span> Vegetarian product,carbonaated water.Trademark Owner:The coca-cola Company</p>
                </div>

            </div>
        </section>
    );
};

export default Brands;