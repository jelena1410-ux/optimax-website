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
    title: 'Poslovni sustavi ne nastaju slučajno. Oni se grade.',
    paragraphs: [
      'Radimo s tvrtkama koje žele prestati upravljati kroz improvizaciju i početi upravljati kroz sustav.',
      'Fokus nije na dodatnim slojevima administracije, nego na jasnoći: tko odlučuje, što se prati i kako se posao stvarno vodi.',
      'Rezultat nije “bolji osjećaj u poslovanju”, nego konkretna promjena: jasnije odgovornosti, bolji pregled i odluke koje se donose brže i sigurnije.',
    ],
    viewpointTitle: 'Kako gledamo na poslovanje',
    highlights: [
      'Sustav umjesto improvizacije',
      'Jasnoća prije kompleksnosti',
      'Podaci prije pretpostavki',
      'Provedba prije strategije',
    ],
    closing: [
      'Problem rijetko nastaje zbog ljudi.',
      'Najčešće nastaje zbog sustava koji nije jasno postavljen.',
    ],
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

  contact: {
    eyebrow: 'Kontakt',
    title: 'Dogovorite poslovnu dijagnostiku',
    text: 'Pošaljite kratku poruku i otvorit ćemo razgovor o tome gdje sustav može donijeti najviše jasnoće.',
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
    rights: 'Sva prava pridržana.',
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
        'Ova politika privatnosti objašnjava kako OptiMAX Consulting obrađuje osobne podatke posjetitelja web stranice i osoba koje pošalju upit putem kontakt forme.',
      sections: [
        {
          title: 'Voditelj obrade',
          text: 'Voditelj obrade osobnih podataka je OptiMAX Consulting.',
        },
        {
          title: 'Podaci koje prikupljamo',
          text: 'Putem kontakt forme možemo prikupiti ime, naziv tvrtke, email adresu i sadržaj poruke koju nam pošaljete.',
        },
        {
          title: 'Svrha obrade',
          text: 'Podatke koristimo radi odgovora na upit, poslovne komunikacije te pripreme ponude ili poslovne dijagnostike.',
        },
        {
          title: 'Pravna osnova',
          text: 'Pravna osnova obrade je vaša privola kada nam se sami obratite te, prema potrebi, legitimni interes za odgovor na upit i nastavak poslovne komunikacije.',
        },
        {
          title: 'Rok čuvanja',
          text: 'Podatke čuvamo dok traje komunikacija, odnosno najdulje 24 mjeseca ako ne nastane ugovorni odnos, osim ako dulje čuvanje nije potrebno radi zakonskih obveza.',
        },
        {
          title: 'Primatelji podataka',
          text: 'Podaci se mogu prenijeti tehničkim pružateljima usluga hostinga i email komunikacije, isključivo u mjeri potrebnoj za rad web stranice i poslovnu komunikaciju.',
        },
        {
          title: 'Vaša prava',
          text: 'Imate pravo zatražiti pristup podacima, ispravak, brisanje, ograničenje obrade, prigovor na obradu te povlačenje privole kada je obrada utemeljena na privoli.',
        },
        {
          title: 'Kontakt za privatnost',
          text: 'Za pitanja o privatnosti možete nas kontaktirati na kontakt@optimax-consulting.hr.',
        },
        {
          title: 'Dodatne napomene',
          text: 'Osobne podatke ne prodajemo trećim stranama. Također imate pravo obratiti se Agenciji za zaštitu osobnih podataka (AZOP).',
        },
      ],
      note: 'Ovaj tekst služi kao poslovno informativna osnova i ne predstavlja pravni savjet.',
    },
    cookies: {
      eyebrow: 'Kolačići',
      title: 'Politika kolačića',
      updated: 'Zadnje ažuriranje: svibanj 2026.',
      intro:
        'Ova politika objašnjava kako OptiMAX web stranica koristi kolačiće i slične tehnologije radi tehničkog rada stranice i, ako korisnik pristane, za buduću analitiku ili marketing.',
      sections: [
        {
          title: 'Što su kolačići',
          text: 'Kolačići su male tekstualne datoteke koje web stranica može pohraniti u preglednik radi osnovnog rada, pamćenja postavki ili mjerenja korištenja stranice.',
        },
        {
          title: 'Vrste kolačića',
          text: 'Nužni kolačići omogućuju tehnički rad stranice. Analitički kolačići pomažu razumjeti korištenje stranice. Marketinški kolačići koriste se za oglašavanje ili mjerenje kampanja.',
        },
        {
          title: 'Privola za ne-nužne kolačiće',
          text: 'Ne-nužni kolačići, uključujući analitičke i marketinške, aktiviraju se tek nakon vaše privole. Trenutno se koriste samo nužni kolačići, ali je struktura spremna za buduće uključivanje analitike uz privolu.',
        },
        {
          title: 'Promjena odabira',
          text: 'Privolu možete promijeniti ili povući u bilo kojem trenutku putem poveznice “Postavke kolačića” u podnožju stranice.',
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
      note: 'Trenutno nisu uključeni analitički ni marketinški alati poput Google Analyticsa ili Meta Pixela.',
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
