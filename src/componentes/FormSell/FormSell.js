import React, { useState, useRef, useContext } from "react";
import firebase from "firebase";
import { getFirestore } from "../../api/config";
import { cartContext } from "../context/CartProvider";
import { Input, Button, Stack } from "@chakra-ui/react";

export default function FormSell() {
    const { cart, valorTotal } = useContext(cartContext);
    const [orderId, setOrderId] = useState("");
    const nameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();

    const confirmOrder = () => {
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
                console.log("orden ingresada: " + id);
                setOrderId(id);
                //mandar mensaje de exito, limpiar carrito{arreglar stock}, mandar al home
            })
            .catch((err) => {
                console.log(err);
                //mandar mensaje de error
            });
    };

    return (
        <>
            <>
                {orderId && <h1 fontWeight="semibold">Felicitaciones tu order es {orderId}</h1>}

                <Stack spacing={1} w="40%" minH="76vh" fontWeight="semibold">
                    <h3>Ingresa tus datos:</h3>

                    <Input type="text" name="name" ref={nameRef} placeholder="Nombre y Apelllido" variant="outline" />
                    <br />

                    <Input type="text" name="mobile" ref={mobileRef} placeholder="Nro de Celular" variant="outline" />
                    <br />

                    <Input type="text" name="email" ref={emailRef} placeholder="Email" variant="outline" />
                    <br />

                    <Input type="text" name="state" ref={stateRef} placeholder="Provincia" variant="outline" />
                    <br />

                    <Input type="text" name="city" ref={cityRef} placeholder="Ciudad" variant="outline" />
                    <br />

                    <Input type="text" name="address" ref={addressRef} placeholder="Direccion" variant="outline" />
                    <br />

                    <Button onClick={() => confirmOrder()}>Terminar compra!</Button>
                </Stack>
            </>
        </>
    );
}
