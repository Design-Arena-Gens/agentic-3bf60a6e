import type { Metadata } from "next";

const modules = [
  {
    id: "module-1",
    title: "Module 1 · Seed of Prediction",
    subtitle: "Real-world story, feeling of data, aur basic intuition",
    focus: "Depth 1 · Linear Regression ka seed",
    description:
      "Is module mein hum ek simple dosti wali kahaani se samjhenge ki prediction actually hota kya hai. Maths zero maan ke chalo — sirf nazara aur feel leke chalna hai.",
    sections: [
      {
        title: "1.1 · Storyboard: Tuition Teacher ki Zindagi",
        points: [
          "Imagine Riya, ek tuition teacher. Har student ki practice hours likhti hai aur unka test score note karti hai.",
          "Wo chahti hai ki agle student ka score guess kare before exam, taaki targeted help de sake.",
          "Yahi se machine learning ka pehla sawaal aata hai: 'Data dekh ke future predict kaise karen?'",
          "Linear Regression isi sawaal ka sabse seedha jawaab deta hai — 'Seedhi line se estimate karo', bas!"
        ],
        visual: [
          "Practice Hours (x-axis) → Score (y-axis)",
          "    ·",
          "        ·      ·",
          "   ·  ·  ·",
          "------------------------------",
          "Left se right: hours badhe to score bhi badh raha hai — seedha sense."
        ]
      },
      {
        title: "1.2 · Visual Metaphor: Rubber Band Line",
        points: [
          "Socho ek whiteboard pe scattered dots bane hain (hours vs score).",
          "Ek flexible rubber band lo, aur usse is tarah khicho ki jitne zyada dots ko touch kare utna better.",
          "Linear Regression basically woh rubber band line hai jo dots ke beech se smooth pass hoti hai.",
          "Maths bolega 'least squares', hum bolenge 'sab dots se milkar chalne wali best-fit line'."
        ],
        visual: [
          "      ✱         ✱",
          "  ✱        ────╱────",
          "        ✱  ╱",
          "     ✱   ╱",
          "Rubber band line har dot ke beech se balanced feel deti hai."
        ]
      },
      {
        title: "1.3 · Linear Regression in Hinglish",
        points: [
          "Linear = seedhi line, Regression = past data dekh kar estimate.",
          "Mechanism: 'Hours' input do, model ek formula deta hai: score ≈ m · hours + c.",
          "m (slope) matlab rubber band kitna chadh raha — hours badhe to score kitna jump.",
          "c (intercept) matlab jab zero hours practice ho tab bhi base score kitna.",
          "Formula yaad rakhne ki zarurat nahi, bas yaad rakho ki model ek simple calculator banata hai."
        ],
        visual: [
          "Score = Base + (Growth × Hours)",
          "      = c  + (m  × hours)",
          "Base (c) → starting point,",
          "Growth (m) → per hour uplift."
        ]
      },
      {
        title: "1.4 · Confidence Meter: Error kya hota hai?",
        points: [
          "Har dot line pe nahi baithega, kyunki real life perfect nahi hoti.",
          "Line se dot ki doori ko bolte hain 'error'.",
          "Model ka mission: sab errors ko chhota rakhna — saath milke average galti ko kam karna.",
          "Jitna kam error, utna confident humari prediction."
        ],
        visual: [
          "Dot ● ---- (vertical gap) ---- Line",
          "Ye gap = error.",
          "Sab gaps square karke total kam karna = least squares trick."
        ]
      },
      {
        title: "1.5 · Why Linear Regression is Entry Gate",
        points: [
          "Samajhne mein easy, kyunki seedha nazar aata hai line ka angle.",
          "Data ke trend ko narrate karta hai — 'jaise jaise practice badhe, score badhta'.",
          "Business decisions ke liye first draft prediction ban jata hai.",
          "Aage chalke hum complex tools seekhenge, par foundation yehi hai."
        ],
        visual: [
          "Linear Regression = School ki ruler line.",
          "Next step Logistic Regression = Switch jo sirf Yes/No batata.",
          "Dono ko start se samjhoge to ML ki kahani clear rahegi."
        ]
      }
    ]
  },
  {
    id: "module-2",
    title: "Module 2 · Decision Switch (Coming Next)",
    subtitle: "Logistic regression ka intuition spotlight",
    focus: "Depth 1 preview",
    description:
      "Kalpana karo ek smart switch jo sirf do answer deta: 'Yes' ya 'No'. Logistic regression wahi switch hai, isko next module mein story, visuals aur gentle maths se decode karenge."
  },
  {
    id: "module-3",
    title: "Module 3 · Practice Studio (Coming Next)",
    subtitle: "Interactive exercises, guided worksheets, aur intuition tests",
    focus: "Depth 1 onwards",
    description:
      "Foundation strong karne ke baad hum practice cards, scenario labs aur intuition quizzes se dono models ko real projects mein translate karna seekhenge."
  }
];

