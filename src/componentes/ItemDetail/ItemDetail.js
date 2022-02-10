import React, { useState } from "react";

import { MdLocalShipping } from "react-icons/md";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
} from "@chakra-ui/react";

export default function ItemDetail({ prod, onAdd, added }) {
    return (
        <>
            <Container maxW={"7x1"}>
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py={{ base: 18, md: 24 }}>
                    <Flex>
                        <Image rounded={"sm"} alt={prod.title} src={prod.imageUrl} fit={"cover"} align={"center"} />
                    </Flex>
                    <Stack spacing={{ base: 6, md: 10 }}>
                        <Box as={"header"}>
                            <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}>
                                {prod.title}
                            </Heading>
                            <Text color={useColorModeValue("gray.900", "gray.400")} fontWeight={300} fontSize={"2xl"}>
                               ${prod.price}
                            </Text>
                        </Box>
                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={"column"}
                            divider={<StackDivider borderColor={useColorModeValue("gray.200", "gray.600")} />}
                        >
                            <VStack spacing={{ base: 4, sm: 6 }}>
                                <Text color={useColorModeValue("gray.500", "gray.400")} fontSize={"2xl"} fontWeight={"300"}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                    invidunt ut labore
                                </Text>
                                <Text fontSize={"lg"}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet at delectus
                                    doloribus dolorum expedita hic, ipsum maxime modi nam officiis porro, quae, quisquam quos
                                    reprehenderit velit? Natus, totam.
                                </Text>
                            </VStack>
                            <Box>
                                <Text
                                    fontSize={{ base: "16px", lg: "18px" }}
                                    color={useColorModeValue("yellow.500", "yellow.300")}
                                    fontWeight={"500"}
                                    textTransform={"uppercase"}
                                    mb={"4"}
                                >
                                    Detalle del producto
                                </Text>

                                <List spacing={2}>
                                    <ListItem>
                                        <Text as={"span"} fontWeight={"bold"}>
                                            Version:
                                        </Text>{" "}
                                        {prod.version}
                                    </ListItem>
                                    <ListItem>
                                        <Text as={"span"} fontWeight={"bold"}>
                                            Edicion:
                                        </Text>{" "}
                                        {prod.edition}
                                    </ListItem>
                                    <ListItem>
                                        <Text as={"span"} fontWeight={"bold"}>
                                            Talle:
                                        </Text>{" "}
                                        {prod.talle}
                                    </ListItem>
                                </List>
                            </Box>
                        </Stack>
                        <Box maxW="md" borderWidth="3px" borderRadius="lg" overflow="hidden">
                            {added ? (
                                <Link to={`/cart`} borderRadius="full" px="8" colorScheme="teal">
                                    Terminar compra
                                </Link>
                            ) : (
                                <ItemCount onAdd={onAdd} prod={prod} />
                            )}
                        </Box>

                        <Stack direction="row" alignItems="center" justifyContent={"center"}>
                            <MdLocalShipping />
                            <Text>2-3 dias laborales para su entrega</Text>
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </>
    );
}
