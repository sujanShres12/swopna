"use client"
import { CSSProperties } from "react";

export default function ParentHeight({
  children,
  className,
  style,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  id?: string;
}) {
  return (
    <div className={`height ${className} `} style={{ ...style }} id={id}>
      {children}
    </div>
  );
}
