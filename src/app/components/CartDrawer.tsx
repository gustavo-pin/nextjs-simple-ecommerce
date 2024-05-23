'use client'

import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store";
import Image from "next/image";

export default function CartDrawer() {
    const useStore = useCartStore();
    
    return ( 
        <div onClick={() => useStore.toggleCart()} className="fixed w-full h-screen bg-black/25 left-0 top-0 z-50">
            <div onClick={(e) => e.stopPropagation()} className="absolute bg-slate-600 right-0 top-0 w-1/3 h-screen p-12 overflow-y-scroll">
                <button 
                    onClick={() => useStore.toggleCart()}
                    className="font-bold text-sm text-teal-600"
                >
                    Back to shop
                </button>   

                <div className="border-t border-gray-300 my-4"></div>

                {useStore.cart.map((product) => (
                    <div key={product.id} className="flex gap-4 py-4">
                        <Image 
                            src={product.image}
                            alt={product.name}
                            width={120}
                            height={120}
                            className="object-cover w-24"
                        />
                        <div>
                            <h2 className="w-42 truncate">{product.name}</h2>
                            <h2>Quantidade: {product.quantity}</h2>
                            <p className="text-teal-600 font-bold text-sm">{formatPrice(product.price)}</p>

                            <button 
                                onClick={() => useStore.addProduct(product)}
                                className="py-1 px-2 border rounded-md mt-2 text-sm mr-1"
                            >Add
                            </button>

                            <button
                                onClick={() => useStore.removeProduct(product)} 
                                className="py-1 px-2 border rounded-md mt-2 text-sm"
                            >Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}