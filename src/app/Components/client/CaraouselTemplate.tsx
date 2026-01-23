"use client";
import Carousel, { CarouselProps, ResponsiveType } from "react-multi-carousel";

export default function CaraousalTemplate({
  children,
  responsive,
  others,
}: {
  children: React.ReactNode;
  responsive: ResponsiveType;
  others: Omit<CarouselProps, "responsive" | "children">;
}) {
  return (
    <>
      <Carousel {...others} responsive={responsive}>
        {children}
      </Carousel>
    </>
  );
}
