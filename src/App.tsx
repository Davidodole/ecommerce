import Footer from "./Footer";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Header from "./components/Header";
import Home from "./components/Home";
import Items from "./components/Items";
import NewsLetter from "./components/NewsLetter";
import bannerImage from "./image/girl2.png";




const App = ()=>{
  return (
    <>
      <Header />
      <Home />
      <Category />
      <Banner 
      txt1="flash sales"
      txt2="50% of your Order"
      imageUrl={bannerImage}
      />
      <Items />
      {/* <NewsLetter /> */}
      <Footer />
    </>
  )
};


export default App;