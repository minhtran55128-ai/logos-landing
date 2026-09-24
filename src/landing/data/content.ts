import featureGoalsPng from "../assets/feature-goals.png"
import featureGoalsWebp from "../assets/feature-goals.webp"
import featureMaterialPng from "../assets/feature-material.png"
import featureMaterialWebp from "../assets/feature-material.webp"
import featureProgressPng from "../assets/feature-progress.png"
import featureProgressWebp from "../assets/feature-progress.webp"
import featureStudyStylePng from "../assets/feature-study-style.png"
import featureStudyStyleWebp from "../assets/feature-study-style.webp"
import iconInstagram from "../assets/icon-instagram.svg"
import iconLinkedin from "../assets/icon-linkedin.svg"
import iconMail from "../assets/icon-mail.svg"
import imageCtaJpg from "../assets/image-cta.jpg"
import imageCtaWebp from "../assets/image-cta.webp"
import imageHeroPng from "../assets/image-hero.png"
import imageHeroWebp from "../assets/image-hero.webp"
import imageMissionJpg from "../assets/image-mission.jpg"
import imageMissionWebp from "../assets/image-mission.webp"
import imageShowcaseOrganizePng from "../assets/image-showcase-organize.png"
import imageShowcaseOrganizeWebp from "../assets/image-showcase-organize.webp"
import imageWaitlistHeroJpg from "../assets/image-waitlist-hero.jpg"
import imageWaitlistHeroWebp from "../assets/image-waitlist-hero.webp"
import logoChalmers from "../assets/logo-chalmers.svg"
import logoKarlstad from "../assets/logo-karlstad-universitet.webp"
import logoKth from "../assets/logo-kth.svg"
import logoLiu from "../assets/logo-liu.svg"
import logoMalmo from "../assets/logo-malmo-universitet.svg"
import logoOrebro from "../assets/logo-orebro-universitet.svg"
import logoStockholmUniversity from "../assets/logo-stockholm-university.svg"
import logoUmea from "../assets/logo-umea-universitet.svg"
import logoUppsala from "../assets/logo-uppsala-universitet.svg"

export const WAITLIST_URL = "/waitlist.html"

export const SECTION_IDS = {
  features: "capabilities",
  mission: "mission",
  faq: "faqs",
} as const

export type LandingImage = {
  webp: string
  fallback: string
  // Pixel size of the files themselves (also stops layout shift while loading)
  width: number
  height: number
  alt: string
  // Pixels per CSS pixel, for files exported larger than they are shown. The
  // image displays at width / density, so a 4x file shows at a quarter of its size.
  density?: number
}

export const navLinks = [
  { label: "Funktioner.", targetId: SECTION_IDS.features },
  { label: "Uppdrag.", targetId: SECTION_IDS.mission },
  { label: "Vanliga frågor.", targetId: SECTION_IDS.faq },
]

export const ctaLabel = "Gå med i väntelistan."
export const loginLabel = "Logga in."

export const hero = {
  headline: "Få ut mer av varje pluggminut.",
  subheadline:
    "Lär dig mer på kortare tid med en studiekompis som anpassar sig efter dina kurser, dina framsteg och dina mål.",
  image: {
    webp: imageHeroWebp,
    fallback: imageHeroPng,
    width: 1944,
    height: 1108,
    alt: "Logos instrumentpanel som visar dagens studieuppgifter tillsammans med en personlig studieöversikt.",
  } satisfies LandingImage,
}

// Universities whose students use Logos — a claim about individual students,
// not an institutional partnership, so the heading is phrased that way.
export const trust = {
  heading: "Används av studenter i hela Sverige.",
  logos: [
    { id: "kth", src: logoKth, alt: "KTH" },
    // The source file is a white mark meant for a dark background; inverted
    // in CSS (.landing-trust-logo[data-invert]) so it reads on our white one.
    { id: "su", src: logoStockholmUniversity, alt: "Stockholms universitet", invert: true },
    { id: "uu", src: logoUppsala, alt: "Uppsala universitet" },
    { id: "liu", src: logoLiu, alt: "Linköpings universitet" },
    { id: "chalmers", src: logoChalmers, alt: "Chalmers tekniska högskola" },
    { id: "kau", src: logoKarlstad, alt: "Karlstads universitet" },
    { id: "mau", src: logoMalmo, alt: "Malmö universitet" },
    { id: "oru", src: logoOrebro, alt: "Örebro universitet" },
    { id: "umu", src: logoUmea, alt: "Umeå universitet" },
  ],
}

