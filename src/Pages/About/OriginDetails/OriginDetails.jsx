import OrginImg from '../../../assets/orgen.jpeg'
import JohnstithImg from '../../../assets/johnStithImg.jpg'

const OriginDetails = () => {
    return (
        <div>
            <div
  className="hero min-h-screen"
  style={{
    backgroundImage:`url('${OrginImg}')`,
  }}>

</div>
            <h2 className="mb-10 font-bold text-2xl text-center">Our History</h2>
            <p className="font-serif text-lg ">
                <p className="mb-6">On May 8, 1886, Dr. John Pemberton served the world’s first 
                Coca‑Cola at Jacobs Pharmacy in Atlanta, Ga. From that one iconic drink, we’ve evolved into
                 a total beverage company.<br/></p>

               <p className="mb-6"> More than 1.9 billion servings of our drinks are enjoyed in more than 200 countries each day.
                 And it’s the 700,000 individuals employed by The Coca‑Cola Company and 225+ bottling partners 
                 that help to deliver refreshment across the globe.<br/></p>

              <p className="mb-6">  Coca‑Cola has been operating in Bangladesh over five decades with the purpose 
                of refreshing the world and making a difference. Our portfolio of brands includes
                 Coca‑Cola, Coca‑Cola Diet, Sprite, Fanta, Kinley Water, Kinley Soda, Coca‑Cola Zero 
                 Sugar, Sprite Zero and Fanta Apple. The Coca‑Cola Bangladesh System comprises of a
                  company-owned bottling entity, namely, Coca‑Cola Bangladesh Beverages Limited (“CCBBL”)
                   and an independent authorized franchise bottler, namely, Abdul Monem Limited (“AML.) of
                    The Coca‑Cola Company (TCCC). Coca Cola system currently employs more than 800 people 
                    directly and indirectly provide support to over 21000 people.The origin of Coca‑C</p>
              </p>
              <h2 className='font-bold text-3xl text-center mb-10'>The Birth of a Refreshing Idea</h2>
              <p className='text-3xl font-medium text-center'> Coca-Cola History</p>
              <p className='text-xl font-serif mt-6'>The product that has given the world its best-known taste
                 was born in Atlanta, Georgia, on May 8, 1886. Dr. 
                 John Stith Pemberton, a local pharmacist, produced
                  the syrup for Coca‑Cola, and carried a jug of the
                   new product down the street to Jacobs Pharmacy,
                    where it was sampled, pronounced excellent and
                     placed on sale for five cents a glass as a soda
                      fountain drink. Carbonated water was teamed 
                      with the new syrup to produce a drink that was
                       at once Delicious and Refreshing a theme that
                        continues to echo today wherever Coca‑Cola is enjoyed.</p>

                        <img className='w-5/12 mx-auto p-8' src={JohnstithImg} alt="" />
                        <p className=' w-5/12 mx-auto mb-6 text-xl font-medium'>Dr.John Pemberton</p>
                        <hr />
                        <p className='text-xl font-medium w-11/12 mx-auto mt-6 mb-6'>Dr. John Stith Pemberton, a local pharmacist, produced the
                             syrup for Coca‑Cola, and carried a jug of the new product
                              down the street to Jacobs Pharmacy, where it was sampled,
                               pronounced excellent and placed on sale for five cents a
                                glass as a soda fountain drink.</p>

                                <hr />

                      <p>
                        <p className='text-xl font-serif mt-6'>Thinking that the two Cs would look well in advertising,
                         Dr. Pembertons partner and bookkeeper, Frank M. Robinson,
                          suggested the name and penned the now famous trademark Coca‑Cola
                           in his unique script. The first newspaper ad for Coca‑Cola soon
                            appeared in The Atlanta Journal, inviting thirsty citizens to try 
                            the new and popular soda fountain drink. Hand-painted oilcloth 
                            signs reading Coca‑Cola appeared on store awnings, with the suggestion
                             Drink added to inform passersby that the new beverage was for soda 
                             fountain refreshment. During the first year, sales averaged a modest
                              nine drinks per day.</p>
                        <br/>
                     <p className='text-xl font-serif mb-10'> Dr. Pemberton never realized the potential of the beverage he created.
                       He gradually sold portions of his business to various partners and, just
                        prior to his death in 1888, sold his remaining interest in Coca‑Cola to Asa
                         G. Candler. An Atlantan with great business acumen, Mr. Candler proceeded to
                          buy additional rights and acquire complete control.</p>
                     </p>          
        </div>
    );
};

export default OriginDetails;