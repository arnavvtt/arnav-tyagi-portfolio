const projects = [
  {
    id: "eacip", category: "GenAI & Backend", title: "EACIP",
    fullTitle: "Enterprise Agentic Coordination & Intelligence Platform",
    summary: "A task-centric enterprise intelligence platform that turns scattered operational information into a structured context package for human review.",
    stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "LangGraph", "React", "TypeScript", "Docker", "Groq", "Voyage AI"],
    problem: "Operational tasks can depend on structured records, documents, and policy information spread across different systems.",
    solution: "EACIP starts from an operational task, gathers relevant context, correlates records, checks for gaps or inconsistencies, and prepares an organized package for a person to review.",
    architecture: "The repository separates backend and frontend code and includes a Docker Compose setup. The supplied architecture moves from task understanding through retrieval, deterministic correlation, and validation. The repository’s latest visible commit is titled around correlation, validation, and hybrid retrieval with Voyage, pgvector, and RRF.",
    highlights: ["Hybrid lexical and semantic policy retrieval with PostgreSQL full-text search and pgvector.", "Voyage AI embeddings and reciprocal-rank fusion are named in the latest implementation commit.", "Task-based flow emphasizes record correlation and context-gap checks rather than a generic chat interface."],
    caveat: "The public repository has no README or live demo, so supplied test and endpoint counts are omitted. Phase 2 governance/workflow scope is not represented as delivered.",
    links: [{ label: "GitHub Repository", url: "https://github.com/arnavvtt/EACIP-ENTERPRISE-AGENTIC-CORDINATION-AND-INTELLIGENCE-PLATFORM-" }]
  },
  {
    id: "rag", category: "GenAI & RAG", title: "LangChain Docs Q&A",
    fullTitle: "LangChain Docs Q&A — Retrieval-Augmented Generation System",
    summary: "A documentation-grounded Q&A system that retrieves LangChain documentation and answers with source context and citations.",
    stack: ["Python", "LangChain", "Mistral AI", "ChromaDB", "FastAPI", "Streamlit", "Typer", "pytest", "uv"],
    problem: "A general LLM may not know a selected documentation corpus and can answer beyond its evidence.",
    solution: "The system loads seven official LangChain documentation files, recursively chunks the content, stores Mistral embeddings in persistent ChromaDB, and generates answers from retrieved context with source references and an explicit fallback when the corpus lacks an answer.",
    architecture: "Load and clean Markdown → split into 800-character chunks with 150-character overlap → embed with Mistral → store in ChromaDB → retrieve top-k/MMR → compose a grounded answer. FastAPI, Typer CLI, and Streamlit UI expose the pipeline.",
    highlights: ["Metadata is retained for source citations; retrieval includes top-k and MMR.", "Provider factories isolate LLM and embedding setup; the README describes Mistral as the implemented provider.", "The repository README reports Recall@4 of 1.00, keyword coverage of 0.85+, and seven passing tests on its evaluation setup."],
    caveat: "The metrics above are README-reported, not independently rerun for this portfolio build. The README describes a focused MVP: a seven-document corpus, local ChromaDB, one implemented embedding provider, and no cross-session chat persistence. During link verification, the supplied demo redirected to Streamlit’s sign-in flow, so public visitor access is not confirmed.",
    links: [
      { label: "GitHub Repository", url: "https://github.com/arnavvtt/RAG-DOCS" },
      { label: "Live Demo", url: "https://rag-docs-5t5cx45b6yafajmexuyrwo.streamlit.app" }
    ]
  },
  {
    id: "mediconnect", category: "Backend & Applied ML", title: "MediConnect AI",
    fullTitle: "MediConnect AI — Healthcare Management Platform",
    summary: "A Django healthcare application organized around patient, doctor, appointment, chat, and disease-related modules.",
    stack: ["Python", "Django", "Django REST Framework", "scikit-learn", "TensorFlow", "Pandas", "SQLite"],
    problem: "Healthcare workflows can be fragmented across patient records, clinicians, appointments, and preliminary health information.",
    solution: "The repository organizes its application into patient, doctor, appointment, chat, API, Disease, and Health modules. Supplied project notes describe appointment, communication, and preliminary prediction workflows; the repository dependency file confirms Django, DRF, scikit-learn, TensorFlow, Pandas, and WeasyPrint.",
    architecture: "A Django application with separate feature modules and an API package. ML and deep-learning dependencies are present alongside the disease/health modules; the current repository does not publish a README describing model boundaries or validation.",
    highlights: ["Separate patient, doctor, appointment, and chat app directories are present in the repository.", "Disease and Health modules and a datasets directory are present; requirements include scikit-learn and TensorFlow.", "Django REST Framework, Pandas, WeasyPrint, and SQLite-oriented project structure support the wider application."],
    caveat: "The repository overview has no README and its requirements pin Django 2.2.28. Treat predictions as preliminary project functionality, not clinical diagnosis; no clinical validation or diagnostic accuracy is claimed. No live demo was provided.",
    links: [{ label: "GitHub Repository", url: "https://github.com/arnavvtt/MediConnect" }]
  },
  {
    id: "smartagri", category: "Backend & Web", title: "SmartAgri",
    fullTitle: "SmartAgri — Smart Agriculture Portal",
    summary: "A Django web app bringing crop records, weather information, and government mandi prices into one farm-planning view.",
    stack: ["Python", "Django", "SQLite", "HTML", "CSS", "JavaScript", "OpenWeather API", "data.gov.in APMC API"],
    problem: "Weather information, crop records, and market prices can be difficult to review together when planning day-to-day farm activity.",
    solution: "The project README describes farmer authentication, crop logging, crop-related weather advisories, and mandi price data in a single dashboard.",
    architecture: "Django templates and SQLite support a server-rendered web app. OpenWeather supplies weather data, while the Government of India APMC API supplies mandi prices.",
    highlights: ["Crop management supports adding, editing, and deleting crop records.", "Weather insights are connected to crop context.", "Mandi price information comes from the government APMC API; no AI or farm-outcome claim is made."],
    caveat: "Feature and stack details are taken from the repository README. The public live demo link was supplied by the project owner; availability may vary.",
    links: [
      { label: "GitHub Repository", url: "https://github.com/arnavvtt/SmartAgri" },
      { label: "Live Demo", url: "https://smartagris.onrender.com" }
    ]
  },
  {
    id: "securevote", category: "Blockchain & Web", title: "SecureVote",
    fullTitle: "SecureVote — Blockchain-Based Voting Application",
    summary: "An academic voting prototype with a Solidity contract for owner-managed candidates, address-keyed votes, and result retrieval.",
    stack: ["Solidity", "Hardhat", "React", "TypeScript", "Vite", "ethers.js"],
    problem: "The project explores how a voting workflow can be represented through a smart contract and a web interface.",
    solution: "The Voting contract lets the owner register candidates, lets an address vote once according to an on-chain mapping, and exposes candidate counts and a winner calculation.",
    architecture: "A Solidity 0.8.x contract is accompanied by a React/TypeScript Vite app and Hardhat configuration. The contract exposes events and read methods for candidate details and results.",
    highlights: ["Owner-only candidate registration and input checks are implemented in the contract.", "Votes are associated with blockchain addresses; a mapping prevents a second vote from the same address.", "Candidate totals and the highest-count result can be read from the contract."],
    caveat: "This is an academic prototype, not a secure public-election system. The contract does not establish voter identity or eligibility, and public chain data should not be treated as anonymous. No wallet flow, audit, or live demo is claimed.",
    links: [{ label: "GitHub Repository", url: "https://github.com/arnavvtt/newvote" }]
  }
];

const certifications = [
  { title: "Full Stack Web Development with AI Tools", issuer: "EY, AICTE & Edunet Foundation" },
  { title: "EY AI Skills Passport", issuer: "EY & Microsoft" },
  { title: "AWS Academy Graduate – Cloud Foundations", issuer: "Amazon Web Services" },
  { title: "Blockchain Fundamentals Certification", issuer: "Chainlink Labs" },
  { title: "MongoDB Atlas Search", issuer: "MongoDB" },
  { title: "Java Foundations", issuer: "Oracle" }
];

const filters = ["All work", "GenAI & Backend", "GenAI & RAG", "Backend & Applied ML", "Backend & Web", "Blockchain & Web"];
window.portfolioData = { projects, certifications, filters };
