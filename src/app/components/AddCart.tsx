'use client'

import { ProductType } from "@/types/ProductType";
import { useCartStore } from "@/store";

export default function AddCart({product} : {product: ProductType}) {
    const { addProduct } = useCartStore();
    
    return (
        <button 
            onClick={() => addProduct(product)}
            className="rounded-md bg-teal-600 text-white px-3.5 py-2.5 text-sm text-center">
            Add to Cart
        </button>
    )
}