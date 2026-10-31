"use client";

import Image from "next/image";
import Link from "next/link";
import ContactForm from "./contactForm";
import SponsorCard from "./SponsorCard";

const sponsors = [
  {
    name: "MD Capital",
    logo: "/md-capital-logo.png",
    description:
      "MD CAPITAL е водеща инвестиционна компания, специализирана в строителството на съвременни, екосъобразни и висококачествени сгради. С дългогодишен опит в индустрията ние сме надежден партньор в реализирането на устойчиви и иновативни проекти, съчетаващи естетика и функционалност. В MD Capital не просто изграждаме сгради – ние създаваме възможности, оформяме среда и вдъхваме живот на идеи. Вярваме, че всяка сграда е повече от проект – тя е дългосрочна стойност, визия и отговорност към бъдещето. Успехът ни се гради върху задълбочени анализи, иновативно мислене и внимание към всеки детайл. Ние трансформираме перспективни локации в съвременни и устойчиви пространства. За нас истинската стойност не се измерва единствено в реализирани проекти, а в доверието и дългосрочните партньорства, които изграждаме.",
    featured: true,
  },
  {
    name: "HYDE",
    logo: "/hyde-logo.jpg",
    description: "",
    featuredAfterGeneral: true,
  },
  {
    name: "Simeonovsko 12",
    logo: "/simeonovsko12-logo.png",
    description: "",
    featuredAfterGeneral: true,
  },
  {
    name: "Балканска застрахователно-брокерска къща",
    logo: "/bzbk-logo.png",
    description: "",
    featuredAfterPair: true,
  },
  {
    name: "Ралица Узунова",
    logo: "/ralitsa-uzunova-logo.jpg",
    description:
      "Остеоестет и създател на Фейс Фитнес. Освободи • Активирай • Поддържай.",
  },
  {
    name: "Скай Запер",
    logo: "/sky-zapper-logo.jpg",
    link: "https://zapper.sky.bg/",
    description:
      "Българска компания за уреди за биорезонансни терапии — за професионална работа и домашна употреба.",
  },
  {
    name: "A&G Luxury Boutique",
    logo: "/ag-luxury-boutique-logo.jpg",
    description:
      "A&G Luxury Boutique във Виена и София – фини бижута и персонални консултации.",
  },
  {
    name: "Grand Hotel Astoria",
    logo: "/grand-hotel-astoria-logo.png",
    link: "https://www.astoriagrandhotel.bg/",
    description:
      "Луксозен хотел в сърцето на града, предлагащ комфорт и безупречно обслужване.",
  },
  {
    name: "Derma Act",
    logo: "/derma-act-logo.png",
    link: "https://derma-act.bg/",
    description:
      "Водеща клиника по дерматология и естетична медицина с най-съвременна апаратура.",
  },
  {
    name: "Dr. Bastet",
    logo: "/dr-bastet-logo.jpg",
    link: "https://drbastet.com/",
    description:
      "Dr. Bastet съчетава биохакинг и нутригеномика в натурални хранителни добавки за глюкозен баланс, дълголетие и метаболитно здраве. И това е само началото.",
  },
  {
    name: "DexaFit Sofia",
    logo: "/dexafit-sofia-logo.png",
    link: "https://www.sofia.dexafit.com/bg",
    description:
      "DexaFit Sofia е високотехнологичен медицински център, който предлага персонализирани анализи.",
  },
  {
    name: "VAYA Beach Resort",
    logo: "/vaya-beach-resort-logo.png",
    link: "https://www.vayabeachresort.com/",
    description:
      "VAYA Beach Resort е луксозен курорт на плажа Иракли – 36 дизайнерски вили сред природата на Черноморието, с ресторанти, уелнес и пространство за възстановяване далеч от градския ритъм.",
  },
  {
    name: "NUVIVA Medical Center",
    logo: "/nuviva-medical-center-logo.svg",
    link: "https://nuviva.bg/",
    description:
      "NUVIVA е медицински център в София с мултидисциплинарен екип, собствена лаборатория и интегриран подход към превенцията, диагностиката и дългосрочното здраве – включително педиатрия и longevity програми.",
  },
  {
    name: "Hongqi България",
    logo: "/hongqi-bulgaria-logo.png",
    link: "https://hongqi.bg/",
    description:
      "Hongqi България представя премиум автомобилите на легендарния китайски бранд – седани и SUV с фокус върху комфорт, технологии и изискано присъствие.",
  },
  {
    name: "Touch & Care Center",
    logo: "/touch-and-care-logo.png",
    link: "https://touchandcare.bg/",
    description:
      "Touch&Care Center е пространство за красота, уелнес и пилатес реформър, създадено около идеята за цялостна грижа за човека. Концепцията му събира на едно място движение, професионална грижа за лице и тяло, апаратни и мануални терапии, авторски масажи, фризьорство, маникюр и педикюр. В основата на Touch&Care стои разбирането, че красотата, добрата физическа форма и усещането за баланс са взаимно свързани. Затова всяка грижа се разглежда индивидуално – според потребностите, начина на живот и целите на конкретния човек. Центърът надгражда класическата представа за място за красота, като обединява различни специалисти и направления в една обща философия: внимание към тялото, движение, възстановяване и поддържане на естественото добро състояние във времето. Именно тази цялостна перспектива доближава философията на Touch&Care до съвременната идея за longevity – не просто повече години, а повече качество в тях: добро движение, добра форма, поддържан външен вид и усещане за благополучие във всеки етап от живота.",
  },
  {
    name: "Hope H&S",
    logo: "/hope-health-and-safety-logo.png",
    link: "https://hopehealthandsafety.com/",
    description:
      "Hope Health & Safety дава ясна, честна картина как се чувстваш в момента. Клинично обоснована оценка в 12 валидирани области — от стрес и сън до устойчивост и благополучие. Protect what matters.",
  },
  {
    name: "Bactology",
    logo: "/bactology-logo.png",
    link: "https://bulgarbiotic.bg/",
    description:
      "Bactology са български пробиотици с Lactobacillus bulgaricus. Формули с научно доказани щамове за храносмилането, имунитета и женското здраве — здравето започва в микробиома.",
  },
  {
    name: "Natural Factors",
    logo: "/natural-factors-logo.png",
    link: "https://revita.bg/",
    description:
      "Natural Factors е един от най-големите производители на хранителни добавки в Северна Америка и носител на престижната награда CHFA за високи постижения в областта на здравословните храни на Канадската асоциация за здравословни храни. Произходът им датира от 50-те години на миналия век, а от първия ден създават висококачествени продукти. В алувиалната долина между езерото Otter и езерото Swan, южно от град Армстронг, се намира Natural Factors Farms™ — сертифицирана органична земя, чрез която контролират суровините от селекцията на семената до готовия продукт. Предлагат пълен спектър хранителни добавки за нуждите на цялото семейство. В България се предлагат чрез Revita.bg.",
  },
  {
    name: "AlphaLife Sciences",
    logo: "/alphalife-sciences-logo.png",
    link: "https://alphalifesciences.com/",
    description:
      "Вдъхновени от изследванията на проф. Дейвид Синклер, лекари и специалисти, които доказват, че стареенето може да бъде забавено чрез обновяване на ниво ДНК, ние създаваме научно доказани хранителни добавки и козметика, които не само забавят стареенето — те възвръщат младостта и енергията на организма. Нашите формули, разработени и произведени в Швейцария, Австрия и Япония, се създават с грижа и внимание към детайла от водещи експерти в областта на дълголетието. Създаваме формули, които въздействат на клетъчно ниво, стимулирайки регенерацията и подмладяването на организма. Използваме само сертифицирани съставки с гарантиран произход и висок клас стъклени опаковки, за да запазим максимално дълго чистотата, силата и качеството на всяка формула.",
  },
  {
    name: "BareCare",
    logo: "/bare-care-logo.png",
    link: "https://barecare.bg/",
    description:
      "BareCare предлага корейска козметика — над 2100 продукта с доказан произход, безплатна доставка и подарък с всяка поръчка.",
  },
  {
    name: "MYBEARS",
    logo: "/mybears-logo.png",
    link: "https://mybears.bg/bg/",
    description:
      "MYBEARS е модерен и иновативен бранд хранителни добавки под формата на вкусни желирани мечета на растителна пектинова основа. Съчетавайки внимателно подбрани съставки, съвременни технологии и научнообоснован подход, MYBEARS предлага ново измерение в ежедневната грижа за себе си. Първата колекция включва шест специализирани формули, насочени към ключови потребности на съвременния човек – красота, енергия, релаксация, баланс, контрол на теглото и желание за презентация на себе си. MYBEARS превръща грижата за себе си в приятно ежедневно изживяване, съчетавайки функционалност, удобство и удоволствие във всяко мече.",
  },
  // ВРЕМЕННО СКРИТО
  // {
  //   name: "Dr. Bastet",
  //   logo: "/dr-bastet-logo.jpg",
  //   link: "https://drbastet.com/",
  //   description:
  //     "Dr. Bastet съчетава биохакинг и нутригеномика в натурални хранителни добавки за глюкозен баланс, дълголетие и метаболитно здраве. И това е само началото.",
  // },
  // {
  //   name: "Thermanumera",
  //   logo: "/therma-numera-logo.png",
  //   link: "https://thermanumera.com/bg/",
  //   description:
  //     "Therma Numera Longevity SPA - Високотехнологичният трендсетър в СПА индустрията.",
  // },
  // {
  //   name: "DexaFit Sofia",
  //   logo: "/dexafit-sofia-logo.png",
  //   link: "https://www.sofia.dexafit.com/bg",
  //   description:
  //     "DexaFit Sofia е високотехнологичен медицински център, който предлага персонализирани анализи.",
  // },
  // {
  //   name: "InsideTracker",
  //   logo: "/inside-tracker.jpg",
  //   link: "https://www.insidetracker.com/",
  //   description:
  //     "InsideTracker е платформа за анализ на кръвни и ДНК резултати, която дава персонализирани насоки за подобрение на личното здраве.",
  // },
  // ВРЕМЕННО СКРИТО - Benlian Food Philosophy
  // {
  //   name: "Benlian Food Philosophy",
  //   logo: "/benlian-logo.jpg",
  //   link: "https://benlianfoods.com/",
  //   description:
  //     "Продуктите на Benlian Food Philosophy са изработени изцяло от натурални съставки, не съдържат глутен и са резултат от нашето желание да направим натуралната и здравословна храна част от живота на всеки. Чрез използване на иновативни методи в преработката на храни запазваме хранителните свойства на съставките в техния суров вид. По този начин показваме на хората, че здравословната храна може да бъде вкусна, както и вкусната храна може да бъде здравословна. Benlian Food Philosophy RMD (remedy) e абсолютно нов и иновативен продукт за пазара и съвсем естествено продължение на философията на компанията. Нашата мисия е да представим това високофенолно маслиново масло extra virgin, с 1000+ mg/kg натурални полифеноли, като суперхрана и мазнина от природата, с естествени противовъзпалителни и антиоксидантни свойства. Benlian RMD е подходящо за терапевтична употреба в ежедневието и идва в подкрепа на: храносмилането и контрола на телесното тегло, когнитивната дейност и паметта, здравето на костите и ставите, здравето на сърцето и нивата на HDL холестерол, здравето на кожата и нейната жизненост. Нашата препоръка е прием на 20g (oк. 1.5 с.л.) сутрин, в съчетание с балансирана диета и здравословен начин на живот, като част от личната програма на всеки за жизненост и дълголетие.",
  // },
  // {
  //   name: "Double Wood Supplements",
  //   logo: "/double-wood-logo.jpg",
  //   link: "https://revita.bg/double-wood",
  //   description:
  //     "Double Wood Supplements е американска компания, създадена през 2014 г. във Филаделфия, специализирана във висококачествени натурални добавки – от ноотропици и витамини до антиейджинг формули. С фокус върху наука и биохакинг, брандът предлага надеждни решения за повече енергия, концентрация и дългосрочно здраве.",
  // },
  // {
  //   name: "MOMVY",
  //   logo: "/momvy-logo.png",
  //   link: "https://momvy.eu/",
  //   description:
  //     "MOMVY предлага премиум био хранителни добавки в стъклена опаковка с иновативна формула и ясни съставки. Продуктите са 100% органични, веган, без глутен и добавки. MOMVY приоритизира качеството и устойчивостта, като използва внимателно подбрани, първокласни био растителни суровини за красота, детокс и енергия.",
  // },
];

