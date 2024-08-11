

const MenuItem = ({item}) => {
    const {name,img,description,price} = item;
    return (
        <div className="space-y-1">
            <img style={{borderRadius:'200px 0px 200px 200px'}} className="w-[100px] mx-auto" src={img} alt="" />
            <h1 className="uppercase text-xl font-medium">{name}----------</h1>
            <h1>Description-{description}</h1>
            <p className="font-bold"> Price-${price}</p>
        </div>
    );
};

export default MenuItem;