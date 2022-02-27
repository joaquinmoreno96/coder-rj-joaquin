import React, { createContext, useState } from "react";

export const cartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addToCart(prod, count) {
        if (isInCart(prod.id)) {
            const indexItem = cart.findIndex((e) => e.item.id === prod.id);

            cart[indexItem].cantidad = cart[indexItem].cantidad + count;
            setCart([...cart]);
        } else {
            setCart([...cart, { item: prod, cantidad: count }]);
        }
    }
    function isInCart(id) {
        return cart.some((e) => e.item.id === id);
    }
    function deleteItem(id) {
        const updatedCart = cart.filter((e) => e.item.id !== id);
        setCart(updatedCart);
    }
    function clearCart() {
        setCart([]);
    }
    function countCart() {
        return cart.reduce((a, b) => a + b.cantidad, 0);
    }
    function valorTotal() {
        return cart.reduce((a, b) => a + b.item.price * b.cantidad, 0);
    }
    function updateCart(id, number) {
        const newCart = cart.map((e) => {
            if (id === e.item.id) {
                return { item: e.item, cantidad: number };
            }
            return e;
        });
        setCart(newCart);
    }

    return (
        <cartContext.Provider value={{ cart, addToCart, deleteItem, clearCart, countCart, valorTotal, updateCart }}>
            {children}
        </cartContext.Provider>
    );
}
