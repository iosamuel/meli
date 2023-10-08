export function formatPrice(price: number, currency: string) {
  // "es-AR" -> could change based on the user's location
  return Intl.NumberFormat("es-AR", {
    style: "currency",
    currency,
  }).format(price);
}