const partners = [
  {
    name: "BIOVICO Medical Esthetics",
    logo: "/biovico-logo.png",
    link: "https://medicalesthetics.biovico.com/",
    description:
      "ПОЛИ ИНСПИРЕЙШЪНС | BIOVICO MEDICAL ESTHETICS. LONGEVITY CONCEPT – Науката за регенерацията. Технологиите за по-добър живот. С над 9 години опит в медицинския и денталния сектор, Poli Inspirations е утвърден партньор на водещи европейски производители от Франция, Швейцария и Полша, представящ иновативни медицински технологии и решения от ново поколение. В основата на нашата Longevity Concept стои идеята, че бъдещето на медицината не е само в лечението, а и в превенцията, регенерацията и поддържането на качеството на живот. Чрез BIOVICO Medical Esthetics представяме съвременни PRP/iPRF технологии и регенеративни решения за медицинската естетика, а с ATP38 – иновативна LED фотобиомодулационна технология, насочена към подпомагане на естествените възстановителни процеси. Вярваме в медицина, която не просто реагира на стареенето, а използва силата на науката и иновациите, за да разшири възможностите за превенция, регенерация и здравословно дълголетие.",
  },
  {
    name: "IMEX Distribution",
    logo: "/imex-distribution-logo.png",
    description:
      "IMEX Distribution е компания, специализирана в дистрибуцията на бързооборотни потребителски стоки (FMCG), с фокус върху международни брандове с добавена стойност. Компанията помага на перспективни марки да достигат до нови пазари, да разширяват присъствието си и да изграждат устойчиви връзки с потребителите в България. Сред брандовете в портфолиото ѝ са Compass Mints – пастили без захар, и Jimmy’s – готови за консумация пуканки. Със своя фокус върху качествените продукти, развитието на брандове и създаването на стойност за потребителите, IMEX Distribution допринася за по-богатия избор на съвременния пазар.",
  },
  {
    name: "Avtovia",
    logo: "/avtovia-logo.svg",
    photo: "/avtovia-vinetka.jpg",
    link: "https://www.avtovia.bg/",
    description:
      "Avtovia продава електронни винетки за леки автомобили до 3,5 т за България онлайн – дневна, уикенд, седмична, месечна, тримесечна и годишна. Нужни са само регистрационният номер, държавата на регистрация и периодът на валидност; плащането е с банкова карта, а винетката се свързва с регистрационния номер без стикер на стъклото. Avtovia.bg наследява информационния сайт Vinetka.bg и добавя възможност потребителите сами да си закупят винетка онлайн.",
  },
  {
    name: "Screen My Bones®",
    logo: "/screen-my-bones-logo.png",
    link: "https://www.screenmybones.com/",
    description:
      "Международна платформа за проактивен скрининг и технологии за здравето на костите и мускулите – от превенция към устойчиво мускулно-скелетно здраве.",
  },
  {
    name: "Fast Track",
    logo: "/fast-track-logo.png",
    link: "https://fasttrack-growth.com/",
    description:
      "Глобална консултантска компания с над 500 клиента в 30 държави. Развива стратегии и лидерски програми за компании като Google, Mango, Ray-Ban и Four Seasons.",
  },
  {
    name: "Biohacking.bg",
    logo: "/biohacking-bg-logo.png",
    link: "https://biohacking.bg/",
    description:
      "Платформа, която обединява наука, технологии и практики за оптимизиране на тялото и ума.",
  },
  {
    name: "Webstation",
    logo: "/webstation-ltd-logo.svg",
    link: "https://webstation.bg/",
    description:
      "Дигитална агенция, специализирана в изработката на уебсайтове и онлайн маркетинг.",
  },
  {
    name: "Офсет График",
    logo: "/офсет-график-Logo.png",
    description:
      "Печатница, предлагаща висококачествени печатни материали и рекламни продукти.",
  },
  // ВРЕМЕННО СКРИТО
  // {
  //   name: "Createx",
  //   logo: "/createx-logo.png",
  //   link: "https://createx.bg/",
  //   description:
  //     "Софтуерна компания, фокусирана върху създаването на уеб и мобилни приложения.",
  // },
  // {
  //   name: "Ecom",
  //   logo: "/ecom-logo.png",
  //   description:
  //     "Компания, предоставяща решения за електронна търговия и дигитален маркетинг.",
  // },
  {
    name: "Max Group Events",
    logo: "/max-group-events-logo.png",
    link: "https://maxgroupevents.com/",
    description:
      "Агенция за организиране на събития, предлагаща цялостни решения за корпоративни и частни партита.",
  },
  {
    name: "Очи в очи",
    logo: "/ochi-v-ochi-logo.jpg",
    link: "https://www.youtube.com/@jasminnemajid",
    description: "Популярно YouTube шоу за интервюта с интересни личности.",
  },
  {
    name: "FindStaff",
    logo: "/findstaff-logo.jpg",
    link: "https://www.findstaff.bg/",
    description: "Платформа за намиране на работа и кариерно развитие.",
  },
  {
    name: "Даник добро",
    logo: "/danyk-dobro-logo.jpg",
    description:
      "Благотворителна организация, подкрепяща различни социални каузи.",
  },
  {
    name: "Suga Buba",
    logo: "/suga-buba-logo.jpg",
    link: "https://sugabuba.com/",
    description:
      "SUGA BUBA е устойчива компания, посветена на био и пречистена козметика.",
  },
  {
    name: "Preciva",
    logo: "/preciva-logo.jpg",
    link: "https://preciva.eu/",
    description:
      "Компания за производство и дистрибуция на висококачествени хранителни добавки.",
  },
  {
    name: "Десислава Дамянова",
    logo: "/академия-за-емоционална-интелигентност.jpg",
    link: "https://www.eiacademy.bg/",
    description:
      "Академия за емоционална интелигентност - развиване на емоционалната интелигентност за по-щастлив и продуктивен живот чрез дълбоко себепознание и осъзнатост.",
  },
];

