import { useState } from "react";

export function Portrait({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="portrait">
      <div className="portrait-fallback" aria-hidden={!failed}>
        {initials}
      </div>
      {!failed && <img src={src} alt={`Portrait of ${name}`} onError={() => setFailed(true)} />}
    </div>
  );
}
