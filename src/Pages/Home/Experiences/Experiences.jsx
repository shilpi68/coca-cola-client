import experImg from '../../../assets/Experiences.png'
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
const Experiences = () => {

  return (
    <section>
      <SectionTitle Heading={"Experiences"}></SectionTitle>
      <div className='flex hero-content flex-col lg:flex-row mt-10'>
        <div className='flex-1'data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1000">
          <img className=' border-8 rounded-xl' src={experImg} alt="" />
        </div>
        <div className='flex-1 space-y-2 ' data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000">
          <h1 className='text-2xl font-bold'>The perfect partner for your jhaal obsession-Sprite!</h1>
          <p >Bangladeshis love Jhaal food! When it comes to Jhaal food,
            it becomes a non-stop feasting. And when the heat of Jhaal
            gets too much, Sprite is there to help you carry on and feast
            to your heart’s content. Jhaalke Sprite Koro!</p>
          <button className='btn btn-outline border-0 border-b-4 hover:bg-red-500 hover:text-white'>Read more</button>
        </div>

      </div>
    </section>
  );
};

export default Experiences;