import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../api/config";

export default function ItemListContainer() {
    const [prod, setProd] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        const db = getFirestore();

        const itemCollection = !categoryId ? db.collection("items") : db.collection("items").where("category", "==", categoryId);

        itemCollection
            .get()
            .then((querySnapShot) => {
                if (querySnapShot.size == 0) return;

                setProd(
                    querySnapShot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() };
                    })
                );
            })
            .catch((err) => {
                console.log(err);
            });
    }, [categoryId]);

    return <ItemList prod={prod} />;
}
