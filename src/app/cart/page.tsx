import Wrapper from "@/components/cart/Wrapper";

import { cookies } from "next/headers";
export default async function CartPage() {
  const token = (await cookies()).get("token")?.value;

  return <Wrapper token={token} />;
}
