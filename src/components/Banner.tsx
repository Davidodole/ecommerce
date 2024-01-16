import "./Banner.css"



function Banner(props:any){
    return (
        <>
        <div className="banner">
            <div className="wrap_banner">
                <div className="banner_content">
                    <p>{props.txt1}</p>
                    <h1>{props.txt2}</h1>
                    <button type="submit">Shop Now</button>
                </div>
                <div className="image_banner">
                    <img src={props.imageUrl} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Banner;