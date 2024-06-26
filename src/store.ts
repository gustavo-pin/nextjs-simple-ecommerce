import { ProductType } from "./types/ProductType";
import { persist } from "zustand/middleware";
import { create } from "zustand";

type CartState = {
    cart: ProductType[],
    addProduct: (product: ProductType) => void;
    removeProduct: (product: ProductType) => void;
    isOpen: boolean;
    toggleCart: () => void;
    onCheckOut: string,
    setCheckOut: (checkout: string) => void,
    paymentIntent: string,
    setPaymentIntent: (paymentIntent: string) => void,
}

export const useCartStore = create<CartState>()(
    persist((set) => ({
        cart: [],
        isOpen: false,
        addProduct: (product) => set(state => {
            const productExist = state.cart.find(p => p.id === product.id);
            if(productExist) {
                const updatedCart = state.cart.map(p => {
                    if(p.id === product.id) {
                        return {...p, quantity: p.quantity ? p.quantity + 1 : 1};
                    }
                    return p;
                })
                return {cart: updatedCart};
            } else {
                return { cart: [...state.cart, {...product, quantity: 1}] };
            }
        }),
        removeProduct: (product) => set(state => {
            const existingProduct = state.cart.find(p => p.id === product.id);

            if(existingProduct && existingProduct.quantity! > 1){
                const updatedCart = state.cart.map(p => {
                    if(p.id === product.id) {
                        return {...p, quantity: p.quantity! - 1}
                    }
                    return p;
                });
                return { cart: updatedCart };
            }else {
                const filteredCart = state.cart.filter(p => p.id !== product.id);
                return { cart: filteredCart };
            }
        }),
        toggleCart: () => set((state) => ({isOpen: !state.isOpen})),
        onCheckOut: 'cart',
        setCheckOut: (checkout) => set(() => ({ onCheckOut: checkout })),
        paymentIntent: '',
        setPaymentIntent: (paymentIntent) => set(() => ({paymentIntent}))
    }),
    { name: 'cart-storage' })
)