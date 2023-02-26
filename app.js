const data = 
    [
        {
          "title": "Top Stories",
          "news": [
            {
              "title": "Apple unveils new iPhone models",
              "summary": "Apple Inc. has announced the release of its latest iPhone models, the iPhone 13 Pro and iPhone 13 Mini. The new models feature improved cameras, a faster processor, and a sleek new design.",
              "url": "https://www.apple.com/news/iphone-13-pro-and-iphone-13-mini-unveiled"
            },
            {
              "title": "SpaceX launches first all-civilian mission to space",
              "summary": "SpaceX has launched its first all-civilian mission to space, carrying four passengers on a journey to the International Space Station. This historic mission marks a major milestone in private space travel.",
              "url": "https://www.spacex.com/news/first-all-civilian-mission-to-space"
            },
            {
              "title": "Google announces new AI language model",
              "summary": "Google has unveiled its latest artificial intelligence language model, the Google Transformer 4. The new model is capable of generating human-like responses in a variety of languages, making it one of the most advanced AI language models to date.",
              "url": "https://www.google.com/news/transformer-4-ai-language-model"
            }
          ]
        },
        {
          "title": "Business",
          "news": [
            {
              "title": "Amazon reports record-breaking quarter",
              "summary": "Amazon has announced its latest earnings, reporting a record-breaking quarter with billions in revenue. The company attributes its success to the continued growth of its online retail business and its expanding cloud computing division.",
              "url": "https://www.amazon.com/news/record-breaking-quarter"
            },
            {
              "title": "Tesla to build new factory in Germany",
              "summary": "Tesla has announced plans to build a new factory in Germany, which will produce electric vehicles for the European market. The new factory is expected to create thousands of jobs and make a significant contribution to the local economy.",
              "url": "https://www.tesla.com/news/new-factory-germany"
            },
            {
              "title": "Facebook acquires virtual reality company",
              "summary": "Facebook has acquired a virtual reality company, in a move that further expands the social media giant's presence in the virtual reality space. The company has not disclosed the terms of the deal, but it is expected to be a major player in the VR industry moving forward.",
              "url": "https://www.facebook.com/news/virtual-reality-company-acquisition"
            }
          ]
        },
        {
          "title": "Sports",
          "news": [
            {
              "title": "Usain Bolt breaks world record",
              "summary": "Usain Bolt has broken the world record for the 100 meter dash, completing the race in an unprecedented time of 9.58 seconds. The Jamaican sprinter is widely regarded as one of the greatest runners of all time, and his latest record solidifies his position as a true legend of the sport.",
              "url": "https://www.usainbolt.com/news/"
            },
            {
                "title": "Barcelona wins El Clasico against Real Madrid",
                "summary": "Barcelona has won the latest edition of the El Clasico against Real Madrid, securing a 2-0 victory at the Camp Nou Stadium. The match was highly anticipated and was watched by millions of fans around the world.",
                "url": "https://www.fcbarcelona.com/news/el-clasico-win-real-madrid"
              },
              {
                "title": "Michael Jordan to be inducted into Hall of Fame",
                "summary": "Basketball legend Michael Jordan will be inducted into the Hall of Fame, honoring his illustrious career and his impact on the sport. Jordan is widely regarded as one of the greatest basketball players of all time, and his induction into the Hall of Fame is a well-deserved recognition of his achievements.",
                "url": "https://www.michaeljordan.com/news/hall-of-fame-induction"
              }
          ]
        },
        {
            "title": "Technology",
            "news": [
              {
                "title": "Microsoft unveils new Surface Pro tablet",
                "summary": "Microsoft has announced the release of its latest Surface Pro tablet, which features a sleek design, improved performance, and a long battery life. The new tablet is aimed at professionals who need a powerful and portable device for work and play.",
                "url": "https://www.microsoft.com/news/surface-pro-tablet"
              },
              {
                "title": "Google launches new gaming platform",
                "summary": "Google has launched a new gaming platform, which allows players to stream and play games on any device with internet access. The platform is expected to be a major player in the gaming industry, offering a seamless and accessible gaming experience for players everywhere.",
                "url": "https://www.google.com/news/gaming-platform"
              },
              {
                "title": "Amazon introduces new Echo device",
                "summary": "Amazon has introduced its latest Echo device, which features improved voice recognition, a sleek design, and a range of new features. The new Echo device is aimed at making life easier and more convenient for users, with voice-controlled access to music, news, and other information.",
                "url": "https://www.amazon.com/news/echo-device"
              }
            ]
        },
        {
            "title": "Entertainment",
            "news": [
              {
                "title": "The Oscars announces nominations for 2022",
                "summary": "The Oscars have announced the nominations for its 2022 ceremony, recognizing the best in film from the past year. This year's nominees include a mix of new and established talent, and the ceremony is expected to be a star-studded event.",
                "url": "https://www.oscars.org/news/2022-nominations"
              },
              {
                "title": "Beyonce drops new album",
                "summary": "Pop icon Beyonce has released a new album, which has been met with widespread critical acclaim. The album features a range of new songs, showcasing Beyonce's versatility as an artist and her continued relevance in the music industry.",
                "url": "https://www.beyonce.com/news/new-album"
              },
              {
                "title": "Marvel releases new superhero movie",
                "summary": "Marvel has released a new superhero movie, which has been highly anticipated by fans. The movie features a range of new characters and is set to continue the franchise's legacy of thrilling and action-packed adventures.",
                "url": "https://www.marvel.com/news/new-superhero-movie"
              }
            ]
        }
    ];
  
  const createArticleElement = (article) => {
    const articleElement = document.createElement("li");
  
    const titleElement = document.createElement("h3");
    titleElement.textContent = article.title;
    articleElement.appendChild(titleElement);
  
    const summaryElement = document.createElement("p");
    summaryElement.textContent = article.summary;
    articleElement.appendChild(summaryElement);
  
    const urlElement = document.createElement("a");
    urlElement.textContent = "Read more";
    urlElement.href = article.url;
    articleElement.appendChild(urlElement);
  
    return articleElement;
  };
  
  data.forEach(({ title, news }) => {
    const sectionId = title.toLowerCase().replace(" ", "-");
    const listId = `${sectionId}-list`;
  
    const sectionElement = document.querySelector(`#${sectionId}`);
    const listElement = document.querySelector(`#${listId}`);
  
    news.forEach((article) => {
      const articleElement = createArticleElement(article);
      listElement.appendChild(articleElement);
    });
  });
  const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#searchInput");
const sections = document.querySelectorAll("section");

searchForm.addEventListener("submit", function(e) {
  e.preventDefault();
  let searchTerm = searchInput.value.toLowerCase();

  sections.forEach(function(section) {
    let articleList = section.querySelector("ul");
    let articles = articleList.querySelectorAll("li");

    articles.forEach(function(article) {
      let articleTitle = article.querySelector("h3").textContent.toLowerCase();

      if (articleTitle.indexOf(searchTerm) !== -1) {
        article.style.display = "block";
      } else {
        article.style.display = "none";
      }
    });
  });
});
