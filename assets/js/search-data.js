// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-what-does-it-mean-to-measure-something",
        
          title: "What Does It Mean to Measure Something?",
        
        description: "The deepest unsolved problem in quantum mechanics — and why your textbook lied to you.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/the-measurement-problem/";
          
        },
      },{id: "post-what-is-time-augustine-heidegger-and-the-physics-of-the-passing-moment",
        
          title: "What Is Time? — Augustine, Heidegger, and the Physics of the Passing Moment...",
        
        description: "The most intimate and most mysterious of all phenomena. We live inside it. We cannot step outside it to examine it. And the closer we look, the stranger it becomes.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/time/";
          
        },
      },{id: "post-hesiod-the-theogony-and-our-oedipal-wounds-on-myths-that-know-us-better-than-we-know-ourselves",
        
          title: "Hesiod, the Theogony, and Our Oedipal Wounds — On Myths That Know Us...",
        
        description: "On Hesiod&#39;s cosmogony, the violence at the origin of things, and why the myth of Oedipus is not about incest but about the unbearable desire to know.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/theogony-oedipus/";
          
        },
      },{id: "post-seneca-on-time-death-and-the-art-of-living-before-you-die",
        
          title: "Seneca — On Time, Death, and the Art of Living Before You Die...",
        
        description: "The most human of the Stoics — on wasted time, genuine friendship, and why we are all dying badly.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/seneca/";
          
        },
      },{id: "post-the-measurement-problem-why-quantum-mechanics-has-no-agreed-interpretation-after-100-years",
        
          title: "The Measurement Problem — Why Quantum Mechanics Has No Agreed Interpretation After 100...",
        
        description: "The formalism works perfectly. Nobody agrees on what it means. A technical deep-dive into the most embarrassing open problem in physics.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/measurement-problem-deep/";
          
        },
      },{id: "post-geometry-let-no-one-ignorant-of-geometry-enter",
        
          title: "Geometry — Let No One Ignorant of Geometry Enter",
        
        description: "From Thales to Riemann — the oldest science, the deepest language, and why geometry is not about shapes but about the structure of reality itself.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/geometry/";
          
        },
      },{id: "post-a-manifesto-against-pseudo-intellectualism-on-the-most-dangerous-people-in-the-room",
        
          title: "A Manifesto Against Pseudo-Intellectualism — On the Most Dangerous People in the Room...",
        
        description: "Not a polite essay. A reckoning with the people who weaponize the appearance of knowledge while being its most committed enemies.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/against-pseudo-intellectuals/";
          
        },
      },{id: "post-the-game-of-go-the-most-human-game-ever-invented",
        
          title: "The Game of Go — The Most Human Game Ever Invented",
        
        description: "On Weiqi, AlphaGo, and why 19×19 intersections contain everything.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/the-game-of-go/";
          
        },
      },{id: "post-the-art-of-folding-paper-history-and-the-mathematics-of-modular-origami",
        
          title: "The Art of Folding — Paper, History, and the Mathematics of Modular Origami...",
        
        description: "From Cai Lun&#39;s invention to Miura folds — everything that happens when paper meets intention.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/modular-origami/";
          
        },
      },{id: "post-chingiz-aitmatov-the-writer-who-carried-a-whole-world-on-his-back",
        
          title: "Chingiz Aitmatov — The Writer Who Carried a Whole World on His Back...",
        
        description: "On the most important writer you may never have read — and why that is a loss you should correct immediately.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/chingiz-aitmatov/";
          
        },
      },{id: "post-bivariate-bicycle-codes-a-new-hope-for-qldpc",
        
          title: "Bivariate Bicycle Codes — A New Hope for qLDPC",
        
        description: "Structure, parameters, and why they matter.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/bivariate-bicycle-codes/";
          
        },
      },{id: "post-süperpozisyon-ve-dolanıklık",
        
          title: "Süperpozisyon ve Dolanıklık",
        
        description: "Kuantum mekaniğinin en tuhaf iki gerçeği üzerine.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/superpozisyon-ve-dolaniklik/";
          
        },
      },{id: "post-the-renormalization-group-the-deepest-idea-in-physics",
        
          title: "The Renormalization Group — The Deepest Idea in Physics",
        
        description: "Why physics at different scales decouples, how universality emerges from microscopic chaos, and why the RG is not a technique but a way of thinking about reality.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/renormalization-group/";
          
        },
      },{id: "post-camus-39-s-the-stranger-on-indifference-honesty-and-the-unbearable-lightness-of-not-pretending",
        
          title: "Camus&#39;s The Stranger — On Indifference, Honesty, and the Unbearable Lightness of Not...",
        
        description: "A close reading of the most misread novel of the twentieth century.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/the-stranger/";
          
        },
      },{id: "post-the-system-that-rewards-visibility-over-knowledge",
        
          title: "The System That Rewards Visibility Over Knowledge",
        
        description: "On the structural inversion at the heart of contemporary intellectual life — where being seen has replaced knowing, where platform has replaced depth, and where the loudest voice wins regardless of what it says.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/visibility-over-knowledge/";
          
        },
      },{id: "post-the-holographic-principle-is-the-universe-a-projection",
        
          title: "The Holographic Principle — Is the Universe a Projection?",
        
        description: "On Bekenstein, Hawking, &#39;t Hooft, Susskind, and Maldacena — and why the universe may contain less information than you think.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/holographic-principle/";
          
        },
      },{id: "post-the-problem-of-the-self-does-quot-you-quot-exist",
        
          title: "The Problem of the Self — Does &quot;You&quot; Exist?",
        
        description: "Hume, Parfit, Buddhism, and the unsettling possibility that nobody is home.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/the-self/";
          
        },
      },{id: "post-entropy-and-the-arrow-of-time-why-you-cannot-unscramble-an-egg",
        
          title: "Entropy and the Arrow of Time — Why You Cannot Unscramble an Egg...",
        
        description: "The only law in physics that knows which way time flows.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/entropy-and-the-arrow-of-time/";
          
        },
      },{id: "post-the-planck-scale-where-physics-ends-and-the-unknown-begins",
        
          title: "The Planck Scale — Where Physics Ends and the Unknown Begins",
        
        description: "At 10⁻³⁵ meters, our best theories break down simultaneously. This is not a technical problem. It is the edge of what we can know.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/planck-scale/";
          
        },
      },{id: "post-quantum-computing-separating-the-revolution-from-the-hype",
        
          title: "Quantum Computing — Separating the Revolution from the Hype",
        
        description: "A quantum researcher&#39;s honest guide to what quantum computers can and cannot do — and why the headlines are almost always wrong.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/quantum-computing-hype/";
          
        },
      },{id: "post-the-philosopher-39-s-nephew-on-nepotism-merit-and-the-betrayal-of-ideas",
        
          title: "The Philosopher&#39;s Nephew — On Nepotism, Merit, and the Betrayal of Ideas",
        
        description: "Plato gave the Academy to his nephew instead of Aristotle. It is the oldest academic scandal in history. It is also happening right now, everywhere.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/nepotism/";
          
        },
      },{id: "post-quantum-field-theory-what-everything-actually-is",
        
          title: "Quantum Field Theory — What Everything Actually Is",
        
        description: "There are no particles. There are no waves. There are only fields — and this changes everything.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/quantum-field-theory/";
          
        },
      },{id: "post-baudrillard-the-desert-of-the-real",
        
          title: "Baudrillard — The Desert of the Real",
        
        description: "On simulacra, hyperreality, and the philosopher who said the Gulf War did not take place — and was not wrong.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/baudrillard/";
          
        },
      },{id: "post-the-standard-model-the-most-successful-theory-ever-written",
        
          title: "The Standard Model — The Most Successful Theory Ever Written",
        
        description: "How we fit the entire universe onto one page — and what that page cannot explain.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/the-standard-model/";
          
        },
      },{id: "post-bell-39-s-theorem-the-most-profound-discovery-in-the-history-of-physics",
        
          title: "Bell&#39;s Theorem — The Most Profound Discovery in the History of Physics",
        
        description: "In 1964, John Bell proved that no theory of local hidden variables can reproduce quantum mechanics. In 1982, Aspect confirmed it experimentally. The universe is nonlocal. This changes everything.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/bells-theorem/";
          
        },
      },{id: "post-physics-lied-to-you-common-misconceptions-that-even-smart-people-believe",
        
          title: "Physics Lied to You — Common Misconceptions That Even Smart People Believe",
        
        description: "Gravity doesn&#39;t pull. Space isn&#39;t empty. And lightning absolutely does strike twice. A physicist&#39;s guide to unlearning.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/physics-misconceptions/";
          
        },
      },{id: "post-sartre-existence-precedes-essence-and-that-is-terrifying",
        
          title: "Sartre — Existence Precedes Essence, and That Is Terrifying",
        
        description: "On radical freedom, bad faith, and the philosopher who said you are condemned to be free.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/sartre/";
          
        },
      },{id: "post-nietzsche-god-is-dead-and-we-have-killed-him",
        
          title: "Nietzsche — God Is Dead, and We Have Killed Him",
        
        description: "On the most misread philosopher in history — will to power, eternal recurrence, and the Übermensch.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/nietzsche/";
          
        },
      },{id: "post-decoherence-why-quantum-computers-are-hard",
        
          title: "Decoherence — Why Quantum Computers Are Hard",
        
        description: "The fragility of quantum information and the war against noise.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/decoherence/";
          
        },
      },{id: "post-goethe-39-s-faust-the-man-who-made-a-deal-with-the-devil-and-won",
        
          title: "Goethe&#39;s Faust — The Man Who Made a Deal With the Devil and...",
        
        description: "On the greatest work in the German language — a poem about the insatiability of human desire, the danger of pure intellect, the redemptive power of striving, and why Mephistopheles loses in the end.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/goethe-faust/";
          
        },
      },{id: "post-the-hard-problem-of-consciousness-why-the-brain-is-not-enough",
        
          title: "The Hard Problem of Consciousness — Why the Brain Is Not Enough",
        
        description: "On qualia, the explanatory gap, and the most difficult question in all of philosophy and science.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/hard-problem-consciousness/";
          
        },
      },{id: "post-bose-einstein-condensation-when-quantum-mechanics-becomes-visible",
        
          title: "Bose-Einstein Condensation — When Quantum Mechanics Becomes Visible",
        
        description: "The theoretical prediction took 70 years to realize experimentally. The result: a new state of matter where quantum mechanics operates at macroscopic scales, and a laboratory for everything from superfluidity to quantum simulation to analogue gravity.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/bose-einstein-condensate/";
          
        },
      },{id: "post-martin-eden-the-book-that-knows-too-much-about-you",
        
          title: "Martin Eden — The Book That Knows Too Much About You",
        
        description: "On Jack London&#39;s most personal novel, and why some books are not read but survived.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/martin-eden/";
          
        },
      },{id: "post-vacuum-energy-why-nothing-weighs-something",
        
          title: "Vacuum Energy — Why Nothing Weighs Something",
        
        description: "The quantum vacuum is not empty. It seethes with fluctuations, virtual particles, and an energy density that our best theory predicts to be 10¹²² times larger than observed. This is either the worst prediction in physics — or a clue to something we don&#39;t yet understand.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/vacuum-energy/";
          
        },
      },{id: "post-spontaneous-symmetry-breaking-when-the-universe-chose-a-direction",
        
          title: "Spontaneous Symmetry Breaking — When the Universe Chose a Direction",
        
        description: "The Lagrangian is symmetric. The vacuum is not. This asymmetry between the laws and their solution is the origin of mass, the origin of phases of matter, and possibly the origin of everything.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/spontaneous-symmetry-breaking-deep/";
          
        },
      },{id: "post-dostoevsky-the-writer-who-knew-too-much",
        
          title: "Dostoevsky — The Writer Who Knew Too Much",
        
        description: "On suffering, freedom, and the novelist who saw the twentieth century coming.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/dostoevsky/";
          
        },
      },{id: "post-general-relativity-gravity-is-not-a-force",
        
          title: "General Relativity — Gravity Is Not a Force",
        
        description: "Einstein&#39;s greatest achievement — the geometric theory of gravity, spacetime curvature, and why falling is the most natural thing in the universe.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/general-relativity/";
          
        },
      },{id: "post-the-spin-statistics-theorem-why-half-the-universe-cannot-be-in-the-same-place",
        
          title: "The Spin-Statistics Theorem — Why Half the Universe Cannot Be in the Same...",
        
        description: "The deepest theorem in quantum field theory — why integer-spin particles are sociable and half-integer-spin particles are antisocial, and why the universe depends on this distinction.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/spin-statistics/";
          
        },
      },{id: "post-the-crisis-in-fundamental-physics-an-honest-assessment",
        
          title: "The Crisis in Fundamental Physics — An Honest Assessment",
        
        description: "The LHC found the Higgs and nothing else. String theory makes no testable predictions. The foundations of quantum mechanics remain unsettled. This is not pessimism — it is an accurate description of where we are.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/crisis-in-physics/";
          
        },
      },{id: "post-gogol-39-s-overcoat-on-invisibility-desire-and-the-weight-of-a-name",
        
          title: "Gogol&#39;s Overcoat — On Invisibility, Desire, and the Weight of a Name",
        
        description: "A close reading of the strangest, most devastating short story ever written — and what it says about being human.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/gogol-the-overcoat/";
          
        },
      },{id: "post-the-fine-tuned-universe-why-the-constants-are-what-they-are",
        
          title: "The Fine-Tuned Universe — Why the Constants Are What They Are",
        
        description: "The fundamental constants of nature appear to be precisely calibrated for the existence of complexity. Change any of them slightly, and the universe becomes sterile. This is either the deepest fact about reality — or the most dangerous idea in physics.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/fine-tuned-universe/";
          
        },
      },{id: "post-look-up-a-letter-to-anyone-who-has-forgotten-the-sky",
        
          title: "Look Up — A Letter to Anyone Who Has Forgotten the Sky",
        
        description: "From Thales to Galileo to a Celestron telescope in Texas — on the oldest human practice and why it still matters.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/stargazing/";
          
        },
      },{id: "post-special-relativity-the-end-of-absolute-space-and-time",
        
          title: "Special Relativity — The End of Absolute Space and Time",
        
        description: "In 1905, a 26-year-old patent clerk destroyed Newton&#39;s universe. What he built in its place is stranger, more beautiful, and more true.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/special-relativity/";
          
        },
      },{id: "post-wittgenstein-the-philosopher-who-tried-to-kill-philosophy",
        
          title: "Wittgenstein — The Philosopher Who Tried to Kill Philosophy",
        
        description: "On the man who wrote the most important philosophical work of the 20th century at 29, then spent the rest of his life arguing it was wrong — and why both versions are essential.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/wittgenstein/";
          
        },
      },{id: "post-post-truth-on-the-collapse-of-the-epistemic-commons",
        
          title: "Post-Truth — On the Collapse of the Epistemic Commons",
        
        description: "How we stopped agreeing on what is real, and what that means for everything.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/post-truth/";
          
        },
      },{id: "post-beautiful-but-wrong-the-most-elegant-theories-that-nature-rejected",
        
          title: "Beautiful But Wrong — The Most Elegant Theories That Nature Rejected",
        
        description: "Science is not only the history of what is true. It is also the history of beautiful ideas that turned out to be wrong — and why those ideas matter as much as the correct ones.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/beautiful-wrong-theories/";
          
        },
      },{id: "post-epictetus-the-slave-who-was-free",
        
          title: "Epictetus — The Slave Who Was Free",
        
        description: "On the man who owned nothing, controlled everything, and taught Marcus Aurelius how to be emperor.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/epictetus/";
          
        },
      },{id: "post-topological-phases-of-matter-when-topology-becomes-physics",
        
          title: "Topological Phases of Matter — When Topology Becomes Physics",
        
        description: "The 2016 Nobel Prize recognized a revolution in condensed matter physics — the discovery that matter can be classified not by symmetry breaking but by topology. This is the story of that revolution, from the quantum Hall effect to topological insulators to non-Abelian anyons.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/topological-phases/";
          
        },
      },{id: "post-marcus-aurelius-the-emperor-who-wrote-to-himself",
        
          title: "Marcus Aurelius — The Emperor Who Wrote to Himself",
        
        description: "On the Meditations — the most private philosophical document ever accidentally published.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/marcus-aurelius/";
          
        },
      },{id: "post-the-country-that-ate-its-own-geniuses-america-and-the-intellectuals-it-could-not-love",
        
          title: "The Country That Ate Its Own Geniuses — America and the Intellectuals It...",
        
        description: "Poe died in a gutter. Melville died forgotten. Emily Dickinson published almost nothing in her lifetime. America does not merely ignore its geniuses — it has a specific, structural relationship with them that ends, repeatedly, in the same way.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/america-and-its-geniuses/";
          
        },
      },{id: "post-quantum-chromodynamics-the-violent-heart-of-matter",
        
          title: "Quantum Chromodynamics — The Violent Heart of Matter",
        
        description: "The theory of the strong nuclear force — asymptotic freedom, color confinement, instantons, and the deep mystery of why quarks can never be free. The most mathematically rich and least understood of the fundamental forces.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/quantum-chromodynamics/";
          
        },
      },{id: "post-kant-the-man-who-never-left-königsberg-and-changed-everything",
        
          title: "Kant — The Man Who Never Left Königsberg and Changed Everything",
        
        description: "On synthetic a priori judgments, the categorical imperative, and the most boring revolutionary in the history of philosophy.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/kant/";
          
        },
      },{id: "post-why-american-intellectuals-are-invisible-a-philosophical-diagnosis",
        
          title: "Why American Intellectuals Are Invisible — A Philosophical Diagnosis",
        
        description: "France has public intellectuals. Germany has public intellectuals. Even small countries have them. America — with the world&#39;s greatest universities — systematically renders its thinkers invisible. This is not an accident. It is a structural feature of American civilization.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/american-anti-intellectualism/";
          
        },
      },{id: "post-symmetry-the-unreasonable-beauty-at-the-heart-of-physics",
        
          title: "Symmetry — The Unreasonable Beauty at the Heart of Physics",
        
        description: "Why the deepest laws of nature are not equations but symmetries — and what it means that beauty has been the most reliable guide to truth in the history of physics.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/symmetry-in-physics/";
          
        },
      },{id: "post-epicurus-and-the-art-of-living-well-a-philosophy-for-the-present",
        
          title: "Epicurus and the Art of Living Well — A Philosophy for the Present...",
        
        description: "On pleasure, death, friendship, and why the most misunderstood philosopher in history was probably right.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/epicurus/";
          
        },
      },{id: "post-my-biggest-red-flag-on-being-intolerant-of-superficiality-a-confession-and-a-defense",
        
          title: "My biggest Red Flag - On Being Intolerant of Superficiality — A Confession...",
        
        description: "I cannot pretend to be interested when I am not. I cannot perform depth I do not feel. I cannot sit comfortably with people who are satisfied with the surface of things. This is either a virtue or a flaw — probably both.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/intolerance-for-superficiality/";
          
        },
      },{id: "post-plato-the-cave-the-sun-and-the-man-who-chose-to-die",
        
          title: "Plato — The Cave, the Sun, and the Man Who Chose to Die...",
        
        description: "On the Allegory of the Cave, the Theory of Forms, and why Socrates drank the hemlock.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/plato/";
          
        },
      },{id: "post-in-defense-of-boredom-why-doing-nothing-is-the-most-radical-act-left",
        
          title: "In Defense of Boredom — Why Doing Nothing Is the Most Radical Act...",
        
        description: "On the disappearance of boredom, what we lost with it, and why sitting with emptiness might be the most important thing you can do today.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/boredom/";
          
        },
      },{id: "post-pushkin-the-man-who-invented-russian-literature",
        
          title: "Pushkin — The Man Who Invented Russian Literature",
        
        description: "On the poet who created a language, wrote the first modern novel in verse, and died at thirty-seven in a duel he knew he would lose.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pushkin/";
          
        },
      },{id: "post-yaşamaya-değer-mi",
        
          title: "Yaşamaya Değer Mi?",
        
        description: "Camus soruyor, Seneca cevaplıyor — ya da tam tersi.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/yasameya-deger-mi/";
          
        },
      },{id: "post-beginnings",
        
          title: "Beginnings",
        
        description: "On starting, scattering, and the space between.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/beginnings/";
          
        },
      },{id: "post-başlangıç",
        
          title: "Başlangıç",
        
        description: "Bu alan neden var?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/baslangic/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%75%6C%66%69%6C%69%7A%69%73%69%6B@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-twitter_username',
        title: 'Twitter_username',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
