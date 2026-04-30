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
      'OptiMAX Consulting okuplja stručnjake usmjerene na uvođenje reda, jasnoće i mjerljivosti u poslovanje.',
      'Radimo s tvrtkama koje žele bolje razumjeti svoje procese, jasnije definirati odgovornosti i donositi odluke na temelje pouzdanih podataka.',
    ],
    highlights: ['sustav > improvizacija', 'jasnoća > kompleksnost', 'praksa > teorija'],
    closing: 'Problem najčešće nije u ljudima, nego u sustavu.',
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
    phone: '+385 00 000 000',
    phoneHref: 'tel:+385000000000',
    location: 'Hrvatska',
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
  },
};
