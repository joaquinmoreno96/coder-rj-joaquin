import React, { useContext } from "react";
import { cartContext } from "../context/CartProvider";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Button,
    Box,
    Heading,
    Image,
    HStack,
    Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Cart() {
    const { cart, deleteItem, clearCart, valorTotal, updateCart } = useContext(cartContext);

    const handleIncrement = (number, id) => {
        number >= 0 && updateCart(id, number + 1);
    };

    const handleDecrement = (number, id) => {
        number > 1 && updateCart(id, number - 1);
    };

    return (
        <Box minH="80vh">
            {cart.length ? (
                <Table size="lg" variant="striped" colorScheme="teal" fontWeight="semibold">
                    <TableCaption>FINALIZANDO COMPRA</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>PRODUCTO</Th>
                            <Th>DESCRIPCION</Th>
                            <Th>CANTIDAD</Th>
                            <Th>TOTAL </Th>
                            <Th>ACCION </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {cart.map((e) => {
                            return (
                                <Tr>
                                    <Td>
                                        <Image src={e.item.imageUrl} boxSize="130px"></Image>
                                    </Td>
                                    <Td>{e.item.title}</Td>
                                    <Td>
                                        <HStack>
                                            <Button
                                                size="sm"
                                                colorScheme="red"
                                                _focus={{ outline: "none" }}
                                                onClick={() => handleIncrement(e.cantidad, e.item.id)}
                                                disabled={e.cantidad >= e.item.stock}
                                            >
                                                +
                                            </Button>
                                            <Text>{e.cantidad}</Text>
                                            <Button
                                                size="sm"
                                                colorScheme="red"
                                                _focus={{ outline: "none" }}
                                                onClick={() => handleDecrement(e.cantidad, e.item.id)}
                                            >
                                                -
                                            </Button>
                                        </HStack>
                                    </Td>

                                    <Td>${parseInt(e.cantidad * e.item.price)}</Td>
                                    <Td>
                                        <Button colorScheme="red" onClick={() => deleteItem(e.item.id)}>
                                            ELIMINAR PRODUCTO
                                        </Button>
                                    </Td>
                                </Tr>
                            );
                        })}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Td></Td>
                            <Td>
                                <Button colorScheme="red" onClick={clearCart} mr={3} mt={2}>
                                    BORRAR TODOS LOS PRODUCTOS
                                </Button>
                            </Td>
                            <Td isNumeric>TOTAL:</Td>
                            <Td>${valorTotal()}</Td>
                            <Td>
                                <Link to={`/formulario`}>
                                    <Button colorScheme="teal" mr={3} mt={2}>
                                        TERMINAR COMPRA
                                    </Button>
                                </Link>
                            </Td>
                        </Tr>
                    </Tfoot>
                </Table>
            ) : (
                <Box textAlign="center" mr={3} mt={2}>
                    <Heading>No hay ningun producto agregado</Heading>
                    <Link to="/">
                        <Button colorScheme="teal" mr={3} mt={2} my={3}>
                            Volver a la tienda
                        </Button>
                    </Link>
                </Box>
            )}
        </Box>
    );
}
