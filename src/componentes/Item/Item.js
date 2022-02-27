import React from "react";
import { Box, Badge, Image } from "@chakra-ui/react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

export default function Item({ prod }) {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bg={("gray.100", "gray.900")}>
            <Link to={`/item/${prod.id}`}>
                <Image src={prod.imageUrl ? prod.imageUrl : logo} objectFit />
            </Link>
            <Box p="6" fontWeight="semibold" color="white">
                <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2">
                        Nueva
                    </Badge>
                    <Box letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                        Talle {prod.talle}
                    </Box>
                </Box>

                <Box mt="1" as="h4" lineHeight="tight" isTruncated>
                    {prod.title}
                </Box>

                <Box>${prod.price}</Box>
            </Box>
        </Box>
    );
}
