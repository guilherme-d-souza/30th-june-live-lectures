import React from "react";

// spread operator -> very common on HOC's components
// {...object}
// RECOMMENDATION -> avoid spread operator
export default function Image({ className, src, alt }) {
  // return <img {...props}/>
  return <img className={className} src={src} alt={alt} />;
}
