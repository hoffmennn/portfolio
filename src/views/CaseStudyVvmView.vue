<script setup lang="ts">
interface Stat {
  label: string
  value: string
}

interface Goal {
  index: string
  title: string
  description: string
}

const stats: Stat[] = [
  { label: 'Produktov v ponuke', value: '600+' },
  { label: 'Odoberateľov', value: '~100' },
]

const goals: Goal[] = [
  {
    index: '01',
    title: 'Administratívne rozhranie',
    description:
      'Oddelené rozhranie pre zamestnancov: nové objednávky s optimalizáciou pre tlač, rozvozové linky, účty, zľavy.',
  },
  {
    index: '02',
    title: 'Opakovanie objednávky',
    description: 'Zopakovanie predchádzajúcej objednávky jedným klikom s možnosťou upraviť množstvá.',
  },
  {
    index: '03',
    title: 'Obľúbené produkty',
    description: 'Vlastný zoznam obľúbených produktov pre rýchly opakovaný nákup z veľkého katalógu.',
  },
  {
    index: '04',
    title: 'Zľavy a novinky',
    description: 'Informovanie zákazníkov o aktuálne zľavnených produktoch a novo vystavenom tovare.',
  },

]

const stack = [
  { label: 'Backend', value: 'Python: Django REST Framework' },
  { label: 'Frontend', value: 'Vue.js' },
  { label: 'Databáza', value: 'PostgreSQL' },
  { label: 'Infraštruktúra', value: 'Cloudflare (WAF, CDN, R2 object storage)' },
  { label: 'Nasadenie', value: 'Git, Docker, Render' },
]

const securityTags = ['Cloudflare WAF', 'Role a oprávnenia', 'Rate limiting', 'Audit objednávok']
</script>

