import Header from "./assets/components/_Header/Header.tsx";
import Navigation from "./assets/components/_Navigation/Navigation.tsx";
import Collection from "./assets/components/_Collection/Collection.tsx";
import NewProduct from "./assets/components/_NewProduct/NewProduct.tsx";
import Stocks from "./assets/components/_Stocks/Stocks";
import TopSelling from "./assets/components/_TopSelling/TopSelling";
import TopSellingTwo from "./assets/components/_TopSellingTwo/TopSellingTwo";
import SingUp from "./assets/components/_SingUp/SingUp";
import Footer from "./assets/components/_Footer/Footer";


const App = () => {
    return (
        <>
            <Header />
            <Navigation />
            <Collection />
            <NewProduct />
            <Stocks />
            <TopSelling />
            <TopSellingTwo />
            <SingUp />
            <Footer />
        </>
    )
}

export default App
