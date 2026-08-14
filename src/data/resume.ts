export const resumeData = {
  name: 'Ben Laufer',
  contact: [
    { label: 'linkedin.com/in/benlaufer1', href: 'https://linkedin.com/in/benlaufer1' },
    { label: 'github.com/bennlaufer', href: 'https://github.com/bennlaufer' },
    { label: 'bennlaufer@gmail.com', href: 'mailto:bennlaufer@gmail.com' },
    { label: 'Los Angeles, CA' },
  ],
  experience: [
    {
      company: 'Claritas',
      role: 'AI Engineer',
      dates: 'February 2025 - Present',
      bullets: [
        'Architected backend integrations across Microsoft 365 (Outlook, Teams, Calendar) and enterprise platforms to operationalize AI-driven productivity workflows, enabling scalable, real-world collaboration use cases',
        'Built an AI coaching agent that translated multi-source workplace data (email, calendar, project systems) into structured daily and weekly productivity insights, demonstrating practical and responsible AI adoption in business contexts',
        'Developed governed data pipelines ingesting Salesforce, Databricks, ZoomInfo, and PR intelligence to standardize insight delivery and support high-value, decision-enabling use cases across teams',
        'Delivered end-to-end machine learning solutions (collaborative, content-based, hybrid) with validation frameworks, leveraging usage data to refine recommendations and drive measurable workflow improvements',
      ],
    },
    {
      company: 'F5',
      role: 'Data Scientist Project Intern',
      dates: 'December 2024 - March 2025',
      bullets: [
        'Performed feature engineering from millions of behavioral events to detect high-risk churn segments',
        'Designed churn risk index from engineered behavioral features and time series forecasts to improve targeting by 35%',
      ],
    },
    {
      company: 'Postal.io',
      role: 'Data Scientist Intern',
      dates: 'December 2023 - July 2024',
      bullets: [
        'Presented predictive LTV findings to stakeholders, driving strategy changes that boosted ROI by 22%',
        'Utilized Scikit-learn clustering on millions of engagement records to uncover high-retention customer segments',
        'Built data pipeline with Pandas and custom scripts to automate collection and reduce manual errors by 27%',
      ],
    },
    {
      company: 'California Polytechnic State University',
      role: 'Research Analyst',
      dates: 'November 2023 - June 2024',
      bullets: [
        'Co-developed R-based interactive textbook with automated feedback, increasing engagement 30% across classes',
        'Modeled 1,000+ student surveys with mixed-effects regression to uncover engagement trends across class sections',
        'Presented at eCOTS, helping 100+ educators apply insights to improve teaching strategies',
      ],
    },
  ],
  projects: [
    {
      title: 'MCP Manager for Claude Code',
      linkLabel: 'View Github Repository',
      href: 'https://github.com/bennlaufer/claude-mcp-extension',
      description: 'Created a VSCode/Cursor extension that allows you to manage, toggle, and health-check all your MCP servers',
    },
    {
      title: 'SARS-CoV-2 Seroprevalence Analysis',
      linkLabel: 'View Paper',
      description: 'Collaborated with Westat to analyze SARS-CoV-2 detection patterns in U.S. blood donors using logistic regression',
    },
    {
      title: 'R Package Developer - Sentiment Analysis Tool',
      linkLabel: 'View Github Repository',
      href: 'https://github.com/bennlaufer/Sentiment-Algorithm',
      description: 'Developed R package for real-time sentiment analysis using AFINN scoring and integrated spell-correction',
    },
    {
      title: 'Body Composition and Anthropometric Analysis',
      linkLabel: 'View Paper',
      description: 'Built PCA-based model on anthropometric data across 3 schools to quantify body composition differences',
    },
  ],
  education: [
    {
      school: 'California Polytechnic State University',
      degree: 'Master of Science, Business Analytics',
      dates: 'Aug 2024 - June 2025',
    },
    {
      school: 'California Polytechnic State University',
      degree: 'Bachelor of Science, Statistics',
      dates: 'Sept 2020 - June 2024',
    },
  ],
  skills: [
    { label: 'Languages', value: 'Python, R, SQL, SAS, HTML,' },
    { label: 'Libraries', value: 'Scikit-learn, PyTorch, TensorFlow, Strands, Langchain, FastAPI, Apache Spark, Streamlit' },
    { label: 'Tools', value: 'AWS, n8n, lovable, Claude Code, Databricks, Git, Tableau, Excel, MongoDB' },
    { label: 'Techniques', value: 'Machine Learning, AI Evaluation, AI Agent Building, Prompt Engineering, API integration' },
  ],
} as const;
