import React from "react";
import { Box, Badge, Image } from "@chakra-ui/react";
import logo from "../../assets/img/logo.png"
import { Link } from "react-router-dom";

export default function Item({ prod, onAdd }) {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Link to={`/item/${prod.id}`}>
                <Image src={prod.imageUrl ? prod.imageUrl : logo} />
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

                <Box>${prod.price}</Box>
            </Box>
        </Box>
    );
}
