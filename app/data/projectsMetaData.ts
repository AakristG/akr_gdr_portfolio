export interface Project {
  title: string;
  tech: string;
  summary: string;
  link: string;
  inProgress?: boolean;
}

export const oitTools: Array<string> = [
  "MySQL",
  "PostgreSQL",
  "SQL Server",
  "Oracle",
  "AWS",
  "Azure",
  "Zabbix",
  "Splunk",
  "Rubrik",
  "RMAN",
  "Power BI",
  "Power Automate",
  "Jira",
  "Confluence",
];

export const projectList: Array<Project> = [
   {
    title: "My Portfolio",
    tech: "Remix, React, TypeScript, Tailwind CSS",
    link: "https://github.com/AakristG/akr_gdr_portfolio",
    inProgress: true,
    summary:
      "This website. A one-page portfolio for all of my projects, experience, and contact. The layout, content, and motion are still being updated.",
  },
  {
    title: "Synapse: AI Clinic Documentation Assistant",
    tech: "Django, React, TypeScript, Gemini API",
    link: "https://github.com/AakristG/Synapse",
    summary:
      "Clinic assistant that turns patient conversations into EMR notes, diagnoses, and recovery plans with Gemini API.",
  },
  {
    title: "Pulse: AI Customer Insights Dashboard",
    tech: "React, Node.js, SQLite, Firebase, Gemini API",
    link: "https://github.com/AakristG/Pulse",
    summary:
      "Dashboard portal that classifies 20,000+ customer comments with Gemini API and surfaces recurring issues.",
  },
  {
    title: "AdFusion: AI Diffusion Model",
    tech: "Python, PyTorch, NumPy, Pandas, Selenium",
    link: "https://github.com/AakristG/AdFusion",
    summary:
      "LoRA-tuned diffusion model that generated 5,000+ ad images from 10,000+ scraped Google Ads, lifting CLIP scores by 6.4%.",
  },
  {
    title: "PoliAware: Political Awareness Website",
    tech: "Flask, Google Gemini, GeoLookup, Google Civic Information API, HTML/CSS, Bing Image Search API",
    link: "https://github.com/NextGenPolicTech/PoliAware",
    summary:
      "An interactive website that helps users find senators, governors, and other officials by location or state, with live details from Gemini and civic APIs plus political news.",
  },
];
