import React, { useState } from "react";
import { Box, Button, Badge } from "@chakra-ui/react";

export default function ItemCount({ prod, onAdd }) {
    const [contador, setContador] = useState(1);
    return (
        <>
            <Box p="6">
                <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal"></Badge>
                    <Button
                        disabled={contador >= prod.stock}
                        onClick={() => setContador(contador + 1)}
                        borderRadius="full"
                        colorScheme="teal"
                        padding={3}
                        size="sm"
                    >
                        +
                    </Button>

                    <Button
                        disabled={contador <= 0}
                        onClick={() => setContador(contador - 1)}
                        borderRadius="full"
                        colorScheme="teal"
                        padding={3}
                        size="sm"
                    >
                        -
                    </Button>
                </Box>
                <Box p="6">
                    <Box display="flex" alignItems="baseline">
                        <Badge borderRadius="full" px="5" colorScheme="teal">
                            Cantidad
                        </Badge>
                        <Badge borderRadius="full" px="5" colorScheme="teal">
                            {contador}
                        </Badge>
                        <Badge onClick={() => onAdd(contador)} borderRadius="full" px="8" colorScheme="teal">
                            Agregar al carrito
                        </Badge>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
