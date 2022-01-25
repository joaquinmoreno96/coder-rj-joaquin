import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import productos from "../../api/api.json";

export default function ItemListContainer() {
    const [prod, setProd] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProd(productos);
        }, 2000);
    }, []);
    return <ItemList prod={prod} />;
}
