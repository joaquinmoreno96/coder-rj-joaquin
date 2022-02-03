import React, { useContext } from "react";
import { cartContext } from "../context/CartProvider";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, Button } from "@chakra-ui/react";

export default function Cart() {
    const { cart, deleteItem, clearCart } = useContext(cartContext);
    console.log(cart);
    return (
        <div>
            <Table variant="striped" colorScheme="teal">
                <TableCaption>FINALIZANDO COMPRA</TableCaption>
                <Thead>
                    <Tr>
                        <Th>PRODUCTO</Th>
                        <Th>CANTIDAD</Th>
                        <Th>TOTAL </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {cart.map((e) => {
                        console.log(e);
                        return (
                            <Tr>
                                <Td>{e.item.title}</Td>
                                <Td>{e.cantidad}</Td>
                                <Td>${parseInt(e.cantidad * e.item.price)}</Td>
                                <Td onClick={() => deleteItem(e.item.id)}>ELIMINAR PRODUCTO</Td>
                            </Tr>
                        );
                    })}
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Button onClick={clearCart}>BORRAR TODOS LOS PRODUCTOS</Button>
                    </Tr>
                </Tfoot>
            </Table>
        </div>
    );
}
