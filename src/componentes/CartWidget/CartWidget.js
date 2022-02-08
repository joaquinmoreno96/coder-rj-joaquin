import { FaShoppingCart } from "react-icons/fa";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@chakra-ui/react";
import { cartContext } from "../context/CartProvider";

export default function CartWidget() {
    const { countCart } = useContext(cartContext);

    return (
        <>
            <Link to={`/cart`}>
                <FaShoppingCart />
            </Link>
            <Badge>{countCart()}</Badge>
        </>
    );
}
