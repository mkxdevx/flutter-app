# Modern Twitter Clone

A fast, responsive social media web application. I took a legacy tutorial setup and upgraded the entire ecosystem to modern web standards.

## 🚀 Live Demo
[Not yet deployed]

## Features
- User authentication
- Create, like, and comment on posts
- Follow/unfollow users
- User profiles
- Image uploads with Cloudinary
- Optimistic UI updates

## 🛠️ Tech Stack
* **Frontend:** Next.js (Pages Router) & React 19 w/ Typescript
* **Styling:** Tailwind CSS v4 
* **Image Storage:** Cloudinary 
* **State & Data Management:** SWR & Zustand
* **Database:** MongoDB via Prisma 6 (ORM)
* **Authentication:** NextAuth / Auth.js v5

## 💪 Challenges I Overcame

* **Full-Stack Version Upgrade** Updated the application's dependencies and frameworks from outdated tutorial versions to newer compatible versions, adapting code to breaking changes along the way.
* **Performance Optimization:** Improved initial load performance by limiting API responses to only the data needed using Prisma's `select`.
* **Image Storage:** Migrated image storage from Base64 data to Cloudinary, reducing API response sizes and improving application performance.
* **Optimistic UI Updates:** Implemented optimistic updates with SWR so the interface responds immediately while API requests process in the background.
* **Loading States & Asynchronous Data:** Built loading and fallback states to handle data while requests are loading or unavailable.
* **Database Seeding & Relationships:** Created and injected seed data while connecting users to posts, comments, likes, and following relationships using Prisma and MongoDB.

## Future Improvements 
- Search engine
- Light/dark mode
- Retweets
- Bookmarks
- Personalized feed
- Delete/edit for post owners
- Reply threads
- Following feed


## 📦 How to Run Locally
1. Clone the project: `git clone [your-repo-url]`
2. Install files: `npm install --legacy-peer-deps`
3. Add your environment keys to a `.map` or `.env` file (`DATABASE_URL`, `NEXTAUTH_SECRET`)
4. Launch the local portal: `npm run dev`
