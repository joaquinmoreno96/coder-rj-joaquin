import React, { useState } from "react";
import { Button, Box, Badge, Image } from "@chakra-ui/react";
import swal from "sweetalert";
import { Link } from "react-router-dom";

export default function Item({ prod }) {
    console.log(prod)
    const [contador, setContador] = useState(1);

    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Link to={`/producto/${prod.id}`}>
            <Image src={prod.imageUrl}  />
            </Link>
            <Box p="6">
                <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                        Nueva
                    </Badge>
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        Talle {prod.talle}
                    </Box>
                </Box>

                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                    {prod.title}
                </Box>

                <Box>
                    {prod.price}
                    <Box as="span" color="gray.600" fontSize="sm"></Box>
                </Box>
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
                    <Badge onClick={() => swal("Agregado al carrito exitosamente")} borderRadius="full" px="8" colorScheme="teal">
                        Agregar al carrito
                    </Badge>
                </Box>
            </Box>
        </Box>
    );
}
