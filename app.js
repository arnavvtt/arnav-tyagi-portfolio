(() => {
  const { projects, certifications, filters } = window.portfolioData;
  const root = document.body.dataset.root || "";
  const page = document.body.dataset.page || "home";
  const routes = [
    ["home", "Home", "index.html"], ["about", "About", "about.html"],
    ["projects", "Projects", "projects.html"], ["certifications", "Certifications", "certifications.html"],
    ["resume", "Resume", "resume.html"], ["contact", "Contact Me", "contact.html"]
  ];
  const header = document.querySelector("#site-header-content");
  if (header) {
    const brand = document.createElement("a");
    brand.className = "wordmark"; brand.href = `${root}index.html`; brand.setAttribute("aria-label", "Arnav Tyagi home");
    brand.innerHTML = '<span class="wordmark-mark">AT</span><span>Arnav Tyagi</span>';
    const nav = document.createElement("nav"); nav.className = "main-nav"; nav.setAttribute("aria-label", "Main navigation");
    routes.forEach(([id, label, file]) => {
      const link = document.createElement("a"); link.href = `${root}${file}`; link.textContent = label;
      if ((page === "case-study" && id === "projects") || page === id) link.setAttribute("aria-current", "page");
      nav.append(link);
    });
    const talk = document.createElement("a"); talk.className = "header-link"; talk.href = `${root}contact.html`; talk.innerHTML = 'Contact Me <span aria-hidden="true">↗</span>';
    header.append(brand, nav, talk);
  }
  const footer = document.querySelector("#site-footer");
  if (footer) {
    const brand = document.createElement("a"); brand.className = "wordmark"; brand.href = `${root}index.html`;
    brand.innerHTML = '<span class="wordmark-mark">AT</span><span>Arnav Tyagi</span>';
    const note = document.createElement("p"); note.textContent = `Built with care, clear claims, and a little Python-shaped optimism · ${new Date().getFullYear()}`;
    const back = document.createElement("a"); back.href = `${root}index.html`; back.textContent = "Back home ↑";
    footer.append(brand, note, back);
  }

  const slugById = { eacip: "eacip", rag: "langchain-docs-qa", mediconnect: "mediconnect-ai", smartagri: "smartagri", securevote: "securevote" };
  function makeProjectCard(project) {
    const card = document.createElement("article"); card.className = "project-card"; card.dataset.category = project.category;
    const main = document.createElement("div"); main.className = "card-main";
    const title = document.createElement("h3"); title.textContent = project.title;
    const description = document.createElement("p"); description.className = "project-one-line"; description.textContent = project.summary;
    const tags = document.createElement("div"); tags.className = "tag-list"; tags.setAttribute("aria-label", "Technology stack");
    project.stack.slice(0, 5).forEach((item) => { const tag = document.createElement("span"); tag.className = "tech-tag"; tag.textContent = item; tags.append(tag); });
    const bottom = document.createElement("div"); bottom.className = "card-bottom";
    const details = document.createElement("a"); details.className = "text-link"; details.href = `${root}projects/${slugById[project.id]}.html`; details.innerHTML = 'View Project <span aria-hidden="true">↗</span>';
    bottom.append(details);
    main.append(title, description, tags, bottom); card.append(main); return card;
  }
  function renderProjects(host, limit = Infinity) {
    let activeFilter = "All work";
    const filterRow = document.querySelector("#project-filters");
    const render = () => {
      const items = (activeFilter === "All work" ? projects : projects.filter((p) => p.category === activeFilter)).slice(0, limit);
      host.replaceChildren(...items.map(makeProjectCard));
    };
    if (filterRow) filters.forEach((filter) => {
      const button = document.createElement("button"); button.className = "filter-button"; button.type = "button"; button.textContent = filter;
      button.setAttribute("aria-pressed", String(filter === activeFilter));
      button.addEventListener("click", () => { activeFilter = filter; filterRow.querySelectorAll("button").forEach((el) => el.setAttribute("aria-pressed", String(el === button))); render(); });
      filterRow.append(button);
    });
    render();
  }
  const projectsGrid = document.querySelector("#project-grid");
  if (projectsGrid) renderProjects(projectsGrid);
  const featuredGrid = document.querySelector("#featured-project-grid");
  if (featuredGrid) renderProjects(featuredGrid, 3);

  const credentialsHost = document.querySelector("#credential-grid");
  if (credentialsHost) certifications.forEach((cert, i) => {
    const card = document.createElement("article"); card.className = "credential-card";
    const title = document.createElement("h2"); title.textContent = cert.title;
    const issuer = document.createElement("p"); issuer.textContent = cert.issuer; card.append(title, issuer); credentialsHost.append(card);
  });

  const caseHost = document.querySelector("#case-study-content");
  if (caseHost) {
    const project = projects.find((item) => item.id === document.body.dataset.case);
    if (project) {
      document.title = `${project.title} — Arnav Tyagi`;
      const hero = document.createElement("header"); hero.className = "case-hero";
      const title = document.createElement("h1"); title.textContent = project.fullTitle;
      const summary = document.createElement("p"); summary.className = "page-lede"; summary.textContent = project.summary;
      const stack = document.createElement("div"); stack.className = "tag-list case-stack"; stack.setAttribute("aria-label", "Technology stack");
      project.stack.forEach((item) => { const tag = document.createElement("span"); tag.className = "tech-tag"; tag.textContent = item; stack.append(tag); });
      hero.append(title, summary, stack);
      const grid = document.createElement("div"); grid.className = "case-study-grid";
      const blocks = [["The problem", project.problem], ["The solution", project.solution], ["Architecture", project.architecture]];
      blocks.forEach(([heading, content]) => { const section = document.createElement("section"); section.className = "content-panel"; const h = document.createElement("h2"); h.textContent = heading; const p = document.createElement("p"); p.textContent = content; section.append(h, p); grid.append(section); });
      const features = document.createElement("section"); features.className = "content-panel feature-panel"; const fh = document.createElement("h2"); fh.textContent = "Implemented features"; const list = document.createElement("ul"); list.className = "feature-list";
      project.highlights.forEach((item) => { const li = document.createElement("li"); li.textContent = item; list.append(li); }); features.append(fh, list); grid.append(features);
      const caveat = document.createElement("p"); caveat.className = "case-caveat"; caveat.textContent = project.caveat;
      const links = document.createElement("div"); links.className = "case-links";
      project.links.forEach((item) => { const a = document.createElement("a"); a.className = "button button-primary"; a.href = item.url; a.target = "_blank"; a.rel = "noopener noreferrer"; a.innerHTML = `${item.label} <span aria-hidden="true">↗</span>`; links.append(a); });
      const back = document.createElement("a"); back.className = "text-link case-back"; back.href = `${root}projects.html`; back.textContent = "← All projects";
      caseHost.append(hero, grid, caveat, links, back);
    }
  }
})();
