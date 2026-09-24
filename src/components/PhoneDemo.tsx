import { useCallback, useEffect, useRef, useState } from "react";

// A small, working transfer flow in a phone frame.
// Plays once on load; the viewer can replay it.

const AMOUNT = "25,000";
const STEPS = ["2", "25", "25,0", "25,00", "25,000"];

type Stage = "idle" | "typing" | "ready" | "sending" | "done";

function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
}

export function PhoneDemo() {
  const [stage, setStage] = useState<Stage>("idle");
  const [typed, setTyped] = useState("");
  const timers = useRef<number[]>([]);

  const clear = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  const play = useCallback(() => {
    clear();
    if (prefersReducedMotion()) {
      setTyped(AMOUNT);
      setStage("done");
      return;
    }
    setTyped("");
    setStage("idle");
    const at = (ms: number, fn: () => void) => timers.current.push(window.setTimeout(fn, ms));
    at(700, () => setStage("typing"));
    STEPS.forEach((v, i) => at(800 + i * 170, () => setTyped(v)));
    at(1800, () => setStage("ready"));
    at(2500, () => setStage("sending"));
    at(3400, () => setStage("done"));
  }, []);

  const figRef = useRef<HTMLElement>(null);

  // Start the first run when the phone is actually on screen
  // (on phones it sits below the fold).
  useEffect(() => {
    const el = figRef.current;
    if (!el || !("IntersectionObserver" in window)) {
      play();
      return clear;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          play();
          io.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clear();
    };
  }, [play]);

  const done = stage === "done";

  return (
    <figure className="phone-fig" ref={figRef}>
      <div className="phone" aria-hidden="true">
        <div className="phone-notch" />
        <div className="screen">
          <div className="app-bar">
            <span className="app-back">‹</span>
            <span>Send money</span>
            <span />
          </div>

          <div className="balance">
            <small>Available balance</small>
            <strong>₦184,250.00</strong>
          </div>

          <div className="recipient">
            <span className="avatar">TA</span>
            <span>
              <b>Tolu Adeyemi</b>
              <small>Savings ••4821</small>
            </span>
          </div>

          <div className={`amount${stage === "typing" ? " is-typing" : ""}`}>
            <small>Amount</small>
            <div className="amount-value">
              <span className="naira">₦</span>
              {typed || <span className="placeholder">0</span>}
              {stage === "typing" && <span className="caret" />}
            </div>
          </div>

          <div className="narration">
            <small>Narration</small>
            <span>October rent contribution</span>
          </div>

          <div className={`send-btn stage-${stage}`}>
            {stage === "sending" ? <span className="spinner" /> : `Send ₦${typed || "0"}`}
          </div>

          <div className={`success${done ? " show" : ""}`}>
            <svg viewBox="0 0 52 52" className="check">
              <circle cx="26" cy="26" r="24" />
              <path d="M15 27l7 7 15-16" />
            </svg>
            <b>Transfer successful</b>
            <span>₦{AMOUNT} sent to Tolu Adeyemi</span>
            <small>Ref: TRF-2481-7730</small>
          </div>
        </div>
      </div>
      <figcaption>
        <span>A transfer flow like the ones I build.</span>
        <button className="replay" onClick={play} disabled={stage !== "done" && stage !== "idle"}>
          Replay transfer
        </button>
      </figcaption>
    </figure>
  );
}

export function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 32 32" aria-hidden="true">
      <rect x="7" y="2" width="18" height="28" rx="4.5" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="M13.5 25.5h5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
