const A = "assets/images/";
const S = "assets/solutions/";

const images = {
  homeHero: A + "g16w5sdf45.png",
  leader: A + "img-001-removebg-preview.png",
  wer: A + "15c8130d-936d-4ef2-9ca3-d8b31afdcf84.png",
  productHero: A + "bcd0058e-fa0a-4069-8530-68585a88dcb6.png",
  age4: A + "产品宣传ai图.png",
  age7: A + "1ee33c5a-9f2c-4499-8313-final1111.png",
  age13: A + "d7d4f430-ffe2-4c6d-9678-abfb7f7dd540.png",
  curriculum: A + "733dde62-d3a1-4b8a-917b-fe95c96b060d.png",
  curriculumDiagram: A + "06c00cfd-1c95-4a63-921d-ced56972e473.png",
  resources: A + "d7d4f430-ffe2-4c6d-9678-abfb7f7dd540.png",
  xiaoxing: A + "6ccc952d-6b6b-4dfb-8396-db3a54cab7ee.png",
  xiaoxingRobot: A + "18b0e2ef-adfa-4b2b-ba64-b5974d3a5f08.png",
  children: A + "8696de9c-2f55-4ebf-8bcd-b63f9391ef53.png",
  inquiry: A + "90079b55-28eb-4ace-91b8-adc8c3b23b7c.png",
  creation: A + "c2ea85b1-fcc2-4a1b-a5ec-50f157c065fb.png",
  evidence: A + "733dde62-d3a1-4b8a-917b-fe95c96b060d.png",
  bundle: A + "e40b44c7-7f48-4dd0-b363-5b00c4a5b595.png"
};

const products = [
  { name: "Xiaoxing", age: "4-6", image: images.xiaoxingRobot, text: "Your own customizable AI robot companion for creative learning.", detail: true, badge: "New!" },
  { name: "Modular H1-S", age: "7-12", image: A + "27c19766-1ef2-428f-b1d2-f1ec44d499c5.png", text: "Six-face attachment, powerful brain, voice and image recognition." },
  { name: "Krypton 8", age: "7-12", image: A + "b4f5f090-a00c-413c-97dd-31a6e010bd1d.png", text: "Unlock imagination through structures, transmission, dynamics and STEM kits." },
  { name: "School Krypton 201", age: "13-18", image: A + "0d23e4fe-1d11-42c0-8e77-7d179d104666.png", text: "Scratch, C, Python, AI module interface and classroom sensors." },
  { name: "Modular H1-B", age: "4-6", image: A + "588bc550-185b-4e1f-8376-235aed024885.png", text: "Modular robot kit for creative STEM learning." },
  { name: "C203", age: "7-12", image: A + "g4a5a54f-esd4f4-02.png", text: "Free-build robot car, program and test own solution in WER contest." },
  { name: "Krypton 6", age: "7-12", image: A + "77c3cccc-ad08-43e5-ba90-0b6ad01207e5.png", text: "A versatile robot kit designed for hands-on STEM education experiences." },
  { name: "Transmission Kit", age: "13-18", image: A + "9c57f744-1e50-4fdf-bf8e-8faa5619fa73.png", text: "Multiple-DOF humanoid design, action editor and reconfigurable projects." }
];

const solutionItems = [
  { title: "K12 Schools", category: "Institutional learning", image: S + "k12-schools.png", description: "Full lab spaces, teaching resources and robotics systems for schools and universities." },
  { title: "Training Centers", category: "After-school education", image: S + "training-centers.png", description: "Course operation, project activities and community learning centers for after-school robotics." },
  { title: "Store & Kiosk", category: "Retail experience", image: S + "store-kiosk.png", description: "Product experience spaces that connect retail, demonstration and learning services." },
  { title: "Home Learning", category: "Family education", image: S + "home-learning.png", description: "Household product lines and guided learning paths for family robotics education." }
];

const routes = ["home", "products", "curriculum", "wer", "solutions", "resources", "product"];
const routeLabel = { home: "Home", products: "Products", curriculum: "Curriculum", wer: "WER", solutions: "Solutions", resources: "Resources", product: "Xiaoxing" };

