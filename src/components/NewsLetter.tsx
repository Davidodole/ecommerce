import "./newLetter.css"

function NewsLetter(){
    return(
        <>
        <div className="news_letter">
            <div className="items">
                <div className="wrap">
                <h2>NewsLetter</h2>
                <hr />
                </div>
            </div>
            <div className="newsLetter">
               <div className="news_detail">
               <h1>Get News About Our Arrivers</h1>
                <p>Enter your email in the box below and press the subscribe button <br /> you will be the first to get update of our new arrivers</p>
               </div>

 <form action="/">
    <input type="email" autoComplete="on" name="email" placeholder="Email"/>
 <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
        </>
    )
};

export default NewsLetter;
