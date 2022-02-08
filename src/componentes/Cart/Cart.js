import React, { useContext } from "react";
import { cartContext } from "../context/CartProvider";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, Button, Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Cart() {
    const { cart, deleteItem, clearCart, valorTotal } = useContext(cartContext);

    return (
        <Box minH="76vh">
            {cart.length ? (
                <Table size="lg" variant="striped" colorScheme="teal">
                    <TableCaption>FINALIZANDO COMPRA</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>PRODUCTO</Th>
                            <Th>CANTIDAD</Th>
                            <Th>TOTAL </Th>
                            <Th>ACCION </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {cart.map((e) => {
                            return (
                                <Tr>
                                    <Td>{e.item.title}</Td>
                                    <Td>{e.cantidad}</Td>
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
                            <Td>
                                <Button colorScheme="red" onClick={clearCart} mr={3} mt={2}>
                                    BORRAR TODOS LOS PRODUCTOS
                                </Button>
                            </Td>
                            <Td isNumeric>TOTAL:</Td>
                            <Td>${valorTotal()}</Td>
                            <Td>
                                <Button colorScheme="teal" onClick={clearCart} mr={3} mt={2}>
                                    TERMINAR COMPRA
                                </Button>
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
