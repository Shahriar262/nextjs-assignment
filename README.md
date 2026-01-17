# TechHive 🐝

TechHive is a modern, recruiter-friendly, and fully responsive **Next.js 13** application showcasing professional tech products. Users can browse a curated product catalog, view detailed specifications, and optionally log in via Google authentication or mock credentials.

**Live Demo:** [https://nextjs-assignment-steel.vercel.app](https://nextjs-assignment-steel.vercel.app)

## 🚀 Features

- **Browse Products**: Explore a curated catalog of high-quality tech gear.
- **Detailed Insights**: View comprehensive specifications and details for each item.
- **Secure Authentication**:
  - **Google Login**: Integrated using **NextAuth.js** for secure and seamless sign-in.
  - **Mock Login**: Pre-configured credentials for quick access and testing.
- **Responsive Design**: Optimized for a seamless experience across desktop, tablet, and mobile devices.
- **Modern UI**: Built with a focus on aesthetics and user experience.

## 📂 Project Structure

```bash
TechHive/
├── app/
│   ├── layout.js          # Root layout including Navbar & Footer
│   ├── page.js            # Landing page
│   ├── login/page.js      # Login page (mock + Google login)
│   ├── items/page.js      # Product listing page
│   └── items/[id]/page.js # Product details page
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ItemCard.jsx
│   ├── ItemDetails.jsx
│   ├── ItemSkeleton.jsx
│   └── sections/          # Landing page sections
├── public/
│   ├── images/            # Product images
│   └── data/items.json    # Product JSON data
├── .env                   # Environment variables
└── README.md
```

## 🛠️ Setup & Installation

Follow these steps to get the project running locally:

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/TechHive.git
cd TechHive
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following variables (required for NextAuth and Google Login):

```env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📍 Route Summary

| Route         | Description                                                       |
| :------------ | :---------------------------------------------------------------- |
| `/`           | **Landing Page**: Introduction and featured sections.             |
| `/items`      | **Product Listing**: Browse the full catalog of items.            |
| `/items/[id]` | **Product Details**: detailed information for a specific product. |
| `/login`      | **Authentication**: Login using Google or mock credentials.       |

---

Built with ❤️ using [Next.js](https://nextjs.org/)
