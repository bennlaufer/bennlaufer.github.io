export const resumeData = {
  name: 'Ben Laufer',
  contactRows: [
    [
      { label: 'Los Angeles, CA' },
      { label: '(818) 515-0784', href: 'tel:+18185150784' },
      { label: 'bennlaufer@gmail.com', href: 'mailto:bennlaufer@gmail.com' },
    ],
    [
      { label: 'linkedin.com/in/benlaufer1', href: 'https://www.linkedin.com/in/benlaufer1/' },
      { label: 'github.com/bennlaufer', href: 'https://github.com/bennlaufer' },
    ],
  ],
  experience: [
    {
      company: 'Claritas',
      role: 'AI Data Scientist',
      location: 'Los Angeles, CA',
      dates: 'Mar 2025 - Present',
      bullets: [
        'Built a similarity-search workflow over precomputed household embeddings that eliminated roughly one week of per-audience data science work while matching existing XGBoost models across ROC AUC and lift',
        'Engineered Databricks pipelines that transformed 3T+ web events into website-category labels and user-intent features using LLM-based classification; adding these features to existing audience models improved ROC AUC by approximately 8%',
        'Trained a variational autoencoder on 500+ behavioral features from 114M U.S. households, producing fixed 64-dimensional embeddings for scalable audience matching',
        'Built the LLM service for an enterprise product that helps marketing teams draft OKRs and plan sprints, used by 300+ monthly active users and saving an estimated five hours per user per quarter; owned the retrieval system, data pipelines, and LLM evaluation framework',
      ],
    },
    {
      company: 'F5',
      role: 'Graduate Data Science Consultant',
      location: 'San Luis Obispo, CA',
      dates: 'Dec 2024 - Mar 2025',
      bullets: [
        'Led a four-person team analyzing multi-million-row customer histories with survival analysis, identifying customer segments with up to 65% higher churn risk than baseline groups',
        'Built a KNN churn model using tenure and engagement time-series data to estimate months until churn and assign Low/Moderate/High risk tiers; presented findings and retention recommendations to F5 stakeholders',
      ],
    },
    {
      company: 'Postal.io (Acquired by Sendoso)',
      role: 'Data Science Intern',
      location: 'San Luis Obispo, CA',
      dates: 'Dec 2023 - Jul 2024',
      bullets: [
        'Web-scraped firmographic data for 365+ customers and combined it with millions of Amplitude and NetSuite records; modeled MRR and rolling-12-month GMV with linear regression to identify high-value segments',
        'Developed a Red/Yellow/Green lead-scoring framework using industry, financing round, and acquisition count to prioritize prospects; presented the resulting ideal customer profile to executive leadership',
      ],
    },
    {
      company: 'Westat',
      role: 'Statistical Consultant',
      location: 'San Luis Obispo, CA',
      dates: 'Apr 2024 - Jun 2024',
      bullets: [
        'Collaborated with Westat to analyze self-reported COVID-19 testing among 33K+ U.S. blood donors using logistic regression; identified significant differences across demographic, regional, and vaccination groups',
        'Presented model findings and recommendations to research stakeholders, translating technical results into clear insights for the study team',
      ],
    },
    {
      company: 'California Polytechnic State University',
      role: 'Research Lead',
      location: 'San Luis Obispo, CA',
      dates: 'Nov 2023 - Jun 2024',
      bullets: [
        'Co-developed an online coursebook for introductory statistics with R widgets and automated feedback',
        'Analyzed engagement across 150+ surveys using mixed-effects models; presented findings at eCOTS 2024',
      ],
    },
  ],
  education: [
    {
      school: 'California Polytechnic State University, San Luis Obispo',
      degrees: [
        { degree: 'M.S. Business Analytics, GPA: 4.0/4.0', dates: 'Aug 2024 - Jun 2025' },
        { degree: 'B.S. Statistics', dates: 'Sep 2020 - Jun 2024' },
      ],
    },
  ],
  skills: [
    { label: 'Core', value: 'Python (Scikit-learn, Pandas, NumPy, PySpark, Streamlit, Dash), R, SQL, SAS' },
    { label: 'Tools', value: 'AWS (S3, Glue, Athena, SageMaker), Databricks, Tableau, MongoDB' },
    { label: 'Machine Learning', value: 'Feature Engineering, Model Evaluation (Precision, Recall, AUC-ROC), Supervised Learning (logistic regression, XGBoost, DNN), Unsupervised Learning (K-Means)' },
  ],
} as const;
