import Cart from "@/components/cart/Cart";
import Checkout from "@/components/cart/Checkout";

import { cookies } from "next/headers";
export default async function CartPage() {
  const token = (await cookies()).get("token")?.value;

  return (
    <>
      <Cart token={token} />;{token && <Checkout />}
    </>
  );
}
