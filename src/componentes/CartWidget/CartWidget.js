import { FaShoppingCart } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@chakra-ui/react";

export default function CartWidget(){
    return( <>
    <Link to={`/cart`}><FaShoppingCart/></Link>
    <Badge>0</Badge></>)
};
