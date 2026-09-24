import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("failed");
    }
    window.setTimeout(() => setState("idle"), 2000);
  }

  return (
    <button className="copy-btn" onClick={copy} aria-live="polite">
      {state === "copied" ? "Copied" : state === "failed" ? "Select to copy" : "Copy email"}
    </button>
  );
}
