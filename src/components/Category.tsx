import "./Category.css"
import Card from "./Card";
import Descriptions from "./Description";


function CreateCard(Description:any){
    return (
        <Card
        key={Description.id}
         name_item={Description.name_item}
         image={Description.image}
         firstPrice={Description.firstPrice}
         secondPrice={Description.secondPrice}
        />
    )
}


function Category(){
    return (
        <>
            <div className="items">
                <div className="wrap">
                <h2>Most Searched Items</h2>
                <hr />
                </div>
            </div>
            <div  className="wrapper">
            <div className="card_wrap">
            {Descriptions.map(CreateCard)}
            </div>
            </div>
           
        </>
    )
};

export default Category;