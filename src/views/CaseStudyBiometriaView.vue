<script setup lang="ts">
interface MetaRow {
  label: string
  value: string
}

const metaRows: MetaRow[] = [
  { label: 'Typ', value: 'Bakalárska práca · FEI STU Bratislava · 2026' },
  { label: 'Vedúca', value: 'doc. Mgr. Daniela Chudá, PhD.' },
  { label: 'Nástroje', value: 'Python · XGBoost · SHAP · scikit-learn · Pandas · NumPy' },
]

const stats = [
  { value: '800 ms', label: 'hranica pauzy medzi pohybmi' },
  { value: '22 / 4', label: 'veľkosť a krok posuvného okna' },
  { value: '52', label: 'príznakov na okno' },
  { value: '~15 s', label: 'správania v jednom okne' },
]

const modelReasons = [
  {
    title: 'Škálovateľnosť',
    description: 'nový používateľ znamená natrénovať jeden nový model, nie zasahovať do existujúcich',
  },
  {
    title: 'Presnosť',
    description: 'model sa prispôsobí jemným motorickým špecifikám konkrétneho človeka',
  },
]

interface ComparisonRow {
  approach: string
  model: string
  auc: string
  eer: string
  eerHigh: number
  best: boolean
}

const comparisonRows: ComparisonRow[] = [
  { approach: 'S učiteľom', model: 'XGBoost', auc: '0,9714', eer: '5,82 %', eerHigh: 12, best: true },
  { approach: 'S učiteľom', model: 'LightGBM', auc: '0,9688', eer: '6,49 %', eerHigh: 15, best: false },
  {
    approach: 'S učiteľom',
    model: 'Random Forest',
    auc: '0,9439',
    eer: '7,24 %',
    eerHigh: 16,
    best: false,
  },
  {
    approach: 'Detekcia anomálií',
    model: 'Isolation Forest',
    auc: '0,8916',
    eer: '15,81 %',
    eerHigh: 41,
    best: false,
  },
  {
    approach: 'Detekcia anomálií',
    model: 'One-Class SVM',
    auc: '0,8547',
    eer: '19,96 %',
    eerHigh: 60,
    best: false,
  },
]
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
        <RouterLink to="/#work" class="shrink-0 text-muted">← Späť na práce</RouterLink>
      </nav>
    </header>

    <section class="px-6 pt-20 sm:px-10">
      <div class="mb-7 flex items-center gap-2.5 text-xs tracking-[0.1em] text-[#a3a39a] uppercase">
        <span>Prípadová štúdia</span>
        <span class="h-px w-6 bg-[#dcdad4]"></span>
        <span>03 — Bakalárska práca</span>
      </div>
      <h1
        class="m-0 mb-10 max-w-[26ch] text-pretty font-display text-[clamp(36px,5.2vw,80px)] leading-none font-light tracking-[-0.04em]"
      >
        Behaviorálna biometrická autentifikácia pomocou dynamiky pohybov myši
      </h1>
      <div
        class="grid grid-cols-1 gap-10 border-t border-ink pt-5.5 sm:grid-cols-[minmax(0,1.15fr)_minmax(240px,0.85fr)] sm:gap-16"
      >
        <div>
          <span class="mb-3.5 block text-xs tracking-[0.1em] text-faint uppercase">V skratke</span>
          <p class="m-0 max-w-[56ch] text-[16px] leading-relaxed text-[#3f3f38] text-pretty">
            Systém overovania totožnosti používateľa webovej aplikácie
            na základe toho, ako hýbe myšou – bez hesla, bez špeciálneho hardvéru, na pozadí
            bežnej práce. Kompletné spracovanie dát od surových udalostí myši po natrénovaný klasifikátor ktorý
            dosiahol priemerné AUC 0,9714 a EER 5,82 % na 118 používateľoch. Pomocou metódy SHAP som analyzoval,
            na základe akých charakteristík sa model rozhoduje.
          </p>
        </div>
        <dl class="flex flex-col">
          <div
            v-for="(row, i) in metaRows"
            :key="row.label"
            class="grid grid-cols-[90px_1fr] gap-4 py-3"
            :class="i === 0 ? 'pt-0 pb-3' : 'border-t border-line'"
          >
            <dt class="pt-0.5 text-[11.5px] tracking-[0.12em] text-[#a3a39a] uppercase">
              {{ row.label }}
            </dt>
            <dd class="m-0 text-[15px] leading-snug text-[#3f3f38]">{{ row.value }}</dd>
          </div>
          <div class="grid grid-cols-[90px_1fr] gap-4 border-t border-line py-3">
            <dt class="pt-0.5 text-[11.5px] tracking-[0.12em] text-[#a3a39a] uppercase">Odkazy</dt>
            <dd class="m-0 flex flex-wrap gap-4 text-[15px] leading-snug">
              <a href="#" class="border-b border-[#dcdad4]">GitHub repozitár</a>
              <a href="#" class="border-b border-[#dcdad4]">Text práce (PDF)</a>
            </dd>
          </div>
        </dl>
      </div>
    </section>


    <section class="px-6 pt-24 sm:px-10">
      <div
        class="grid grid-cols-1 gap-6 border-t border-ink pt-6 sm:grid-cols-[minmax(200px,0.4fr)_minmax(0,1fr)] sm:gap-x-16"
      >
        <h2 class="m-0 font-display text-[clamp(24px,2.6vw,36px)] font-normal tracking-[-0.03em]">
          Úvod
        </h2>
        <div class="max-w-[60ch]">
          <p class="m-0 mb-5 text-[16px] leading-[1.75] text-[#3f3f38] text-pretty">
            Klasické prihlásenie overí totožnosť používateľa jednorazovo pri vstupe do systému.
            Ďalší priebeh relácie však zostáva bez kontroly. Ak používateľ napríklad opustí odomknutý
            porčítač, aplikácia nedokáže detegovať nepovolený prístup.
          </p>
          <p class="m-0 text-[16px] leading-[1.75] text-[#3f3f38] text-pretty">
            Behaviorálna biometria umožňuje kontrolovať prístup počas celej
            doby interakcie, čím sa zvyšuje bezpečnosť bez negatívneho vplyvu na používateľskú
            skúsenosť. Každý prehliadač tieto udalosti generuje, zber je pasívny a používateľ nemusí
            urobiť nič naviac.
          </p>
        </div>
      </div>
    </section>

    <section class="px-6 pt-18 sm:px-10">
      <div
        class="grid grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-[minmax(200px,0.4fr)_minmax(0,1fr)] sm:gap-x-16"
      >
        <h2 class="m-0 font-display text-[clamp(24px,2.6vw,36px)] font-normal tracking-[-0.03em]">
          Dáta
        </h2>
        <div class="max-w-[60ch]">
          <p class="m-0 mb-5 text-[16px] leading-[1.75] text-[#3f3f38] text-pretty">
            Pracoval som s verejným datasetom SapiMouse – 120 používateľov, každý 4 minúty
            interakcie rozdelené do dvoch relácií (3 a 1 minúta). Surový záznam je CSV s piatimi
            stĺpcami: časová pečiatka, stav myši, stlačené tlačidlo a súradnice x, y.

            Dvaja používatelia boli vylúčený z experimentov kvôli nedostatočnému počtu pohybových segmentov
            na zostavenie úplného agregačného okna.
          </p>
        </div>
      </div>
    </section>

    <section class="px-6 pt-18 sm:px-10">
      <div
        class="grid grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-[minmax(200px,0.4fr)_minmax(0,1fr)] sm:gap-x-16"
      >
        <h2 class="m-0 font-display text-[clamp(24px,2.6vw,36px)] font-normal tracking-[-0.03em]">
          Od surových udalostí k pohybom
        </h2>
        <div>
          <div class="mb-9 max-w-[60ch]">
            <p class="m-0 mb-5 text-[16px] leading-[1.75] text-[#3f3f38] text-pretty">
              Jednotlivé udalosti myši nesú samé o sebe minimum informácie. Prvým krokom bolo
              preto rozdeliť súvislý záznam na pohyby – sekvencie dát, ktoré nie sú prerušené klikom
              ani dostatočne dlhou pauzou.
            </p>
            <p class="m-0 mb-5 text-[16px] leading-[1.75] text-[#3f3f38] text-pretty">
              Hranicu pauzy som stanovil na 800 ms, a to na základe distribúcie reálnych časových
              rozdielov medzi udalosťami. Pauza dlhšia než 800 ms už nie je vysvetliteľná
              hardvérom ani softvérom, zodpovedá momentu, keď človek premýšľa, čo urobí
              ďalej.
            </p>
            <p class="m-0 text-[16px] leading-[1.75] text-[#3f3f38] text-pretty">
              Po segmentácii nasledovalo čistenie. Vyradil som pohyby kratšie než 20 px a 200 ms –
              typicky ide o pár pixelov zaznamenaných v okamihu kliknutia, ktoré by skresľovali
              priemernú prejdenú vzdialenosť aj rýchlostné charakteristiky.
            </p>
          </div>
          <figure class="m-0">
            <div class="relative aspect-16/9 w-full overflow-hidden rounded-md border border-line bg-[#f6f5f2]">
              <img
                src="/projects/bc/bc-pipeline.png"
                alt="Schéma pipeline: dáta používateľa → extrakcia príznakov → klasifikácia → rozhodnutie"
                loading="lazy"
                class="h-full w-full object-contain"
              />
            </div>
            <figcaption class="flex items-baseline gap-3 pt-3.5">
              <span class="text-[11.5px] tracking-[0.12em] text-[#a3a39a]">02</span>
              <span class="text-sm text-muted"
                >Architektúra biometrického systému</span
              >
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="px-6 pt-18 sm:px-10">
      <div
        class="grid grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-[minmax(200px,0.4fr)_minmax(0,1fr)] sm:gap-x-16"
      >
        <h2 class="m-0 font-display text-[clamp(24px,2.6vw,36px)] font-normal tracking-[-0.03em]">
          Príznaky a agregácia
        </h2>
        <div>
          <div class="mb-9 max-w-[60ch]">
            <p class="m-0 mb-5 text-[16px] leading-[1.75] text-[#3f3f38] text-pretty">
              Z trajektórie každého pohybu deriváciou polohy podľa času odvodzujem rýchlosť,
              zrýchlenie a trhnutie (jerk). Pre každú z týchto veličín počítam štatistické
              momenty prvého až štvrtého rádu: priemer, štandardnú odchýlku, šikmosť a špicatosť
              – čím zachytávame nielen priemerné hodnoty, ale aj celkovú variabilitu a tvar rozdelenia.
              Súprava príznakov je doplnená o časové charakteristiky a atribúty kliknutí.
            </p>
            <p class="m-0 mb-5 text-[16px] leading-[1.75] text-[#3f3f38] text-pretty">
              Jednotlivé pohyby sú však náchylné na šum, takže je potrebná agregácia technikou posuvného
              okna: 22 po sebe idúcich pohybov s krokom 4. Každé okno predstavuje zhruba 15
              sekúnd správania a pre každý príznak z neho vzniká priemer a štandardná odchýlka.
              Výsledkom je vektor s 52 príznakmi. Finálne parametre sme získali experimentovaním s rôznymi veľkosťami okna.
            </p>
            <p class="m-0 text-[16px] leading-[1.75] text-[#3f3f38] text-pretty">
              Vedome som nešiel cestou konvolučných sietí. CNN by príznaky našla sama, ale
              rozhodnutia by sa nedali interpretovať. Výpočtová náročnosť pri kontinuálnom overovaní
              je taktiež citeľne nižšia pri explicitnom počítaní charakteristík.
            </p>
          </div>
          <figure class="m-0 mb-9">
            <div class="relative aspect-16/9 w-full overflow-hidden rounded-md border border-line bg-[#f6f5f2]">
              <img
                src="/projects/bc/bc-sliding-window.png"
                alt="Agregácia pohybov posuvným oknom"
                loading="lazy"
                class="h-full w-full object-contain"
              />
            </div>
            <figcaption class="flex items-baseline gap-3 pt-3.5">
              <span class="text-[11.5px] tracking-[0.12em] text-[#a3a39a]">03</span>
              <span class="text-sm text-muted">Agregácia pohybov posuvným oknom</span>
            </figcaption>
          </figure>
          <div class="flex flex-wrap gap-x-14 gap-y-10">
            <div v-for="stat in stats" :key="stat.label" class="flex-1 basis-40">
              <div
                class="mb-2 font-display text-[clamp(32px,3.4vw,48px)] leading-none font-light tracking-[-0.035em]"
              >
                {{ stat.value }}
              </div>
              <p class="m-0 text-sm leading-snug text-muted">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="px-6 pt-18 sm:px-10">
      <div
        class="grid grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-[minmax(200px,0.4fr)_minmax(0,1fr)] sm:gap-x-16"
      >
        <h2 class="m-0 font-display text-[clamp(24px,2.6vw,36px)] font-normal tracking-[-0.03em]">
          Model
        </h2>
        <div class="max-w-[60ch]">
          <p class="m-0 mb-5 text-[16px] leading-[1.75] text-[#3f3f38] text-pretty">
            Autentifikácia je riešená binárnymi klasifikátormi trénovanými zvlášť pre každého
            používateľa (One-vs-Rest). Model daného používateľa odlišuje jeho správanie od
            správania všetkých ostatných.
          </p>
          <p class="m-0 mb-4 text-[16px] leading-[1.75] text-[#3f3f38]">
            Výhody oproti jednému multi-class modelu:
          </p>
          <div class="mb-5 flex flex-col">
            <div
              v-for="reason in modelReasons"
              :key="reason.title"
              class="grid grid-cols-[140px_1fr] gap-4 border-t border-line py-3"
            >
              <span class="text-[15px]">{{ reason.title }}</span>
              <span class="text-[15px] leading-relaxed text-muted">{{ reason.description }}</span>
            </div>
          </div>
          <p class="m-0 mb-5 text-[16px] leading-[1.75] text-[#3f3f38] text-pretty">
            Cenou je vyššia náročnosť trénovania, ale v produkčnom nasadení je tento kompromis
            realistickejší.
          </p>
          <p class="m-0 mb-5 text-[16px] leading-[1.75] text-[#3f3f38] text-pretty">
            Scenár prirodzene vytvára silnú nevyváženosť tried – na jednu pozitívnu vzorku
            pripadá približne 117 negatívnych. Bez ošetrenia by model dosahoval vysokú presnosť
            tým, že by všetko označil za negatívne. Riešim to vážením tried, nie podvzorkovaním.
          </p>

        </div>
      </div>
    </section>

    <section class="px-6 pt-18 sm:px-10">
      <div
        class="grid grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-[minmax(200px,0.4fr)_minmax(0,1fr)] sm:gap-x-16"
      >
        <h2 class="m-0 font-display text-[clamp(24px,2.6vw,36px)] font-normal tracking-[-0.03em]">
          Porovnanie algoritmov
        </h2>
        <div>
          <p class="m-0 mb-8 max-w-[60ch] text-[16px] leading-[1.75] text-[#3f3f38] text-pretty">
            Pred voľbou finálneho modelu som porovnal dve kategórie prístupov – učenie s
            učiteľom a detekciu anomálií:
          </p>
          <div class="mb-7 overflow-x-auto">
            <table class="w-full min-w-[560px] border-collapse text-[14.5px]">
              <thead>
                <tr>
                  <th
                    class="border-b border-ink py-0 pr-4 pb-2.5 text-left text-[11.5px] font-medium tracking-[0.12em] text-faint uppercase"
                  >
                    Prístup
                  </th>
                  <th
                    class="border-b border-ink py-0 pr-4 pb-2.5 text-left text-[11.5px] font-medium tracking-[0.12em] text-faint uppercase"
                  >
                    Model
                  </th>
                  <th
                    class="border-b border-ink py-0 pr-4 pb-2.5 text-right text-[11.5px] font-medium tracking-[0.12em] text-faint uppercase"
                  >
                    AUC
                  </th>
                  <th
                    class="border-b border-ink py-0 pr-4 pb-2.5 text-right text-[11.5px] font-medium tracking-[0.12em] text-faint uppercase"
                  >
                    EER
                  </th>
                  <th
                    class="border-b border-ink py-0 pb-2.5 text-right text-[11.5px] font-medium tracking-[0.12em] text-faint uppercase"
                  >
                    EER &gt; 15 %
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in comparisonRows" :key="row.model">
                  <td class="border-b border-line py-3 pr-4 text-faint">{{ row.approach }}</td>
                  <td
                    class="border-b border-line py-3 pr-4"
                    :class="row.best ? 'text-ink' : 'text-[#3f3f38]'"
                  >
                    {{ row.model }}
                  </td>
                  <td
                    class="border-b border-line py-3 pr-4 text-right"
                    :class="row.best ? 'text-ink' : 'text-[#3f3f38]'"
                  >
                    {{ row.auc }}
                  </td>
                  <td
                    class="border-b border-line py-3 pr-4 text-right"
                    :class="row.best ? 'text-ink' : 'text-[#3f3f38]'"
                  >
                    {{ row.eer }}
                  </td>
                  <td class="border-b border-line py-3 text-right text-[#3f3f38]">
                    {{ row.eerHigh }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="m-0 max-w-[60ch] text-[16px] leading-[1.75] text-[#3f3f38] text-pretty">
            Metódy detekcie anomálií modelujú výhradne profil
            legitímneho používateľa a negatívne vzorky počas trénovania nevyužívajú. Pri 118
            dostupných používateľoch je to podstatná strata informácie o tom, ako má model nastaviť
            rozhodovaciu hranicu. Práve preto sme v ďalších experimentoch využívali model XGBoost ktorý dosiahol najlepšie skóre.
          </p>
        </div>
      </div>
    </section>

    <section class="px-6 pt-18 sm:px-10">
      <div
        class="grid grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-[minmax(200px,0.4fr)_minmax(0,1fr)] sm:gap-x-16"
      >
        <h2 class="m-0 font-display text-[clamp(24px,2.6vw,36px)] font-normal tracking-[-0.03em]">
          Vysvetliteľnosť
        </h2>
        <div>
          <div class="mb-9 max-w-[60ch]">
            <p class="m-0 mb-5 text-[16px] leading-[1.75] text-[#3f3f38] text-pretty">
              Pre interpretáciu rozhodnutí modelu som použil som SHAP s implementáciou
              TreeExplainer, ktorá pre stromové modely počíta hodnoty efektívne a presne, bez aproximácie.
            </p>
            <p class="m-0 mb-5 text-[16px] leading-[1.75] text-[#3f3f38] text-pretty">
              Globálne najsilnejším príznakom je priemerná absolútna hodnota zrýchlenia – teda
              intenzita zmien rýchlosti počas pohybu. Nasleduje špicatosť rozdelenia rýchlosti a
              variabilita časových intervalov medzi udalosťami. Dominujú pohybové
              charakteristiky, výrazne prispievajú aj časové, ktoré zachytávajú rytmus práce s
              myšou.
            </p>
            <p class="m-0 text-[16px] leading-[1.75] text-[#3f3f38] text-pretty">
              Analýza dôležitosti zároveň umožnila redukciu príznakov: šesť príznakov malo
              priemernú dôležitosť pod 1 % a ležali pod zlomom trendovej krivky. Ich odstránenie
              výkonnosť mierne zlepšilo a tak finálny model teda pracuje so 46
              príznakmi namiesto 52.
            </p>
          </div>
          <figure class="m-0 mb-9">
            <div class="relative aspect-16/9 w-full overflow-hidden rounded-md border border-line bg-[#f6f5f2]">
              <img
                src="/projects/bc/bc-shap.png"
                alt="SHAP decision plots pre troch používateľov"
                loading="lazy"
                class="h-full w-full object-contain"
              />
            </div>
            <figcaption class="flex items-baseline gap-3 pt-3.5">
              <span class="text-[11.5px] tracking-[0.12em] text-[#a3a39a]">03</span>
              <span class="text-sm text-muted">SHAP decision plots (používatelia: najhorší, medián, najlepší)</span>
            </figcaption>
          </figure>
          <div class="max-w-[60ch]">
            <p class="m-0 mb-5 text-[16px] leading-[1.75] text-[#3f3f38] text-pretty">
              Zaujímavé zistenie prišlo z testu stability. Ak by sa modely všetkých
              používateľov spoliehali na rovnaké príznaky, poradie ich dôležitosti by malo
              naprieč používateľmi silne korelovať. Spearmanova korelácia poradia desiatich
              najdôležitejších príznakov cez 6 903 dvojíc používateľov vyšla 0,007 ± 0,363, s
              mediánom 0,006 – teda prakticky nula.
            </p>
            <figure class="m-0 mb-5">
              <div class="relative aspect-16/9 w-full overflow-hidden rounded-md border border-line bg-[#f6f5f2]">
                <img
                  src="/projects/bc/bc-spearman.png"
                  alt="Rozloženie Spearmanovej korelácie poradia príznakov cez dvojice používateľov"
                  loading="lazy"
                  class="h-full w-full object-contain"
                />
              </div>
              <figcaption class="flex items-baseline gap-3 pt-3.5">
                <span class="text-[11.5px] tracking-[0.12em] text-[#a3a39a]">04</span>
                <span class="text-sm text-muted"
                  >Rozloženie Spearmanovej korelácie poradia príznakov</span
                >
              </figcaption>
            </figure>
            <p class="m-0 text-[16px] leading-[1.75] text-[#3f3f38] text-pretty">
              Univerzálne poradie príznakov neexistuje. Každý používateľ sa od ostatných
              odlišuje inými aspektmi svojho správania. To znamená že model sa pripspôsobí
              každému používateľovi a zvyšuje odolnosť voči cielenému
              napodobňovaniu, útočník nemá jednu sadu čŕt, stačí napodobniť.
            </p>
          </div>
        </div>
      </div>
    </section>


    <section class="px-6 pt-18 sm:px-10">
      <div
        class="grid grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-[minmax(200px,0.4fr)_minmax(0,1fr)] sm:gap-x-16"
      >
        <h2 class="m-0 font-display text-[clamp(24px,2.6vw,36px)] font-normal tracking-[-0.03em]">
          Obmedzenia
        </h2>
        <div class="max-w-[60ch]">
          <p class="m-0 mb-5 text-[16px] leading-[1.75] text-[#3f3f38] text-pretty">
            Dáta pochádzajú z aplikácie navrhnutej priamo na zber, kde je interakcia
            intenzívnejšia než v reálnej aplikácii. Neoveroval som stabilitu modelov v čase –
            správanie sa mení únavou, stresom aj výmenou myši, a nevieme povedať, ako rýchlo sa
            naučený profil stáva neaktuálnym.
          </p>
          <p class="m-0 text-[16px] leading-[1.75] text-[#3f3f38] text-pretty">
            Kam ďalej: pridať dynamiku písania ako druhú modalitu, nasadiť systém do reálnej
            webovej aplikácie a sledovať používateľov dlhodobo.
          </p>
        </div>
      </div>
    </section>

    <section class="px-6 pt-24 sm:px-10">
      <div class="mb-10 border-t border-ink pt-7">
        <span class="text-xs tracking-[0.1em] text-faint uppercase">Ďalšie výstupy</span>
      </div>
      <div class="flex flex-wrap items-start gap-x-8 gap-y-10">
        <figure class="m-0 flex-1 basis-[300px]">
          <div class="relative aspect-4/3 w-full overflow-hidden rounded-md border border-line bg-[#f6f5f2]">
            <img
              src="/projects/bc/bc-boxplot.png"
              alt="Rozloženie EER naprieč používateľmi"
              loading="lazy"
              class="h-full w-full object-contain"
            />
          </div>
          <figcaption class="flex items-baseline gap-3 pt-3.5">
            <span class="text-[11.5px] tracking-[0.12em] text-[#a3a39a]">05</span>
            <span class="text-sm text-muted">Rozloženie EER naprieč používateľmi</span>
          </figcaption>
        </figure>
        <figure class="m-0 flex-1 basis-[300px]">
          <div class="relative aspect-4/3 w-full bg-[#f6f5f2]">
            <div
              class="flex h-full w-full items-center justify-center border border-line bg-[repeating-linear-gradient(135deg,#f5f4f0_0_10px,#ffffff_10px_20px)] p-6 text-center text-sm text-faint"
            >
              <img src="/projects/bc/bc-global.png" alt="">
            </div>
          </div>
          <figcaption class="flex items-baseline gap-3 pt-3.5">
            <span class="text-[11.5px] tracking-[0.12em] text-[#a3a39a]">06</span>
            <span class="text-sm text-muted">Globálna dôležitosť príznakov</span>
          </figcaption>
        </figure>
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
