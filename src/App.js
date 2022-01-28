import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./componentes/Footer/Footer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";

function App() {
    const arrayNavBar = ["INICIO", "PRODUCTOS", "SOBRE NOSOTROS", "CONTACTO"];
    return (
        <>
            <BrowserRouter>
                <NavBar/>

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
                    <Route exact path="/carrito">
                        listo para comprar
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
