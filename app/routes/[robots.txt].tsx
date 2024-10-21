// app/routes/robots.txt.tsx

const RobotsTxt = () => {
    const sitemap = "https://akr-gdr-portfolio.vercel.app/sitemap.xml"; // Update the sitemap URL if necessary
    const content = `
  User-agent: Googlebot
  Disallow: /nogooglebot/
  
  User-agent: *
  Allow: /
  
  Sitemap: ${sitemap}
    `.trim(); // Trim the content to remove extra whitespace
  
    // Return the content directly
    return (
      <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{content}</pre>
    );
  };
  
  export const meta = {
    title: 'Robots.txt',
    description: 'Robots.txt for web crawlers',
  };
  
  export default RobotsTxt;
  