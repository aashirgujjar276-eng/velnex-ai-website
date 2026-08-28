import React from "react";
import { Link } from "react-router-dom";

/**
 * Renders a plain string that may contain:
 *   **bold text**          -> <strong>
 *   [[Label|/some/path]]   -> internal <Link>
 * into React nodes. This keeps long-form content data close to the
 * original copy (including exactly which phrases are emphasized or
 * cross-linked to another page) without writing JSX per paragraph.
 */
export function renderInline(text) {
  if (!text) return null;
  const tokens = text.split(/(\*\*[^*]+\*\*|\[\[[^\]]+\]\])/g).filter((t) => t !== "");
  return tokens.map((tok, i) => {
    if (tok.startsWith("**") && tok.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold">
          {tok.slice(2, -2)}
        </strong>
      );
    }
    if (tok.startsWith("[[") && tok.endsWith("]]")) {
      const inner = tok.slice(2, -2);
      const [label, path] = inner.split("|");
      return (
        <Link
          key={i}
          to={path}
          className="text-[#1E5FA8] font-semibold hover:underline underline-offset-2"
        >
          {label}
        </Link>
      );
    }
    return <React.Fragment key={i}>{tok}</React.Fragment>;
  });
}