export type FeatureTone = "orange" | "yellow" | "green" | "teal"

export const features = {
  title: "Anpassat efter dig och dina studier.",
  intro:
    "Logos lär känna ditt material, dina mål och hur du pluggar för att ge dig hjälp som faktiskt passar det du behöver.",
  // Mobile only, in place of the product video placeholder box: that box is
  // also the target of a scroll-driven animation (feature cards drawing into
  // it) that doesn't read as anything meaningful at phone width, so mobile
  // gets this heading and copy instead.
  mobileHighlight: {
    title: "Allt för att du ska få mer ut av tiden du pluggar.",
    body: "Logos hjälper dig att komma igång, lära dig det som faktiskt behövs och hålla ihop plugget längs vägen.",
  },
  cards: [
    {
      tone: "orange" as FeatureTone,
      title: "Ditt material.",
      description: "Föreläsningar, anteckningar och kursmaterial.",
      image: {
        webp: featureMaterialWebp,
        fallback: featureMaterialPng,
        width: 821,
        height: 469,
        density: 821 / 267,
        alt: "Kursanteckningar om hjärtcykeln, staplade som kort.",
      } satisfies LandingImage,
    },
    {
      tone: "yellow" as FeatureTone,
      title: "Dina mål.",
      description: "Vad du vill uppnå och vad du arbetar mot.",
      image: {
        webp: featureGoalsWebp,
        fallback: featureGoalsPng,
        width: 616,
        height: 640,
        density: 4,
        alt: "Ett mål för att klara en tenta i linjär algebra, uppdelat i tre steg.",
      } satisfies LandingImage,
    },
    {
      tone: "green" as FeatureTone,
      title: "Dina framsteg.",
      description: "Vad du gjort och var du befinner dig.",
      image: {
        webp: featureProgressWebp,
        fallback: featureProgressPng,
        width: 764,
        height: 700,
        density: 4,
        alt: "En ämneslista i avtalsrätt som visar vilka delar som är klara och vilka som pågår.",
      } satisfies LandingImage,
    },
    {
      tone: "teal" as FeatureTone,
      title: "Hur du pluggar.",
      description: "Dina behov och preferenser.",
      image: {
        webp: featureStudyStyleWebp,
        fallback: featureStudyStylePng,
        width: 788,
        height: 824,
        density: 4,
        alt: "Studiepreferenser för att vara noggrann, förklara koncist och visa varje steg.",
      } satisfies LandingImage,
    },
  ],
}

export type ShowcaseBackground = "peach" | "cream" | "ivory"

export type ShowcaseCardContent = {
  titleLines: string[]
  body: string
  benefit: string
  imagePosition: "left" | "right"
  background: ShowcaseBackground
  image?: LandingImage
}

export const showcaseCards: ShowcaseCardContent[] = [
  {
    titleLines: ["Plugga rätt från start."],
    body: "Planera och prioritera utifrån dina mål, deadlines och vad du redan gjort.",
    benefit: "Så vet du vad du ska börja med och vad som kan vänta.",
    imagePosition: "right",
    background: "peach",
    // No `image` — ScrollScene.tsx fills this card's media with PlanningCardStack instead.
  },
  {
    titleLines: ["Förbered dig på det du faktiskt behöver kunna."],
    body: "Förklaringar, sammanfattningar och övningar utifrån ditt eget material.",
    benefit: "Så kan du lägga mer tid på att förstå och mindre på att sålla.",
    imagePosition: "left",
    background: "cream",
    // Screenshot missing in the design; Figma shows a grey placeholder here.
  },
  {
    titleLines: ["Allt på plats, ", "varje gång du pluggar."],
    body: "Planera och prioritera utifrån dina mål, deadlines och vad du redan gjort.",
    benefit: "Så kommer du snabbare igång och kan lägga tiden på själva plugget.",
    imagePosition: "right",
    background: "ivory",
    image: {
      webp: imageShowcaseOrganizeWebp,
      fallback: imageShowcaseOrganizePng,
      width: 1440,
      height: 765,
      alt: "En kursarbetsyta som samlar studieplan, material, viktiga datum och instruktioner på ett ställe.",
    },
  },
]

