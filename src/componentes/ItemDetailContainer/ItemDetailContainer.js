import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import { cartContext } from "../context/CartProvider";
import { getFirestore } from "../../api/config";

export default function ItemDetailContainer() {
    const [prod, setProd] = useState([]);
    const { id } = useParams();

    const [added, setAdded] = useState(false);
    const { addToCart } = useContext(cartContext);

    const onAdd = (count) => {
        swal(`Agregaste ${prod.title}, cantidad ${count}`);
        setAdded(true);
        addToCart(prod, count);
    };
    useEffect(() => {
        const db = getFirestore();

        const itemCollection = db.collection("items").doc(id);

        itemCollection
            .get()
            .then((doc) => {
                if (!doc.exists) return;
                 setProd({ id: doc.id, ...doc.data() });
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return <ItemDetail prod={prod} onAdd={onAdd} added={added} />;
}
