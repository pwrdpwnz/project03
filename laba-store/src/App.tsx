import Header from "./assets/components/_Header/Header.tsx";
import Navigation from "./assets/components/_Navigation/Navigation.tsx";
import Collection from "./assets/components/_Collection/Collection.tsx";
import NewProduct from "./assets/components/_NewProduct/NewProduct.tsx";


const App = () => {
    return (
        <>
            <Header />
            <Navigation />
            <Collection />
            <NewProduct />
        </>
    )
}

export default App
