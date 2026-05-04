(function () {
  const navigation = [
    ['Početna', '#pocetna'],
    ['Usluge', '#usluge'],
    ['Kako radimo', '#kako-radimo'],
    ['Za koga radimo', '#za-koga'],
    ['O nama', '#o-nama'],
    ['Kontakt', '#kontakt'],
  ];

  const trustSignals = [
    ['01', 'Poslovna arhitektura', 'Jasna struktura procesa, odgovornosti i upravljačkog ritma.'],
    ['02', 'Operativna dijagnostika', 'Prepoznavanje uskih grla, preklapanja i točaka gdje sustav gubi jasnoću.'],
    ['03', 'Mjerljivi pokazatelji', 'KPI-jevi, pregledi i ritam praćenja koji pomažu donositi sigurnije odluke.'],
    ['04', 'Provedba u praksi', 'Fokus na promjeni koja se stvarno koristi, a ne na dokumentima koji ostaju u ladici.'],
  ];

  function footerLink(label, href) {
    return `<a href="${href}" class="footer-legal-link">${label}</a>`;
  }

  function enhanceFooter() {
    const footer = document.querySelector('footer');
    if (!footer || footer.dataset.optimaxFooterUpgraded === 'true') return;

    const cookieButton = Array.from(footer.querySelectorAll('button')).find((button) =>
      button.textContent.trim().includes('Postavke kolačića'),
    );

    if (!document.querySelector('[data-optimax-trust]')) {
      const trust = document.createElement('section');
      trust.dataset.optimaxTrust = 'true';
      trust.className = 'optimax-trust-section';
      trust.innerHTML = `
        <div class="optimax-trust-inner">
          <div class="optimax-trust-heading">
            <div>
              <p>Struktura i povjerenje</p>
              <h2>Za poslovanje koje traži jasniji sustav.</h2>
            </div>
            <span>OptiMAX Consulting pomaže uvesti strukturu tamo gdje svakodnevni rad, odgovornosti i odluke više ne mogu ovisiti o improvizaciji.</span>
          </div>
          <div class="optimax-trust-grid">
            ${trustSignals.map(([number, title, text]) => `
              <article>
                <small>${number}</small>
                <h3>${title}</h3>
                <p>${text}</p>
              </article>
            `).join('')}
          </div>
        </div>
      `;
      footer.parentNode.insertBefore(trust, footer);
    }

    footer.dataset.optimaxFooterUpgraded = 'true';
    footer.innerHTML = `
      <div class="optimax-corporate-footer">
        <div class="optimax-footer-grid">
          <div>
            <a href="#pocetna" class="optimax-footer-brand" aria-label="OptiMAX Consulting">
              Opti<span>MAX</span>
              <small>Consulting</small>
            </a>
            <p class="optimax-footer-position">POSLOVNA ARHITEKTURA</p>
            <p class="optimax-footer-copy">Strukturiramo procese, odgovornosti i upravljački ritam za tvrtke koje žele više jasnoće, reda i kontrole.</p>
          </div>
          <nav aria-label="Navigacija u podnožju">
            <h2>Navigacija</h2>
            <div>${navigation.map(([label, href]) => footerLink(label, href)).join('')}</div>
          </nav>
          <div>
            <h2>Kontakt</h2>
            <div>
              ${footerLink('kontakt@optimax-consulting.hr', 'mailto:kontakt@optimax-consulting.hr')}
              ${footerLink('+385 98 501 011', 'tel:+38598501011')}
              <p>Rijeka, Hrvatska</p>
            </div>
          </div>
          <div class="barteni-group-footnote">
            <h2>Barteni Group</h2>
            <p>OptiMAX Consulting je dio Barteni Grupe.</p>
            <div>
              <strong>Barteni Group d. o. o.</strong>
              <span>OIB: 74935482102</span>
              <span>MB: 04323904</span>
              <span>Osnovano: 2014</span>
              <span>Veličina: mikro poduzetnik</span>
              <span>Status: aktivan</span>
            </div>
          </div>
        </div>
        <div class="optimax-footer-bottom">
          <p>© 2026 OptiMAX Consulting. Sva prava pridržana.</p>
          <div>
            ${footerLink('Politika privatnosti', '#politika-privatnosti')}
            ${footerLink('Politika kolačića', '#politika-kolacica')}
          </div>
        </div>
      </div>
    `;

    const bottomLinks = footer.querySelector('.optimax-footer-bottom > div');
    if (cookieButton && bottomLinks) {
      cookieButton.className = 'footer-legal-link text-left';
      bottomLinks.appendChild(cookieButton);
    }
  }

  function start() {
    enhanceFooter();
    const observer = new MutationObserver(enhanceFooter);
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
