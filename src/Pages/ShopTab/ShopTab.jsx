import DrinksCard from "../../component/DrinksCard/DrinksCard";


const ShopTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-10'>
                    {
                        items.map(item =><DrinksCard
                        key={item._id}
                        item={item}
                        ></DrinksCard>)
                    }
                    </div>
    );
};

export default ShopTab;