export const mission = {
  // Decorative photo behind the Logos lockup, so it carries no alt text.
  image: {
    webp: imageMissionWebp,
    fallback: imageMissionJpg,
    width: 1400,
    height: 875,
    alt: "",
  } satisfies LandingImage,
  titleLines: ["Byggt av studenter, ", "för studenter."],
  paragraphs: [
    "Logos började med ett par lata studenter som älskar att lära sig, men hatar allt onödigt jobb som ofta kommer med att plugga.",
    "Vi tror inte att fler timmar automatiskt betyder mer lärande. Vi vill göra det enklare att förstå på riktigt, få mer ut av tiden du lägger ner och få mer tid över till livet utanför plugget.",
    "Det är därför vi bygger Logos.",
  ],
}

export const faq = {
  title: "Vanliga Frågor",
  items: [
    {
      question: "Vad är Logos?",
      answer:
        "Logos är en personlig studieplattform som förstår dina kurser, dina framsteg och dina preferenser. Den hjälper dig att fokusera på det som är viktigt, lära dig mer effektivt och få ut mer av varje studietimme.",
    },
    {
      question: "Hur skiljer sig Logos från ChatGPT eller NotebookLM?",
      answer:
        [
        "ChatGPT och NotebookLM gör vad du ber om. Logos vet vad du behöver.",
        "Skillnaden är helheten. Logos håller ihop dina kurser, ditt material, dina mål och dina deadlines, och följer dina framsteg över tid.",
        "Så när du frågar om något får du hjälp utifrån var du befinner dig i dina studier, inte bara utifrån frågan du ställer.",
        "Resultatet: Logos kan guida ett pluggpass med rätt sammanhang, koppla förklaringar till din faktiska kurs, skapa relevant studiematerial och hålla dig på väg mot dina mål.",
      ].join("\n\n"),
    },
    {
      question: "Är Logos gratis?",
      answer:
        "Vi planerar att erbjuda en gratis version. Under den första testperioden kommer tidiga användare att kunna prova Logos gratis.",
    },
    {
      question: "Vad kan jag använda Logos till?",
      answer:
        [
        "Logos bygger upp en levande bild av dina studier och använder den i allt du gör.",
        "Du lägger in dina kurser, material, deadlines och mål. Medan du pluggar håller Logos ihop din studiekontext: vad du arbetar mot, vad du gått igenom, dina planer och det arbete du redan lagt ner.",
        "Sedan använder Logos den förståelsen överallt i produkten. Det lyfter fram det som är viktigast just nu, förklarar saker utifrån din faktiska kurs, hjälper dig arbeta igenom materialet, skapar relevanta sammanfattningar, flashcards och quiz, och kopplar dagens plugg till målet du arbetar mot.",
        "Ju mer Logos vet om dina studier, desto mindre behöver du hantera AI:et, och desto mer kan det fokusera på att hjälpa dig plugga.",
      ].join("\n\n"),
    },
    {
      question: "När kan jag börja använda Logos?",
      answer:
        "Logos testas just nu med de första användarna. Gå med i väntelistan så hör vi av oss när fler platser öppnar.",
    },
  ],
}

export const closingCta = {
  title: "Plugga bättre med oss.",
  body: "Bli en av de första att testa Logos och hjälp oss bygga studieverktyget vi själva önskar fanns.",
  // Decorative photo behind the text, so it carries no alt text.
  image: {
    webp: imageCtaWebp,
    fallback: imageCtaJpg,
    width: 2000,
    height: 1333,
    alt: "",
  } satisfies LandingImage,
}

// TODO: no destinations exist yet for Integritet or Blogg. An item with no
// `href` renders as an inert placeholder anchor until one is supplied.
export type FooterLink = { label: string; href?: string }
export type FooterSocial = FooterLink & { icon: string; width: number; height: number }

const footerSocials: FooterSocial[] = [
  { label: "Instagram", icon: iconInstagram, width: 20, height: 20 },
  { label: "E-post", icon: iconMail, width: 22, height: 22 },
  { label: "LinkedIn", icon: iconLinkedin, width: 20, height: 20 },
]

