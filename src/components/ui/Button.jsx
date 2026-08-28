import React from "react";
import { Link } from "react-router-dom";

/**
 * Global button system — 4-tier hierarchy matching the site's CTA strategy:
 * primary (filled, highest priority) / secondary (outlined) /
 * tertiary (text link + underline) / ghost (minimal text + icon)
 *
 * Renders a <Link> for internal hrefs starting with "/", an <a> for
 * external/anchor links, or a <button> when onClick is used instead of href.
 */
const VARIANT_CLASS = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  tertiary: "btn-tertiary",
  ghost: "btn-ghost",
};

export default function Button({
  variant = "primary",
  href,
  onClick,
  external = false,
  icon: Icon,
  iconPosition = "right",
  className = "",
  children,
  ...rest
}) {
  const classes = `${VARIANT_CLASS[variant] || VARIANT_CLASS.primary} ${className}`;
  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="w-4 h-4" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="w-4 h-4" />}
    </>
  );

  if (href && !external && href.startsWith("/")) {
    return (
      <Link to={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
}
