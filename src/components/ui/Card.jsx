import React from "react";

/** Global card component. variant="white" (default, elevated) or "flat" (tinted, no shadow). */
export default function Card({ variant = "white", className = "", children, ...rest }) {
  const base = variant === "flat" ? "card-flat" : "card";
  return (
    <div className={`${base} ${className}`} {...rest}>
      {children}
    </div>
  );
}
