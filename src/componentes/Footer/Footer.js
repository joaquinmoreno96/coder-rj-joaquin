import React from "react";
import logoBrand from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { Box, Container, Stack, Image, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box bg={useColorModeValue("gray.100", "gray.900")} color={useColorModeValue("gray.700", "gray.200")}>
            <Container
                as={Stack}
                maxW={"6xl"}
                py={4}
                direction={{ base: "column", md: "row" }}
                spacing={4}
                justify={{ base: "center", md: "space-between" }}
                align={{ base: "center", md: "center" }}
            >
                <Stack direction={"row"} spacing={6}>
                    <Link to={`/`}>Home</Link>
                    <Link to={`/category`}>Productos</Link>
                    <Link  to={`/contact`}>Contacto</Link>
                </Stack>
                <Image src={logoBrand} boxSize={{ base: "100px", md: "flex" }} display={{ base: "none", md: "flex" }} />
            </Container>
        </Box>
    );
}
