

const SectionTitle = ({Heading}) => {
    return (
        <div className="mx-auto md:w-3/12 ">
            <h3 
            data-aos="fade-down-left" 
            data-aos-easing="linear"
            data-aos-duration="1000" 
            className=" text-center font-semibold text-2xl uppercase border-y-4 p-2">{Heading}</h3>
            
        </div>
    );
};

export default SectionTitle;