export const profile = {
  name: "Noman Ahmed",
  title: "Senior DevOps & Site Reliability Engineer",
  subtitles: ["Senior DevOps Engineer", "Site Reliability Engineer", "L3 Support Specialist"],
  location: "Dubai, UAE",
  email: "nomanbcs@gmail.com",
  phone: "+971-502071459",
  linkedin: "https://www.linkedin.com/in/nomanahmedit/",
  tagline:
    "12+ years building mission-critical infrastructure across on-premises, AWS, Alibaba Cloud and Hetzner — with 8+ years architecting cloud-native, containerized, fully automated platforms.",
  availability:
    "Open to full-time, hybrid, or remote roles worldwide. Willing to relocate anywhere within the UAE or internationally.",
  languages: "English (Fluent) · Urdu (Native)",
};

export const stats = [
  { value: "12+", label: "Years in infrastructure & operations" },
  { value: "8+", label: "Years cloud-native & containers" },
  { value: "40%", label: "MTTR reduction via observability" },
  { value: "65+", label: "VMs designed across K8s clusters" },
];

export const aboutParagraphs = [
  "I am a Senior DevOps & Site Reliability Engineer with over 12 years driving mission-critical infrastructure across on-premises, AWS, Alibaba Cloud and Hetzner environments, including 8+ years architecting cloud-native, containerized and automated platforms.",
  "My track record covers leading complex migrations, streamlining CI/CD pipelines and orchestrating containers with Terraform, Ansible, Kubernetes and Docker to cut downtime and accelerate delivery. I build full-stack observability with Prometheus, Grafana, OpenTelemetry and the ELK/LGTM stacks, driving measurable gains in compliance, performance and availability.",
  "I work as a decisive communicator across global, cross-functional teams — pairing hands-on engineering with Agile delivery, ITIL-aligned incident management and documentation that leadership can sign off on.",
];

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Cloud & Platform",
    items: ["AWS Cloud", "Alibaba Cloud", "Hetzner Cloud", "Kubernetes-based platforms"],
  },
  {
    title: "CI/CD & GitOps",
    items: [
      "Azure DevOps",
      "Jenkins",
      "AWS CodePipeline",
      "GoCD",
      "GitLab CI/CD",
      "SonarQube",
      "Cody",
    ],
  },
  {
    title: "Containers & Orchestration",
    items: [
      "Kubernetes (kubeadm)",
      "RKE2",
      "Helm charts",
      "Docker",
      "Docker Compose",
      "Container image management",
    ],
  },
  {
    title: "IaC & Automation",
    items: ["Terraform", "Ansible", "CloudFormation", "Rundeck"],
  },
  {
    title: "Monitoring & Observability",
    items: [
      "Prometheus",
      "Grafana",
      "Mimir / Loki / Tempo",
      "ELK stack",
      "OpenTelemetry",
      "Signoz",
      "Alertmanager",
      "New Relic",
      "DataDog",
      "PagerDuty",
      "Pingdom",
    ],
  },
  {
    title: "Streaming, API & Identity",
    items: [
      "Kafka",
      "Redpanda",
      "MQTT / EMQX",
      "Kong Gateway",
      "Keycloak (OIDC/IAM, multi-realm)",
    ],
  },
  {
    title: "Databases & High Availability",
    items: [
      "PostgreSQL",
      "MSSQL",
      "MySQL",
      "MongoDB",
      "DynamoDB",
      "Patroni PostgreSQL HA",
      "Redis Sentinel",
      "HAProxy",
      "Keepalived",
      "MetalLB",
    ],
  },
  {
    title: "Virtualization & Systems",
    items: [
      "Proxmox VE",
      "VMware",
      "Hyper-V",
      "VirtualBox",
      "Vagrant",
      "Linux (Ubuntu, CentOS)",
      "Windows Server",
      "Multi-cluster provisioning",
    ],
  },
  {
    title: "Languages & Scripting",
    items: ["Java", ".NET", "Angular", "NodeJS", "Bash", "Python", "PowerShell"],
  },
  {
    title: "Web, Proxy & Networking",
    items: [
      "Nginx",
      "HAProxy",
      "Apache",
      "IIS",
      "JBoss",
      "Tomcat",
      "Mikrotik",
      "PFSense",
      "Cisco routers & firewalls",
    ],
  },
  {
    title: "Security, Secrets & Compliance",
    items: [
      "SSL/TLS configuration",
      "OS hardening",
      "Vulnerability assessment",
      "Windows GPOs",
      "Firewall rules",
      "OpenBao",
      "Ceph converged storage",
    ],
  },
  {
    title: "Ways of Working",
    items: [
      "Agile / Scrum",
      "ITIL incident & problem management",
      "Root-cause analysis",
      "Git / GitHub / GitLab / Bitbucket",
      "Jira & Confluence",
      "Runbooks & SOPs",
    ],
  },
];

