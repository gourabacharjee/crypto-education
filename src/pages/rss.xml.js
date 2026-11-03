export async function GET(context) {
  const siteUrl = context.site || 'https://example.github.io/crypto-education';
  
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>CryptoEd — 20 Years of Crypto Knowledge</title>
    <description>Curated cryptocurrency education, regulatory tracking, and pedagogical analysis from a 20-year crypto veteran.</description>
    <link>${siteUrl}</link>
    <language>en-us</language>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <item>
      <title>Week of October 27, 2025: Markets Rally on ETF Flows</title>
      <link>${siteUrl}/news/</link>
      <description>Weekly digest: SEC finalizes digital asset custody rules, BlackRock ETF crosses $50B AUM, and Ethereum Pectra upgrade approaches mainnet.</description>
      <pubDate>Mon, 27 Oct 2025 00:00:00 GMT</pubDate>
      <guid>${siteUrl}/news/#digest-2025-10-27</guid>
    </item>
    <item>
      <title>Era 1: How It Started (2008-2016)</title>
      <link>${siteUrl}/eras/how-it-started/</link>
      <description>The Cypherpunk movement, DigiCash, Hashcash, Bitcoin whitepaper breakdown, Silk Road, and the launch of Ethereum.</description>
      <pubDate>Wed, 01 Jan 2025 00:00:00 GMT</pubDate>
      <guid>${siteUrl}/eras/how-it-started/</guid>
    </item>
    <item>
      <title>Era 2: Where We Are Now (2017-Present)</title>
      <link>${siteUrl}/eras/where-we-are/</link>
      <description>DeFi Summer, NFT boom, institutional spot ETFs, and post-mortems of FTX and Terra/Luna collapses.</description>
      <pubDate>Wed, 01 Jan 2025 00:00:00 GMT</pubDate>
      <guid>${siteUrl}/eras/where-we-are/</guid>
    </item>
    <item>
      <title>Era 3: The Future (2025+)</title>
      <link>${siteUrl}/eras/the-future/</link>
      <description>AI + crypto agent economies, post-quantum cryptography, nation-state reserves, and prediction framework.</description>
      <pubDate>Wed, 01 Jan 2025 00:00:00 GMT</pubDate>
      <guid>${siteUrl}/eras/the-future/</guid>
    </item>
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}