<template>
  <div class="min-h-screen bg-white">
    <header
      class="sticky top-0 z-20 flex flex-nowrap items-center justify-between gap-3 border-b border-line bg-white/86 px-6 py-4.5 backdrop-blur-[10px] sm:gap-6 sm:px-10"
    >
      <RouterLink to="/" class="shrink-0 font-display text-[17px] font-medium tracking-[-0.02em]">
        Adam Hoffmann
      </RouterLink>
      <nav class="flex gap-3 text-[11.5px] tracking-[0.01em] text-muted sm:gap-7 sm:text-[13.5px]">
        <RouterLink to="/#work" class="shrink-0 text-muted">Práce</RouterLink>
        <RouterLink to="/o-mne" class="shrink-0 text-muted">O mne</RouterLink>
        <RouterLink to="/#contact" class="shrink-0 text-muted">Kontakt</RouterLink>
      </nav>
    </header>

    <section class="px-6 pt-20 sm:px-10">
      <div
        class="mb-7 flex items-center gap-2.5 text-xs tracking-[0.1em] text-faint uppercase"
      >
        <span>Prípadová štúdia</span>
      </div>
      <h1
        class="m-0 mb-10 max-w-[22ch] text-pretty font-display text-[clamp(40px,6vw,96px)] leading-[0.98] font-light tracking-[-0.04em]"
      >
        B2B objednávkový systém
      </h1>
      <div
        class="grid grid-cols-1 gap-10 border-t border-ink pt-5.5 sm:grid-cols-[minmax(0,1.15fr)_minmax(240px,0.85fr)] sm:gap-16"
      >
        <div>
          <span class="mb-3.5 block text-xs tracking-[0.1em] text-faint uppercase">Prehľad</span>
          <p class="m-0 max-w-[56ch] text-[16px] leading-relaxed text-[#3f3f38] text-pretty">
            Webová aplikácia pre veľkoobchod s čerstvým ovocím, zeleninou a potravinami, ktorá
            sprístupňuje rozsiahly katalóg produktov pre klientov a poskytuje možnosť objednávania
            tovaru.
          </p>
        </div>
        <dl class="flex flex-col">
          <div class="grid grid-cols-[90px_1fr] gap-4 pb-3">
            <dt class="pt-0.5 text-[11.5px] tracking-[0.12em] text-faint uppercase">Klient</dt>
            <dd class="m-0 text-[15px] leading-snug text-[#3f3f38]">
              VVM obchodná s.r.o. — veľkoobchod s ovocím, zeleninou a potravinami
            </dd>
          </div>
          <div class="grid grid-cols-[90px_1fr] gap-4 border-t border-line py-3">
            <dt class="pt-0.5 text-[11.5px] tracking-[0.12em] text-faint uppercase">Obdobie</dt>
            <dd class="m-0 text-[15px] leading-snug text-[#3f3f38]">Máj – August 2026</dd>
          </div>
          <div class="grid grid-cols-[90px_1fr] gap-4 border-t border-line py-3">
            <dt class="pt-0.5 text-[11.5px] tracking-[0.12em] text-faint uppercase">Rola</dt>
            <dd class="m-0 text-[15px] leading-snug text-[#3f3f38]">
              Návrh, dizajn a vývoj celého systému
            </dd>
          </div>
          <div class="grid grid-cols-[90px_1fr] gap-4 border-t border-line py-3">
            <dt class="pt-0.5 text-[11.5px] tracking-[0.12em] text-faint uppercase">URL</dt>
            <dd class="m-0 text-[15px] leading-snug text-[#3f3f38]">
              <a href="https://vvm.sk"> www.vvm.sk </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="px-6 pt-24 sm:px-10">
      <div class="mb-11 border-t border-ink pt-5">
        <h2 class="m-0 font-display text-[clamp(26px,3vw,44px)] font-normal tracking-[-0.03em]">
          Východiskový stav
        </h2>
      </div>
      <div class="grid grid-cols-1 items-start gap-14 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
        <div class="max-w-[58ch]">
          <p class="m-0 mb-5 text-[16px] leading-relaxed text-[#3f3f38]">
            Zákazníci veľkoobchodu — reštaurácie, hotely, maloobchodné predajne, školské a
            zdravotnícke zariadenia — objednávali tovar pomocou WhatsApp správ alebo po
            telefonickom kontakte. Takáto metóda často spôsobovala chaos, neexistoval ucelený
            systém a celý proces bol nepriehľadný.
          </p>
          <p class="m-0 text-[16px] leading-relaxed text-[#3f3f38]">
            Katalóg produktov bolo potrebné vytlačiť a rozdať odoberateľom. Vzhľadom na veľkosť ponuky,
            množstvo odoberateľov a často sa meniacim cenám bol tento prístup časovo aj finančne nákladný.
          </p>
        </div>
        <div class="flex flex-col">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="flex items-baseline justify-between gap-5 border-t border-line py-4"
          >
            <span class="text-sm text-muted">{{ stat.label }}</span>
            <span class="font-display text-[32px] font-normal tracking-[-0.03em]">{{
              stat.value
            }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="px-6 pt-24 sm:px-10">
      <div class="mb-11 border-t border-ink pt-5">
        <h2 class="m-0 font-display text-[clamp(26px,3vw,44px)] font-normal tracking-[-0.03em]">
          Cieľ projektu
        </h2>
      </div>
      <p class="m-0 mb-12 max-w-[64ch] text-[16px] leading-relaxed text-[#3f3f38]">
        Sprístupniť odoberateľom celú ponuku tovaru na webe, v prehľadnom, modernom a
        používateľsky prístupnom systéme. Ďalším cieľom bolo umožniť objednávanie online a
        centralizovať všetky objednávky na jedno miesto.
      </p>

      <h3>Čiastkové ciele</h3>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
        <div v-for="goal in goals" :key="goal.index" class="border-t border-line pt-4">
          <span class="mb-4 block text-xs text-faint">{{ goal.index }}</span>
          <h3 class="m-0 mb-2 font-display text-[17px] font-medium tracking-[-0.015em]">
            {{ goal.title }}
          </h3>
          <p class="m-0 text-[14.5px] leading-relaxed text-muted">{{ goal.description }}</p>
        </div>
      </div>
    </section>

    <section class="px-6 pt-24 sm:px-10">
      <div class="mb-14 border-t border-ink pt-5">
        <h2 class="m-0 font-display text-[clamp(26px,3vw,44px)] font-normal tracking-[-0.03em]">
          Riešenie
        </h2>
      </div>

      <article class="mb-18 grid grid-cols-[14mm_minmax(0,1fr)] gap-x-8">
        <span class="font-display text-[34px] font-light tracking-[-0.03em] text-[#dcdad4]"
          >01</span
        >
        <div>
          <h3
            class="m-0 mb-3.5 font-display text-[clamp(22px,2.2vw,30px)] font-normal tracking-[-0.025em]"
          >
            Výber technológií
          </h3>
          <div class="grid grid-cols-1 items-start gap-10 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
            <p class="m-0 max-w-[52ch] text-[15.5px] leading-relaxed text-[#3f3f38]">
              Pri tvorbe tohto projektu som použil overené technológie s ktorými som mal skúseností.
            </p>
            <div class="flex flex-col">
              <div
                v-for="item in stack"
                :key="item.label"
                class="grid grid-cols-[80px_1fr] gap-4 border-t border-line py-3 text-sm"
              >
                <span class="text-faint">{{ item.label }}</span>
                <span class="text-[#3f3f38]">{{ item.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article class="mb-18 grid grid-cols-[14mm_minmax(0,1fr)] gap-x-8">
        <span class="font-display text-[34px] font-light tracking-[-0.03em] text-[#dcdad4]"
          >02</span
        >
        <div>
          <h3
            class="m-0 mb-3.5 font-display text-[clamp(22px,2.2vw,30px)] font-normal tracking-[-0.025em]"
          >
            Dátový model
          </h3>
          <div
            class="grid grid-cols-1 items-start gap-10 sm:grid-cols-[minmax(240px,1fr)_minmax(0,1.4fr)]"
          >
            <p class="m-0 text-[15.5px] leading-relaxed text-[#3f3f38]">
              Pred samotnou implementáciou bolo potrebné vytvoriť databázový model. Na obrázku je znázornený zjednodušená
              schéma ktorá ale zachytáva všetky hlavné komponenty tohto systému.
              <br> <br>
              Kľúčovým princípom je oddelenie aktuálnych katalógových dát od transakčnej histórie,
              kde tabuľka OrderItem fixuje ceny a DPH v čase nákupu, čím zaručuje konzistenciu. Model zároveň prepája
              správu produktov a hierarchických kategórií s pokročilým profilom používateľa, ktorý obsahuje firemné parametre,
              individuálne zľavy a logistické trasy.
              <br> <br>
              Navrhnutý v programe draw.io
            </p>
            <div class="relative aspect-16/10 w-full overflow-hidden rounded-md border border-line bg-[#f6f5f2]">
              <img
                src="/projects/vvm/db-model.png"
                alt="Diagram dátového modelu"
                loading="lazy"
                class="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </article>

      <article class="mb-18 grid grid-cols-[14mm_minmax(0,1fr)] gap-x-8">
        <span class="font-display text-[34px] font-light tracking-[-0.03em] text-[#dcdad4]"
          >03</span
        >
        <div>
          <h3
            class="m-0 mb-3.5 font-display text-[clamp(22px,2.2vw,30px)] font-normal tracking-[-0.025em]"
          >
            Komplexná cenotvorba
          </h3>
          <div
            class="grid grid-cols-1 items-start gap-10 sm:grid-cols-[minmax(0,1.4fr)_minmax(240px,1fr)]"
          >
            <p class="m-0 text-[15.5px] leading-relaxed text-[#3f3f38]">
              Tento projekt mal svoje špecifiká pri tvorbe biznisovej logiky. Kľúčovým prvkom systému je
              cenotvorba, pri ktorej boli viaceré výzvy. Bolo potrebné vysporiadať sa s nejdenotným zdanením produktov a
              dvomi typmi zliav. Systém umožňuje prideliť konkrétnemu zákazníkovi zľavovú sadzbu, ktorou veľkoobchod odmeňuje
              stálych zákazníkov ktorý odoberajú väčšie množstvá. Taktiež administrátor môže nastaviť zľavu na konkrétny tovar
              na určené časové obdobie. Pri zľavách bolo tiež nevyhnutné urobiť percentuálny limit, aká môže byť maximálna
              uplatnená zľava na konkrétny produkt aby podnik nebol v strate pri produktoch s nízkou maržou.
              <br> <br>
              Tieto požiadavky boli úspešne implementované a celá API otestovaná pomocou rozsiahlych integračných a unit testov
              ktoré kontrolovali logiku, výpočty cien, HTTP požiadavky a oprávnenia používateľov.
            </p>

          </div>
        </div>
      </article>

      <article class="mb-18 grid grid-cols-[14mm_minmax(0,1fr)] gap-x-8">
        <span class="font-display text-[34px] font-light tracking-[-0.03em] text-[#dcdad4]"
          >04</span
        >
        <div>
          <h3
            class="m-0 mb-3.5 font-display text-[clamp(22px,2.2vw,30px)] font-normal tracking-[-0.025em]"
          >
            Administrátorské rozhranie
          </h3>
          <div
            class="grid grid-cols-1 items-start gap-10 sm:grid-cols-[minmax(0,1.4fr)_minmax(240px,1fr)]"
          >
            <p class="m-0 text-[15.5px] leading-relaxed text-[#3f3f38]">
              Pre personál bolo vytvorené vlastné rozhranie pomocou ktorého spravujú ceny produktov, životný
              cyklus objednávok a pridelovanie zákazníkov do rozvozových liniek. Systém taktiež disponuje
              optimalizáciou pre tlač pre konkrétne objednávky alebo celý zoznam objednávok.
            </p>

          </div>
        </div>
      </article>

      <article class="mb-18 grid grid-cols-[14mm_minmax(0,1fr)] gap-x-8">
        <span class="font-display text-[34px] font-light tracking-[-0.03em] text-[#dcdad4]"
          >05</span
        >
        <div>
          <h3
            class="m-0 mb-3.5 font-display text-[clamp(22px,2.2vw,30px)] font-normal tracking-[-0.025em]"
          >
            Používateľské rozhranie
          </h3>
          <div
            class="grid grid-cols-1 items-start gap-10 sm:grid-cols-[minmax(0,1.4fr)_minmax(240px,1fr)]"
          >
            <p class="m-0 text-[15.5px] leading-relaxed text-[#3f3f38]">
              Vzhľadom na to že systém používajú netechnický zákazníci všetkých vekových kategórii
              nevyhnutnou požiadavkou bolo vytvoriť rozhranie ktoré je jednoduché, responzívne a intuitívne pre verejnosť.
              Finálny dizajn prešiel viacerými zmenami a vylepšeniami aby sme vyhoveli zákazníkom, ktorý si
              objednávanie postupne osvojili.

              <br> <br>

              Rýchlosť odozvy systému bola riešená vo viacerých vrstvách. Kladol sa dôraz na efektívne dotazy na databázu
              tak aby nevznikal nikde N+1 problém. Statický obsah - fotografie produktov sú mimo aplikačný server a doručujú
              sa z Cloudflare R2 úložiska. Súčasťou vypracovania projektu bol aj jednoduchý program v Pythone na úpravu veľkosti fotiek a
              konvertovanie to formátu .webp, ktorý uľahčil prácu personálu pri nahadzovaní produktov a zaistil aby všetky fotografie
              boli načítané dostatčne rýchlo.
            </p>

          </div>
        </div>
      </article>

      <article class="grid grid-cols-[14mm_minmax(0,1fr)] gap-x-8">
        <span class="font-display text-[34px] font-light tracking-[-0.03em] text-[#dcdad4]"
          >06</span
        >
        <div>
          <h3
            class="m-0 mb-3.5 font-display text-[clamp(22px,2.2vw,30px)] font-normal tracking-[-0.025em]"
          >
            Zabezpečenie systému
          </h3>
          <div class="grid grid-cols-1 items-start gap-10 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
            <p class="m-0 text-[15.5px] leading-relaxed text-[#3f3f38]">
              Systém spracúva obchodné a osobné údaje odberateľov, preto som bezpečnosť riešil
              vo viacerých nezávislých vrstvách.
              Prevádzka prechádza cez Cloudflare, ktorý zabezpečuje WAF, rate limiting a ochranu
              pred botmi. Aplikačný server je nakonfigurovaný tak, aby prijímal požiadavky výhradne
              cez túto vrstvu, priamy prístup k serveru tak nie je možný.
              <br> <br>
              Autentifikácia je postavená na JWT s krátkou životnosťou prístupového tokenu, rotáciou
              refresh tokenov a ich zneplatnením pri odhlásení. Oprávnenia sa vyhodnocujú na strane
              servera na úrovni databázových dotazov, takže každý používateľ pracuje výhradne s vlastnými dátami.
              Interné a zákaznícke role majú oddelené API rozhrania.
            </p>

          </div>
        </div>
      </article>
    </section>

    <section class="px-6 pt-26 sm:px-10">
      <div class="mb-11 border-t border-ink pt-5">
        <h2 class="m-0 font-display text-[clamp(26px,3vw,44px)] font-normal tracking-[-0.03em]">
          Výsledok
        </h2>
      </div>
      <p class="m-0 mb-14 max-w-[56ch] text-[16px] leading-relaxed text-[#3f3f38] text-pretty">
        Funkčný objednávkový systém ktorý prezentuje veľkobchod potravín a celú ich ponuku, urýchľuje objednávkový proces
        desiatkam odoberateľov z rôznych prevádzok a uľahčuje prácu personálu firmy.
      </p>

      <div class="flex flex-col gap-18">
        <div class="flex flex-wrap items-start gap-8 sm:gap-10">
          <figure class="m-0 flex-[1.6_1_380px]">
            <div class="relative aspect-16/10 w-full overflow-hidden rounded-md border border-line bg-[#f6f5f2]">
              <img
                src="/projects/vvm/vvm-shot1.png"
                alt="Katalóg produktov — hlavné zobrazenie"
                loading="lazy"
                class="h-full w-full object-cover"
              />
            </div>
            <figcaption class="flex items-baseline gap-3 pt-3.5">
              <span class="text-[11.5px] tracking-[0.12em] text-faint">01</span>
              <span class="text-sm text-muted">Domovská stránka a košík</span>
            </figcaption>
          </figure>
          <div class="flex flex-1 flex-col gap-8" style="flex-basis: 280px">
            <figure class="m-0">
              <div class="relative aspect-16/10 w-full overflow-hidden rounded-md border border-line bg-[#f6f5f2]">
                <img
                  src="/projects/vvm/vvm-shot3.png"
                  alt="Domovská stránka a košík"
                  loading="lazy"
                  class="h-full w-full object-cover"
                />
              </div>
              <figcaption class="flex items-baseline gap-3 pt-3.5">
                <span class="text-[11.5px] tracking-[0.12em] text-faint">02</span>
                <span class="text-sm text-muted">Katalóg produktov</span>
              </figcaption>
            </figure>
            <div class="border-t border-line pt-4">
              <span class="mb-2.5 block text-[11.5px] tracking-[0.12em] text-faint uppercase"
                >Katalóg</span
              >
              <h3
                class="m-0 mb-2.5 font-display text-[clamp(20px,2vw,26px)] leading-tight tracking-[-0.022em] font-normal"
              >
                Celá ponuka na jednom mieste
              </h3>
              <p class="m-0 text-[15.5px] leading-relaxed text-[#3f3f38] text-pretty">
                Prehľadná ponuka so všetkými dôležitými informáciami pre odoberateľov
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap items-start gap-8 sm:gap-10">
          <div class="flex flex-1 flex-col gap-8" style="flex-basis: 280px">
            <div class="border-t border-line pt-4">
              <span class="mb-2.5 block text-[11.5px] tracking-[0.12em] text-faint uppercase"
                >Administrácia</span
              >
              <h3
                class="m-0 mb-2.5 font-display text-[clamp(20px,2vw,26px)] leading-tight tracking-[-0.022em] font-normal"
              >
                Objednávky, zľavy a klienti
              </h3>
              <p class="m-0 text-[15.5px] leading-relaxed text-[#3f3f38] text-pretty">
                Jednoduchý a prehľadný panel pre správu systému.
              </p>
            </div>
            <figure class="m-0">
              <div class="relative aspect-16/10 w-full overflow-hidden rounded-md border border-line bg-[#f6f5f2]">
                <img
                  src="/projects/vvm/vvm-shot6.png"
                  alt="Prehľad administrácie"
                  loading="lazy"
                  class="h-full w-full object-cover"
                />
              </div>
              <figcaption class="flex items-baseline gap-3 pt-3.5">
                <span class="text-[11.5px] tracking-[0.12em] text-faint">03</span>
                <span class="text-sm text-muted">Prehľad administrácie</span>
              </figcaption>
            </figure>
          </div>
          <figure class="m-0 flex-[1.6_1_380px]">
            <div class="relative aspect-16/10 w-full overflow-hidden rounded-md border border-line bg-[#f6f5f2]">
              <img
                src="/projects/vvm/vvm-shot7.png"
                alt="História objednávok"
                loading="lazy"
                class="h-full w-full object-cover"
              />
            </div>
            <figcaption class="flex items-baseline gap-3 pt-3.5">
              <span class="text-[11.5px] tracking-[0.12em] text-faint">04</span>
              <span class="text-sm text-muted">História objednávok</span>
            </figcaption>
          </figure>
        </div>


      </div>
    </section>

    <section class="px-6 pt-30 pb-10 sm:px-10">
      <div
        class="flex flex-wrap items-end justify-between gap-8 border-t border-line pt-4.5 text-[12.5px] text-faint"
      >
        <span>© 2026 Adam Hoffmann</span>
        <div class="flex flex-wrap gap-6 text-muted">
          <span>adam.hoffmann.151@gmail.com</span>
          <span>+421 940 708 368</span>
          <RouterLink to="/#work">Všetky práce →</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
