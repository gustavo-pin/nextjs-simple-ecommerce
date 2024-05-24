import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function CheckoutButton() {
    const router = useRouter();
    const { user } = useUser();
    const cartStore = useCartStore();

    const handleCheckOut = async () => {
        if(!user) {
            cartStore.toggleCart();
            router.push("/signin?redirectUrl=/")
            return; 
        }
        cartStore.setCheckOut('checkout')
    }

    const totalPrice = cartStore.cart.reduce((acc, item) => {
        return acc + item.price! * item.quantity!
    }, 0)

    return(
        <div className="mt-5">
            <p className="text-teal-600 font-bold mb-2">
                Total: {formatPrice(totalPrice)}
            </p>
            <button 
                onClick={() => handleCheckOut()} 
                className="w-full rounded-md bg-teal-600 text-white py-2"
            >
                Finish order
            </button>
        </div>
    )
}