import CartWidget from "../CartWidget/CartWidget";
import logoBrand from "../../assets/img/logo.png";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartProvider";

import {
    Image,
    Box,
    Flex,
    HStack,
    IconButton,
    Menu,
    useDisclosure,
    useColorModeValue,
    Stack,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { countCart } = useContext(cartContext);
    return (
        <>
            <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <Box display={{ base: "none", md: "flex" }}>
                        <Link to="/">
                            <Image src={logoBrand} boxSize={{ base: "100px", md: "flex" }} />
                        </Link>
                    </Box>
                    <IconButton
                        size={"md"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack
                        bg={useColorModeValue("gray.100", "gray.900")}
                        display={{ base: "none", md: "flex" }}
                        spacing={8}
                        alignItems={"center"}
                        
                    >
                        <Link to="/">HOME</Link>
                        <Menu isLazy>
                            <MenuButton >PRODUCTOS</MenuButton>
                            <MenuList>
                                <Link to={`/category/buzos`}>
                                    <MenuItem>BUZOS</MenuItem>
                                </Link>
                                <Link to={`/category/camisetas`}>
                                    <MenuItem>CAMISETAS</MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>
                    </HStack>
                    {countCart() ? <IconButton size={"md"} icon={<CartWidget />} /> : <div></div>}
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: "none" }}>
                        <Stack as={"nav"} spacing={4} alignItems={"center"}>
                            <Link to={`/`}>HOME</Link>
                            <Menu>
                                <MenuButton>PRODUCTOS</MenuButton>
                                <MenuList>
                                    <Link to={`/category/buzos`}>
                                        <MenuItem>BUZOS</MenuItem>
                                    </Link>
                                    <Link to={`/category/camisetas`}>
                                        <MenuItem>CAMISETAS</MenuItem>
                                    </Link>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}
