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
        },{id: "post-seneca-on-time-death-and-the-art-of-living-before-you-die",
        
          title: "Seneca — On Time, Death, and the Art of Living Before You Die...",
        
        description: "The most human of the Stoics — on wasted time, genuine friendship, and why we are all dying badly.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/seneca/";
          
        },
      },{id: "post-sartre-existence-precedes-essence-and-that-is-terrifying",
        
          title: "Sartre — Existence Precedes Essence, and That Is Terrifying",
        
        description: "On radical freedom, bad faith, and the philosopher who said you are condemned to be free.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/sartre/";
          
        },
      },{id: "post-quantum-field-theory-what-everything-actually-is",
        
          title: "Quantum Field Theory — What Everything Actually Is",
        
        description: "There are no particles. There are no waves. There are only fields — and this changes everything.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/quantum-field-theory/";
          
        },
      },{id: "post-quantum-computing-separating-the-revolution-from-the-hype",
        
          title: "Quantum Computing — Separating the Revolution from the Hype",
        
        description: "A quantum researcher&#39;s honest guide to what quantum computers can and cannot do — and why the headlines are almost always wrong.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/quantum-computing-hype/";
          
        },
      },{id: "post-pushkin-the-man-who-invented-russian-literature",
        
          title: "Pushkin — The Man Who Invented Russian Literature",
        
        description: "On the poet who created a language, wrote the first modern novel in verse, and died at thirty-seven in a duel he knew he would lose.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/pushkin/";
          
        },
      },{id: "post-plato-the-cave-the-sun-and-the-man-who-chose-to-die",
        
          title: "Plato — The Cave, the Sun, and the Man Who Chose to Die...",
        
        description: "On the Allegory of the Cave, the Theory of Forms, and why Socrates drank the hemlock.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/plato/";
          
        },
      },{id: "post-physics-lied-to-you-common-misconceptions-that-even-smart-people-believe",
        
          title: "Physics Lied to You — Common Misconceptions That Even Smart People Believe",
        
        description: "Gravity doesn&#39;t pull. Space isn&#39;t empty. And lightning absolutely does strike twice. A physicist&#39;s guide to unlearning.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/physics-misconceptions/";
          
        },
      },{id: "post-nietzsche-god-is-dead-and-we-have-killed-him",
        
          title: "Nietzsche — God Is Dead, and We Have Killed Him",
        
        description: "On the most misread philosopher in history — will to power, eternal recurrence, and the Übermensch.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/nietzsche/";
          
        },
      },{id: "post-the-measurement-problem-why-quantum-mechanics-has-no-agreed-interpretation-after-100-years",
        
          title: "The Measurement Problem — Why Quantum Mechanics Has No Agreed Interpretation After 100...",
        
        description: "The formalism works perfectly. Nobody agrees on what it means. A technical deep-dive into the most embarrassing open problem in physics.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/measurement-problem-deep/";
          
        },
      },{id: "post-marcus-aurelius-the-emperor-who-wrote-to-himself",
        
          title: "Marcus Aurelius — The Emperor Who Wrote to Himself",
        
        description: "On the Meditations — the most private philosophical document ever accidentally published.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/marcus-aurelius/";
          
        },
      },{id: "post-the-hard-problem-of-consciousness-why-the-brain-is-not-enough",
        
          title: "The Hard Problem of Consciousness — Why the Brain Is Not Enough",
        
        description: "On qualia, the explanatory gap, and the most difficult question in all of philosophy and science.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/hard-problem-consciousness/";
          
        },
      },{id: "post-epictetus-the-slave-who-was-free",
        
          title: "Epictetus — The Slave Who Was Free",
        
        description: "On the man who owned nothing, controlled everything, and taught Marcus Aurelius how to be emperor.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/epictetus/";
          
        },
      },{id: "post-in-defense-of-boredom-why-doing-nothing-is-the-most-radical-act-left",
        
          title: "In Defense of Boredom — Why Doing Nothing Is the Most Radical Act...",
        
        description: "On the disappearance of boredom, what we lost with it, and why sitting with emptiness might be the most important thing you can do today.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/boredom/";
          
        },
      },{id: "post-baudrillard-the-desert-of-the-real",
        
          title: "Baudrillard — The Desert of the Real",
        
        description: "On simulacra, hyperreality, and the philosopher who said the Gulf War did not take place — and was not wrong.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/baudrillard/";
          
        },
      },{id: "post-a-manifesto-against-pseudo-intellectualism-on-the-most-dangerous-people-in-the-room",
        
          title: "A Manifesto Against Pseudo-Intellectualism — On the Most Dangerous People in the Room...",
        
        description: "Not a polite essay. A reckoning with the people who weaponize the appearance of knowledge while being its most committed enemies.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/against-pseudo-intellectuals/";
          
        },
      },{id: "post-camus-39-s-the-stranger-on-indifference-honesty-and-the-unbearable-lightness-of-not-pretending",
        
          title: "Camus&#39;s The Stranger — On Indifference, Honesty, and the Unbearable Lightness of Not...",
        
        description: "A close reading of the most misread novel of the twentieth century.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/the-stranger/";
          
        },
      },{id: "post-the-standard-model-the-most-successful-theory-ever-written",
        
          title: "The Standard Model — The Most Successful Theory Ever Written",
        
        description: "How we fit the entire universe onto one page — and what that page cannot explain.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/the-standard-model/";
          
        },
      },{id: "post-the-problem-of-the-self-does-quot-you-quot-exist",
        
          title: "The Problem of the Self — Does &quot;You&quot; Exist?",
        
        description: "Hume, Parfit, Buddhism, and the unsettling possibility that nobody is home.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/the-self/";
          
        },
      },{id: "post-what-does-it-mean-to-measure-something",
        
          title: "What Does It Mean to Measure Something?",
        
        description: "The deepest unsolved problem in quantum mechanics — and why your textbook lied to you.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/the-measurement-problem/";
          
        },
      },{id: "post-the-game-of-go-the-most-human-game-ever-invented",
        
          title: "The Game of Go — The Most Human Game Ever Invented",
        
        description: "On Weiqi, AlphaGo, and why 19×19 intersections contain everything.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/the-game-of-go/";
          
        },
      },{id: "post-post-truth-on-the-collapse-of-the-epistemic-commons",
        
          title: "Post-Truth — On the Collapse of the Epistemic Commons",
        
        description: "How we stopped agreeing on what is real, and what that means for everything.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/post-truth/";
          
        },
      },{id: "post-the-art-of-folding-paper-history-and-the-mathematics-of-modular-origami",
        
          title: "The Art of Folding — Paper, History, and the Mathematics of Modular Origami...",
        
        description: "From Cai Lun&#39;s invention to Miura folds — everything that happens when paper meets intention.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/modular-origami/";
          
        },
      },{id: "post-martin-eden-the-book-that-knows-too-much-about-you",
        
          title: "Martin Eden — The Book That Knows Too Much About You",
        
        description: "On Jack London&#39;s most personal novel, and why some books are not read but survived.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/martin-eden/";
          
        },
      },{id: "post-kant-the-man-who-never-left-königsberg-and-changed-everything",
        
          title: "Kant — The Man Who Never Left Königsberg and Changed Everything",
        
        description: "On synthetic a priori judgments, the categorical imperative, and the most boring revolutionary in the history of philosophy.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/kant/";
          
        },
      },{id: "post-gogol-39-s-overcoat-on-invisibility-desire-and-the-weight-of-a-name",
        
          title: "Gogol&#39;s Overcoat — On Invisibility, Desire, and the Weight of a Name",
        
        description: "A close reading of the strangest, most devastating short story ever written — and what it says about being human.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/gogol-the-overcoat/";
          
        },
      },{id: "post-epicurus-and-the-art-of-living-well-a-philosophy-for-the-present",
        
          title: "Epicurus and the Art of Living Well — A Philosophy for the Present...",
        
        description: "On pleasure, death, friendship, and why the most misunderstood philosopher in history was probably right.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/epicurus/";
          
        },
      },{id: "post-entropy-and-the-arrow-of-time-why-you-cannot-unscramble-an-egg",
        
          title: "Entropy and the Arrow of Time — Why You Cannot Unscramble an Egg...",
        
        description: "The only law in physics that knows which way time flows.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/entropy-and-the-arrow-of-time/";
          
        },
      },{id: "post-dostoevsky-the-writer-who-knew-too-much",
        
          title: "Dostoevsky — The Writer Who Knew Too Much",
        
        description: "On suffering, freedom, and the novelist who saw the twentieth century coming.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/dostoevsky/";
          
        },
      },{id: "post-decoherence-why-quantum-computers-are-hard",
        
          title: "Decoherence — Why Quantum Computers Are Hard",
        
        description: "The fragility of quantum information and the war against noise.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/decoherence/";
          
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
      },{id: "post-yaşamaya-değer-mi",
        
          title: "Yaşamaya Değer Mi?",
        
        description: "Camus soruyor, Seneca cevaplıyor — ya da tam tersi.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/yasameya-deger-mi/";
          
        },
      },{id: "post-süperpozisyon-ve-dolanıklık",
        
          title: "Süperpozisyon ve Dolanıklık",
        
        description: "Kuantum mekaniğinin en tuhaf iki gerçeği üzerine.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/superpozisyon-ve-dolaniklik/";
          
        },
      },{id: "post-beginnings",
        
          title: "Beginnings",
        
        description: "On starting, scattering, and the space between.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/beginnings/";
          
        },
      },{id: "post-başlangıç",
        
          title: "Başlangıç",
        
        description: "Bu alan neden var?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/baslangic/";
          
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
