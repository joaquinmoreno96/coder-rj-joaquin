import React, { useState, useRef, useContext } from "react";
import firebase from "firebase";
import { getFirestore } from "../../api/config";
import { cartContext } from "../context/CartProvider";
import { Input, Button, Text, Stack, Box } from "@chakra-ui/react";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

export default function FormSell() {
    const { cart, valorTotal, clearCart } = useContext(cartContext);
    const [orderId, setOrderId] = useState("");
    const nameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();
    const history = useHistory();

    const confirmOrder = (e) => {
        e.preventDefault();
        const db = getFirestore();
        const orders = db.collection("orders");

        orders
            .add({
                buyer: {
                    name: nameRef.current.value,
                    address: addressRef.current.value,
                    city: cityRef.current.value,
                    state: stateRef.current.value,
                    email: emailRef.current.value,
                    mobile: mobileRef.current.value,
                },
                items: cart,
                total: valorTotal(),

                date: firebase.firestore.Timestamp.fromDate(new Date()),
            })
            .then(({ id }) => {
                cart.map((e) => {
                    const docRef = db.collection("items").doc(e.item.id);
                    docRef.update({ stock: firebase.firestore.FieldValue.increment(-e.cantidad) }).catch((err) => {
                        console.log(err);
                    });
                });

                setOrderId(id);
                swal("Muchas gracias por su compra, lo redireccionaremos a la pagina principal");
                clearCart();
                history.push("/");
            })
            .catch(() => {
                swal("No se pudo realizar la compra, pruebe en unos instantes");
            });
    };

    return (
        <Box
            minH="80vh"
            w="50%"
            margin="0 auto"
            border="1px"
            borderColor="#333436"
            padding={4}
            marginTop="3px"
            marginBottom="3px"
        >
            {orderId && <h1 fontWeight="semibold">Felicitaciones tu order es {orderId}</h1>}
            <form onSubmit={(e) => confirmOrder(e)}>
                <Stack>
                    <Text textAlign="center" fontSize="22px" fontFamily="sans-serif">
                        Ingrese sus datos
                    </Text>
                    <Input type="text" name="nombre" ref={nameRef} placeholder="Nombre y Apelllido" variant="outline" required />
                    <br />

                    <Input type="text" name="mobile" ref={mobileRef} placeholder="Nro de Celular" variant="outline" required />

                    <br />

                    <Input type="text" name="email" ref={emailRef} placeholder="Email" variant="outline" required />
                    <br />

                    <Input type="text" name="state" ref={stateRef} placeholder="Provincia" variant="outline" required />
                    <br />

                    <Input type="text" name="city" ref={cityRef} placeholder="Ciudad" variant="outline" required />
                    <br />

                    <Input type="text" name="address" ref={addressRef} placeholder="Direccion" variant="outline" required />
                    <br />
                    <Button type="submit">Terminar compra!</Button>
                </Stack>
            </form>
        </Box>
    );
}
