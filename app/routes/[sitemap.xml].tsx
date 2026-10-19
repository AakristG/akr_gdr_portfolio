// app/routes/sitemap.xml.tsx

import { FC } from 'react';

const Sitemap: FC = () => {
  const content = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://akr-gdr-portfolio.vercel.app/sitemap.xml/</loc>
        <lastmod>2023-03-31T19:31:58+01:00</lastmod>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://akr-gdr-portfolio.vercel.app/</loc>
        <lastmod>2023-03-31T19:31:58+01:00</lastmod>
        <priority>1.0</priority>
      </url>
    </urlset>
  `;

  return ( 
    <div>
      <pre>{content}</pre>
    </div>
  );
};

export const meta = {
  title: 'Sitemap',
  description: 'Sitemap for search engines',
};

export default Sitemap;
