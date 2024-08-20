import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import aboutImg from '../../../assets/bannerCocacola3.jpeg'
import spriteImg from '../../../assets/card2.jpeg'
import FantaImg from '../../../assets/card3.jpeg'
import KinleyImg from '../../../assets/card.jpeg'
import MenuItem from '../../Shared/MenuItem/MenuItem';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import { Link } from 'react-router-dom';


const About = ({title}) => {
    const [menu] = useMenu()
    const CocaColaItems = menu.filter(item => item.category === 'Coca-Cola')
    const SpriteItems = menu.filter(item => item.category === 'Sprite')
    const FantaItems = menu.filter(item => item.category === 'Fanta')
    const KinleyItems = menu.filter(item => item.category === 'Kinley')
   
    return (
        <div>
            <Helmet>
                <title>Coco-cola | About</title>
            </Helmet>
            <Cover img={aboutImg}title="Coca-Cola"></Cover>

            <SectionTitle
                Heading="Coca-Cola"
                 
            ></SectionTitle>
            <div className='text-center grid md:grid-cols-2 mt-10  mb-10 gap-5'
            data-aos="fade-right" 
            data-aos-easing="linear"
            data-aos-duration="1000">
                {
                    CocaColaItems.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            
            </div>
            <Link to={`/shop/${title}`}>
           <button className="btn w-1/2 mx-auto mb-10 ml-48 border-0 border-b-4 bg-red-400 hover:bg-red-300">Order Now</button>
           </Link>
           
            <Cover img={spriteImg} title="sprite"></Cover>

            <SectionTitle
                Heading="sprite"
            ></SectionTitle>
            <div className='text-center grid md:grid-cols-2 mt-10 mb-10 gap-5'
            data-aos="fade-left" 
            data-aos-easing="linear"
            data-aos-duration="1000">
                {
                    SpriteItems.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/shop/${title}`}>
           <button className="btn w-1/2 mx-auto mb-10 ml-48 border-0 border-b-4 bg-red-400 hover:bg-red-300">Order Now</button>
           </Link>
        
            <Cover img={FantaImg} title="Fanta"></Cover>

            <SectionTitle
                Heading="Fanta"
            ></SectionTitle>
            <div className='text-center grid md:grid-cols-2 mb-10 mt-10 gap-5'
            data-aos="fade-up" 
            data-aos-easing="linear"
            data-aos-duration="1000">
                {
                    FantaItems.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/shop/${title}`}>
           <button className="btn w-1/2 mx-auto mb-10 ml-48 border-0 border-b-4 bg-red-400 hover:bg-red-300">Order Now</button>
           </Link>
           
            <Cover img={KinleyImg} title="kinley"></Cover>

            <SectionTitle
                Heading="Kinley"
            ></SectionTitle>
            <div className='text-center grid md:grid-cols-2 mb-10 mt-10 gap-5'
            data-aos="fade-down" 
            data-aos-easing="linear"
            data-aos-duration="1000">
                {
                    KinleyItems.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/shop/${title}`}>
           <button className="btn w-1/2 mx-auto mb-10 ml-48 border-0 border-b-4 bg-red-400 hover:bg-red-300">Order Now</button>
           </Link>
           
        </div>
    );
};

export default About;