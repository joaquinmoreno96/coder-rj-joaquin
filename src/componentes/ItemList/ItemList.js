import React from "react";
import Item from "../Item/Item";
import { Wrap, Spinner, Box } from "@chakra-ui/react";

export default function ItemList({ prod }) {
    return (
        <Wrap>
            {prod.length ? (
                prod.map((e, i) => <Item prod={e} key={i} />)
            ) : (
                <Box>
                    <Spinner thickness="8px" speed="0.65s" emptyColor="yellow.200" color="blue.500" size="xl" />
                    <h1>LOADING...</h1>
                </Box>
            )}
        </Wrap>
    );
}
