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
                <NavBar arrayNavBar={arrayNavBar} />

                <Switch>
                    {/* ruta home */}
                    <Route exact path="/">
                        <ItemListContainer />
                    </Route>
                    <Route exact path="/producto/:id">
                        <ItemDetailContainer />
                    </Route>

                    {/* ruta contacto */}
                    <Route exact path="/contacto">
                        Estas en contacto
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
