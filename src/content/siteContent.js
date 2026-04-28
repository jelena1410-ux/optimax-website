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
    { label: 'Podrška', href: '#podrska' },
    { label: 'Kontakt', href: '#kontakt' },
  ],
  navigationToggleLabel: 'Otvori navigaciju',

  ctas: {
    primary: 'Dogovorite poslovnu dijagnostiku',
    secondary: 'Pregled usluga',
  },

  hero: {
    eyebrow: 'OptiMAX Consulting',
    title: 'Gradimo poslovne sustave koji uvode red, preglednost i mjerljive rezultate.',
    text: 'Partner za poslovnu arhitekturu, operativnu jasnoću i upravljački ritam koji pomaže vodstvu donositi mirnije, preciznije odluke.',
    visual: {
      label: 'Struktura',
      step: '01',
      stepText: 'Dijagnostika',
      result: 'Mjerljivi rezultati',
    },
  },

  services: {
    eyebrow: 'Usluge',
    title: 'Sustavi koji poslovanje čine upravljivim.',
    text: 'Radimo na mjestima gdje organizacija treba više reda, manje operativne magle i jasniju vezu između odluke, provedbe i rezultata.',
    items: [
      {
        icon: 'layers',
        title: 'Poslovna arhitektura',
        price: '',
        text: 'Oblikujemo jasnu strukturu odgovornosti, procesa i odluka kako bi organizacija radila stabilnije i preglednije.',
      },
      {
        icon: 'clipboard',
        title: 'Operativna dijagnostika',
        price: '',
        text: 'Mapiramo uska grla, nejasne tokove rada i prostore u kojima se gubi vrijeme, fokus ili profitabilnost.',
      },
      {
        icon: 'chart',
        title: 'Sustavi mjerenja',
        price: '',
        text: 'Postavljamo praktične pokazatelje, izvještajne ritmove i upravljačke preglede koji podržavaju bolje odluke.',
      },
      {
        icon: 'shield',
        title: 'Organizacijska kontrola',
        price: '',
        text: 'Uvodi se red u prioritete, provedbu i praćenje bez nepotrebne administracije i paralelnih sustava.',
      },
    ],
  },

  process: {
    eyebrow: 'Kako radimo',
    title: 'Precizno, diskretno i usmjereno na provedbu.',
    text: 'Svaki angažman počinje razumijevanjem stvarne dinamike poslovanja. Rezultat nije prezentacija koja ostaje po strani, nego sustav rada koji vodstvo i timovi mogu nastaviti koristiti.',
    items: [
      'Razumijemo poslovni model, ciljeve i trenutačne napetosti u sustavu.',
      'Analiziramo procese, odgovornosti, podatke i točke odlučivanja.',
      'Definiramo ciljanu arhitekturu rada s jasnim prioritetima i metrikama.',
      'Pratimo provedbu kroz ritam koji ostaje upotrebljiv nakon projekta.',
    ],
  },

  audiences: {
    eyebrow: 'Za koga radimo',
    title: 'Za tvrtke koje su prerasle improvizaciju.',
    items: [
      'Vlasnici i uprave koje trebaju veću preglednost nad poslovanjem',
      'Rastuće tvrtke u kojima operativa više ne može ovisiti o improvizaciji',
      'Organizacije koje žele standardizirati procese bez gubitka fleksibilnosti',
      'Timovi koji trebaju jasnije prioritete, odgovornosti i upravljačke podatke',
    ],
  },

  strategicSupport: {
    eyebrow: 'Strateška poslovna podrška',
    title: 'Vanjski pogled koji uvodi unutarnju disciplinu.',
    text: 'Podržavamo vodstvo u postavljanju prioriteta, strukturiranju promjena i održavanju fokusa kada je poslovni sustav pod pritiskom rasta, složenosti ili promjene tržišta.',
    packages: [
      {
        title: 'Prioriteti',
        price: '',
        text: 'Jasna veza između strateških ciljeva i operativnog ritma.',
      },
      {
        title: 'Odgovornosti',
        price: '',
        text: 'Definirane uloge, ovlasti i točke odlučivanja.',
      },
      {
        title: 'Pregledi',
        price: '',
        text: 'Upravljački formati koji pokazuju ono što je bitno.',
      },
      {
        title: 'Provedba',
        price: '',
        text: 'Ritam praćenja koji održava fokus bez preopterećenja.',
      },
    ],
  },

  contact: {
    eyebrow: 'Kontakt',
    title: 'Dogovorite poslovnu dijagnostiku.',
    text: 'Kratak inicijalni razgovor dovoljan je za razumijevanje trenutačnog konteksta i procjenu gdje OptiMAX Consulting može stvoriti najveću vrijednost.',
    email: 'kontakt@optimax-consulting.hr',
    phone: '+385 00 000 000',
    phoneHref: 'tel:+385000000000',
    location: 'Hrvatska',
    form: {
      subject: 'Poslovna dijagnostika',
      fields: {
        name: {
          label: 'Ime i prezime',
          placeholder: 'Vaše ime',
          emailLabel: 'Ime i prezime',
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
