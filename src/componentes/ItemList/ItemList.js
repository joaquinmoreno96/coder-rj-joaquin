import React from "react";
import Item from "../Item/Item";
import { Wrap, Spinner, Box } from "@chakra-ui/react";
import fondo from "../../assets/img/fondo.png";

export default function ItemList({ prod }) {
    return (
        <Wrap minH="80vh" padding={3} backgroundImage={fondo} backgroundRepeat={"no-repeat"} backgroundSize={"cover"}>
            {prod.length ? (
                prod.map((e, i) => <Item prod={e} key={i} />)
            ) : (
                <Box position="relative" left="50%" top="50%">
                    <Spinner thickness="50px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
                    <h1>CARGANDO...</h1>
                </Box>
            )}
        </Wrap>
    );
}
