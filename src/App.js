import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./componentes/Footer/Footer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import Cart from "./componentes/Cart/Cart";
import { CartProvider } from "./componentes/context/CartProvider";
import Contact from "./componentes/Contact/Contact";


function App() {
    return (
        
        <>
            <CartProvider>
                <BrowserRouter>
                    <NavBar />

                    <Switch>
                        {/* ruta home */}
                        <Route exact path="/">
                            <ItemListContainer />
                        </Route>
                        <Route exact path="/item/:id">
                            <ItemDetailContainer />
                        </Route>

                        {/* ruta contacto */}
                        <Route exact path="/category/:categoryId">
                            <ItemListContainer />
                        </Route>

                        {/* ruta carrito */}
                        <Route exact path="/cart">
                            <Cart />
                        </Route>
                        <Route exact path="/contacto">
                            <Contact />
                        </Route>
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </CartProvider>
        </>
    );
}

export default App;
