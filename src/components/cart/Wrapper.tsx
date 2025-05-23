"use client";

import { useEffect, useState } from "react";
import Cart from "./Cart";
import Checkout from "./Checkout";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchCourses } from "@/store/dashboardSlices/courseSlice";

export default function Wrapper({ token }: { token: string | undefined }) {
  const [loading, setLoading] = useState(true);
  const cart = useAppSelector((state) => state.cart.cart);
  const courses = useAppSelector((state) => state.course.courses);
  let cartData;

  const dispatch = useAppDispatch();

  if (courses.length > 0) {
    cartData = courses.filter((course) =>
      cart.find((item) => item._id === course._id)
    );
  }

  const totalItems = cart.length;
  const totalPrice = cartData?.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );
  const stringTotalPrice = totalPrice?.toFixed(2);
  useEffect(() => {
    dispatch(fetchCourses()).finally(() => setLoading(false));
  }, [dispatch]);

  return (
    <>
      <Cart
        token={token}
        totalItems={totalItems}
        totalPrice={stringTotalPrice}
        loading={loading}
        cartData={cartData}
      />
      {token && <Checkout totalPrice={stringTotalPrice} />}
    </>
  );
}
