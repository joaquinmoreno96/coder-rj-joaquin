import React from "react";
import logoBrand from "../../assets/img/logo.png";

import { Box, Container, Stack, Image, Link, useColorModeValue } from "@chakra-ui/react";

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
                    <Link href={"#"}>Home</Link>
                    <Link href={"#"}>Productos</Link>
                    <Link href={"#"}>Contacto</Link>
                </Stack>
                <Image src={logoBrand} boxSize={{ base: "100px", md: "flex" }} display={{ base: "none", md: "flex" }} />
            </Container>
        </Box>
    );
}