const footerLinks: FooterLink[] = [
  { label: "Integritet" },
  { label: "Villkor", href: "/terms.html" },
  { label: "Blogg" },
]

export const footer = {
  tagline: "Designat av studenter",
  copyright: "Logos - 08/2026",
  socialsLabel: "Sociala medier",
  socials: footerSocials,
  links: footerLinks,
}

// The 4-step waitlist flow at /waitlist.html. Steps 1 and 3 require an answer
// before Continue is enabled; step 2's fields are both optional, so Continue is
// always enabled there. "Hoppa över" on steps 2 and 3 skips straight to the next
// step without requiring an answer.
export const waitlist = {
  step1: {
    heroImage: {
      webp: imageWaitlistHeroWebp,
      fallback: imageWaitlistHeroJpg,
      width: 1124,
      height: 702,
      alt: "",
    } satisfies LandingImage,
    heroTitle: "Få tidig tillgång till Logos.",
    heroSubtitle:
      "Vi öppnar Logos stegvis för mindre grupper av studenter medan vi förbättrar produkten.",
    // TODO: static placeholder, not wired to a real signup count.
    heroCount: "200+ studenter i kö",
    formTitle: "Gå med i väntelistan.",
    nameLabel: "Namn. *",
    namePlaceholder: "Julia",
    nameError: "Ange ditt namn.",
    emailLabel: "E-post. *",
    emailPlaceholder: "namn@example.com",
    emailError: "Ange en giltig e-postadress.",
    continueLabel: "Fortsätt",
  },
  step2: {
    title: "Lite om hur du pluggar...",
    subtitle: "Hjälp oss förstå hur du pluggar idag och vad som står i vägen.",
    programLabel: "Vad läser du?",
    // Search-as-you-type: the field shows these as quick picks, but any of the
    // options below is one keystroke away, and free text is accepted too.
    programPlaceholder: "Skriv eller välj program",
    // The 8 most-searched programs lead the list, so they're what show up
    // before the visitor has typed anything; the rest are just as findable by
    // typing, and the field accepts free text for anything not listed here.
    programOptions: [
      "Civilingenjör",
      "Sjuksköterskeprogrammet",
      "Ekonomi",
      "Juristprogrammet",
      "Psykologprogrammet",
      "Lärarprogrammet",
      "Data och IT",
      "Samhällsvetenskap",
      "Högskoleingenjör",
      "Systemvetenskap",
      "Naturvetenskap",
      "Civilekonom",
      "Läkarprogrammet",
      "Tandläkarprogrammet",
      "Socionomprogrammet",
      "Personalvetare",
      "Statsvetenskap",
      "Humaniora",
      "Arkitektprogrammet",
      "Medie- och kommunikationsvetenskap",
      "Annat",
    ],
    hoursLabel: "Hur många timmar pluggar du i veckan?",
    hoursPlaceholder: "Välj antal timmar",
    hoursOptions: ["Under 10 timmar", "10–20 timmar", "Över 20 timmar"],
    frustrationLabel: "Vad är mest frustrerande med att plugga just nu?",
    frustrationPlaceholder:
      "Tänk på det som tar mest kraft, skapar frustration eller står i vägen för effektivt pluggande.",
    continueLabel: "Fortsätt",
    skipLabel: "Hoppa över",
  },
  step3: {
    title: "Skulle du vara öppen för att testa Logos med oss?",
    // TODO: confirm the real early-access offer before shipping; kept general
    // until then rather than promising a specific free period.
    subtitle: "Vi hör av oss med mer information om du är intresserad.",
    choices: ["Ja, låter bra", "Kanske, berätta mer först", "Inte just nu"],
    continueLabel: "Fortsätt",
    skipLabel: "Hoppa över",
  },
  step4: {
    title: "Du är med.",
    // TODO: "200+" is static placeholder copy, not a real signup count.
    subtitle: "Du har gått med i kön tillsammans med 200+ andra studenter.",
    body: "Vi bjuder in studenter stegvis i takt med att vi förbättrar produkten. Vi hör av oss så fort det finns en plats för dig.",
    doneLabel: "Klar",
  },
}
