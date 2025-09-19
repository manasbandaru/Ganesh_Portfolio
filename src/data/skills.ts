import type { Skill } from '../types';

export const skills: Skill[] = [
  // Programming Languages
  {
    name: 'Python',
    category: 'programming',
    proficiency: 5,
    icon: 'SiPython',
    description: 'Expert in Python for data engineering, ETL pipelines, and automation',
    yearsOfExperience: 4
  },
  {
    name: 'SQL',
    category: 'programming',
    proficiency: 5,
    icon: 'SiPostgresql',
    description: 'Advanced SQL for complex queries, T-SQL, Spark SQL, and database optimization',
    yearsOfExperience: 4
  },
  {
    name: 'Java',
    category: 'programming',
    proficiency: 3,
    icon: 'SiOpenjdk',
    description: 'Solid understanding of Java for enterprise applications and big data tools',
    yearsOfExperience: 2
  },
  {
    name: 'Shell Scripting',
    category: 'programming',
    proficiency: 4,
    icon: 'SiGnubash',
    description: 'Bash scripting for automation and system administration',
    yearsOfExperience: 3
  },
  {
    name: 'HTML/CSS',
    category: 'programming',
    proficiency: 3,
    icon: 'SiHtml5',
    description: 'Web development fundamentals for dashboards and reporting interfaces',
    yearsOfExperience: 2
  },
  {
    name: 'JavaScript',
    category: 'programming',
    proficiency: 3,
    icon: 'SiJavascript',
    description: 'Frontend development and API integrations',
    yearsOfExperience: 2
  },

  // Cloud Platforms
  {
    name: 'Microsoft Azure',
    category: 'cloud',
    proficiency: 5,
    icon: 'SiMicrosoftazure',
    description: 'Azure Data Factory, ADLS, Synapse, Databricks, Event Hubs, Purview',
    yearsOfExperience: 2
  },
  {
    name: 'Amazon Web Services',
    category: 'cloud',
    proficiency: 5,
    icon: 'SiAmazonaws',
    description: 'AWS Glue, Redshift, Lambda, Kinesis, S3, CloudWatch, IAM',
    yearsOfExperience: 2
  },
  {
    name: 'Google Cloud Platform',
    category: 'cloud',
    proficiency: 5,
    icon: 'SiGooglecloud',
    description: 'BigQuery, GCS, Cloud Composer, BigQuery ML',
    yearsOfExperience: 1
  },

  // ETL/Orchestration Tools
  {
    name: 'Azure Data Factory',
    category: 'frameworks',
    proficiency: 5,
    icon: 'SiMicrosoftazure',
    description: 'Enterprise ETL pipelines and data orchestration on Azure',
    yearsOfExperience: 1
  },
  {
    name: 'AWS Glue',
    category: 'frameworks',
    proficiency: 4,
    icon: 'SiAmazonaws',
    description: 'Serverless ETL service for data transformation and cataloging',
    yearsOfExperience: 1
  },
  {
    name: 'Apache Airflow',
    category: 'frameworks',
    proficiency: 4,
    icon: 'SiApacheairflow',
    description: 'Workflow orchestration and data pipeline management',
    yearsOfExperience: 2
  },
  {
    name: 'Talend',
    category: 'frameworks',
    proficiency: 3,
    icon: 'SiTalend',
    description: 'Data integration and ETL development platform',
    yearsOfExperience: 1
  },
  {
    name: 'Informatica',
    category: 'frameworks',
    proficiency: 3,
    icon: 'SiInformatica',
    description: 'Enterprise data integration and ETL solutions',
    yearsOfExperience: 1
  },
  {
    name: 'Apache NiFi',
    category: 'frameworks',
    proficiency: 3,
    icon: 'SiApache',
    description: 'Data flow automation and real-time data ingestion',
    yearsOfExperience: 1
  },

  // Big Data & Processing
  {
    name: 'Apache Spark',
    category: 'frameworks',
    proficiency: 4,
    icon: 'SiApachespark',
    description: 'Large-scale data processing with PySpark and Spark SQL',
    yearsOfExperience: 2
  },
  {
    name: 'PySpark',
    category: 'frameworks',
    proficiency: 4,
    icon: 'SiApachespark',
    description: 'Python API for Apache Spark data processing',
    yearsOfExperience: 2
  },
  {
    name: 'Databricks',
    category: 'frameworks',
    proficiency: 4,
    icon: 'SiDatabricks',
    description: 'Unified analytics platform for big data and machine learning',
    yearsOfExperience: 1
  },
  {
    name: 'Delta Lake',
    category: 'frameworks',
    proficiency: 4,
    icon: 'SiDelta',
    description: 'Open-source storage layer for data lakes with ACID transactions',
    yearsOfExperience: 1
  },
  {
    name: 'Hadoop',
    category: 'frameworks',
    proficiency: 3,
    icon: 'SiApachehadoop',
    description: 'Distributed storage and processing of large datasets',
    yearsOfExperience: 2
  },

  // DevOps & CI/CD
  {
    name: 'Azure DevOps',
    category: 'tools',
    proficiency: 4,
    icon: 'SiAzuredevops',
    description: 'CI/CD pipelines and project management for Azure environments',
    yearsOfExperience: 1
  },
  {
    name: 'GitHub',
    category: 'tools',
    proficiency: 4,
    icon: 'SiGithub',
    description: 'Version control and collaborative development workflows',
    yearsOfExperience: 3
  },
  {
    name: 'Jenkins',
    category: 'tools',
    proficiency: 3,
    icon: 'SiJenkins',
    description: 'CI/CD automation and build pipelines',
    yearsOfExperience: 1
  },
  {
    name: 'Terraform',
    category: 'tools',
    proficiency: 4,
    icon: 'SiTerraform',
    description: 'Infrastructure as Code for cloud resource management',
    yearsOfExperience: 1
  },
  {
    name: 'CloudFormation',
    category: 'tools',
    proficiency: 3,
    icon: 'SiAmazonaws',
    description: 'AWS infrastructure provisioning and management',
    yearsOfExperience: 1
  },
  {
    name: 'Docker',
    category: 'tools',
    proficiency: 3,
    icon: 'SiDocker',
    description: 'Containerization for data applications and microservices',
    yearsOfExperience: 2
  },

  // Data Warehousing
  {
    name: 'Azure Synapse Analytics',
    category: 'databases',
    proficiency: 4,
    icon: 'SiMicrosoftazure',
    description: 'Enterprise data warehouse and analytics service',
    yearsOfExperience: 1
  },
  {
    name: 'Amazon Redshift',
    category: 'databases',
    proficiency: 4,
    icon: 'SiAmazonaws',
    description: 'Cloud data warehouse for analytics and reporting',
    yearsOfExperience: 1
  },
  {
    name: 'Google BigQuery',
    category: 'databases',
    proficiency: 4,
    icon: 'SiGooglecloud',
    description: 'Serverless data warehouse for analytics and machine learning',
    yearsOfExperience: 1
  },
  {
    name: 'SQL Server',
    category: 'databases',
    proficiency: 4,
    icon: 'SiMicrosoftsqlserver',
    description: 'Relational database management and T-SQL development',
    yearsOfExperience: 2
  },
  {
    name: 'PostgreSQL',
    category: 'databases',
    proficiency: 4,
    icon: 'SiPostgresql',
    description: 'Advanced relational database features and optimization',
    yearsOfExperience: 2
  },

  // Data Visualization
  {
    name: 'Power BI',
    category: 'tools',
    proficiency: 4,
    icon: 'SiPowerbi',
    description: 'Business intelligence and interactive data visualization',
    yearsOfExperience: 3
  },
  {
    name: 'Looker',
    category: 'tools',
    proficiency: 3,
    icon: 'SiLooker',
    description: 'Modern BI platform and self-service analytics',
    yearsOfExperience: 1
  },
  {
    name: 'Tableau',
    category: 'tools',
    proficiency: 3,
    icon: 'SiTableau',
    description: 'Advanced data visualization and dashboard development',
    yearsOfExperience: 1
  },

  // Data Governance
  {
    name: 'Microsoft Purview',
    category: 'tools',
    proficiency: 3,
    icon: 'SiMicrosoft',
    description: 'Data governance, lineage, and cataloging platform',
    yearsOfExperience: 1
  },
  {
    name: 'AWS Lake Formation',
    category: 'tools',
    proficiency: 3,
    icon: 'SiAmazonaws',
    description: 'Data lake governance and access control',
    yearsOfExperience: 1
  },
  {
    name: 'Glue Catalog',
    category: 'tools',
    proficiency: 3,
    icon: 'SiAmazonaws',
    description: 'Metadata repository and data discovery service',
    yearsOfExperience: 1
  },

  // Developer Tools
  {
    name: 'Visual Studio Code',
    category: 'tools',
    proficiency: 5,
    icon: 'SiVisualstudiocode',
    description: 'Primary IDE for development and debugging',
    yearsOfExperience: 4
  },
  {
    name: 'Eclipse',
    category: 'tools',
    proficiency: 3,
    icon: 'SiEclipseide',
    description: 'Java development environment',
    yearsOfExperience: 1
  },
  {
    name: 'Jupyter Notebook',
    category: 'tools',
    proficiency: 4,
    icon: 'SiJupyter',
    description: 'Interactive development for data analysis and prototyping',
    yearsOfExperience: 3
  },
  {
    name: 'Postman',
    category: 'tools',
    proficiency: 3,
    icon: 'SiPostman',
    description: 'API testing and development',
    yearsOfExperience: 2
  },
  {
    name: 'Confluence',
    category: 'tools',
    proficiency: 3,
    icon: 'SiConfluence',
    description: 'Documentation and knowledge management',
    yearsOfExperience: 2
  }
];

// Helper functions for working with skills data
export const getSkillsByCategory = (category: string) => {
  return skills.filter(skill => skill.category === category);
};

export const getFeaturedSkills = () => {
  return skills.filter(skill => skill.proficiency >= 4);
};

export const getSkillsWithCertifications = () => {
  return skills.filter(skill => skill.certifications && skill.certifications.length > 0);
};