export const metadata: Metadata = {
  title: "Machine Learning Primer · Hinglish Visual Notes",
  description:
    "World-class, beginner-first notes explaining Linear vs Logistic Regression using Hinglish (English script) storytelling and visuals."
};

export default function Page() {
  return (
    <main className="min-h-screen px-6 pb-24 pt-16 sm:px-10 lg:px-16">
      <section className="mx-auto max-w-5xl space-y-12">
        <header className="notebook relative overflow-hidden rounded-3xl px-10 py-14">
          <div className="absolute inset-0 grid-guide opacity-60" aria-hidden />
          <div className="relative space-y-6">
            <p className="badge inline-flex items-center rounded-full bg-pool/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-pool">
              Hinglish · Visual · Friendly
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
              Machine Learning ke do superstars: Linear vs Logistic Regression
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-ink/80">
              Beginner ho aur maths se yaari abhi banni hai? Koi tension nahi. Ye notes aapko university
              level clarity denge bina formulas thopke. Step-by-step kahani, visuals aur Hinglish language
              se hum fundamentals dil tak bithayenge.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-ink/70">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm shadow-ink/10">
                <span className="text-pool">◎</span>
                Visual-first narrative
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm shadow-ink/10">
                <span className="text-coral">✸</span>
                Hinglish (English script) explanations
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm shadow-ink/10">
                <span className="text-ink">⟲</span>
                Zero intimidating maths
              </span>
            </div>
          </div>
        </header>

        <section className="space-y-10">
          <div>
            <h2 className="text-3xl font-semibold text-ink">Learning Roadmap</h2>
            <p className="mt-2 max-w-3xl text-base text-ink/75">
              Pehle hum linear regression ka intuition pakdenge, phir logistic regression ka decision switch
              samjhenge, aur end mein practice labs se dono ko real duniya mein utarenge.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {modules.map((module) => (
              <article key={module.id} className="section-card flex flex-col gap-4 p-6">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pool/80">
                    {module.focus}
                  </p>
                  <h3 className="text-2xl font-semibold text-ink">{module.title}</h3>
                  <p className="text-sm font-medium text-ink/60">{module.subtitle}</p>
                </div>
                <p className="text-sm leading-relaxed text-ink/75">{module.description}</p>
                {module.sections && (
                  <div className="space-y-6 rounded-2xl border border-pool/10 bg-pool/5 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pool">
                      Module 1 Contents
                    </p>
                    <ul className="space-y-3 text-sm text-ink/85">
                      {module.sections.map((section) => (
                        <li key={section.title} className="rounded-xl bg-white/80 p-4 shadow-sm">
                          <p className="font-semibold text-ink">{section.title}</p>
                          <p className="mt-1 text-ink/70">
                            {section.points
                              .slice(0, 2)
                              .map((sentence) => sentence.replace(/.$/, ""))}
                            ...
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section-card space-y-12 p-10" id="module-1">
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold text-ink">Module 1 in Depth · Linear Regression</h2>
            <p className="max-w-3xl text-base text-ink/75">
              Yeh module khud mein ek tasveer hai. Hum har section mein pehle story sunenge, phir visual
              dekhenge, aur sabse end mein short takeaway likhenge. Feel free to treat it like a guided walk
              through a concept museum.
            </p>
          </div>
          {modules[0]?.sections?.map((section) => (
            <article key={section.title} className="flex flex-col gap-6 lg:flex-row lg:items-start">
              <div className="lg:w-7/12 space-y-4">
                <h3 className="text-2xl font-semibold text-ink">{section.title}</h3>
                <ul className="space-y-3 text-base leading-relaxed text-ink/80">
                  {section.points.map((point) => (
                    <li key={point} className="relative pl-6">
                      <span className="absolute left-0 top-1 text-pool">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="rounded-2xl border border-coral/20 bg-coral/10 p-4 text-sm text-coral/90">
                  <strong className="font-semibold text-coral">Takeaway:</strong>{" "}
                  {section.points[section.points.length - 1]}
                </div>
              </div>
              <div className="lg:w-5/12 rounded-2xl border border-pool/20 bg-white/70 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pool">
                  Visual Feel
                </p>
                <pre className="mt-3 whitespace-pre-wrap rounded-xl bg-pool/5 p-4 font-mono text-sm leading-relaxed text-ink/90">
                  {section.visual.join("\n")}
                </pre>
              </div>
            </article>
          ))}
        </section>

        <section className="section-card space-y-8 p-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-ink">Logistic Regression Snapshot</h2>
            <p className="max-w-3xl text-base text-ink/75">
              Abhi sirf teaser: logistic regression line nahi, curve hai jo probability batati hai. Wo 0 se
              1 ke beech smooth glide karti hai, aur end result simple hota hai — yes ya no. Next module mein
              iska decision boundary aur visual switches detail mein dekhenge.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-pool/20 bg-white/80 p-6">
              <h3 className="text-lg font-semibold text-ink">Intuition Sketch</h3>
              <pre className="mt-3 whitespace-pre-wrap rounded-xl bg-pool/5 p-4 font-mono text-sm leading-relaxed text-ink/90">
{`Score Probability
|
|            ╭─────────── 1 (Yes likely)
|          ╭─
|        ╭─
|      ╭─
|    ╭─
|  ╭─
|╭─
└────────────────────────── Practice Hours`}
              </pre>
            </div>
            <div className="rounded-2xl border border-coral/20 bg-coral/10 p-6">
              <h3 className="text-lg font-semibold text-ink">Feel the difference</h3>
              <ul className="mt-3 space-y-3 text-base leading-relaxed text-ink/80">
                <li>
                  Linear regression numbers predict karta hai (0 se infinity). Logistic regression probability
                  (0-1) deta hai.
                </li>
                <li>
                  Linear smooth ruler line, logistic S-shape switch. Matlab intensity se decision tak travel.
                </li>
                <li>
                  Use cases: marks predict karna → linear. Pass/Fail chance batana → logistic.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section-card space-y-6 p-8">
          <h2 className="text-2xl font-semibold text-ink">Aage kya hoga?</h2>
          <p className="text-base text-ink/75">
            Next release mein hum Module 2 ko kholenge: logistic regression ke storyboards, visually guided
            probability intuition, aur ek mini lab jahan aap khud questions solve karoge. Tab tak Module 1 ko
            read karo, revise karo, aur apne words mein Riya ki story kisi dost ko sunao — teaching se concept
            cement hota hai.
          </p>
          <div className="rounded-2xl border border-ink/10 bg-white/70 p-6 text-sm text-ink/70">
            <p className="font-semibold uppercase tracking-[0.3em] text-ink/50">Reflection Prompt</p>
            <p className="mt-2">
              Ek notebook lo aur likho: 'Linear regression = ______'. Apni language mein blank fill karo. Jitna
              simple likhoge, utni clarity build hogi.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
