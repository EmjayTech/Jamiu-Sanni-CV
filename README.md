# Jamiu Sanni · Portfolio

Personal portfolio of **Sanni Jamiu Oladayo**, senior mobile & full-stack engineer in Lagos, Nigeria.

Built with **React 19, TypeScript and Vite**. No UI framework: hand-written CSS with design tokens, light and dark themes, an animated money-transfer demo in a CSS phone, and SEO metadata (Open Graph + schema.org Person) so the site previews well on LinkedIn and ranks for your name.

## Run it locally

```bash
npm install
npm run dev        # opens http://localhost:5173
npm run build      # production build into dist/
```

## Edit your content

Everything you'd want to change is in **`src/data/profile.ts`**: headline, about text, projects, timeline, skills, certifications and LinkedIn posts. Save the file and the page updates.

| To do this | Do this |
| --- | --- |
| Add your photo | Put a square or portrait photo at `public/me.jpg` (under 300 KB). Your initials show until then. |
| Update your CV | Replace `public/Jamiu-Sanni-CV.pdf` (keep the same name). Do this before sharing the link. |
| Show LinkedIn posts | Fill the `posts` array at the bottom of `profile.ts`. The section appears automatically. |
| Add a project | Copy one object in the `work` array and edit it. `outcome` shows a highlighted result box; `note` shows a side note. |

## Deploy: GitHub + Vercel

### 1. Push to GitHub

Create an empty repository on GitHub named `portfolio` (no README, no .gitignore). Then, inside this folder:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/EmjayTech/portfolio.git
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to https://vercel.com and sign in with GitHub.
2. Click **Add New → Project**, then **Import** the `portfolio` repo.
3. Vercel detects **Vite** automatically (build command `npm run build`, output `dist`). Click **Deploy**.
4. In about a minute you get a live URL like `portfolio-xxxx.vercel.app`.

Every `git push` to `main` redeploys automatically. Pull requests get their own preview links.

### 3. Get a clean URL

- **Free:** Project → Settings → Domains → change it to something like `jamiusanni.vercel.app`.
- **Custom domain (recommended, about ₦15–25k/yr):** buy `jamiusanni.com` or `jamiusanni.dev` (Namecheap, Qservers, Whogohost), add it under Settings → Domains, and follow Vercel's DNS instructions.

### 4. After you have the final URL

Open `index.html` and change `/og-image.png` in the `og:image` tag to the full URL, e.g. `https://jamiusanni.com/og-image.png`, then add:

```html
<meta property="og:url" content="https://jamiusanni.com" />
<link rel="canonical" href="https://jamiusanni.com" />
```

Commit and push. Test the preview at https://www.linkedin.com/post-inspector/

## Project structure

```
src/
  data/profile.ts        ← all content
  components/
    PhoneDemo.tsx        ← animated transfer demo + brand mark
    ThemeToggle.tsx      ← light/dark switch, remembers choice
    Portrait.tsx         ← photo with initials fallback
    CopyEmail.tsx        ← copy-to-clipboard button
  App.tsx                ← page sections
  index.css              ← design tokens + styles
public/
  Jamiu-Sanni-CV.pdf, og-image.png, favicon.svg
```
