

const Cover = ({img,title}) => {
    return (
        <div
            className="hero min-h-[500px] mb-10"
            style={{
                backgroundImage: `url('${img}')`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5">
                    We offer a variety of drinks including still and sparkling
                     water, dairy, fruit juices, organic and plant-based drinks,
                      teas and coffees.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cover;