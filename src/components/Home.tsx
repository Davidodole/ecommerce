import "./Home.css"
import girl from '../image/girl2.png'



function Home(){
    return (
        <>
            <div className="homepage">
                <div className="info">
                    <p>welcome to my fashion world.</p>
                    <h1>GBsquare Fashion outfit</h1>
                    <p>we offer the wears that will suit your lifestyle Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem assumenda dolor perspiciatis corrupti quibusdam. Pariatur odio debitis vero accusantium nostrum deleniti saepe.</p>
                    <div className="shop">
                    <a href="/">Shop Now</a>
                    </div>
                </div>
                <div className="image">
                    <img src={girl} alt="" />
                </div>
            </div>
        </>
    )
}

export default Home;