import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import productos from "../../api/api.json";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
    const [prod, setProd] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const GetItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                const producto = productos.filter((e) => e.id === id);
                resolve(producto[0]);
            }, 2000);
        });
        GetItem.then((res)=>{
            setProd(res)
        })
        GetItem.catch((err)=>{
            setProd(err)
        })
    }, []);
    return <ItemDetail prod={prod} />;
}
