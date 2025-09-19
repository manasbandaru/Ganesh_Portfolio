import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'real-time-analytics-pipeline',
    title: 'Real-Time Analytics Pipeline',
    description: 'Scalable data pipeline processing 10M+ events daily with sub-second latency',
    longDescription: 'Built a comprehensive real-time analytics pipeline using Apache Kafka, Apache Spark, and AWS services to process over 10 million events daily. The system provides real-time insights for business intelligence dashboards and automated alerting systems.',
    technologies: ['Apache Kafka', 'Apache Spark', 'AWS Kinesis', 'Python', 'Scala', 'Redis', 'PostgreSQL', 'Docker'],
    category: 'data-pipeline',
    image: '/images/projects/real_time_analytics.png',
    githubUrl: 'https://github.com/username/analytics-pipeline',
    achievements: [
      'Reduced data processing latency from 5 minutes to under 30 seconds',
      'Increased system throughput by 300% through optimized partitioning',
      'Implemented automated scaling reducing infrastructure costs by 40%',
      'Built comprehensive monitoring and alerting system'
    ],
    timeline: '6 months',
    featured: true,
    status: 'completed',
    metrics: [
      { label: 'Events/Day', value: '10M+' },
      { label: 'Latency', value: '<30s' },
      { label: 'Cost Reduction', value: '40%' }
    ]
  },
  {
    id: 'ml-recommendation-engine',
    title: 'ML-Powered Recommendation Engine',
    description: 'Machine learning system delivering personalized recommendations with 85% accuracy',
    longDescription: 'Developed and deployed a machine learning recommendation engine using collaborative filtering and deep learning techniques. The system processes user behavior data to generate personalized recommendations, resulting in significant improvements in user engagement and conversion rates.',
    technologies: ['Python', 'TensorFlow', 'Apache Airflow', 'MLflow', 'Kubernetes', 'PostgreSQL', 'Redis', 'FastAPI'],
    category: 'ml-ops',
    image: '/images/projects/ML_powered.png',
    liveUrl: 'https://demo-recommendations.example.com',
    githubUrl: 'https://github.com/username/ml-recommendations',
    achievements: [
      'Achieved 85% recommendation accuracy using hybrid filtering approach',
      'Increased user engagement by 45% and conversion rates by 28%',
      'Implemented A/B testing framework for continuous model improvement',
      'Built automated model retraining pipeline with MLOps best practices'
    ],
    timeline: '8 months',
    featured: true,
    status: 'completed',
    metrics: [
      { label: 'Accuracy', value: '85%' },
      { label: 'Engagement Lift', value: '45%' },
      { label: 'Conversion Lift', value: '28%' }
    ]
  },
  {
    id: 'cloud-data-warehouse',
    title: 'Cloud Data Warehouse Migration',
    description: 'Migrated legacy on-premise data warehouse to modern cloud architecture',
    longDescription: 'Led the migration of a legacy on-premise data warehouse to a modern cloud-native architecture using Snowflake and AWS. The project involved data modeling, ETL pipeline redesign, and performance optimization resulting in significant cost savings and improved query performance.',
    technologies: ['Snowflake', 'AWS S3', 'AWS Glue', 'dbt', 'Python', 'SQL', 'Terraform', 'Apache Airflow'],
    category: 'infrastructure',
    image: '/images/projects/cloud_data_warehouse.png',
    achievements: [
      'Migrated 500TB+ of historical data with zero downtime',
      'Improved query performance by 10x through optimized data modeling',
      'Reduced infrastructure costs by 60% with cloud-native architecture',
      'Implemented automated data quality monitoring and validation'
    ],
    timeline: '12 months',
    featured: false,
    status: 'completed',
    metrics: [
      { label: 'Data Migrated', value: '500TB+' },
      { label: 'Performance Gain', value: '10x' },
      { label: 'Cost Reduction', value: '60%' }
    ]
  },
  {
    id: 'customer-analytics-dashboard',
    title: 'Customer Analytics Dashboard',
    description: 'Interactive dashboard providing 360-degree customer insights for business teams',
    longDescription: 'Created a comprehensive customer analytics dashboard using modern BI tools and data visualization techniques. The dashboard provides real-time insights into customer behavior, segmentation, and lifetime value, enabling data-driven decision making across the organization.',
    technologies: ['Tableau', 'Python', 'PostgreSQL', 'Apache Spark', 'AWS Redshift', 'REST APIs', 'Docker'],
    category: 'analytics',
    image: '/images/projects/customer_analytics_dashboard.png',
    liveUrl: 'https://analytics-demo.example.com',
    achievements: [
      'Built 15+ interactive dashboards serving 200+ business users',
      'Reduced report generation time from hours to minutes',
      'Enabled self-service analytics reducing analyst workload by 50%',
      'Implemented automated data refresh and alert systems'
    ],
    timeline: '4 months',
    featured: false,
    status: 'completed',
    metrics: [
      { label: 'Active Users', value: '200+' },
      { label: 'Dashboards', value: '15+' },
      { label: 'Time Savings', value: '50%' }
    ]
  },
  {
    id: 'fraud-detection-system',
    title: 'Real-Time Fraud Detection',
    description: 'ML-based fraud detection system processing transactions in real-time',
    longDescription: 'Developed a sophisticated fraud detection system using machine learning algorithms and real-time stream processing. The system analyzes transaction patterns and user behavior to identify potentially fraudulent activities with high accuracy and low false positive rates.',
    technologies: ['Python', 'Apache Kafka', 'Apache Flink', 'scikit-learn', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    category: 'ml-ops',
    image: '/images/projects/real_time_fraud.png',
    achievements: [
      'Achieved 99.2% accuracy with 0.1% false positive rate',
      'Processes 50,000+ transactions per second in real-time',
      'Prevented $2M+ in fraudulent transactions in first year',
      'Implemented explainable AI for regulatory compliance'
    ],
    timeline: '10 months',
    featured: true,
    status: 'completed',
    metrics: [
      { label: 'Accuracy', value: '99.2%' },
      { label: 'TPS', value: '50K+' },
      { label: 'Fraud Prevented', value: '$2M+' }
    ]
  },
  {
    id: 'data-lake-modernization',
    title: 'Data Lake Modernization',
    description: 'Modern data lake architecture with automated governance and cataloging',
    longDescription: 'Designed and implemented a modern data lake architecture on AWS with automated data governance, cataloging, and lineage tracking. The solution provides a scalable foundation for analytics and machine learning workloads while ensuring data quality and compliance.',
    technologies: ['AWS S3', 'AWS Glue', 'Apache Iceberg', 'Apache Spark', 'Python', 'Terraform', 'Apache Atlas', 'dbt'],
    category: 'infrastructure',
    image: '/images/projects/data_lake.png',
    githubUrl: 'https://github.com/username/data-lake-modernization',
    achievements: [
      'Designed scalable architecture supporting petabyte-scale data',
      'Implemented automated data cataloging and lineage tracking',
      'Reduced data discovery time from weeks to hours',
      'Built comprehensive data governance framework'
    ],
    timeline: '6 months',
    featured: false,
    status: 'in-progress',
    metrics: [
      { label: 'Data Scale', value: 'Petabyte+' },
      { label: 'Discovery Time', value: 'Hours' },
      { label: 'Governance Score', value: '95%' }
    ]
  }
];
