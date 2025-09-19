import type { PersonalInfo, Certification } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Venkata Gupta Penugonda',
  title: 'Data Engineer',
  email: 'venkataguptapenugonda@gmail.com',
  location: 'Bellevue, WA',
  yearsOfExperience: 5,
  summary: 'Experienced Data Engineer with over 5 years of expertise in designing and implementing scalable data solutions across Azure, AWS, and GCP cloud platforms. Proven track record of developing robust ETL/ELT pipelines, real-time streaming architectures, and cloud-native data lakehouses for clients in finance, insurance, healthcare, and pharmaceutical domains. Skilled in tools such as Azure Data Factory, AWS Glue, Apache Airflow, Databricks, Spark, and BigQuery. Strong knowledge of data governance, quality frameworks, and compliance with HIPAA and SOX standards.',
  profileImage: '/images/profile_image.png',
  resumeUrl: '/resume/Venkata_Data_Engineer.pdf',
  socialLinks: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/venkata-gupta-penugonda-b374b2237/',
      icon: 'SiLinkedin'
    }
  ]
};

export const certifications: Certification[] = [
  {
    id: 'azure-data-engineer',
    name: 'Microsoft Certified: Azure Data Engineer Associate',
    issuer: 'Microsoft',
    date: '2023-08',
    credentialId: 'AZURE-DE-12345',
    credentialUrl: 'https://learn.microsoft.com/en-us/certifications/azure-data-engineer',
    logo: '/images/certifications/azure-data-engineer.png'
  },
  {
    id: 'aws-data-analytics',
    name: 'AWS Certified Data Analytics - Specialty',
    issuer: 'Amazon Web Services',
    date: '2023-05',
    credentialId: 'AWS-DAS-67890',
    credentialUrl: 'https://aws.amazon.com/certification/certified-data-analytics-specialty/',
    logo: '/images/certifications/aws-data-analytics.png'
  },
  {
    id: 'gcp-data-engineer',
    name: 'Google Cloud Professional Data Engineer',
    issuer: 'Google Cloud',
    date: '2022-11',
    credentialId: 'GCP-PDE-54321',
    credentialUrl: 'https://cloud.google.com/certification/data-engineer',
    logo: '/images/certifications/gcp-data-engineer.png'
  },
  {
    id: 'databricks-associate',
    name: 'Databricks Certified Data Engineer Associate',
    issuer: 'Databricks',
    date: '2023-02',
    credentialId: 'DB-DE-11111',
    credentialUrl: 'https://www.databricks.com/learn/certification/data-engineer-associate',
    logo: '/images/certifications/databricks-associate.png'
  },
  {
    id: 'apache-airflow',
    name: 'Apache Airflow Fundamentals',
    issuer: 'Astronomer',
    date: '2022-09',
    credentialId: 'ASTRO-AF-98765',
    credentialUrl: 'https://www.astronomer.io/certification/',
    logo: '/images/certifications/apache-airflow.png'
  }
];