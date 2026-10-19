export interface ExperienceItem {
  title: string;
  org: string;
  location: string;
  period: string;
  bullets: Array<string>;
}

export const experienceList: Array<ExperienceItem> = [
  {
    title: "Data Analyst & Database Administrator Intern",
    org: "UT Dallas Office of Information Technology",
    location: "Richardson, TX",
    period: "Dec 2025 – Present",
    bullets: [
        "Engineered database monitoring and administration workflows across PostgreSQL, SQL Server, MySQL, Oracle, AWS, and Azure.",
        "Automated Bash scripts and automated Linux-based monitoring, log analysis, and backup processes using Ansible, RMAN, and mysqldump.",
        "Developed Power BI dashboards and Power Automate workflows to improve database observability, streamline reporting, and optimize operational efficiency."
    ],
  },
  {
    title: "Software Engineering Intern: Security & Identity",
    org: "UT Dallas Office of Information Technology",
    location: "Richardson, TX",
    period: "Jun 2026 – Aug 2026",
    bullets: [
      "Implemented enterprise identity and access management controls using SailPoint IdentityIQ, Active Directory, and Duo to enforce SSO and role-based access control (RBAC).",
      "Administered PeopleSoft security roles and access provisioning workflows through ServiceNow to support enterprise authorization and compliance.",
      "Audited user access permissions and validated security requirements through automated testing across workflows and the software development lifecycle (SDLC)."
    ],
  },
];
