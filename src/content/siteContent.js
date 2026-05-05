// OptiMAX Consulting - centralna datoteka za sadržaj web stranice.
// Ovdje slobodno mijenjajte tekstove, opise, cijene i kontakt podatke.
// Nemojte mijenjati nazive ključeva poput "title", "text", "href" ili "items"
// ako niste sigurni, jer ih komponente koriste za prikaz stranice.

export const siteContent = {
  logo: {
    ariaLabel: 'OptiMAX Consulting',
    alt: 'OptiMAX Consulting - Poslovna arhitektura',
  },

  navigation: [
    { label: 'Početna', href: '#pocetna' },
    { label: 'Usluge', href: '#usluge' },
    { label: 'Kako radimo', href: '#kako-radimo' },
    { label: 'Za koga radimo', href: '#za-koga' },
    { label: 'O nama', href: '#o-nama' },
    { label: 'Kontakt', href: '#kontakt' },
  ],
  navigationToggleLabel: 'Otvori navigaciju',

  ctas: {
    primary: 'Dogovorite poslovnu dijagnostiku',
    secondary: 'Pogledajte kako radimo',
    contact: 'Pošaljite upit',
  },

  hero: {
    eyebrow: 'OPTIMAX CONSULTING',
    title: 'Kad poslovanje preraste improvizaciju, uvodimo sustav.',
    text: 'Pomažemo tvrtkama uvesti red u procese, odgovornosti i upravljačke podatke kako bi odluke bile jasnije, a rezultati mjerljiviji.',
    visual: {
      badge: 'Kako uvodimo red',
      before: {
        title: 'Od nejasnog poslovanja',
        items: [
          'Nejasne odgovornosti',
          'Ručno praćenje i Excel kaos',
          'Odluke bez jasnih podataka',
          'Operativa ovisi o pojedincima',
        ],
      },
      after: {
        title: 'Do sustava koji vodi posao',
        items: [
          'Jasne uloge i odgovornosti',
          'Pregledni upravljački podaci',
          'Odluke temeljene na brojkama',
          'Stabilna i ponovljiva operativa',
        ],
      },
    },
  },

  heroCards: [
    {
      number: '01',
      title: 'Poslovna dijagnostika',
      text: 'Brzo otkrivamo gdje poslovni sustav gubi jasnoću, fokus i upravljivost.',
    },
    {
      number: '02',
      title: 'Optimizacija procesa',
      text: 'Uređujemo tokove rada tako da odgovornosti i prioriteti postanu vidljivi.',
    },
    {
      number: '03',
      title: 'Sustavi upravljanja',
      text: 'Postavljamo ritam, pokazatelje i preglede koji vode sigurnije odluke.',
    },
  ],

  services: {
    eyebrow: 'Usluge',
    title: 'Sustavi koji poslovanje čine jasnijim i stabilnijim',
    text: 'Radimo na ključnim točkama gdje organizacija treba više reda, manje operativnog pritiska i bolju vezu između odluke, provedbe i rezultata.',
    items: [
      {
        icon: 'layers',
        title: 'Poslovna arhitektura',
        text: 'Jasna struktura odgovornosti, odluka i upravljačkog ritma.',
        benefit: 'Manje preklapanja, više jasnoće.',
      },
      {
        icon: 'clipboard',
        title: 'Operativna dijagnostika',
        text: 'Identifikacija uskih grla, gubitaka i slabih točaka u svakodnevnom radu.',
        benefit: 'Vidite gdje sustav zapinje.',
      },
      {
        icon: 'chart',
        title: 'Sustavi mjerenja',
        text: 'Postavljanje KPI pokazatelja, upravljačkih pregleda i ritma praćenja.',
        benefit: 'Brojevi koji vode odluke.',
      },
      {
        icon: 'shield',
        title: 'Organizacijska kontrola',
        text: 'Uvođenje reda, odgovornosti i kontrole bez mikromanagementa.',
        benefit: 'Kontrola bez kaosa.',
      },
    ],
  },

  process: {
    eyebrow: 'Kako radimo',
    title: 'Od dijagnostike do sustava koji se koristi u praksi.',
    text: 'Proces je strukturiran, ali praktičan. Fokus je na promjenama koje timovi mogu razumjeti, prihvatiti i ponavljati.',
    items: [
      {
        title: 'Dijagnostika',
        text: 'Razumijemo postojeći način rada, odgovornosti, podatke i ključna uska grla.',
      },
      {
        title: 'Strukturiranje',
        text: 'Definiramo procese, uloge, pokazatelje i ritam upravljanja.',
      },
      {
        title: 'Implementacija',
        text: 'Uvodimo dogovoreni sustav u svakodnevni rad, uz praktične alate i jasne odgovornosti.',
      },
      {
        title: 'Praćenje',
        text: 'Mjerimo učinak, prilagođavamo sustav i osiguravamo da promjene zaista žive u praksi.',
      },
    ],
  },

  principles: {
    eyebrow: 'Naš način rada',
    title: 'Manje složenosti. Više primjene.',
    text: 'Sustav mora pomoći ljudima da rade jasnije, a ne stvarati još jedan sloj administracije.',
    items: [
      {
        title: 'Razumijevanje prije promjene',
        text: 'Ne mijenjamo sustav napamet. Prvo razumijemo kako posao stvarno funkcionira.',
      },
      {
        title: 'Jednostavnost iznad kompleksnosti',
        text: 'Dobar sustav mora biti jasan, primjenjiv i razumljiv ljudima koji ga koriste.',
      },
      {
        title: 'Podaci koji vode odluke',
        text: 'Uvodimo pokazatelje koji pomažu upravljanju, a ne stvaraju dodatnu administraciju.',
      },
      {
        title: 'Provedba kao ključ',
        text: 'Vrijednost nije u dokumentu, nego u promjeni koja se stvarno provede.',
      },
    ],
  },

  audiences: {
    eyebrow: 'Za koga radimo',
    title: 'Za tvrtke koje žele više reda, pregleda i kontrole',
    items: [
      'rastuće tvrtke koje prerastaju improvizaciju',
      'vlasnici koji trebaju bolji pregled poslovanja',
      'organizacije koje žele jasnije odgovornosti',
      'timovi kojima trebaju prioriteti, ritam i struktura',
    ],
  },

  about: {
    eyebrow: 'O nama',
    title: 'O nama',
    companyParagraphs: [
      'OptiMAX Consulting nastao je iz dugogodišnjeg iskustva rada unutar kompleksnih poslovnih sustava, ali i iz razumijevanja stvarnih izazova s kojima se susreću tvrtke u fazi rasta.',
      'Vjerujemo da uspješno poslovanje ne nastaje slučajno — ono je rezultat jasne strukture, odgovornosti, dosljednosti i sposobnosti da se poslovanje promatra dugoročno. Upravo zato OptiMAX okuplja pristup koji spaja operativno iskustvo, strateško razmišljanje i moderno razumijevanje poslovanja u vremenu brzih promjena.',
    ],
    founder: {
      name: 'Jelena Bogović',
      role: 'Founder & Business Architect',
      paragraphs: [
        'Iza OptiMAX Consulting pristupa stoji Jelena Bogović, poslovna savjetnica i poduzetnica s više od 20 godina iskustva rada kroz korporativni i privatni sektor, na operativnim, prodajnim, upravljačkim i strateškim pozicijama.',
        'Tijekom karijere gradila je iskustvo kroz različite razine poslovanja — od direktnog rada s klijentima i vođenja poslovnica, do upravljanja prodajnom učinkovitošću, kvalitetom usluge i korisničkim iskustvom unutar međunarodnih sustava. Profesionalni razvoj uključuje i vodeće funkcije unutar bankarskog sektora te razvoj i upravljanje vlastitim poduzetničkim projektima i tvrtkama.',
        'Pripada generaciji koja je odrasla u analognom svijetu, u vremenu u kojem su disciplina, odgovornost, radna etika i stvaranje vrijednosti bili temelj profesionalnog razvoja — a danas djeluje u digitalnom i AI okruženju koje mijenja način poslovanja gotovo svakodnevno.',
        'Upravo iskustvo rada između ta dva potpuno različita svijeta donosi perspektivu koja danas postaje iznimno vrijedna: razumijevanje ljudi, sustava, operativne realnosti i potrebe da poslovanje ima jasnu strukturu, a ne samo brzinu.',
        'Kroz više od dva desetljeća rada razvila je pristup koji poslovanje promatra kao cjelinu — povezani sustav ljudi, procesa i odgovornosti koji mora funkcionirati stabilno, održivo i predvidivo.',
        'OptiMAX Consulting zato nije nastao kao teorijski koncept, već kao rezultat stvarnog iskustva rada u sustavima, upravljanja promjenama i svakodnevnog donošenja poslovnih odluka.',
      ],
      photo: {
        src: '/assets/jelena-bogovic-corporate.jpg',
        alt: 'Jelena Bogović, Founder & Business Architect',
      },
    },
    principles: {
      title: 'Način razmišljanja',
      text: 'OptiMAX pristup poslovanje promatra kroz jasnoću, odgovornost i provedbu.',
      items: [
        'Sustav prije improvizacije',
        'Jasnoća prije kompleksnosti',
        'Podaci prije pretpostavki',
        'Provedba prije strategije',
      ],
    },
  },

  expertise: {
    eyebrow: 'Tim i ekspertiza',
    title: 'Iskustvo na spoju operative, procesa i upravljanja.',
    items: [
      {
        title: 'Operativno razumijevanje',
        text: 'Razumijemo kako svakodnevni rad izgleda u praksi, ne samo na papiru.',
      },
      {
        title: 'Struktura i procesi',
        text: 'Pomažemo definirati jasne procese, odgovornosti i tokove odlučivanja.',
      },
      {
        title: 'Podaci i upravljanje',
        text: 'Uvodimo mjerljive pokazatelje koji pomažu vlasnicima i menadžmentu donositi bolje odluke.',
      },
      {
        title: 'Implementacija',
        text: 'Fokus nije samo na preporukama, nego na provedbi i stvarnoj primjeni.',
      },
    ],
  },

  signals: {
    eyebrow: 'Signali za promjenu',
    title: 'Kada sustav traži promjenu?',
    items: [
      'odgovornosti nisu jasno definirane',
      'odluke se donose bez pouzdanih podataka',
      'previše toga ovisi o Excel tablicama',
      'operativa stalno gasi požare',
      'vlasnik nema jasan pregled poslovanja',
      'isti problemi se ponavljaju iz mjeseca u mjesec',
    ],
    closing: 'Ako se ovo ponavlja, problem najčešće nije u ljudima, nego u sustavu.',
  },

  results: {
    eyebrow: 'Rezultati',
    title: 'Što se mijenja kada sustav postane jasan?',
    items: [
      'jasnije odgovornosti',
      'bolji pregled poslovanja',
      'brže i sigurnije odluke',
      'manje operativnog kaosa',
      'bolja kontrola troškova',
      'stabilniji ritam upravljanja',
    ],
  },

  strategicSupport: {
    eyebrow: 'Strateška poslovna podrška',
    title: 'Vanjski pogled koji uvodi unutarnju disciplinu.',
    text: 'Podržavamo vodstvo u postavljanju prioriteta, strukturiranju promjena i održavanju fokusa kada je poslovni sustav pod pritiskom rasta, složenosti ili promjene tržišta.',
    packages: [
      {
        title: 'Prioriteti',
        text: 'Jasna veza između strateških ciljeva i operativnog ritma.',
      },
      {
        title: 'Odgovornosti',
        text: 'Definirane uloge, ovlasti i točke odlučivanja.',
      },
      {
        title: 'Pregledi',
        text: 'Upravljački formati koji pokazuju ono što je bitno.',
      },
      {
        title: 'Provedba',
        text: 'Ritam praćenja koji održava fokus bez preopterećenja.',
      },
    ],
  },

  evidence: {
    eyebrow: 'Poslovni alati',
    title: 'Što uvodimo u poslovanje',
    text: 'Ne dodajemo sloj administracije. Uvodimo jasne alate koji pomažu vlasnicima i timovima vidjeti što je važno, tko je odgovoran i kako se napredak prati.',
    items: [
      {
        title: 'KPI pregled',
        text: 'Kratki upravljački pokazatelji koji daju jasnu sliku stanja poslovanja.',
      },
      {
        title: 'Operativni briefing',
        text: 'Dnevni, tjedni i mjesečni ritam komunikacije koji smanjuje improvizaciju.',
      },
      {
        title: 'Procesna mapa',
        text: 'Jasni tokovi rada, odgovornosti i točke odlučivanja.',
      },
      {
        title: 'Matrica odgovornosti',
        text: 'Pregled tko odlučuje, tko provodi i tko prati rezultat.',
      },
      {
        title: 'Ritam praćenja',
        text: 'Sustav kontrole koji ne opterećuje tim, nego održava fokus.',
      },
    ],
  },

  contact: {
    eyebrow: 'Kontakt',
    title: 'Dogovorite poslovnu dijagnostiku',
    text: 'Pošaljite kratku poruku i otvorit ćemo razgovor o tome gdje sustav može donijeti najviše jasnoće.',
    closing: 'Kad poslovanje preraste improvizaciju, vrijeme je za strukturu.',
    email: 'kontakt@optimax-consulting.hr',
    phone: '+385 98 501 011',
    phoneHref: 'tel:+38598501011',
    location: 'Rijeka, Hrvatska',
    form: {
      subject: 'Poslovna dijagnostika',
      fields: {
        name: {
          label: 'Ime',
          placeholder: 'Vaše ime',
          emailLabel: 'Ime',
        },
        company: {
          label: 'Tvrtka',
          placeholder: 'Naziv tvrtke',
          emailLabel: 'Tvrtka',
          fallback: '-',
        },
        email: {
          label: 'Email',
          placeholder: 'ime@tvrtka.hr',
          emailLabel: 'Email',
        },
        message: {
          label: 'Poruka',
          placeholder: 'Ukratko opišite što želite urediti u poslovnom sustavu.',
          emailLabel: 'Poruka',
        },
      },
    },
  },

  footer: {
    companyName: 'OptiMAX Consulting',
    positioning: 'POSLOVNA ARHITEKTURA',
    text: 'Strukturiramo procese, odgovornosti i upravljački ritam za tvrtke koje žele više jasnoće, reda i kontrole.',
    rights: 'Sva prava pridržana.',
    group: {
      relation: 'OptiMAX Consulting je dio Barteni Grupe.',
      company: 'Barteni Group d. o. o.',
      details: [
        'OIB: 74935482102',
        'MB: 04323904',
        'Osnovano: 2014',
        'Veličina: mikro poduzetnik',
        'Status: aktivan',
      ],
    },
    links: {
      privacy: 'Politika privatnosti',
      cookies: 'Politika kolačića',
      cookieSettings: 'Postavke kolačića',
    },
  },

  legal: {
    privacy: {
      eyebrow: 'Privatnost',
      title: 'Politika privatnosti',
      updated: 'Zadnje ažuriranje: svibanj 2026.',
      intro:
        'OptiMAX Consulting poštuje vašu privatnost i obvezuje se na zaštitu osobnih podataka.',
      sections: [
        {
          title: 'Prikupljanje podataka',
          text: 'Putem kontakt forme prikupljamo: ime i prezime, naziv tvrtke, email adresu i sadržaj upita.',
        },
        {
          title: 'Svrha obrade',
          text: 'Podaci se koriste isključivo za odgovor na upit, poslovnu komunikaciju te pripremu ponude ili dijagnostike.',
        },
        {
          title: 'Pravna osnova',
          text: 'Pravna osnova obrade je privola korisnika i legitimni interes za odgovor na poslovni upit.',
        },
        {
          title: 'Pohrana podataka',
          text: 'Podaci se čuvaju dok traje komunikacija, a najdulje 24 mjeseca.',
        },
        {
          title: 'Dijeljenje podataka',
          text: 'Podaci se ne prodaju niti ustupaju trećim stranama, osim tehničkim partnerima za hosting i email komunikaciju.',
        },
        {
          title: 'Prava korisnika',
          text: 'Imate pravo na pristup podacima, ispravak, brisanje, ograničenje obrade, prigovor i povlačenje privole.',
        },
        {
          title: 'Kontakt',
          text: 'Za pitanja o privatnosti možete nas kontaktirati na kontakt@optimax-consulting.hr.',
        },
        {
          title: 'AZOP',
          text: 'Možete se obratiti i AZOP-u, Agenciji za zaštitu osobnih podataka.',
        },
      ],
      note: 'Osobni podaci obrađuju se isključivo u svrhe navedene u ovoj politici privatnosti.',
    },
    cookies: {
      eyebrow: 'Kolačići',
      title: 'Politika kolačića',
      updated: 'Zadnje ažuriranje: svibanj 2026.',
      intro:
        'Ova stranica koristi kolačiće za osiguranje osnovnih funkcionalnosti.',
      sections: [
        {
          title: 'Nužni kolačići',
          text: 'Omogućuju rad stranice i ne mogu se isključiti.',
        },
        {
          title: 'Analitički kolačići',
          text: 'Koriste se za analizu korištenja stranice uz privolu.',
        },
        {
          title: 'Marketinški kolačići',
          text: 'Koriste se za oglašavanje. Trenutno se ne koriste.',
        },
        {
          title: 'Privola',
          text: 'Ne-nužni kolačići aktiviraju se isključivo uz vašu privolu.',
        },
        {
          title: 'Upravljanje',
          text: 'Postavke kolačića možete promijeniti u bilo kojem trenutku putem “Postavke kolačića”.',
        },
      ],
      table: [
        {
          category: 'Nužni kolačići',
          purpose: 'Omogućuju osnovni rad stranice i spremanje izbora o kolačićima.',
          status: 'Uvijek uključeno',
        },
        {
          category: 'Analitički kolačići',
          purpose: 'Mogu se koristiti za mjerenje posjećenosti i razumijevanje korištenja stranice.',
          status: 'Isključeno dok ne date privolu',
        },
        {
          category: 'Marketinški kolačići',
          purpose: 'Mogu se koristiti za oglašavanje, remarketing ili mjerenje kampanja.',
          status: 'Isključeno dok ne date privolu',
        },
      ],
      note: 'Ne-nužni kolačići aktiviraju se isključivo nakon odabira korisnika.',
    },
  },

  cookies: {
    bannerText: 'Koristimo nužne kolačiće za rad stranice, a analitičke samo uz vašu privolu.',
    buttons: {
      acceptAll: 'Prihvati sve',
      rejectOptional: 'Odbij neobavezne',
      settings: 'Postavke',
      save: 'Spremi postavke',
    },
    modalTitle: 'Postavke kolačića',
    modalText: 'Odaberite koje kategorije kolačića dopuštate. Nužni kolačići uvijek su uključeni jer omogućuju osnovni rad stranice.',
    categories: {
      necessary: {
        title: 'Nužni kolačići',
        text: 'Potrebni su za osnovni rad stranice i spremanje vašeg izbora.',
      },
      analytics: {
        title: 'Analitički kolačići',
        text: 'Pomažu razumjeti kako se stranica koristi. Aktiviraju se samo uz privolu.',
      },
      marketing: {
        title: 'Marketinški kolačići',
        text: 'Mogu služiti za oglašavanje i mjerenje kampanja. Aktiviraju se samo uz privolu.',
      },
    },
  },
};
