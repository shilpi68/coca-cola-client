import bottleImg from '../../../assets/bottle.jpeg'
import grupImg from '../../../assets/grupBottle.jpeg'

const BottleDetails = () => {
    return (
        <div>
            <img className='ml-32' 
            data-aos="fade-right" 
            data-aos-easing="linear"
            data-aos-duration="1000"
            src={bottleImg} alt="" />
            <h1 
            data-aos="fade-up-right" 
            data-aos-easing="linear"
            data-aos-duration="1000"
            className='w-5/12 mx-auto text-center mt-10 text-3xl font-bold'>The History of the Coca-Cola Contour Bottle</h1>
            <h1 className='w-5/12 mx-auto text-center mt-10 text-2xl font-bold'
            data-aos="fade-up-left" 
            data-aos-easing="linear"
            data-aos-duration="1000">The Creation of a Cultural Icon</h1>
            <p className='text-lg font-medium mt-5'
            data-aos="fade-right" 
            data-aos-easing="linear"
            data-aos-duration="1000">One of the most famous shapes in the world is the iconic contour fluted lines of the Coca‑Cola 
                bottle.Renowned as a design classic and described by noted industrial 
                designer, Raymond Loewy as the “perfect liquid wrapper,
                ” the bottle has been celebrated in art, music and advertising.
                 When Andy Warhol wanted a shape to represent mass culture, he
                  drew the bottle and when Volkswagen wanted to celebrate the 
                  shape of the Beatle, they compared the car to the bottle.
                  <p className='text-lg font-medium'
                  data-aos="fade-up-right" 
                  data-aos-easing="linear"
                  data-aos-duration="1000">It began with the desire to protect brand Coca‑Cola
                     and was a cooperative project between The Coca‑Cola
                      Company and its bottlers.The contract the two signed
                       was a geographic one and The Coca‑Cola Bottling
                        Company began franchising the rights to bottle 
                        Coca‑Cola in cities across the U.S. By 1920, over
                         1,200 Coca‑Cola bottling operations were established.
                          Sales in both fountain and bottle form continued to
                           increase and that popularity led to dozens of competitors 
                           trying to imitate the famous trademark of Coca‑Cola to deceive
                            the public into buying their drinks.</p>
                  </p>

                  <h2 className='text-3xl font-medium mt-10 mb-7'
                  data-aos="fade-down" 
                  data-aos-easing="linear"
                  data-aos-duration="1000">An Iconic Beginning</h2>
                  <p className='text-lg font-medium mt-5'
                  data-aos="fade-up-down" 
                  data-aos-easing="linear"
                  data-aos-duration="1000">In 1899, two Chattanooga lawyers, Joseph Whitehead and Benjamin Thomas,
                     traveled to Atlanta to negotiate the rights to bottle Coca‑Cola.
                      The product had been an increasingly popular soda fountain drink 
                      established a mere 13 years previously. In fountain form,
                       Coca‑Cola grew from an average of nine drinks per day sold
                        in 1886 to being sold in every state of the US by 1900. 
                        Thomas and Whitehead wanted to capitalize on the 
                         of the drink by bottling it to be consumed outside the
                          four walls of a soda fountain.</p>
                          <img className='w-5/12 mx-auto m-5'
                          data-aos="fade-up-right" 
                          data-aos-easing="linear"
                          data-aos-duration="1000" src={grupImg} alt="" />
                          <p className='text-lg font-medium mb-10'
                          data-aos="fade-right" 
                          data-aos-easing="linear"
                          data-aos-duration="1000">The bottles used in those days were simple
                             straight-sided bottles that were typically
                              brown or clear. The Coca‑Cola Company required 
                              that the bottlers emboss the famous Coca‑Cola
                               logo onto every bottle. However, competitor brands
                                like Koka-Nola, Ma Coca-Co, Toka-Cola and even Koke
                                 copied or only slightly modified the Spencerian script
                                  logo. These competitor bottles created confusion among 
                                  consumers. While The Coca‑Cola Company began litigation 
                                  against these infringements, the cases often took years 
                                  and the bottlers were constantly asking for more protection.</p>

        </div>
    );
};

export default BottleDetails;