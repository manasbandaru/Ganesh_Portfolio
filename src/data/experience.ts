import type { Experience } from '../types';

export const experience: Experience[] = [
  {
    id: 'senior-data-engineer-boa',
    company: 'Bank of America',
    role: 'Senior Data Engineer',
    duration: 'Oct 2023 - Present',
    startDate: '2023-10',
    location: 'Cleveland, Ohio',
    description: 'Enterprise Cloud Modernization for Banking Data Lake – Migrated legacy batch workflows to a cloud-native data lakehouse architecture on Azure, centralizing enterprise financial and transactional data.',
    achievements: [
      'Led the end-to-end development of scalable Azure Data Factory (ADF) pipelines, orchestrating ingestion of structured and semi-structured data from over 15 banking systems into Azure Data Lake Storage (ADLS) and Azure SQL Database',
      'Designed and implemented a modular Delta Lake architecture using Azure Databricks, enabling ACID transactions, schema enforcement, and optimized time-travel query support for historical financial data',
      'Improved batch ETL performance by 45% by refactoring legacy SSIS packages into ADF pipelines with dynamic parameterization and integration with Azure Key Vault',
      'Enabled near real-time processing of streaming data using Azure Event Hubs, Azure Stream Analytics, and Synapse Analytics, reducing fraud detection latency from hours to under 5 minutes',
      'Built robust CI/CD pipelines for data workflows using Azure DevOps, automating deployments across dev, UAT, and prod environments with environment-specific ARM templates',
      'Collaborated with data governance teams to implement data lineage, cataloging, and classification in Microsoft Purview, ensuring compliance with internal controls and SOX requirements',
      'Developed and optimized complex T-SQL and Spark SQL queries to support reporting and regulatory submissions, reducing overall execution time by 30%',
      'Actively participated in Agile sprints, working closely with cross-functional teams including compliance, cybersecurity, and data science to deliver resilient and scalable data products aligned with KeyBank\'s cloud modernization goals'
    ],
    technologies: ['Azure Data Factory', 'Azure Databricks', 'Delta Lake', 'PySpark', 'Azure Event Hubs', 'Azure Stream Analytics', 'Azure Synapse Analytics', 'Azure DevOps', 'Microsoft Purview', 'T-SQL', 'Spark SQL', 'Azure Key Vault'],
    logo: '/images/BOFA.jpeg',
    companyUrl: 'https://bankofamerica.com',
    current: true
  },
  {
    id: 'aws-data-engineer-root',
    company: 'Root Insurance',
    role: 'AWS Data Engineer',
    duration: 'Nov 2022 - Sep 2023',
    startDate: '2022-11',
    endDate: '2023-09',
    location: 'Tampa, Florida',
    description: 'Real-Time Telematics and Claims Data Platform – Engineered an end-to-end AWS-based solution to process vehicle telemetry and claims data for fraud detection, underwriting, and personalized policy pricing.',
    achievements: [
      'Designed and implemented scalable ETL pipelines using AWS Glue, ingesting and transforming JSON/CSV/parquet data from S3, API Gateway, and third-party telematics platforms',
      'Built near real-time ingestion and processing flows using Kinesis Data Streams, Lambda, and AWS Glue Streaming, reducing claim fraud detection latency from hours to under 10 minutes',
      'Optimized Athena and Redshift Spectrum queries for analytical workloads, improving performance by 35% for data scientists and actuaries consuming vehicle and behavioral risk models',
      'Implemented robust job orchestration using Apache Airflow on MWAA, managing over 80 DAGs across dev, QA, and prod environments for data quality, batch updates, and machine learning feature generation',
      'Built infrastructure-as-code using Terraform and CloudFormation, ensuring consistent provisioning of data pipelines, IAM roles, S3 buckets, and KMS-encrypted resources',
      'Established data governance and access control using Lake Formation, Glue Catalog, and tag-based policies to maintain HIPAA and PCI compliance',
      'Monitored and debugged real-time and batch pipelines using CloudWatch, X-Ray, and CloudTrail, reducing SLA breaches by 25% and improving observability',
      'Collaborated across data science, product, and actuarial teams to design high-availability architecture supporting ML-based risk scoring for 2M+ customers',
      'Worked in Agile sprints, contributed to sprint planning, retrospectives, and feature refinement for continuous integration and incremental delivery of data platform capabilities'
    ],
    technologies: ['AWS Glue', 'Kinesis Data Streams', 'AWS Lambda', 'Amazon Athena', 'Redshift Spectrum', 'Apache Airflow', 'MWAA', 'Terraform', 'CloudFormation', 'Lake Formation', 'CloudWatch', 'X-Ray', 'CloudTrail', 'S3', 'API Gateway'],
    logo: '/images/root.png',
    companyUrl: 'https://rootinsurance.com',
    current: false
  },
  {
    id: 'data-engineer-novo',
    company: 'Novo Nordisk',
    role: 'Data Engineer',
    duration: 'Jun 2021 - Jul 2022',
    startDate: '2021-06',
    endDate: '2022-07',
    location: 'Hyderabad, India',
    description: 'Clinical Trial Analytics and Pharma Data Integration – Developed a hybrid data engineering solution supporting global trial data processing, patient adherence tracking, and regulatory submissions.',
    achievements: [
      'Built automated batch pipelines using Apache Airflow and Python, integrating EHR and clinical trial data from flat files, APIs, and relational databases into a centralized data warehouse',
      'Leveraged Google Cloud Storage (GCS), Cloud Composer, and BigQuery for secure storage and querying of anonymized patient datasets to support pharmacovigilance analytics',
      'Developed ETL jobs using Informatica and custom PySpark scripts for transforming trial protocol, adverse event, and medication data into standardized formats (CDISC, SDTM)',
      'Enabled self-service reporting and dashboarding for clinical stakeholders by integrating curated datasets into Looker and Power BI, improving data accessibility and decision-making',
      'Worked closely with GCP security teams to enforce access policies using IAM roles, service accounts, and VPC-SC configurations for compliant healthcare data handling',
      'Deployed ML-ready datasets to BigQuery ML for running patient dropout prediction models in collaboration with the data science team',
      'Implemented Data Quality Frameworks for consistency checks across trial phases using dynamic rule engines and validation rules stored in metadata tables',
      'Conducted daily Agile ceremonies and worked alongside clinical data managers, statisticians, and GCP architects to ensure timely delivery of analytics-ready datasets'
    ],
    technologies: ['Apache Airflow', 'Python', 'Google Cloud Storage', 'Cloud Composer', 'BigQuery', 'Informatica', 'PySpark', 'Looker', 'Power BI', 'BigQuery ML', 'GCP IAM', 'VPC-SC'],
    logo: '/images/Novo.png',
    companyUrl: 'https://novonordisk.com',
    current: false
  },
  {
    id: 'junior-data-engineer-bayer',
    company: 'Bayer',
    role: 'Junior Data Engineer',
    duration: 'Mar 2020 - May 2021',
    startDate: '2020-03',
    endDate: '2021-05',
    location: 'Hyderabad, India',
    description: 'Crop Analytics & Pharmaceutical Supply Chain Data Platform – Supported the development and maintenance of batch ETL processes to unify data from research labs, field trials, and production systems.',
    achievements: [
      'Assisted in building ETL pipelines using Talend and Python, enabling the extraction and integration of crop genetics, chemical trial data, and logistics datasets from multiple silos into enterprise warehouses',
      'Supported ingestion of clinical product data from SAP and LIMS systems into SQL Server and PostgreSQL databases using data quality and mapping rules for consistency',
      'Developed and maintained scheduled jobs via Apache NiFi and Talend JobServer to automate file transfers and validation processes across research locations',
      'Created basic data validation scripts in Python to perform QA checks on raw datasets for trial duration, batch formulation, and shipment tracking data',
      'Worked closely with domain SMEs and senior engineers to support the migration of batch workflows into a centralized AWS S3-based archive for historical analysis',
      'Built internal dashboards using Power BI to provide visibility into trial completion timelines, active SKUs, and regional shipment volumes',
      'Documented pipeline logic, metadata flows, and SOPs in Confluence to support reproducibility and audit readiness for compliance purposes',
      'Participated in daily standups and weekly sprint reviews under the guidance of tech leads and product owners to deliver backlog items and enhancements'
    ],
    technologies: ['Talend', 'Python', 'Apache NiFi', 'SQL Server', 'PostgreSQL', 'AWS S3', 'Power BI', 'Confluence', 'SAP', 'LIMS'],
    logo: '/images/Bayer.png',
    companyUrl: 'https://bayer.com',
    current: false
  }
];