export const experience = [
  {
    role: "DevOps Engineer",
    company: "Accumed Practice Management",
    location: "Dubai, United Arab Emirates",
    period: "Sep 2023 – Present",
    tags: ["Azure DevOps", "Kubernetes", "Proxmox VE", "Terraform", "Kafka", "LGTM Stack"],
    points: [
      "Led Azure DevOps CI/CD implementation, reducing deployment times and improving deployment reliability across multiple environments.",
      "Migrated monolithic services from a Windows-based environment into Linux Dockerized containers and Kubernetes clusters, improving scalability and maintainability.",
      "Designed a multi-cluster Kubernetes (kubeadm) architecture on self-hosted Proxmox VE infrastructure, producing full VM sizing and topology plans across non-production and production environments.",
      "Led infrastructure-as-code scaffolding using Terraform and Ansible, including Helm chart authoring and versioned distribution via GitLab Package Registry with CI-triggered publishing.",
      "Architected shared platform services — API gateway (Kong), identity and access management (Keycloak) and event streaming (Kafka) — supporting a multi-tenant SaaS environment with Tier-0 SLAs, extended with scalable MongoDB integrations.",
      "Implemented Patroni-based PostgreSQL high availability within Kubernetes-hosted workloads, paired with HAProxy/Keepalived VIP failover and MetalLB for load balancer provisioning.",
      "Built full-stack observability from the ground up with Prometheus, Grafana and OpenTelemetry (reducing MTTR by 40%), evolving into a unified Mimir/Loki/Tempo/Grafana HA/Alertmanager platform across multiple product lines.",
      "Instrumented distributed Java and Python applications with OpenTelemetry SDKs and a multi-node Collector architecture, visualized through Signoz for real-time diagnostics.",
      "Implemented DevSecOps practices: automated security checks in CI/CD, enforced secrets management and vulnerability scans on Docker images.",
      "Developed Bash automation, incident response and change management workflows, plus playbooks, runbooks and SOPs for deployment and troubleshooting.",
    ],
  },
  {
    role: "Senior IT Technical and DevOps Engineer",
    company: "Infrastructurebox s.r.o. (Austria)",
    location: "Remote",
    period: "Jan 2022 – Aug 2023 · 1 yr 7 mos",
    tags: ["Terraform", "Ansible", "Jenkins", "AWS", "Hetzner", "Kubernetes"],
    points: [
      "Automated infrastructure provisioning across AWS and Hetzner using Terraform and Ansible for reliable, consistent multi-cloud environments.",
      "Streamlined CI/CD processes using Jenkins and AWS CodePipeline, significantly reducing deployment cycle times.",
      "Led Kubernetes cluster management and microservices orchestration to support high availability and dynamic scaling.",
      "Trained and mentored junior DevOps engineers, promoting best practices in automation, GitOps workflows and cloud-native tooling.",
      "Collaborated with the Helpdesk team to support remote clients, resolving escalated L3 infrastructure, application and network issues in Linux and Windows environments.",
      "Implemented automated backup strategies and conducted regular recovery drills across multiple cloud environments.",
      "Led OS and application patching across distributed environments to ensure compliance and security, plus legacy-to-modern Windows and bulk Linux upgrade projects.",
      "Automated alerting and self-healing using Prometheus alert rules with auto-recovery scripts.",
      "Facilitated cross-department workshops on CI/CD, containerization and monitoring tools, and documented SOPs, knowledge base articles and playbooks.",
    ],
  },
  {
    role: "SaaS Engineer → SaaS Architect",
    company: "Crossover for Work (Aurea Software LLC)",
    location: "Remote",
    period: "Feb 2018 – Dec 2021 · 3 yrs 10 mos",
    tags: ["AWS Well-Architected", "EKS/ECS", "Terraform", "Jenkins", "New Relic", "Lambda"],
    points: [
      "Led the design, provisioning and management of scalable cloud infrastructure, implementing advanced DevOps practices.",
      "Architected scalable, highly available AWS infrastructure using EC2, ECS, EKS, Auto Scaling Groups, ALB/NLB, CloudFront, S3, RDS, DynamoDB, ElastiCache, Route 53, VPC, IAM, KMS and CloudWatch following AWS Well-Architected best practices.",
      "Designed robust Terraform and Ansible templates plus Jenkins pipelines to standardise releases.",
      "Conducted DR drills and validated backup and restore procedures to ensure business continuity.",
      "Managed Kubernetes clusters and implemented observability with New Relic, ELK and PagerDuty.",
      "Implemented HA test environments in Kubernetes and cloud environments to guarantee uptime and fault tolerance.",
      "Managed hybrid cloud and on-premises infrastructure across multiple regions, and supported adoption of serverless architectures (AWS Lambda) for cost savings.",
      "Built custom dashboards for real-time cloud cost monitoring and optimisation recommendations, and mentored junior engineers.",
    ],
  },
  {
    role: "Cloud Network Admin and Helpdesk Engineer",
    company: "Networks360",
    location: "Pakistan",
    period: "Apr 2016 – Jan 2018 · 1 yr 9 mos",
    tags: ["AWS EC2/S3", "GoCD", "Scrum Master", "Windows Server", "PowerShell"],
    points: [
      "Configured and monitored critical AWS services (EC2, S3) for development and production workloads.",
      "Served as Scrum Master for the engineering team, overseeing code freezes and release schedules.",
      "Automated testing and reduced deployment times by 50% using GoCD for CI/CD in an Agile environment.",
      "Administered JIRA/Confluence for project tracking, and managed GitHub repositories, Windows Server roles (AD, DHCP, DNS, IIS, GPM) and TMG firewall.",
      "Oversaw Office 365 and Skype for Business administration plus Mikrotik router configurations.",
      "Implemented AD automation to provision users/groups and assign roles using PowerShell scripts and group policies.",
      "Led procurement and deployment of IT hardware across multiple offices and client locations.",
    ],
  },
  {
    role: "Network and System Administrator",
    company: "Aptech Computer Education",
    location: "Pakistan",
    period: "Apr 2014 – Mar 2016 · 1 yr 11 mos",
    tags: ["Active Directory", "Proxy & Firewall", "Networking", "Reporting"],
    points: [
      "Oversaw the entire on-prem network infrastructure including Domain Controller, File Server, Proxy Server and Firewall Server.",
      "Maintained switches, routers and servers, providing end-user support and ensuring minimal downtime.",
      "Generated daily, weekly and audit reports on network health, performance and usage for internal stakeholders.",
      "Trained junior network faculty and interns, improving overall technical proficiency within the department.",
    ],
  },
];

