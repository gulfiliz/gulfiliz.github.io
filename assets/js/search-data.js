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
        },{id: "post-the-standard-model-the-most-successful-theory-ever-written",
        
          title: "The Standard Model — The Most Successful Theory Ever Written",
        
        description: "How we fit the entire universe onto one page — and what that page cannot explain.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/the-standard-model/";
          
        },
      },{id: "post-the-game-of-go-the-most-human-game-ever-invented",
        
          title: "The Game of Go — The Most Human Game Ever Invented",
        
        description: "On Weiqi, AlphaGo, and why 19×19 intersections contain everything.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/the-game-of-go/";
          
        },
      },{id: "post-decoherence-why-quantum-computers-are-hard",
        
          title: "Decoherence — Why Quantum Computers Are Hard",
        
        description: "The fragility of quantum information and the war against noise.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/decoherence/";
          
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
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
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
