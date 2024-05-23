import { ProductType } from "./types/ProductType";
import { persist } from "zustand/middleware";
import { create } from "zustand";

type CartState = {
    cart: ProductType[],
    addProduct: (product: ProductType) => void;
    // removeProduct: (product: ProductType) => void;
    isOpen: boolean;
    toggleCart: () => void;
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
        toggleCart: () => set((state) => ({isOpen: !state.isOpen}))
    }), 
    { name: 'cart-storage' })
)