export const projects = [
  {
    title: "Multi-Cluster Kubernetes for Multi-Tenant SaaS",
    outcome:
      "Designed and documented a four-cluster Kubernetes (kubeadm) topology on Proxmox VE, separating shared services from product-specific workloads, with full non-production and production VM sizing (~65+ VMs).",
    tags: ["Kubernetes", "kubeadm", "Proxmox VE", "Multi-tenancy"],
  },
  {
    title: "Unified LGTM Observability Platform Rollout",
    outcome:
      "Architected a shared observability platform using Mimir/Loki/Tempo/Grafana/Alertmanager across 15+ VMs spanning production and test tiers, including Ceph-backed storage and OpenBao secrets management, with leadership-facing architecture decks.",
    tags: ["Mimir", "Loki", "Tempo", "Grafana", "Ceph", "OpenBao"],
  },
  {
    title: "Infrastructure-as-Code Repository Scaffolding",
    outcome:
      "Generated a complete Terraform/Ansible/Helm repository (45+ files) for a new platform buildout, covering VM provisioning, HAProxy/Keepalived VIP failover, MetalLB, Patroni PostgreSQL HA and GitLab Runner integration.",
    tags: ["Terraform", "Ansible", "Helm", "Patroni", "MetalLB"],
  },
  {
    title: "Kafka & Redpanda Deployment and Migration",
    outcome:
      "Administered multi-node Kafka clusters on Linux and migrated topics to Redpanda, fronted by Nginx and firewalls with secure SSL/TLS access and network segmentation. Automated deployment via Ansible, Terraform and shell scripts integrated with Jenkins for GitOps-style changes.",
    tags: ["Kafka", "Redpanda", "Nginx", "Jenkins", "SSL/TLS"],
  },
  {
    title: "Blue-Green and Canary Deployment Implementation",
    outcome:
      "Automated blue-green and canary deployments for Dockerized microservices on Kubernetes using Azure DevOps pipelines. Enabled zero-downtime releases with rollback strategies, code quality gates and container image scanning for secure distroless images.",
    tags: ["Azure DevOps", "Kubernetes", "Canary", "Distroless", "SonarQube"],
  },
  {
    title: "IT Infrastructure Overhaul for EU Institution",
    outcome:
      "Led a large-scale infrastructure revamp including Windows Server and Linux upgrades, Zimbra mail setup, IIS and Apache web servers, and firewall/VPN redesign — enforcing security baselines, GPOs and compliance-focused OS patching with Agile coordination.",
    tags: ["Windows Server", "Linux", "Zimbra", "VPN", "GPO"],
  },
  {
    title: "Monitoring Stack Modernization (Datadog → Prometheus/Grafana/ELK)",
    outcome:
      "Replaced a commercial monitoring stack with self-managed Prometheus, Grafana and ELK for Linux and Windows workloads including IIS, application servers, databases and firewalls — improving MTTR and supporting ITIL-aligned incident processes.",
    tags: ["Prometheus", "Grafana", "ELK", "Alerting", "ITIL"],
  },
  {
    title: "Cloud Migration & Containerization of Legacy Apps",
    outcome:
      "Led on-prem to AWS migrations of legacy Apache/Tomcat web applications to containerized deployments with Docker and Kubernetes, including MSSQL/PostgreSQL schema migration, SSL/TLS, firewall rules and Terraform/Ansible automation.",
    tags: ["AWS", "Docker", "Kubernetes", "PostgreSQL", "Terraform"],
  },
  {
    title: "Disaster Recovery Automation for Hybrid Environments",
    outcome:
      "Designed DR automation for hybrid cloud/on-prem infrastructure with scripted failover, backup validation and database export/import for SQL workloads, using Terraform, Ansible and Python/Bash integrated with Jenkins to regularly test recovery scenarios.",
    tags: ["DR", "Terraform", "Ansible", "Python", "Jenkins"],
  },
];

export const education = [
  { degree: "BS Computer Science", school: "ILMA University" },
  {
    degree: "Intermediate (Computer Science)",
    school: "Adamjee Government Science College",
  },
  { degree: "Matriculation (Science)", school: "Matchless Public Secondary School" },
];

export const certifications = [
  "AWS Certified Solutions Architect – Associate (training completed)",
  "AWS Certified SysOps Administrator – Associate (training completed)",
  "AWS Certified Developer – Associate (training completed)",
  "CompTIA Linux+ / LPIC 1 & 2 (RedHat, SUSE & Ubuntu) – training completed",
  "CCNA – Cisco Certified Network Associate (training completed)",
  "MCITP – Microsoft Certified IT Professional (training completed)",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
