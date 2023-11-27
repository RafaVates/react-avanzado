import { createContext, useEffect, useState } from "react";
import { getFirestore, getDoc, doc } from "firebase/firestore";


export const CartContext = createContext();

const CartProvider = ({children}) => {

    const storedCart = JSON.parse(localStorage.getItem('cart'));
    const [cart, setCart] = useState(storedCart || []);
    const [productos, setProductos] = useState([]);

    // const [total, setTotal] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    
    const addItem = (id, cantidad) => {
        if (isInCart(id)) {
            const newCart = cart.map((cartItem) => {
                if (cartItem.id === id) {
                    return { id: cartItem.id, cantidad: cartItem.cantidad + cantidad };
                } else return cartItem;
            });
            setCart(newCart);
        } else {
            setCart([...cart, { id, cantidad }]);
        }
    };

    
    const isInCart = (id) => {
        return cart.find((cartItem) => cartItem.id === id);
    };
    
    useEffect(() => {
        const parsedCart = JSON.stringify(cart);
        localStorage.setItem('cart', parsedCart);
        let totalItems = 0;
        totalItems = cart.length>0 ? cart.reduce((a, b) => a + b.cantidad, 0) : 0;
        setTotalItems(totalItems);
    }, [cart]);
    
    let total = productos.length>0 ? productos.reduce((a, b) => a + b.precio * b.cantidad, 0) : 0;
    
    const fetchProducts = async () => {
        const db = getFirestore();
        try {
            const promises = cart.map(async (item) => {
                const docRef = doc(db, "productos", item.id);
                const docSnap = await getDoc(docRef);
                return { id: docSnap.id , cantidad: item.cantidad,...docSnap.data()};
            })
            const compras = await Promise.all(promises);
            setProductos(compras);
        } catch (error) {
            console.log(error);
        }
    };
    
    
    const removeItem = (itemId) => {
        const newCart = cart.filter((cartItem) => cartItem.id !== itemId);
        setCart(newCart);
    };

    const clear = () => {
        setCart([]);
        setProductos([]);
    };
    

    return (
        <CartContext.Provider value={{ cart, productos,setProductos, total, totalItems, addItem, removeItem, clear, isInCart, fetchProducts }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;