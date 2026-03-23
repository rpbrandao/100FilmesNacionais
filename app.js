// app.js — 100 Filmes Nacionais

(function () {
  'use strict';

  // ============================================================
  // STATE
  // ============================================================
  let state = {
    filtroGenero: 'todos',
    busca: '',
    ordenacao: 'rank',
    view: 'grid',
  };

  // ============================================================
  // HELPERS
  // ============================================================

  function estrelas(nota) {
    const n = Math.round(nota / 2);
    return '★'.repeat(n) + '☆'.repeat(5 - n);
  }

  function notaCor(nota) {
    if (nota >= 9) return 'var(--red)';
    if (nota >= 8) return 'var(--gold)';
    return '#888';
  }

  // Paleta de cores de poster por inicial
  const POSTER_PALETTES = [
    ['#1A1410', '#C0392B'],
    ['#0D1B2A', '#1D6FA4'],
    ['#1A2311', '#3D7A2F'],
    ['#1F1020', '#7E3D9E'],
    ['#201210', '#B8883A'],
    ['#0E1C1A', '#1A7A72'],
    ['#1A1318', '#C0394A'],
    ['#151520', '#5A62B8'],
  ];

  function posterPlaceholder(titulo, rank) {
    const idx = rank % POSTER_PALETTES.length;
    const [bg, accent] = POSTER_PALETTES[idx];
    const letra = titulo.charAt(0).toUpperCase();
    return { bg, accent, letra };
  }

  function renderPosterDiv(filme, heightClass) {
    const { bg, accent, letra } = posterPlaceholder(filme.titulo, filme.rank);
    return `
      <div class="card-poster" style="background:${bg};">
        <div class="card-poster-placeholder" style="color:${accent};">${letra}</div>
        <span class="card-badge">#${filme.rank}</span>
      </div>
    `;
  }

  function renderModalPoster(filme) {
    const { bg, accent, letra } = posterPlaceholder(filme.titulo, filme.rank);
    return `
      <div class="modal-poster" style="background:${bg};">
        <div class="modal-poster-placeholder" style="color:${accent}; font-size:96px;">${letra}</div>
      </div>
    `;
  }

  // ============================================================
  // FILTRO / ORDENAÇÃO
  // ============================================================
  function filmesVisiveis() {
    let lista = [...FILMES];

    // filtro gênero
    if (state.filtroGenero !== 'todos') {
      lista = lista.filter(f => f.genero === state.filtroGenero);
    }

    // busca
    if (state.busca.trim()) {
      const q = state.busca.toLowerCase().trim();
      lista = lista.filter(f =>
        f.titulo.toLowerCase().includes(q) ||
        f.diretor.toLowerCase().includes(q) ||
        (f.sinopse && f.sinopse.toLowerCase().includes(q))
      );
    }

    // ordenação
    lista.sort((a, b) => {
      switch (state.ordenacao) {
        case 'ano':    return a.ano - b.ano;
        case 'titulo': return a.titulo.localeCompare(b.titulo, 'pt-BR');
        case 'nota':   return b.nota - a.nota;
        default:       return a.rank - b.rank;
      }
    });

    return lista;
  }

  // ============================================================
  // RENDER DESTAQUES
  // ============================================================
  function renderDestaques() {
    const grid = document.getElementById('destaques-grid');
    const top5 = FILMES.slice(0, 5);

    grid.innerHTML = top5.map((f, i) => {
      const cls = i === 0 ? 'destaque-main' : 'destaque-sec';
      return `
        <div class="${cls}">
          <div class="card" data-rank="${f.rank}" role="button" tabindex="0"
               aria-label="Ver detalhes de ${f.titulo}">
            ${renderPosterDiv(f, i === 0 ? '380px' : '180px')}
            <div class="card-body">
              <div class="card-meta">
                <span>${f.ano}</span>
                <span class="dot">·</span>
                <span>${f.duracao} min</span>
                <span class="dot">·</span>
                <span style="text-transform:capitalize;">${f.genero}</span>
              </div>
              <div class="card-titulo" style="font-size:${i === 0 ? '22px' : '16px'}">
                ${f.titulo}
              </div>
              ${i === 0 ? `<p class="card-sinopse">${f.sinopse}</p>` : ''}
              <div class="card-nota">
                <span class="estrelas">${estrelas(f.nota)}</span>
                <span class="valor">${f.nota.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // ============================================================
  // RENDER LISTA
  // ============================================================
  function renderLista() {
    const grid = document.getElementById('filmes-grid');
    const empty = document.getElementById('empty-state');
    const badge = document.getElementById('count-badge');
    const lista = filmesVisiveis();

    badge.textContent = `${lista.length} filme${lista.length !== 1 ? 's' : ''}`;

    if (lista.length === 0) {
      grid.innerHTML = '';
      empty.style.display = 'block';
      return;
    }
    empty.style.display = 'none';

    grid.innerHTML = lista.map(f => `
      <div class="card" data-rank="${f.rank}" role="button" tabindex="0"
           aria-label="Ver detalhes de ${f.titulo}">
        ${renderPosterDiv(f)}
        <div class="card-body">
          <div class="card-meta">
            <span>${f.ano}</span>
            <span class="dot">·</span>
            <span style="text-transform:capitalize;">${f.genero}</span>
          </div>
          <div class="card-titulo">${f.titulo}</div>
          <p class="card-sinopse">${f.sinopse}</p>
          <div class="card-nota">
            <span class="estrelas" style="color:${notaCor(f.nota)}">${estrelas(f.nota)}</span>
            <span class="valor">${f.nota.toFixed(1)}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  // ============================================================
  // MODAL
  // ============================================================
  function openModal(rank) {
    const f = FILMES.find(x => x.rank === rank);
    if (!f) return;

    const overlay = document.getElementById('modal-overlay');
    const body = document.getElementById('modal-body');

    const elencoHtml = f.elenco && f.elenco.length
      ? `<div class="modal-info-item">
           <span class="modal-info-label">Elenco</span>
           <span class="modal-info-value">${f.elenco.join(', ')}</span>
         </div>`
      : '';

    body.innerHTML = `
      ${renderModalPoster(f)}
      <div class="modal-content">
        <div class="modal-meta">
          <span class="modal-rank">#${f.rank} no ranking</span>
          <span class="modal-genero" style="text-transform:capitalize;">${f.genero}</span>
        </div>
        <h2 class="modal-titulo">${f.titulo}</h2>
        <p class="modal-original">${f.ano} · Direção: ${f.diretor}</p>
        <div class="modal-info-row">
          <div class="modal-info-item">
            <span class="modal-info-label">Ano</span>
            <span class="modal-info-value">${f.ano}</span>
          </div>
          <div class="modal-info-item">
            <span class="modal-info-label">Duração</span>
            <span class="modal-info-value">${f.duracao ? f.duracao + ' min' : '—'}</span>
          </div>
          <div class="modal-info-item">
            <span class="modal-info-label">Gênero</span>
            <span class="modal-info-value" style="text-transform:capitalize;">${f.genero}</span>
          </div>
          ${elencoHtml}
        </div>
        <p class="modal-sinopse">${f.sinopse}</p>
        <div class="modal-nota-grande">
          <span class="modal-nota-n">${f.nota.toFixed(1)}</span>
          <span class="modal-nota-max">/ 10</span>
          <span class="modal-nota-label" style="margin-left:8px;">Nota da crítica</span>
        </div>
      </div>
    `;

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    document.getElementById('modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
  }

  // ============================================================
  // EVENTOS
  // ============================================================
  function setupEvents() {
    // Navegação de gênero
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.filtroGenero = btn.dataset.filter;
        renderLista();
      });
    });

    // Busca
    let searchTimer;
    document.getElementById('search-input').addEventListener('input', e => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        state.busca = e.target.value;
        renderLista();
      }, 250);
    });

    // Ordenação
    document.getElementById('sort-select').addEventListener('change', e => {
      state.ordenacao = e.target.value;
      renderLista();
    });

    // Toggle de visualização
    document.querySelectorAll('.view-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.view = btn.dataset.view;
        const grid = document.getElementById('filmes-grid');
        grid.classList.toggle('list-view', state.view === 'list');
      });
    });

    // Clique nas cards (delegação de eventos)
    document.addEventListener('click', e => {
      const card = e.target.closest('.card[data-rank]');
      if (card) openModal(Number(card.dataset.rank));
    });

    // Acessibilidade: enter nas cards
    document.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        const card = e.target.closest('.card[data-rank]');
        if (card) openModal(Number(card.dataset.rank));
      }
      if (e.key === 'Escape') closeModal();
    });

    // Fechar modal
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('modal-overlay').addEventListener('click', e => {
      if (e.target === document.getElementById('modal-overlay')) closeModal();
    });
  }

  // ============================================================
  // HERO DINÂMICO
  // ============================================================
  function setupHero() {
    // Atualiza a contagem de décadas dinamicamente
    const anos = FILMES.map(f => Math.floor(f.ano / 10) * 10);
    const decadas = new Set(anos).size;
    const statNs = document.querySelectorAll('.stat-n');
    if (statNs[1]) statNs[1].textContent = decadas;

    // Contagem de gêneros únicos
    const generos = new Set(FILMES.map(f => f.genero)).size;
    if (statNs[2]) statNs[2].textContent = generos + '+';
  }

  // ============================================================
  // INIT
  // ============================================================
  function init() {
    renderDestaques();
    renderLista();
    setupEvents();
    setupHero();
  }

  document.addEventListener('DOMContentLoaded', init);

})();