export default function SponsorsAndPartners({ children }) {
  return (
    <>
      {/* Contact Section - Dark */}
      <div className="relative isolate bg-gray-900">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pt-16 pb-16 sm:pt-20 lg:static lg:px-8 lg:py-24">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
                <svg
                  className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                      width={200}
                      height={200}
                      x="100%"
                      y={-1}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M130 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <svg
                    x="50%"
                    y={-1}
                    className="overflow-visible fill-gray-800/20"
                  >
                    <path d="M-200 0h201v201h-201Z" strokeWidth={0} />
                  </svg>
                  <rect
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                    fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Станете спонсор
              </h2>
              {children}
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Вярвате в силата на превенцията, оптималното здраве и
                съзнателния живот? Ако вашата мисия, продукт или услуга помага
                на хората да се превърнат в по-добра версия на себе си чрез
                биохакинг, дълголетие, спорт, нутриционистика, медицина или
                холистичен подход – мястото ви е с нас!
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Better Self - Biohacking & Longevity Conference 2026 събира на
                едно място водещите имена, брандове и иноватори в сектора.
                Свържете се с нас, за да обсъдим персонализирана форма на
                партньорство, която да отрази най-силно стойността на вашия
                бранд. Бъдете част от промяната, която вдъхновява.
              </p>
              <div className="mt-10 text-center">
                <Link
                  href="/Green Illustrated Project Proposal A4.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-md bg-[#ff8d00] px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 sm:whitespace-nowrap"
                >
                  Изтеглете PDF за повече информация
                </Link>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>

      {/* Intro Section - Light */}
      <div className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Нашите Спонсори и Партньори
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Изключително сме благодарни на нашите спонсори и партньори, които
              правят възможно провеждането на BetterSelf. Тяхната подкрепа ни
              позволява да съберем на едно място водещи експерти и ентусиасти в
              областта на биохакинга и дълголетието.
            </p>
            <div className="mt-10">
              <Link
                href="/Green Illustrated Project Proposal A4.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-[#ff8d00] px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 sm:whitespace-nowrap"
              >
                Изтеглете PDF за повече информация
              </Link>
            </div>
          </div>

          {/* Sponsors Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
              Спонсори
            </h2>
            <div className="w-48 h-1 mx-auto my-4 bg-[#ff8d00] rounded"></div>
            {sponsors
              .filter((sponsor) => sponsor.featured)
              .map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="mx-auto mt-12 max-w-4xl rounded-3xl border-2 border-[#ff8d00]/30 bg-gradient-to-br from-orange-50 via-white to-yellow-50 px-8 py-10 shadow-xl"
                >
                  <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.25em] text-[#ff8d00]">
                    Генерален спонсор
                  </p>
                  <div className="relative mx-auto h-40 w-full max-w-xl sm:h-40">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      quality={100}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="mt-6 text-center text-2xl font-semibold text-gray-900">
                    {sponsor.name}
                  </h3>
                  {sponsor.description ? (
                    <p className="mx-auto mt-3 max-w-3xl text-center text-base leading-7 text-gray-600">
                      {sponsor.description}
                    </p>
                  ) : null}
                </div>
              ))}

            <div
              id="devin"
              className="mx-auto mt-12 max-w-5xl rounded-3xl border-2 border-[#ff8d00]/30 bg-gradient-to-br from-orange-50 via-white to-yellow-50 px-6 py-10 shadow-xl sm:px-10"
            >
              <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-[#ff8d00]">
                Основен хидратиращ партньор
              </p>
              <h3 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                DEVIN
              </h3>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-8 text-gray-700">
                Основен хидратиращ партньор на BetterSelf Biohacking &amp;
                Longevity Conference 2026.
              </p>
              <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-7 text-gray-600">
                DEVIN ще присъства на събитието с част от своето портфолио,
                вдъхновено от активния и балансиран начин на живот.
              </p>

              <div className="mt-10 grid grid-cols-1 items-start gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-2xl bg-white shadow-md">
                  <Image
                    src="/devin-active-lineup.jpg"
                    alt="Линията Devin Active"
                    width={819}
                    height={1024}
                    quality={90}
                    className="h-auto w-full"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl bg-white shadow-md">
                  <Image
                    src="/devin-active-ivan.jpg"
                    alt="Devin Active подкрепя Иван Иванов"
                    width={1024}
                    height={767}
                    quality={90}
                    className="h-auto w-full"
                  />
                </div>
              </div>

              <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl bg-black shadow-lg">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/devin-active-poster.jpg"
                  className="aspect-video w-full"
                >
                  <source src="/devin-active.mp4" type="video/mp4" />
                </video>
              </div>

              <div className="mx-auto mt-10 max-w-3xl space-y-5 text-base leading-7 text-gray-600">
                <p>
                  От сърцето на Родопите идва естествената минерална вода Devin
                  – вода с уникален минерален състав, формиран по естествен път
                  на 1,2 км дълбочина. По пътя си тя преминава през девет вида
                  скали, откъдето извлича ценни минерали и достига до нас чиста
                  и балансирана – сила, невидима за очите, но осезаема за
                  тялото.
                </p>
                <p>
                  По време на събитието ще представим и новата
                  функционална линия Devin Active – напитка на основата на
                  естествена минерална вода Devin, създадена за хора с активен
                  начин на живот. С 0 калории и 0 захар, серията комбинира
                  чистата хидратация с внимателно подбрани съставки, които
                  добавят функционална стойност и подкрепят тялото в движение.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  {
                    name: "Devin Active Фибри",
                    text: "С вкус на ябълка и череша, обогатена с фибри и постбиотик за подкрепа на храносмилането и вътрешния баланс.",
                  },
                  {
                    name: "Devin Active Колаген",
                    text: "С вкус на гуава и маракуя, създадена да подпомага ставите и усещането за лекота и еластичност в тялото.",
                  },
                  {
                    name: "Devin Active Електролити",
                    text: "С вкус на лимон и малина, създадена да подпомага организма при физическо и психическо натоварване и да подкрепя енергийния и електролитния баланс.",
                  },
                  {
                    name: "Devin Active Антиоксиданти",
                    text: "С вкус на боровинка, касис и бъз, която подпомага имунната система и помага на ума да остава свеж и концентриран.",
                  },
                ].map((product) => (
                  <div
                    key={product.name}
                    className="rounded-2xl bg-white px-5 py-5 text-left shadow-sm"
                  >
                    <h4 className="text-base font-semibold text-gray-900">
                      {product.name}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {product.text}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mx-auto mt-8 max-w-3xl text-base leading-7 text-gray-600">
                Вярваме, че малките ежедневни навици – движение, баланс и
                правилна хидратация – са основата на по-дългия и активен живот.
                Именно с тази идея Devin Минерална и Devin Active ще бъдат част
                от събитието, за да предложат повече от обикновена хидратация –
                грижа за тялото и енергия за следващото предизвикателство.
              </p>
              <p className="mt-8 text-center">
                <Link
                  href="https://www.devin.bg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#ff8d00] hover:text-orange-500"
                >
                  devin.bg <span aria-hidden="true">→</span>
                </Link>
              </p>
            </div>

            <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-4 sm:gap-6">
              {sponsors
                .filter((sponsor) => sponsor.featuredAfterGeneral)
                .map((sponsor) => (
                  <div
                    key={sponsor.name}
                    className="rounded-3xl border-2 border-gray-200 bg-white px-4 py-8 shadow-lg sm:px-8 sm:py-10"
                  >
                    <div className="relative mx-auto h-28 w-full sm:h-32">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        fill
                        quality={100}
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
            </div>
            {sponsors
              .filter((sponsor) => sponsor.featuredAfterPair)
              .map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="mx-auto mt-8 max-w-4xl rounded-3xl border-2 border-gray-200 bg-white px-8 py-8 shadow-lg"
                >
                  <div className="relative mx-auto h-24 w-full max-w-md sm:h-28">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      quality={100}
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {sponsors
                .filter(
                  (sponsor) =>
                    !sponsor.featured &&
                    !sponsor.featuredAfterGeneral &&
                    !sponsor.featuredAfterPair,
                )
                .map((sponsor) => (
                  <SponsorCard key={sponsor.name} sponsor={sponsor} />
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section - Dark */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">
            Партньори
          </h2>
          <div className="w-48 h-1 mx-auto my-4 bg-gray-700 rounded"></div>
          <div className="mx-auto mt-16 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:gap-x-10">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center text-center"
              >
                {partner.link ? (
                  <Link
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-36 w-full items-center justify-center rounded-2xl bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105 sm:h-32"
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        quality={100}
                        loading="lazy"
                        className="object-contain"
                      />
                    </div>
                  </Link>
                ) : (
                  <div className="flex h-36 w-full items-center justify-center rounded-2xl bg-white p-6 shadow-lg sm:h-32">
                    <div className="relative h-full w-full">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        quality={100}
                        loading="lazy"
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}
                {partner.photo ? (
                  <div className="relative mt-4 aspect-[3/2] w-full overflow-hidden rounded-2xl">
                    <Image
                      src={partner.photo}
                      alt={partner.name}
                      fill
                      quality={85}
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                ) : null}
                <p className="mt-6 text-sm leading-6 text-gray-400">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
