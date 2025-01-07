// pages/api/sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export default async function handler(req, res) {
  // Define your base URL
  const baseUrl = 'https://www.ndrico2010.com'; // Replace with your actual domain

  // Define the static paths you want in your sitemap
  const staticPaths = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/contact', changefreq: 'daily', priority: 0.7 },
    { url: '/products', changefreq: 'daily', priority: 0.7 },
    { url: '/products/prekia', changefreq: 'daily', priority: 0.7 },
    { url: '/products/petres_kamares', changefreq: 'daily', priority: 0.7 },
    { url: '/products/petres_ependysh', changefreq: 'daily', priority: 0.7 },
    { url: '/products/petres_xtisimatos', changefreq: 'daily', priority: 0.7 },
    { url: '/products/diafora', changefreq: 'daily', priority: 0.7 },
    { url: '/products/skalopatia', changefreq: 'daily', priority: 0.7 },
    { url: '/products/agkwnaria', changefreq: 'daily', priority: 0.7 },
    { url: '/products/kubolithoi', changefreq: 'daily', priority: 0.7 },
    { url: '/products/petres_dapedou', changefreq: 'daily', priority: 0.7 },
  ];

  // Define supported locales
  const locales = ['sq', 'el'];
  const defaultLocale = 'sq';

  // Prepare an array for the links
  const links = [];

  // Create links for each path in each locale
  staticPaths.forEach((path) => {
    locales.forEach((locale) => {
      const isDefaultLocale = locale === defaultLocale;
      const localizedPath = isDefaultLocale ? path.url : `/${locale}${path.url}`;
      links.push({
        url: localizedPath,
        changefreq: path.changefreq,
        priority: path.priority,
      });
    });
  });

  // Generate the sitemap XML
  const stream = new SitemapStream({ hostname: baseUrl });

  try {
    // Create the sitemap and convert it to a string
    const xmlData = await streamToPromise(Readable.from(links).pipe(stream)).then((data) => data.toString());
    
    // Set the response headers for XML
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).end(xmlData);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).end('Error generating sitemap');
  }
}
