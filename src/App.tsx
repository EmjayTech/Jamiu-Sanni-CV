import { useEffect, useState } from "react";
import {
  profile,
  hero,
  story,
  facts,
  work,
  timeline,
  skills,
  teaching,
  certifications,
  posts,
} from "./data/profile";
import { PhoneDemo, BrandMark } from "./components/PhoneDemo";
import { ThemeToggle } from "./components/ThemeToggle";
import { Portrait } from "./components/Portrait";
import { CopyEmail } from "./components/CopyEmail";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a className="brand" href="#top" aria-label={`${profile.name}, back to top`}>
          <BrandMark />
          {profile.name}
        </a>
        <nav aria-label="Main">
          <ul className="nav-links">
            <li className="opt"><a href="#story">About</a></li>
            <li><a href="#work">Work</a></li>
            <li className="opt"><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-name">
            <span className="dot" aria-hidden="true" />
            {profile.name}, {profile.role.toLowerCase()} in {profile.location.split(",")[0]}
          </p>
          <h1 id="hero-title">{hero.headline}</h1>
          <p className="hero-intro">{hero.intro}</p>
          <div className="hero-actions">
            <a className="btn btn-solid" href={`mailto:${profile.email}`}>Email me</a>
            <a className="btn btn-ghost" href={profile.cv} download>Download CV</a>
          </div>
          <p className="availability">{profile.availability}</p>
        </div>
        <PhoneDemo />
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="section" id="story" aria-labelledby="story-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="story-title">About me</h2>
        </div>
        <div className="story">
          <div>
            <Portrait src={profile.photo} name={profile.name} />
            <p className="portrait-caption">{profile.fullName}. {profile.location}.</p>
          </div>
          <div className="story-text">
            {story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <ul className="vitals" aria-label="Highlights">
          {facts.map((f) => (
            <li className="vital" key={f.label}>
              <strong>{f.value}</strong>
              <span>{f.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="work-title">Selected work</h2>
          <p>Banking, education and commerce: products where reliability is the feature.</p>
        </div>
        <div className="cases">
          {work.map((c) => {
            const aside = c.outcome || c.note;
            return (
              <article className="case" key={c.id} aria-labelledby={`case-${c.id}`}>
                <div className="case-meta">
                  <span className="org">{c.org}</span>
                  {c.role}
                  <br />
                  {c.period}
                </div>
                <div>
                  <h3 id={`case-${c.id}`}>{c.title}</h3>
                  <p className="case-summary">{c.summary}</p>
                  <div className={`case-body${aside ? "" : " single"}`}>
                    <ul className="did">
                      {c.did.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                    {c.outcome && (
                      <p className="outcome">
                        <b>Result</b>
                        {c.outcome}
                      </p>
                    )}
                    {c.note && !c.outcome && <p className="note">{c.note}</p>}
                  </div>
                  <ul className="stack" aria-label="Technologies">
                    {c.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="exp-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="exp-title">Experience</h2>
        </div>
        <ol className="timeline">
          {timeline.map((r) => (
            <li key={r.title + r.org}>
              <span className="t-period">{r.period}</span>
              <p className="t-title">
                {r.title} <span>at {r.org}</span>
              </p>
              <p className="t-detail">{r.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="skills-title">What I work with</h2>
        </div>
        <dl className="skills">
          {skills.map((g) => (
            <div key={g.area}>
              <dt>{g.area}</dt>
              <dd>{g.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function TeachingEducation() {
  return (
    <section className="section" id="teaching" aria-labelledby="teach-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="teach-title">Teaching and community</h2>
        </div>
        <div className="two-col">
          <div className="panel">
            <h3>Teaching</h3>
            <p>{teaching.intro}</p>
            <p className="award">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="9" r="6" />
                <path d="M8.5 14 7 22l5-3 5 3-1.5-8" />
              </svg>
              {teaching.award}
            </p>
          </div>
          <div className="panel">
            <h3>Certifications</h3>
            <ul className="edu">
              {certifications.map((c) => (
                <li key={c}>
                  <b>{c.split(", ")[0]}</b>
                  <span>{c.split(", ").slice(1).join(", ")}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Posts() {
  if (posts.length === 0) return null;
  return (
    <section className="section" id="writing" aria-labelledby="posts-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="posts-title">From my LinkedIn</h2>
        </div>
        <ul className="posts">
          {posts.map((p) => (
            <li key={p.href}>
              <a className="post" href={p.href} target="_blank" rel="noreferrer">
                <time>{p.date}</time>
                <p>{p.excerpt}</p>
                <span>Read on LinkedIn</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <div className="contact-card">
          <h2 id="contact-title">Let's build something reliable.</h2>
          <p>
            I'm available now for senior mobile or full-stack roles, especially in fintech and
            edtech. The fastest way to reach me is email.
          </p>
          <div className="email-row">
            <a className="email-link" href={`mailto:${profile.email}`}>{profile.email}</a>
            <CopyEmail email={profile.email} />
          </div>
          <ul className="contact-links">
            <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href={`tel:${profile.phoneHref}`}>{profile.phone}</a></li>
            <li><a href={profile.cv} download>Download CV</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Story />
        <Work />
        <Experience />
        <Skills />
        <TeachingEducation />
        <Posts />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="wrap">
          <span>© {new Date().getFullYear()} {profile.fullName}</span>
          <span>Built with React and TypeScript.</span>
        </div>
      </footer>
    </>
  );
}
