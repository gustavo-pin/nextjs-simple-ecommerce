export const formatPrice = (price: number | null) => {
    if(!price) return "$ 0,00";

    return new Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD"
    }).format(price/100);
}