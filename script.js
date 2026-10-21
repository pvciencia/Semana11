/**
 * ==========================================================================
 * ALAS DEL PERÚ - Portal de Aves del Perú
 * Lógica Interactiva Global (JavaScript Puro / Vanilla JS)
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. BASE DE DATOS DE ESPECIES EMBLEMÁTICAS DEL PERÚ
// --------------------------------------------------------------------------
const AVES_PERU = [
  {
    id: "gallito-rocas",
    nombre: "Gallito de las Rocas",
    cientifico: "Rupicola peruvianus",
    quechua: "Tunqui",
    region: "selva",
    regionNombre: "Selva Alta / Yungas",
    estado: "vulnerable",
    estadoTexto: "Vulnerable",
    endemico: false,
    imagen: "gallito_rocas.jpg",
    descripcion: "Ave nacional del Perú. El macho posee una cresta semicircular en forma de disco y un plumaje escarlata anaranjado fosforescente que contrasta con sus alas negras.",
    habitat: "Bosques de neblina y quebradas rocosas de la vertiente oriental andina (500 - 2,400 msnm).",
    dieta: "Frugívoro (consume frutos de árboles silvestres, dispersando semillas vitales).",
    tamano: "32 cm de longitud",
    sonidoTipo: "graznido_gutural",
    curiosidad: "En la época de cortejo, hasta 20 machos se reúnen en un 'lek' para bailar y competir por la atención de las hembras."
  },
  {
    id: "condor-andino",
    nombre: "Cóndor Andino",
    cientifico: "Vultur gryphus",
    quechua: "Kuntur",
    region: "sierra",
    regionNombre: "Sierra / Cordillera",
    estado: "vulnerable",
    estadoTexto: "Vulnerable",
    endemico: false,
    imagen: "condor_andino.jpg",
    descripcion: "Una de las aves voladoras más grandes del planeta. Símbolo sagrado de los Andes y mensajero del Hanan Pacha en la cosmovisión incaica.",
    habitat: "Altas cumbres andinas, cañones profundos como el Colca y Cotahuasi, y costas marítimas acantiladas.",
    dieta: "Carroñero estricto (limpia ecosistemas previniendo la propagación de enfermedades).",
    tamano: "Envergadura alar de hasta 3.3 metros; peso de hasta 15 kg",
    sonidoTipo: "soplido_viento",
    curiosidad: "Puede planear durante horas consecutivas sin aletear una sola vez, aprovechando las corrientes térmicas ascendentes."
  },
  {
    id: "colibri-maravilloso",
    nombre: "Colibrí Maravilloso",
    cientifico: "Loddigesia mirabilis",
    quechua: "Kenti sumaq",
    region: "selva",
    regionNombre: "Amazonas / Utcubamba",
    estado: "critico",
    estadoTexto: "En Peligro",
    endemico: true,
    imagen: "colibri_maravilloso.jpg",
    descripcion: "Considerada una de las aves más hermosas del mundo. El macho tiene solo cuatro plumas en la cola, dos de ellas terminadas en grandes discos púrpuras raqueta.",
    habitat: "Bordes de bosques montanos en la cuenca del río Utcubamba (Amazonas, norte del Perú).",
    dieta: "Nectarívoro e insectívoro (se alimenta de flores rojas y orquídeas autóctonas).",
    tamano: "15 cm (incluyendo sus dos largas plumas de cola)",
    sonidoTipo: "trino_agudo",
    curiosidad: "Es una especie 100% endémica del Perú; no existe en libertad en ningún otro rincón del planeta."
  },
  {
    id: "pinguino-humboldt",
    nombre: "Pingüino de Humboldt",
    cientifico: "Spheniscus humboldti",
    quechua: "Pájaro niño",
    region: "costa",
    regionNombre: "Costa / Corriente Peruana",
    estado: "vulnerable",
    estadoTexto: "Vulnerable",
    endemico: false,
    imagen: "pinguino_humboldt.jpg",
    descripcion: "Especie adaptada al clima árido costero gracias a las frías y ricas aguas de la Corriente de Humboldt. Presenta una banda negra en forma de herradura invertida en el pecho.",
    habitat: "Islas e islotes guaneros como Paracas, Ballestas y Punta San Juan (Ica).",
    dieta: "Piscívoro (anchoveta, pejerrey y calamares pequeños).",
    tamano: "65 - 70 cm de altura; peso de 4.5 kg",
    sonidoTipo: "rebuzno_marino",
    curiosidad: "Sus plumas rígidas y compactas forman una capa impermeable que atrapa aire para mantener su temperatura en aguas heladas."
  },
  {
    id: "guacamayo-escarlata",
    nombre: "Guacamayo Escarlata",
    cientifico: "Ara macao",
    quechua: "Wakamayu",
    region: "selva",
    regionNombre: "Selva Baja / Amazonía",
    estado: "comun",
    estadoTexto: "Preocupación Menor",
    endemico: false,
    imagen: "guacamayo_escarlata.jpg",
    descripcion: "Emblemático loro de gran tamaño con plumaje vivaz rojo escarlata, alas azules y amarillas. Con parejas que suelen mantenerse unidas de por vida.",
    habitat: "Bosques húmedos tropicales de dosel alto en Tambopata y Parque Nacional del Manu.",
    dieta: "Semillas duras, frutas silvestres, nueces y arcilla de colpas minerales para desintoxicarse.",
    tamano: "85 - 96 cm de longitud",
    sonidoTipo: "chillido_selva",
    curiosidad: "Visita diariamente las famosas 'colpas de arcilla' amazónicas para neutralizar toxinas de frutos inmaduros."
  }
];

// Avistamientos iniciales precargados
const AVISTAMIENTOS_DEFECTO = [
  {
    id: 1,
    especie: "Gallito de las Rocas",
    region: "Cusco (Bosque Nublado de San Pedro, Manu)",
    fecha: "2026-10-18",
    hora: "06:30",
    observador: "Carlos Mendoza (Guía Ornitológico)",
    rareza: "Avistamiento Destacado",
    notas: "Grupo de 4 machos realizando despliegues nupciales en lek cerca a la catarata. Excelente visibilidad."
  },
  {
    id: 2,
    especie: "Cóndor Andino",
    region: "Arequipa (Mirador Cruz del Cóndor)",
    fecha: "2026-10-19",
    hora: "08:45",
    observador: "Lucía Paredes",
    rareza: "Común en temporada",
    notas: "Una pareja adulta planeando a escasos 15 metros del mirador. Viento favorable del este."
  },
  {
    id: 3,
    especie: "Colibrí Maravilloso",
    region: "Amazonas (Huembo Birding Lodge)",
    fecha: "2026-10-20",
    hora: "11:15",
    observador: "Mateo Silva",
    rareza: "Raro y Endémico",
    notas: "Macho adulto cortejando con movimiento pendular de sus raquetas caudales en flores de Salvia."
  }
];

// --------------------------------------------------------------------------
// 2. GESTOR DE TEMA (Modo Claro / Modo Oscuro) - FUNCIÓN 1
// --------------------------------------------------------------------------
function initTheme() {
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("alas_theme") || "light";
  
  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      const nextTheme = current === "light" ? "dark" : "light";
      applyTheme(nextTheme);
      localStorage.setItem("alas_theme", nextTheme);
      showToast(`Modo ${nextTheme === "dark" ? "Oscuro" : "Claro"} activado`, "🌓");
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.setAttribute("aria-label", `Cambiar a modo ${theme === "light" ? "oscuro" : "claro"}`);
    themeToggle.innerHTML = theme === "dark" 
      ? `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>` 
      : `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }
}

// --------------------------------------------------------------------------
// 3. MENÚ DE NAVEGACIÓN MÓVIL
// --------------------------------------------------------------------------
function initMobileMenu() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const mainNav = document.getElementById("mainNav");
  if (!menuBtn || !mainNav) return;

  menuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("open");
    const isOpen = mainNav.classList.contains("open");
    menuBtn.setAttribute("aria-expanded", isOpen);
  });
}

// --------------------------------------------------------------------------
// 4. SISTEMA DE AUDIO SINTETIZADO (Web Audio API) - FUNCIÓN 2
// Genera cantos y trinos de aves realistas sin depender de archivos de audio
// --------------------------------------------------------------------------
let audioCtx = null;
let currentOsc = null;

function playBirdSound(type) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!audioCtx) audioCtx = new AudioContext();

    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    // Tipos de vocalizaciones representativas de aves peruanas
    if (type === "trino_agudo") {
      // Colibrí: Trinos de alta frecuencia modulada
      osc.type = "sine";
      osc.frequency.setValueAtTime(3200, now);
      osc.frequency.exponentialRampToValueAtTime(4500, now + 0.1);
      osc.frequency.exponentialRampToValueAtTime(2800, now + 0.2);
      osc.frequency.exponentialRampToValueAtTime(4800, now + 0.35);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.15, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

      osc.start(now);
      osc.stop(now + 0.55);
    } else if (type === "soplido_viento") {
      // Cóndor: Resonancia baja de viento y eco de cañón
      osc.type = "triangle";
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.linearRampToValueAtTime(220, now + 0.4);
      osc.frequency.linearRampToValueAtTime(90, now + 0.8);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.2, now + 0.2);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.9);

      osc.start(now);
      osc.stop(now + 0.95);
    } else if (type === "chillido_selva") {
      // Guacamayo: Llamado penetrante con armónicos
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(1400, now + 0.15);
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.4);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      osc.start(now);
      osc.stop(now + 0.5);
    } else {
      // Gallito de las rocas / default: Sonido gutural resonante
      osc.type = "sine";
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.linearRampToValueAtTime(750, now + 0.15);
      osc.frequency.linearRampToValueAtTime(350, now + 0.4);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.25, now + 0.05);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.5);

      osc.start(now);
      osc.stop(now + 0.55);
    }

    // Efecto visual en las barras de ondas si existen
    const waves = document.querySelector(".sound-waves");
    if (waves) {
      waves.classList.add("playing");
      setTimeout(() => waves.classList.remove("playing"), 600);
    }

  } catch (err) {
    console.warn("Audio no soportado en este entorno:", err);
  }
}

// --------------------------------------------------------------------------
// 5. CATÁLOGO DE ESPECIES: BUSCADOR, FILTROS Y MODAL - FUNCIÓN 3
// --------------------------------------------------------------------------
let activeRegionFilter = "todos";
let activeSearchQuery = "";

function initEspeciesPage() {
  const cardsContainer = document.getElementById("birdsGrid");
  const searchInput = document.getElementById("birdSearchInput");
  const filterButtons = document.querySelectorAll(".filter-btn");

  if (!cardsContainer) return;

  function renderCards() {
    const filtered = AVES_PERU.filter(bird => {
      const matchRegion = (activeRegionFilter === "todos") || (bird.region === activeRegionFilter);
      const query = activeSearchQuery.toLowerCase().trim();
      const matchText = bird.nombre.toLowerCase().includes(query) ||
                        bird.cientifico.toLowerCase().includes(query) ||
                        bird.regionNombre.toLowerCase().includes(query) ||
                        bird.descripcion.toLowerCase().includes(query);
      return matchRegion && matchText;
    });

    if (filtered.length === 0) {
      cardsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
          <h3>No se encontraron aves con ese criterio</h3>
          <p>Intenta con otro término de búsqueda o selecciona "Todas las regiones".</p>
        </div>
      `;
      return;
    }

    cardsContainer.innerHTML = filtered.map(bird => `
      <article class="bird-card" data-id="${bird.id}">
        <div class="card-img-wrapper">
          <img src="${bird.imagen}" alt="${bird.nombre} (${bird.cientifico})" loading="lazy">
          <div class="card-badges">
            <span class="badge badge-${bird.estado}">${bird.estadoTexto}</span>
            ${bird.endemico ? '<span class="badge badge-endemico">Endémica del Perú</span>' : ''}
          </div>
        </div>
        <div class="card-body">
          <span class="bird-scientific">${bird.cientifico}</span>
          <h3 class="bird-name">${bird.nombre}</h3>
          <p class="bird-desc">${bird.descripcion}</p>
          <div class="bird-meta">
            <div class="meta-item">
              <span>Hábitat principal</span>
              <strong>${bird.regionNombre}</strong>
            </div>
            <button class="btn btn-outline btn-sm btn-view-modal" data-id="${bird.id}" aria-label="Ver ficha completa de ${bird.nombre}">
              Ficha Técnica
            </button>
          </div>
        </div>
      </article>
    `).join("");

    // Agregar listeners a los botones de modal
    document.querySelectorAll(".btn-view-modal").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        openBirdModal(id);
      });
    });
  }

  // Listener del buscador en tiempo real
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      activeSearchQuery = e.target.value;
      renderCards();
    });
  }

  // Listener de botones de filtro
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeRegionFilter = btn.getAttribute("data-filter");
      renderCards();
    });
  });

  // Render inicial
  renderCards();
}

// Modal de Ficha Técnica
function openBirdModal(birdId) {
  const bird = AVES_PERU.find(b => b.id === birdId);
  if (!bird) return;

  const modal = document.getElementById("birdModal");
  if (!modal) return;

  modal.innerHTML = `
    <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <button class="modal-close" id="modalCloseBtn" aria-label="Cerrar ventana emergente">✕</button>
      <img src="${bird.imagen}" alt="${bird.nombre}" class="modal-header-img">
      <div class="modal-content">
        <div style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem; flex-wrap: wrap;">
          <span class="badge badge-${bird.estado}">${bird.estadoTexto}</span>
          <span class="badge badge-forest">${bird.regionNombre}</span>
          ${bird.endemico ? '<span class="badge badge-endemico">Exclusiva del Perú 🇵🇪</span>' : ''}
        </div>

        <h2 id="modalTitle" style="margin-bottom: 0.25rem;">${bird.nombre}</h2>
        <p style="font-style: italic; color: var(--text-muted); margin-bottom: 1.25rem;">${bird.cientifico} ${bird.quechua ? `• Nombre nativo: "${bird.quechua}"` : ''}</p>

        <p style="margin-bottom: 1.25rem; font-size: 1.05rem;">${bird.descripcion}</p>

        <!-- Reproductor interactivo de canto -->
        <div class="sound-player">
          <div class="sound-info">
            <div class="sound-waves">
              <div class="sound-bar"></div>
              <div class="sound-bar"></div>
              <div class="sound-bar"></div>
              <div class="sound-bar"></div>
            </div>
            <div>
              <strong style="font-size: 0.95rem; display: block;">Simulación de Canto / Vocalización</strong>
              <small style="color: var(--text-muted);">Frecuencia acústica natural</small>
            </div>
          </div>
          <button class="btn btn-accent btn-sm" id="btnPlaySound" data-sound="${bird.sonidoTipo}">
            ▶ Escuchar Canto
          </button>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1.5rem; padding: 1.25rem; background: var(--bg-subtle); border-radius: var(--radius-md);">
          <div>
            <strong style="display: block; font-size: 0.85rem; color: var(--text-muted);">HÁBITAT EXACTO</strong>
            <span style="font-size: 0.95rem;">${bird.habitat}</span>
          </div>
          <div>
            <strong style="display: block; font-size: 0.85rem; color: var(--text-muted);">ALIMENTACIÓN</strong>
            <span style="font-size: 0.95rem;">${bird.dieta}</span>
          </div>
          <div>
            <strong style="display: block; font-size: 0.85rem; color: var(--text-muted);">DIMENSIONES</strong>
            <span style="font-size: 0.95rem;">${bird.tamano}</span>
          </div>
          <div>
            <strong style="display: block; font-size: 0.85rem; color: var(--text-muted);">DATO CURIOSO</strong>
            <span style="font-size: 0.95rem;">${bird.curiosidad}</span>
          </div>
        </div>

        <div style="margin-top: 2rem; display: flex; justify-content: flex-end;">
          <a href="avistamientos.html" class="btn btn-primary btn-sm">Registrar Avistamiento de esta especie</a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  // Botón cerrar
  document.getElementById("modalCloseBtn").addEventListener("click", closeBirdModal);

  // Botón reproducir sonido
  document.getElementById("btnPlaySound").addEventListener("click", () => {
    playBirdSound(bird.sonidoTipo);
  });
}

function closeBirdModal() {
  const modal = document.getElementById("birdModal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Cierre de modal con ESC o clic exterior
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeBirdModal();
});

window.addEventListener("click", (e) => {
  const modal = document.getElementById("birdModal");
  if (modal && e.target === modal) {
    closeBirdModal();
  }
});

// --------------------------------------------------------------------------
// 6. PLANIFICADOR Y CALCULADORA DE EXPEDICIÓN (rutas.html) - FUNCIÓN 4
// --------------------------------------------------------------------------
function initPlanner() {
  const regionSelect = document.getElementById("planRegion");
  const daysInput = document.getElementById("planDays");
  const peopleInput = document.getElementById("planPeople");
  const levelSelect = document.getElementById("planLevel");
  const costOutput = document.getElementById("planCost");
  const birdsOutput = document.getElementById("planBirdsCount");
  const checklistContainer = document.getElementById("plannerChecklist");

  if (!regionSelect || !daysInput || !costOutput) return;

  const EQUIPO_BASE = [
    { id: "binoculares", label: "Binoculares ópticos 8x42 o 10x42 impermeables", checked: true },
    { id: "guia_campo", label: "Guía ilustrada de campo: 'Birds of Peru' (Schulenberg)", checked: true },
    { id: "calzado", label: "Botas de trekking con agarre para barro y roca", checked: true },
    { id: "repelente", label: "Repelente orgánico y bloqueador solar biodegradable", checked: false },
    { id: "impermeable", label: "Poncho o chaqueta impermeable transpirable", checked: false },
    { id: "libreta", label: "Libreta de campo impermeable o app de notas eBird", checked: false }
  ];

  function renderChecklist() {
    if (!checklistContainer) return;
    checklistContainer.innerHTML = EQUIPO_BASE.map(item => `
      <label class="checklist-item ${item.checked ? 'completed' : ''}">
        <input type="checkbox" id="check_${item.id}" ${item.checked ? 'checked' : ''}>
        <span>${item.label}</span>
      </label>
    `).join("");

    checklistContainer.querySelectorAll("input[type='checkbox']").forEach(ch => {
      ch.addEventListener("change", (e) => {
        const parent = e.target.closest(".checklist-item");
        if (e.target.checked) {
          parent.classList.add("completed");
        } else {
          parent.classList.remove("completed");
        }
      });
    });
  }

  function calculatePlan() {
    const days = parseInt(daysInput.value) || 1;
    const people = parseInt(peopleInput.value) || 1;
    const region = regionSelect.value;
    const level = levelSelect ? levelSelect.value : "medio";

    // Tarifas base estimadas por día por persona (en Soles PEN)
    let ratePerDay = 180;
    let expectedSpeciesPerDay = 25;

    if (region === "selva") {
      ratePerDay = 280; // Logística de botes y lodges
      expectedSpeciesPerDay = 45;
    } else if (region === "sierra") {
      ratePerDay = 210; // Guías de montaña y transporte
      expectedSpeciesPerDay = 30;
    } else if (region === "costa") {
      ratePerDay = 160; // Embarcaciones a islas guaneras
      expectedSpeciesPerDay = 20;
    }

    if (level === "experto") {
      ratePerDay *= 1.25;
      expectedSpeciesPerDay = Math.round(expectedSpeciesPerDay * 1.3);
    }

    const totalEstimate = Math.round(days * people * ratePerDay);
    const estimatedSpecies = Math.min(days * expectedSpeciesPerDay, 380);

    costOutput.textContent = `S/ ${totalEstimate.toLocaleString("es-PE")}`;
    if (birdsOutput) {
      birdsOutput.textContent = `~${estimatedSpecies} especies potenciales`;
    }
  }

  regionSelect.addEventListener("change", calculatePlan);
  daysInput.addEventListener("input", calculatePlan);
  peopleInput.addEventListener("input", calculatePlan);
  if (levelSelect) levelSelect.addEventListener("change", calculatePlan);

  renderChecklist();
  calculatePlan();
}

// --------------------------------------------------------------------------
// 7. REGISTRO DE AVISTAMIENTOS COMUNITARIOS (avistamientos.html) - FUNCIÓN 5
// --------------------------------------------------------------------------
function initSightingsPage() {
  const form = document.getElementById("sightingForm");
  const timeline = document.getElementById("sightingsTimeline");
  const filterRegion = document.getElementById("filterSightingRegion");

  // Inputs para live preview
  const inputEspecie = document.getElementById("sightEspecie");
  const inputRegion = document.getElementById("sightRegion");
  const inputFecha = document.getElementById("sightFecha");
  const inputNotas = document.getElementById("sightNotas");

  const previewName = document.getElementById("prevBirdName");
  const previewLoc = document.getElementById("prevBirdLoc");
  const previewNotes = document.getElementById("prevBirdNotes");

  if (!form || !timeline) return;

  // Cargar avistamientos desde LocalStorage o los por defecto
  let sightings = JSON.parse(localStorage.getItem("alas_sightings"));
  if (!sightings || sightings.length === 0) {
    sightings = [...AVISTAMIENTOS_DEFECTO];
    localStorage.setItem("alas_sightings", JSON.stringify(sightings));
  }

  // Previsualización en vivo
  function updatePreview() {
    if (previewName && inputEspecie) {
      previewName.textContent = inputEspecie.value.trim() || "Nombre del ave observada";
    }
    if (previewLoc && inputRegion) {
      previewLoc.textContent = inputRegion.value.trim() || "Lugar / Región del avistamiento";
    }
    if (previewNotes && inputNotas) {
      previewNotes.textContent = inputNotas.value.trim() || "Tus notas de campo aparecerán aquí en tiempo real...";
    }
  }

  [inputEspecie, inputRegion, inputFecha, inputNotas].forEach(input => {
    if (input) input.addEventListener("input", updatePreview);
  });

  // Renderizar la lista
  function renderSightings(regionFilter = "todas") {
    const list = sightings.filter(item => {
      if (regionFilter === "todas") return true;
      return item.region.toLowerCase().includes(regionFilter.toLowerCase());
    });

    if (list.length === 0) {
      timeline.innerHTML = `
        <div style="text-align: center; padding: 3rem; background: var(--bg-surface); border-radius: var(--radius-md); border: 1px solid var(--border-light);">
          <p>No hay registros de avistamientos para este filtro todavía. ¡Sé el primero en compartir el tuyo!</p>
        </div>
      `;
      return;
    }

    timeline.innerHTML = list.map(item => `
      <div class="sighting-entry">
        <div style="flex: 1;">
          <div class="sighting-entry-header">
            <div class="sighting-avatar">🦅</div>
            <div>
              <h4 style="margin: 0; font-size: 1.15rem;">${item.especie}</h4>
              <small style="color: var(--text-muted);">
                Observado por <strong>${item.observador}</strong> • ${item.fecha} (${item.hora || "Día"})
              </small>
            </div>
          </div>
          <div style="margin: 0.5rem 0;">
            <span class="badge badge-forest" style="font-size: 0.75rem;">📍 ${item.region}</span>
            <span class="badge badge-vulnerable" style="font-size: 0.75rem; margin-left: 0.25rem;">${item.rareza}</span>
          </div>
          <p style="margin: 0.5rem 0 0; font-size: 0.95rem; color: var(--text-secondary);">
            "${item.notas}"
          </p>
        </div>
        <button class="btn btn-outline btn-sm btn-delete-sighting" data-id="${item.id}" title="Eliminar registro">
          🗑️
        </button>
      </div>
    `).join("");

    // Botones para eliminar registro
    timeline.querySelectorAll(".btn-delete-sighting").forEach(btn => {
      btn.addEventListener("click", () => {
        const idToDelete = parseInt(btn.getAttribute("data-id"));
        deleteSighting(idToDelete);
      });
    });
  }

  function deleteSighting(id) {
    if (confirm("¿Deseas eliminar este registro de avistamiento?")) {
      sightings = sightings.filter(item => item.id !== id);
      localStorage.setItem("alas_sightings", JSON.stringify(sightings));
      renderSightings(filterRegion ? filterRegion.value : "todas");
      showToast("Avistamiento eliminado correctamente", "🗑️");
    }
  }

  // Envío del formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const especie = inputEspecie.value.trim();
    const region = inputRegion.value.trim();
    const fecha = inputFecha.value || new Date().toISOString().split("T")[0];
    const observador = document.getElementById("sightObservador") ? document.getElementById("sightObservador").value.trim() : "Observador Anónimo";
    const rareza = document.getElementById("sightRareza") ? document.getElementById("sightRareza").value : "Frecuente";
    const notas = inputNotas.value.trim();

    if (!especie || !region || !notas) {
      alert("Por favor completa los campos requeridos.");
      return;
    }

    const nuevoAvistamiento = {
      id: Date.now(),
      especie,
      region,
      fecha,
      hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      observador: observador || "Aficionado Ornitológico",
      rareza,
      notas
    };

    sightings.unshift(nuevoAvistamiento);
    localStorage.setItem("alas_sightings", JSON.stringify(sightings));

    form.reset();
    updatePreview();
    renderSightings(filterRegion ? filterRegion.value : "todas");
    showToast("¡Avistamiento registrado exitosamente!", "🕊️");
  });

  // Filtro por región
  if (filterRegion) {
    filterRegion.addEventListener("change", (e) => {
      renderSightings(e.target.value);
    });
  }

  // Pre-llenar fecha actual
  if (inputFecha) {
    inputFecha.value = new Date().toISOString().split("T")[0];
  }

  renderSightings();
  updatePreview();
}

// --------------------------------------------------------------------------
// 8. FORMULARIO DE CONTACTO, ACORDEÓN Y VALIDACIONES (contacto.html) - FUNCIÓN 6
// --------------------------------------------------------------------------
function initContactoPage() {
  const form = document.getElementById("contactForm");
  const messageInput = document.getElementById("contactMessage");
  const charCounter = document.getElementById("charCount");
  const accordionItems = document.querySelectorAll(".accordion-item");

  // Contador dinámico de caracteres
  if (messageInput && charCounter) {
    messageInput.addEventListener("input", () => {
      const remaining = 500 - messageInput.value.length;
      charCounter.textContent = `${messageInput.value.length} / 500 caracteres`;
      if (remaining < 50) {
        charCounter.style.color = "var(--status-critico)";
      } else {
        charCounter.style.color = "var(--text-muted)";
      }
    });
  }

  // Acordeón interactivo de preguntas frecuentes
  accordionItems.forEach(item => {
    const header = item.querySelector(".accordion-header");
    const body = item.querySelector(".accordion-body");

    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Cerrar los demás acordeones
      accordionItems.forEach(other => {
        other.classList.remove("active");
        const otherBody = other.querySelector(".accordion-body");
        if (otherBody) otherBody.style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add("active");
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });

  // Validación y envío del formulario
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("contactName").value.trim();
      const email = document.getElementById("contactEmail").value.trim();
      const role = document.getElementById("contactRole").value;
      const message = messageInput.value.trim();

      // Validación simple de correo
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Por favor ingresa un correo electrónico válido.");
        return;
      }

      if (message.length < 10) {
        alert("El mensaje debe contener al menos 10 caracteres.");
        return;
      }

      // Simulación de envío exitoso
      form.reset();
      if (charCounter) charCounter.textContent = "0 / 500 caracteres";
      showToast(`¡Gracias, ${name}! Tu mensaje ha sido recibido con éxito.`, "📨");
    });
  }
}

// --------------------------------------------------------------------------
// 9. CONTADORES ANIMADOS Y TRIVIA EN INICIO (index.html) - FUNCIÓN 7
// --------------------------------------------------------------------------
function initHomePage() {
  // Animación de contadores de números
  const statNumbers = document.querySelectorAll(".stat-number");
  
  if (statNumbers.length > 0) {
    statNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute("data-target")) || 0;
      let count = 0;
      const step = Math.max(1, Math.floor(target / 40));

      const timer = setInterval(() => {
        count += step;
        if (count >= target) {
          stat.textContent = target.toLocaleString("es-PE");
          clearInterval(timer);
        } else {
          stat.textContent = count.toLocaleString("es-PE");
        }
      }, 30);
    });
  }

  // Mini Trivia Interactiva
  const quizOptions = document.querySelectorAll(".quiz-opt-btn");
  const quizFeedback = document.getElementById("quizFeedback");

  if (quizOptions.length > 0 && quizFeedback) {
    quizOptions.forEach(btn => {
      btn.addEventListener("click", () => {
        const isCorrect = btn.getAttribute("data-correct") === "true";
        quizOptions.forEach(b => {
          b.disabled = true;
          if (b.getAttribute("data-correct") === "true") {
            b.style.backgroundColor = "rgba(16, 185, 129, 0.2)";
            b.style.borderColor = "var(--status-comun)";
          } else {
            b.style.opacity = "0.5";
          }
        });

        if (isCorrect) {
          quizFeedback.innerHTML = `<span style="color: var(--status-comun); font-weight: 700;">¡Correcto! 🎉</span> El Gallito de las Rocas (*Rupicola peruvianus*) fue declarado ave nacional oficial del Perú en 1941.`;
          playBirdSound("graznido_gutural");
        } else {
          quizFeedback.innerHTML = `<span style="color: var(--status-critico); font-weight: 700;">¡Casi!</span> Aunque el Cóndor es emblemático de los Andes, el ave nacional oficial es el Gallito de las Rocas (*Tunqui*).`;
        }
        quizFeedback.style.display = "block";
      });
    });
  }
}

// --------------------------------------------------------------------------
// 10. NOTIFICACIÓN TOAST GLOBAL
// --------------------------------------------------------------------------
function showToast(message, icon = "✨") {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Animar entrada
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  // Remover tras 4 segundos
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 3800);
}

// --------------------------------------------------------------------------
// 11. INICIALIZACIÓN GLOBAL
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMobileMenu();
  initHomePage();
  initEspeciesPage();
  initPlanner();
  initSightingsPage();
  initContactoPage();
});
