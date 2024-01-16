import "./Card.css";



function Card(props:any){
    return (
        <>
         <div className="wrap_card">
                    <div className="card">
                        <img src={props.image} alt="" />
                        <div className="wrap_content">
                            <span>{props.name_item}</span>
                            <div className="money">
                                <p>{props.firstPrice}</p>
                                <p>{props.secondPrice}</p>
                            </div>
                            <button type="submit">Buy</button>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Card;