import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import productos from "../../api/api.json";
import { useParams } from "react-router-dom";
import { Spinner, Box } from "@chakra-ui/react";

export default function ItemListContainer() {
    const [prod, setProd] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            !categoryId ? setProd(productos) : setProd(productos.filter((e) => e.category === categoryId));
            setLoading(false);
        }, 2000);
    }, [categoryId]);

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
                <ItemList prod={prod} setLoading={setLoading} />
            )}
        </Box>
    );
}