function currentRoute() {
  const value = location.hash.replace(/^#\/?/, "").split("?")[0] || "home";
  return routes.includes(value) ? value : "home";
}

function link(route, label, className = "") {
  return `<a class="${className}" href="#/${route}" data-route="${route}">${label}</a>`;
}

function header(active) {
  return `<header class="site-header">
    <div class="header-inner">
      ${link("home", `<span class="logo-word">Abilix</span><span class="logo-tag">EDUCATIONAL ROBOT</span>`, "logo")}
      <button class="menu-button" aria-label="Toggle navigation" aria-expanded="false"><span></span><span></span><span></span></button>
      <nav class="primary-nav" aria-label="Primary navigation">
        ${["products", "solutions", "curriculum", "wer", "resources"].map(r => link(r, routeLabel[r], active === r ? "active" : "")).join("")}
        ${link("home", "About Abilix", "nav-pill")}
      </nav>
      <button class="bag" aria-label="Shopping bag"><span>Bag</span><b id="bag-count">0</b></button>
    </div>
  </header>`;
}

function footer() {
  const cols = ["Products", "Solutions", "Curriculum", "WER", "Resources"];
  return `<footer class="site-footer"><div class="footer-inner">
    <div class="footer-brand"><h3>Abilix</h3><p>Train Successful Intelligence. Bring Up Science &amp; Technology Accomplishment. Cultivate Technology Talents.</p></div>
    ${cols.map(c => `<div class="footer-col"><h4>${c}</h4><a href="#/${c.toLowerCase()}">Overview</a><a href="#/${c.toLowerCase()}">Details</a><a href="#/${c.toLowerCase()}">Support</a></div>`).join("")}
  </div></footer>`;
}

function pageHero({ eyebrow = "Educational Robotics", title, summary, image, extra = "" }) {
  return `<section class="page-hero" style="--hero-image:url('${image}')"><div class="hero-overlay"></div><div class="container hero-content"><p>${eyebrow}</p><h1>${title}</h1><div class="hero-summary">${summary}</div>${extra}</div></section>`;
}

function strapline(text) { return `<div class="strapline">${text}</div>`; }
function button(route, text, cls = "button") { return link(route, `${text}<span aria-hidden="true">→</span>`, cls); }

function homePage() {
  const cards = [
    ["K12 Schools", "Full lab spaces, teaching resources and robotics systems for schools and universities.", S + "k12-schools.png"],
    ["Training Centers", "Course operation, project activities and community learning centers for after-school robotics.", S + "training-centers.png"],
    ["Store & Kiosk", "Product experience spaces that connect retail, demonstration and learning services.", S + "store-kiosk.png"],
    ["Home Learning", "Household product lines and guided learning paths for family robotics education.", S + "home-learning.png"]
  ];
  return `${header("home")}<main id="main">
    <section class="home-hero" style="--hero-image:url('${images.homeHero}')"><div class="hero-overlay"></div><div class="home-hero-copy">
      <p class="hero-kicker">Educational Robots · STEAM Curriculum · Global Competition</p><h1>AI Robots<br>Inspiring Young Minds<br>To Create</h1>
      <p>Abilix brings educational robots, classroom solutions, curriculum support and WER competition pathways into one premium learning ecosystem.</p><a href="#belief" class="scroll-cue" aria-label="Scroll to next section">↓</a>
    </div></section>
    <section id="belief" class="belief"><h2>More Than Knowing</h2><p>Students need more than knowledge<br>They need to create, to collaborate<br>To turn ideas into solutions</p><strong>Explore · Create · Solve</strong></section>
    <section class="section container solution-intro"><p class="eyebrow">ABILIX SOLUTION</p><h2>From Learning to Ability</h2><p>Abilix brings robots, curriculum, programming and real-world challenges<br>together in one connected learning system.</p><strong>Build · Program · Challenge · Grow</strong>
      <div class="solution-grid">${cards.map(c => `<a href="#/solutions" class="solution-card"><img src="${c[2]}" alt="${c[0]}"><h3>${c[0]}</h3><p>${c[1]}</p></a>`).join("")}</div>
      ${button("solutions", "Explore Solution")}
    </section>
    <section class="section container split leader"><div><h2>A Global Leader in Educational Robotics</h2><p>Founded in 1996, Abilix uses AI-powered educational robots to inspire creativity and develop future-ready skills.</p>${button("home", "Learn More")}</div><img src="${images.leader}" alt="Children exploring robots"></section>
    ${strapline("We create more than robots. We create a complete learning system.")}
    <section class="section container products-preview"><h2>Product Center</h2><p>Bring Imagination to Life.<br>Make Creativity Visible.</p><div class="carousel-shell"><button class="carousel-arrow prev" aria-label="Previous products">‹</button><div class="product-strip">${products.slice(0,6).map(productCard).join("")}</div><button class="carousel-arrow next" aria-label="Next products">›</button></div></section>
    <section class="section container split wer-promo"><img src="${images.wer}" alt="WER global robotics competition"><div><h2>Turn competition into a<br>global learning ecosystem.</h2><p>Contest introduction · Past works · Champion stories · Registration · Live events · Global map</p>${button("wer", "Learn More")}</div></section>
    <section class="section container stats"><div><h2>A robotics education<br>company built as a complete<br>learning system.</h2><p>From the brand manual: Abilix provides STEAM-ready robot products, systematic school labs, home learning centers, teaching materials and WER competition pathways.</p></div><div class="stat-grid">${[["600+","patented technologies"],["120+","robot types"],["100+","teaching materials"],["50+","countries & regions"],["40K+","schools & institutes"],["500K+","WER contestants yearly"]].map(s => `<div><strong>${s[0]}</strong><span>${s[1]}</span></div>`).join("")}</div></section>
    <section class="closing"><h2>Empowering Every Child to Create the Future<br>Inspiring Young Creators Worldwide Since 1996</h2></section>
  </main>${footer()}`;
}

function productCard(p) {
  return `<article class="product-card" data-age="${p.age}"><div class="product-image"><img src="${p.image}" alt="${p.name}">${p.badge ? `<span class="badge">${p.badge}</span>` : ""}</div><h3>${p.name}</h3><p>${p.text}</p><div class="card-actions"><a href="${p.detail ? "#/product" : "#/products"}" class="mini-button">Shop Now</a><button class="favorite" aria-label="Add ${p.name} to favorites">♡</button></div></article>`;
}

function productsPage() {
  return `${header("products")}<main id="main">${pageHero({ title: "Products", summary: "Browse product families or filter by age. Each card leads into product details with product information and Add to Bag.", image: images.productHero })}${strapline("We Build More Than Robots. We Inspire Creators.")}
    <section class="section container catalog"><div class="filter-tabs" role="tablist" aria-label="Filter products by age"><button class="active" data-filter="all">All Products</button><button data-filter="4-6">Age 4-6</button><button data-filter="7-12">Age 7-12</button><button data-filter="13-18">Age 13-18</button></div><div class="catalog-grid">${products.map(productCard).join("")}</div><div class="catalog-arrows"><button class="catalog-prev" aria-label="Previous page">‹</button><button class="catalog-next" aria-label="Next page">›</button></div></section>
    <section class="section container ages"><h2>Products by Age</h2><div class="age-row"><img src="${images.age4}" alt="Parent and child learning with Xiaoxing"><div><h3>Age 4-6</h3><strong>Explore &amp; Create</strong><p>Develop creativity and hands-on skills through playful construction, basic robotics, and imaginative building experiences.</p></div></div><div class="age-row reverse"><img src="${images.age7}" alt="Student programming a robot"><div><h3>Age 7-12</h3><strong>Build &amp; Program</strong><p>Learn robotics, programming, and STEAM concepts through modular building, sensors, and interactive robot control projects.</p></div></div><div class="age-row"><img src="${images.age13}" alt="Teen students engineering robots"><div><h3>Age 13-18</h3><strong>Innovate &amp; Engineer</strong><p>Explore AI, engineering, and advanced robotics through programming, intelligent applications, and innovation-driven projects.</p></div></div></section>
    <section class="closing"><h2>Built for Creativity. Designed for the Future.</h2><p>Abilix connects technology with learning, giving every child the opportunity to become a creator of the future.</p></section>
  </main>${footer()}`;
}

function curriculumPage() {
  const levels = ["Creative construction and observation","Computational thinking and logic","Programming, sensors and control","AI applications and project practice","Engineering innovation and teamwork","Competition, presentation and problem solving"];
  return `${header("curriculum")}<main id="main">${pageHero({ title: "Curriculum", summary: "Abilix combines robots, programming software, teacher resources and course materials into a structured AI literacy system.", image: images.curriculum })}${strapline("Connect every product to a clear learning pathway")}
    <section class="section container curriculum"><h2>Learning journey timeline</h2><p>Horizontal curriculum map can show semester/module<br>progression and matching product kits.</p><div class="level-list">${levels.map((l,i) => `<button class="level-item" aria-expanded="false"><span>L${i+1}</span><strong>${l}</strong><em>View pathway</em></button>`).join("")}</div>
      <div class="curriculum-features"><div><h2>Curriculum Features</h2><h3>Project Guidance from Easy to Difficult</h3><ul><li>Training Trial and Error Learning</li><li>Training the Abilities of Innovation, Analysis and Practice</li><li>Training the Abilities to Understand, Be Close to and Apply the Technology</li></ul></div><img src="${images.curriculumDiagram}" alt="Project-based teaching process diagram"></div></section>
  </main>${footer()}`;
}

function werPage() {
  return `${header("wer")}<main id="main">${pageHero({ title: "WER", summary: "Abilix proudly sponsors WER, a global robotics competition empowering students worldwide through innovation, creativity, and STEM education.", image: images.wer })}${strapline("Connect every product to a clear learning pathway")}
    <section class="section container external-card"><h2>External website target</h2><p class="external-url">http://en.wergame.org/</p><p>Interaction: CTA opens external WER website in a new tab. Keep a short local overview before redirect.</p><a class="button" href="http://en.wergame.org/" target="_blank" rel="noopener">Go to WER site <span>↗</span></a></section>
  </main>${footer()}`;
}

function solutionsPage() {
  return `${header("solutions")}<main id="main">${pageHero({ title: "Solutions", summary: "Abilix proudly sponsors WER, a global robotics competition empowering students worldwide through innovation, creativity, and STEM education.", image: S + "store-kiosk.png", extra: `<a href="#solution-tabs" class="hero-link">Explore four environments</a>` })}${strapline("Connect every product to a clear learning pathway")}
    <section id="solution-tabs" class="section container solutions"><p class="eyebrow">SOLUTION</p><div class="vertical-tabs-layout"><div class="vertical-tabs" role="tablist" aria-label="Solution environments">${solutionItems.map((s,i) => `<button role="tab" aria-selected="${i===0}" tabindex="${i===0?0:-1}" data-index="${i}" class="vertical-tab ${i===0?"active":""}"><span>${String(i+1).padStart(2,"0")}</span><strong>${s.title}</strong></button>`).join("")}</div><div class="solution-stage" aria-live="polite"><div class="solution-image"><img src="${solutionItems[0].image}" alt="${solutionItems[0].title}" id="solution-image"><span><b id="solution-current">01</b> /04</span></div><div class="solution-copy" id="solution-copy"><p>${solutionItems[0].category}</p><h2>${solutionItems[0].title}</h2><div>${solutionItems[0].description}</div></div></div></div>
      <div class="implementation"><div><strong>From idea to implementation</strong><h2>Build a complete learning journey</h2></div><p>Connect space planning, robotics systems, curriculum, educator support and partner services through a clear deployment process.</p></div></section>
  </main>${footer()}`;
}

function resourcesPage() {
  const resources = [
    ["Brochures", "Resource category", images.curriculum], ["Videos", "Resource category", images.wer], ["Manuals", "Resource category", images.bundle],
    ["Partner assets", "Resource category", S + "store-kiosk.png"], ["News", "Resource category", images.children], ["FAQ", "Resource category", images.xiaoxingRobot],
    ["What students build", "Content module", A + "78c67788-44eb-46da-a062-e0f918d7bf79.png"], ["Curriculum connection", "Content module", images.curriculum], ["Related products", "Content module", images.bundle]
  ];
  return `${header("resources")}<main id="main">${pageHero({ title: "Resources", summary: "Downloads, media and partner support library.", image: images.resources })}${strapline("Connect every product to a clear learning pathway")}
    <section class="section container resources"><label class="search"><span>Search</span><input id="resource-search" type="search" placeholder="Search resources..." autocomplete="off"></label><div class="resource-grid">${resources.map(r => `<button class="resource-card" data-search="${r[0].toLowerCase()}"><img src="${r[2]}" alt=""><h3>${r[0]}</h3><p>${r[1]}</p></button>`).join("")}</div><p class="no-results" hidden>No resources match your search.</p></section>
  </main>${footer()}`;
}

function productPage() {
  const gallery = [images.xiaoxing, images.xiaoxingRobot, images.bundle, images.curriculum];
  const courses = ["Large Language Model Application Training","Questioning Ability Training","Inquiry-Based Civilization Knowledge","Critical Thinking Ability Training","Aesthetic Ability Training","Value Judgment Ability Training"];
  return `${header("product")}<main id="main">${strapline("We Build More Than Robots. We Inspire Creators.")}<section class="section container product-detail"><div class="gallery"><div class="main-image"><img id="main-product-image" src="${gallery[0]}" alt="Xiaoxing AI Educational Robot Companion"></div><div class="thumbnails">${gallery.map((g,i)=>`<button class="thumb ${i===0?"active":""}" data-src="${g}"><img src="${g}" alt="Xiaoxing view ${i+1}"></button>`).join("")}</div></div><div class="buy-panel"><h1>Xiaoxing <button class="favorite" aria-label="Add Xiaoxing to favorites">♡</button></h1><h2>AI Educational Robot Companion</h2><p class="rating">4.9 / 5 &nbsp; <a href="#reviews">128 verified reviews</a></p><strong class="price">US$ 599.00</strong><p>Taxes and shipping calculated at checkout.</p><p>A customizable AI learning companion combining natural conversation, creative building, and guided learning experiences for curious young minds.</p><h3>IN THE BOX</h3><p>Xiaoxing robot · Modular building set · Charging cable · Learning access</p><div class="purchase"><div class="quantity"><button data-delta="-1" aria-label="Decrease quantity">−</button><span id="quantity">1</span><button data-delta="1" aria-label="Increase quantity">+</button></div><button class="add-bag">Add to bag</button></div><button class="buy-now">Buy it now</button><p class="stock">● In stock · Ready to ship</p><dl class="policies"><dt>SHIPPING</dt><dd>Tracked delivery with regional options</dd><dt>RETURNS</dt><dd>30-day return window</dd><dt>SCHOOLS</dt><dd>Institutional purchasing support available</dd></dl></div></section>
    <section class="blue-section"><div class="container split"><div><h2>Curriculum Leads<br>Xiaoxing Enables</h2><p>Xiaoxing is the learning interface for a six-course AI education system. The curriculum defines the goals; the robot turns them into dialogue, construction, and reflection.</p><div class="process-pills"><span>COURSE</span><b>+</b><span>ACTIVITY</span><b>+</b><span>ROBOT</span></div></div><img src="${images.children}" alt="Children learning with Xiaoxing"></div></section>
    <section class="section container courses"><div><p class="eyebrow">THE OFFICIAL CURRICULUM</p><h2>Six Courses<br>One Education System</h2><img src="${images.curriculum}" alt="Official curriculum books"></div><div><p>The six courses develop AI application ability and the human judgment needed to use AI thoughtfully, creatively, and responsibly.</p><ol>${courses.map(c=>`<li>${c}</li>`).join("")}</ol></div></section>
    <section class="soft-section"><div class="container"><p class="eyebrow">THE EDUCATION PROCESS</p><h2>How Xiaoxing Supports Every Stage.</h2><div class="four-steps">${[["SPARK CURIOSITY","Xiaoxing listens and develops the question."],["LEARN KNOWLEDGE","Xiaoxing connects inquiry with knowledge."],["BUILD TO CREATE","Xiaoxing becomes a model students build."],["SOLVE PROBLEMS","Xiaoxing helps test, reflect, and improve."]].map((s,i)=>`<div><span>0${i+1}</span><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join("")}</div></div></section>
    <section class="section container intelligence"><p class="eyebrow">PRODUCT CAPABILITY / AI INTELLIGENCE</p><h2>AI Connects Questions With Knowledge</h2><div class="intelligence-grid"><div>${[["REASON","Understand context and explain relationships."],["RESEARCH","Explore knowledge across disciplines."],["APPLY","Use language, vision, 3D, music, or physics models."]].map(x=>`<div><strong>${x[0]}</strong><p>${x[1]}</p></div>`).join("")}</div><aside><p class="eyebrow">PRODUCT INTELLIGENCE</p><ul><li>DeepSeek V4</li><li>1.6T parameters</li><li>Abilix Agent 2.0</li><li>Multilingual voice</li><li>Fast response</li></ul></aside></div></section>
    <section class="section container reference"><p class="eyebrow">PRODUCT REFERENCE</p><h2>Built for Long-Term Learning</h2><div class="split"><ul><li>Xiaoxing AI Educational Robot</li><li>DeepSeek V4 · 1.6T parameters</li><li>Six official AI-era ability courses</li><li>1-on-1 Learning Advisor</li><li>Lifetime Q&amp;A Support</li><li>Setup &amp; Usage Guidance</li></ul><img src="${images.bundle}" alt="Xiaoxing education course bundle"></div></section>
    <section class="section container practice"><p class="eyebrow">CURRICULUM IN PRACTICE</p><h2>See Learning Become Action</h2><div class="practice-grid">${[[images.inquiry,"Student-led inquiry","A student question begins the investigation."],[images.creation,"Hands-on creation","Knowledge becomes a physical working model."],[images.evidence,"Evidence and judgment","Evidence guides discussion, revision, and judgment."]].map(x=>`<article><img src="${x[0]}" alt=""><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("")}</div></section>
    <section class="section container recommendations"><div class="section-heading"><h2>You may also like</h2>${link("products","View all products →")}</div><div class="catalog-grid compact">${products.slice(6,8).concat(products.slice(1,2)).map(productCard).join("")}</div></section>
  </main>${footer()}`;
}

const pages = { home: homePage, products: productsPage, curriculum: curriculumPage, wer: werPage, solutions: solutionsPage, resources: resourcesPage, product: productPage };
let bagCount = 0;

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message; toast.classList.add("show");
  clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function render() {
  const route = currentRoute();
  document.querySelector("#app").innerHTML = pages[route]();
  document.title = `${routeLabel[route]} - Abilix`;
  const bag = document.querySelector("#bag-count"); if (bag) bag.textContent = bagCount;
  bindCommon(); bindPage(route); window.scrollTo({ top: 0, behavior: "instant" });
}

function bindCommon() {
  const menu = document.querySelector(".menu-button"), nav = document.querySelector(".primary-nav");
  menu?.addEventListener("click", () => { const open = nav.classList.toggle("open"); menu.setAttribute("aria-expanded", String(open)); });
  document.querySelector(".bag")?.addEventListener("click", () => showToast(bagCount ? `${bagCount} item${bagCount>1?"s":""} in your bag.` : "Your bag is empty."));
  document.querySelectorAll(".favorite").forEach(b => b.addEventListener("click", e => { e.preventDefault(); b.classList.toggle("active"); b.textContent = b.classList.contains("active") ? "♥" : "♡"; }));
}

function bindPage(route) {
  if (route === "home") {
    const strip = document.querySelector(".product-strip");
    document.querySelector(".carousel-arrow.prev")?.addEventListener("click", () => strip.scrollBy({ left: -340, behavior: "smooth" }));
    document.querySelector(".carousel-arrow.next")?.addEventListener("click", () => strip.scrollBy({ left: 340, behavior: "smooth" }));
  }
  if (route === "products") {
    const filter = value => document.querySelectorAll(".catalog-grid .product-card").forEach(c => c.hidden = value !== "all" && c.dataset.age !== value);
    document.querySelectorAll(".filter-tabs button").forEach(b => b.addEventListener("click", () => { document.querySelectorAll(".filter-tabs button").forEach(x=>x.classList.remove("active")); b.classList.add("active"); filter(b.dataset.filter); }));
    document.querySelector(".catalog-prev")?.addEventListener("click",()=>showToast("Showing the previous product group."));
    document.querySelector(".catalog-next")?.addEventListener("click",()=>showToast("Showing the next product group."));
  }
  if (route === "curriculum") document.querySelectorAll(".level-item").forEach(b => b.addEventListener("click",()=>{ const open=b.getAttribute("aria-expanded")==="true"; b.setAttribute("aria-expanded",String(!open)); b.classList.toggle("open",!open); b.querySelector("em").textContent=!open?"Robotics · Curriculum · Project practice":"View pathway"; }));
  if (route === "solutions") {
    const tabs = [...document.querySelectorAll(".vertical-tab")];
    const activate = i => { const item=solutionItems[i], img=document.querySelector("#solution-image"), copy=document.querySelector("#solution-copy"); tabs.forEach((t,n)=>{t.classList.toggle("active",n===i);t.setAttribute("aria-selected",String(n===i));t.tabIndex=n===i?0:-1;}); img.classList.add("changing"); copy.classList.add("changing"); setTimeout(()=>{img.src=item.image;img.alt=item.title;document.querySelector("#solution-current").textContent=String(i+1).padStart(2,"0");copy.innerHTML=`<p>${item.category}</p><h2>${item.title}</h2><div>${item.description}</div>`;img.classList.remove("changing");copy.classList.remove("changing");},180); };
    tabs.forEach((t,i)=>{t.addEventListener("click",()=>activate(i));t.addEventListener("keydown",e=>{if(["ArrowDown","ArrowRight","ArrowUp","ArrowLeft"].includes(e.key)){e.preventDefault();const next=(i+(["ArrowDown","ArrowRight"].includes(e.key)?1:-1)+tabs.length)%tabs.length;activate(next);tabs[next].focus();}});});
  }
  if (route === "resources") document.querySelector("#resource-search")?.addEventListener("input", e => { const q=e.target.value.trim().toLowerCase(); let visible=0; document.querySelectorAll(".resource-card").forEach(c=>{c.hidden=!c.dataset.search.includes(q);if(!c.hidden)visible++;}); document.querySelector(".no-results").hidden=visible!==0; });
  if (route === "product") {
    document.querySelectorAll(".thumb").forEach(t=>t.addEventListener("click",()=>{document.querySelectorAll(".thumb").forEach(x=>x.classList.remove("active"));t.classList.add("active");document.querySelector("#main-product-image").src=t.dataset.src;}));
    let qty=1; document.querySelectorAll(".quantity button").forEach(b=>b.addEventListener("click",()=>{qty=Math.max(1,qty+Number(b.dataset.delta));document.querySelector("#quantity").textContent=qty;}));
    document.querySelector(".add-bag")?.addEventListener("click",()=>{bagCount+=qty;document.querySelector("#bag-count").textContent=bagCount;showToast(`${qty} Xiaoxing added to your bag.`);});
    document.querySelector(".buy-now")?.addEventListener("click",()=>showToast("Checkout is ready for integration in the production build."));
  }
}

window.addEventListener("hashchange", render);
render();
