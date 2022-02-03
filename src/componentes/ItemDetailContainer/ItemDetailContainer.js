import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import productos from "../../api/api.json";
import { useParams } from "react-router-dom";
import { Spinner, Box } from "@chakra-ui/react";
import swal from "sweetalert";
import { cartContext } from "../context/CartProvider";

export default function ItemDetailContainer() {
    const [prod, setProd] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [added, setAdded] = useState(false);
    const { addToCart } = useContext(cartContext);

    const onAdd = (count) => {
        swal(`Agregaste ${prod.title}, cantidad ${count}`);
        setAdded(true);
        addToCart(prod, count);
    };
    useEffect(() => {
        const GetItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                const producto = productos.filter((e) => e.id === id);
                resolve(producto[0]);
            }, 2000);
        });
        GetItem.then((res) => {
            setProd(res);
            setLoading(false);
        });
        GetItem.catch((err) => {
            setProd(err);
        });
    }, []);

    return (
        <Box minH="79vh">
            {loading ? (
                <Box>
                    <Spinner
                        marginLeft={"50%"}
                        thickness="8px"
                        speed="0.65s"
                        emptyColor="yellow.200"
                        color="blue.500"
                        size="xl"
                    />
                </Box>
            ) : (
                <ItemDetail prod={prod} onAdd={onAdd} added={added} />
            )}
        </Box>
    );
}
