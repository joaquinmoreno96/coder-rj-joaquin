import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { Wrap, Spinner } from "@chakra-ui/react";
import productos from "../../api/api.json";

function ItemList() {
    const [prod, setProd] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setProd(productos);
        }, 2000);
    }, []);

    return (
        <Wrap>
            {prod.length ? (
                prod.map((e, i) => <Item prod={e} key={i} />)
            ) : (<div>
                <Spinner thickness="4px" speed="0.65s" emptyColor="yellow.200" color="blue.500" size="xl" />
                <h1>LOADING...</h1>
                </div>
            )}
        </Wrap>
    );
}

export default ItemList;
