/* ==================== PROJETOS ==================== */
const projetos = [
    {
        titulo: "Landing Page Moderna",
        desc: "Um site moderno, rápido e totalmente responsivo.",
        img: "./img/Landing-Page.png",
        link: "https://joel-rian.github.io/Mario-And-Luidi/",
        categoria: "site"
    },
    {
        titulo: "Aplicativo Mobile UI",
        desc: "Interface mobile elegante e intuitiva.",
        img: "./img/mobile.png",
        link: "https://joel-rian.github.io/ConversaoDeMoeda/",
        categoria: "app"
    },
    {
        titulo: "Dashboard Profissional",
        desc: "Dashboard com análises e visual limpo.",
        img: "./img/dashboard.png",
        link: "https://joel-rian.github.io/MinhasFinancas/",
        categoria: "design"
    }
];

let atual = 0;
let listaFiltrada = [...projetos];

/* ==================== ELEMENTOS ==================== */
const img = document.getElementById("project-img");
const title = document.getElementById("project-title");
const desc = document.getElementById("project-desc");
const linkBtn = document.getElementById("project-btn");

function atualizar() {
    const item = listaFiltrada[atual];

    img.style.opacity = 0;
    title.style.opacity = 0;
    desc.style.opacity = 0;

    setTimeout(() => {
        img.src = item.img;
        title.textContent = item.titulo;
        desc.textContent = item.desc;
        linkBtn.onclick = () => window.open(item.link, "_blank");

        img.style.opacity = 1;
        title.style.opacity = 1;
        desc.style.opacity = 1;
    }, 250);
}

document.getElementById("right").onclick = () => {
    atual = (atual + 1) % listaFiltrada.length;
    atualizar();
};

document.getElementById("left").onclick = () => {
    atual = (atual - 1 + listaFiltrada.length) % listaFiltrada.length;
    atualizar();
};

/* ==================== AUTO PLAY ==================== */
setInterval(() => {
    atual = (atual + 1) % listaFiltrada.length;
    atualizar();
}, 5000);

/* ==================== FILTROS ==================== */
function filtro(cat) {
    if (cat === "todos") {
        listaFiltrada = [...projetos];
    } else {
        listaFiltrada = projetos.filter(p => p.categoria === cat);
    }
    atual = 0;
    atualizar();
}

/* ==================== SIDEBAR ==================== */
function toggleSidebar() {
    const bar = document.getElementById("sidebar");
    bar.style.left = bar.style.left === "0px" ? "-300px" : "0px";
}

/* ==================== INICIAR ==================== */
atualizar();
/* ==================== HOME ==================== */


function home() {
   window.location.href = "index.html";
}