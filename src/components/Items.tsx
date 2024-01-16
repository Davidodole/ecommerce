import Card from "./Card";
import ItemStore from "./ItemStore";
import "./items.css"


function Items(){
    return <>
        <div className="items">
            <div className="wrap">
                    <h2>Select Your Favourite</h2>
                    <hr />
            </div>
            <div className="item">
                {ItemStore.map(item => 
                    <Card
                    key={item.id}
                    name_item={item.items_name}
                    image={item.imageData}
                    firstPrice={item.priceOne}
                    secondPrice={item.priceTwo}
                    />)}
            </div>
        </div>
        
    </>
}

export default Items;