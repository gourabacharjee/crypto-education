# CryptoEd — 20 Years of Crypto Knowledge

> A comprehensive cryptocurrency educational website written from the perspective of a 20-year crypto veteran and teacher.

[![Deploy to GitHub Pages](https://github.com/username/crypto-education/actions/workflows/deploy.yml/badge.svg)](https://github.com/username/crypto-education/actions/workflows/deploy.yml)

## 🌐 Live Site

**[Visit CryptoEd →](https://username.github.io/crypto-education/)**

## 📚 What's Inside

### Three Eras of Crypto History
- **Origins (2008–2016)** — Cypherpunks, Bitcoin whitepaper, early adoption, altcoin explosion
- **Present (2017–Now)** — DeFi, NFTs, L2 scaling, institutional adoption, major collapses
- **Future (2025+)** — AI + crypto, quantum resistance, nation-state adoption, regulatory endgame

### Interactive Features
- 🗺️ **Global Regulation Tracker** — Color-coded world map with 14 country deep-dives
- 📰 **News Hub** — Curated weekly digests with "Why This Matters" analysis
- 📖 **Glossary** — 100+ crypto terms in plain English
- 🧮 **Calculators** — DCA, staking yields, impermanent loss
- 📈 **Live Ticker** — Top 10 crypto prices via CoinGecko API

### Design
- Dark/light mode (default dark)
- Fully responsive, mobile-first
- WCAG AA accessible
- Print-friendly styles for lesson handouts
- Fast static site — no heavy JS frameworks

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro](https://astro.build) |
| Styling | CSS Custom Properties (no framework) |
| JS | Vanilla JavaScript (no React/Vue) |
| Deployment | GitHub Actions → GitHub Pages |
| Market Data | [CoinGecko API](https://www.coingecko.com/en/api) |

## 📁 Project Structure

```
/
├── content/
│   ├── eras/          # Three main era content
│   ├── regulation/    # Country regulation data
│   ├── news/          # Weekly digest content
│   ├── glossary/      # Term definitions
│   └── resources/     # Reading list, calculator configs
├── src/
│   ├── components/    # Reusable UI components (Header, Footer, Ticker, etc.)
│   ├── layouts/       # BaseLayout.astro
│   ├── pages/         # Route pages
│   ├── styles/        # Global CSS with theming
│   └── scripts/       # Vanilla JS utilities
├── public/            # Static assets (favicon, images)
├── .github/workflows/ # CI/CD pipeline
├── astro.config.mjs   # Astro configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) v18 or later
- npm (comes with Node.js)

### Local Development

```bash
# Clone the repository
git clone https://github.com/username/crypto-education.git
cd crypto-education

# Install dependencies
npm install

# Start dev server
npm run dev
```

The site will be available at `http://localhost:4321/crypto-education/`.

### Build for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📝 Content Contribution Guide

### Adding a News Digest

1. Create a new `.astro` file in `src/pages/news/` (e.g., `2025-week-44.astro`)
2. Follow the existing digest format with category tags
3. Include "Why This Matters for Students" analysis for each item
4. Update the archive list in `src/pages/news/index.astro`

### Updating Regulation Data

1. Country regulation data is embedded in `src/pages/regulation/index.astro`
2. Update the relevant country card with new information
3. Add new timeline events to the regulatory timeline section
4. Update map colors if a country's status changes

### Adding Glossary Terms

1. Add new terms to `src/pages/resources/glossary.astro`
2. Place them in the correct alphabetical section
3. Include a plain-English definition (1-3 sentences)
4. Add "See also" links to related terms where helpful

### Updating Market Data

The live ticker uses the CoinGecko free API. Fallback static data is embedded in `src/components/Ticker.astro`. Update the fallback data periodically to keep it representative.

## 🔑 API Keys & Secrets

| Service | Purpose | Required? |
|---------|---------|-----------|
| CoinGecko | Market data ticker | No (free tier, fallback data included) |
| Buttondown/ConvertKit | Newsletter signup | Optional |

For newsletter functionality, add your provider's form action URL to the newsletter signup forms.

## 📄 Deployment

### GitHub Pages (Recommended)

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Enable GitHub Pages in repo Settings → Pages → Source: "GitHub Actions"
4. Your site will be at `https://username.github.io/crypto-education/`

### Custom Domain

1. Add your domain in repo Settings → Pages → Custom domain
2. Update `site` in `astro.config.mjs` to your custom domain
3. Optionally set `base: '/'` if using a root domain

## 📜 License

- **Code**: [MIT License](https://opensource.org/licenses/MIT)
- **Content**: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## ⚠️ Disclaimer

This is an educational resource only. Nothing on this site constitutes financial advice. Always do your own research (DYOR) before making any investment decisions.

---

Built with ☕ and two decades of crypto experience.
