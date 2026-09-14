# Modern Twitter Clone

A fast, responsive social media web application. I took a legacy tutorial setup and upgraded the entire ecosystem to modern web standards.

## 🚀 Live Demo
[Not yet deployed]

## 🛠️ Tech Stack
* **Frontend:** Next.js (Pages Router) & React 19
* **Styling:** Tailwind CSS v4 
* **Database:** MongoDB via Prisma 6 (ORM)
* **Authentication:** NextAuth / Auth.js v5

## 💪 Challenges I Overcame (Ecosystem Upgrade)
Instead of sticking with old tutorial package versions, I updated the entire app to use modern packages. This required fixing several real-world compatibility issues:

* **Tailwind v4 Shift:** Migrated the app from a JS configuration file to a clean, modern CSS-First layout.
* **Prisma 6 Stability:** Evaluated new package limits and locked our database engine at Prisma v6 to keep MongoDB collections running smoothly without version crashes.
* **Auth.js Wrapper:** Updated the backend session handling to bridge old tutorial patterns with new token security steps.
* **Smart Components:** Rewrote the user feed layout so that home page queries handle missing or optional IDs cleanly without breaking.

## 📦 How to Run Locally
1. Clone the project: `git clone [your-repo-url]`
2. Install files: `npm install --legacy-peer-deps`
3. Add your environment keys to a `.map` or `.env` file (`DATABASE_URL`, `NEXTAUTH_SECRET`)
4. Launch the local portal: `npm run dev`
