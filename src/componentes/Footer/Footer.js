import React from "react";
import logoBrand from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { Box, Container, Stack, Image, MenuButton, MenuList, MenuItem, Menu } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box bg="#333436" width="100%" bottom={0}>
            <Container
                as={Stack}
                maxW={"6xl"}
                py={4}
                direction={{ base: "column", md: "row" }}
                spacing={4}
                justify={{ base: "center", md: "space-between" }}
                align={{ base: "center", md: "center" }}
                color="white"
                bottom="0"
            >
                <Stack direction={"row"} spacing={6}>
                    <Link to={`/`}>Home</Link>
                    <Menu isLazy>
                        <MenuButton>Productos</MenuButton>
                        <MenuList color="black">
                            <Link to={`/category/buzos`}>
                                <MenuItem>Buzos</MenuItem>
                            </Link>
                            <Link to={`/category/camisetas`}>
                                <MenuItem>Camisetas</MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                    <Link to={`/contacto`}>Contacto</Link>
                </Stack>
                <Image
                    src={logoBrand}
                    width={199}
                    height={20}
                    borderRadius="full"
                    padding={3}
                    display={{ base: "none", md: "flex" }}
                />
            </Container>
        </Box>
    );
}
