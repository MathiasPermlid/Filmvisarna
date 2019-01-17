<template>
  <!--  <div class="graphicList">
    <ul class="movieList">
      <li v-for="(data, index) in movies" :key="index" class="movieItem">
        <img v-bind:src="data.images[0]" class="movie-image">
      </li>
    </ul>
  </div>-->
  <div class="graphicList">
    <ul class="movieList">
      <li v-for="(data, index) in movies" :key="index" class="movieItem">
        <img v-bind:src="data.images[0]" class="movie-image"> 
      </li>
    </ul> 
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "graphicList",
  data() {
    return {
      movies: [
        {
          title: "Gallowwalkers",
          productionCountries: ["Italy", "Sweden"],
          productionYear: 2019,
          length: 120,
          genre: "Action|Horror|Sci-Fi|Western",
          distributor: "Holdlamis",
          language: "Kashmiri",
          subtitles: "Tetum",
          director: "Mei Edlyn",
          actors: [
            "Jannie Kekelen",
            "Annie Löfven",
            "Peter Skogstokig",
            "Kalkonen Adamsson"
          ],
          description:
            "in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin",
          images: [
            
            "https://m.media-amazon.com/images/M/MV5BMjI3MzIxNzM0OV5BMl5BanBnXkFtZTgwNDEzOTQxMDE@._V1_SX300.jpg",
            "@/assets/movies/Gallowwalkers/poster-2.jpg",
            "@/assets/movies/Gallowwalkers/poster-3.jpg"
          ],
          youtubeTrailers: ["https://www.youtube.com/watch?v=_frXIZZSaO4"],
          reviews: [
            {
              source: "Svenska Dagbladet",
              quote: "En film som får en att äta asmycket smörpopcorn",
              stars: 4,
              max: 5
            },
            {
              source: "Svenska Nattbladet",
              quote: "Enastående film, härliga subtitles",
              stars: 3,
              max: 5
            },
            {
              source: "Svenska Eftermiddagsbladet",
              quote: "Fantastiskt landskap, fin CGI",
              stars: 4,
              max: 5
            }
          ],
          ageRestriction: 8,
          price: 100
        },
        {
          title: "Emperor's New Groove 2: Kronk's New Groove",
          productionCountries: ["Spain", "USA"],
          productionYear: 2019,
          length: 115,
          genre: "Animation|Children|Comedy",
          distributor: "Flexidy",
          language: "Finnish",
          subtitles: "Burmese",
          director: "Carley Gerrietz",
          actors: ["Stefan Kvistholm", "Makuna Hatata", "Petra Torgstokig"],
          description:
            "vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue",
          images: [
            "https://m.media-amazon.com/images/M/MV5BMTQ5NjQyOTU2MF5BMl5BanBnXkFtZTcwOTU0NjMzMQ@@._V1_.jpg",
            "@/assets/movies/Emperors-Groove/poster-2.jpeg",
            "@/assets/movies/Emperors-Groove/poster-3.jpeg"
          ],
          youtubeTrailers: ["https://www.youtube.com/watch?v=Hjvy8vc39kw"],
          reviews: [
            {
              source: "Svenska Dagbladet",
              quote: "Petra Torgstokig sjunger fantastiskt vackert",
              stars: 5,
              max: 5
            },
            {
              source: "Svenska Nattbladet",
              quote: "Rörande, även barnen grät",
              stars: 4,
              max: 5
            },
            {
              source: "Svenska Eftermiddagsbladet",
              quote: "Helt ok, men så mycket mer",
              stars: 3,
              max: 5
            }
          ],
          ageRestriction: 12,
          price: 100
        },
        {
          title: "Luzhin Defence",
          productionCountries: ["Brazil", "USA"],
          productionYear: 2019,
          length: 114,
          genre: "Drama|Romance",
          distributor: "Tresom",
          language: "Swedish",
          subtitles: "Kannada",
          director: "Rosemonde Hemeret",
          actors: [
            "Lady Gaga",
            "Ulf Löfven",
            "Peder Tokskogs",
            "Tiger Lenasson"
          ],
          description:
            "hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac",
          images: [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzOTYyNDY0Ml5BMl5BanBnXkFtZTcwNzQ5MjcyMQ@@._V1_SX300.jpg",
            "@/assets/movies/Luzhin-Defence/poster-2.jpeg",
            "@/assets/movies/Luzhin-Defence/poster-3.jpeg"
          ],
          youtubeTrailers: ["https://www.youtube.com/watch?v=9BeWpZVVDhw"],
          reviews: [
            {
              source: "Svenska Dagbladet",
              quote: "Om man gillar shack är detta filmen för dig",
              stars: 2,
              max: 5
            },
            {
              source: "Svenska Nattbladet",
              quote: "En enastående shackfilm för shacklovers",
              stars: 3,
              max: 5
            },
            {
              source: "Svenska Eftermiddagsbladet",
              quote: "Inte passande för barn",
              stars: 2,
              max: 5
            }
          ],
          ageRestriction: 16,
          price: 100
        },
        {
          title: "So Ends Our Night",
          productionCountries: ["France", "Belgium"],
          productionYear: 2019,
          length: 127,
          genre: "Drama|War",
          distributor: "Zoolab",
          language: "Yiddish",
          subtitles: "Estonian",
          director: "Reagen Gunney",
          actors: [
            "Erika Neandersson",
            "Andres Kelpity",
            "Pedro Pedriotto",
            "Cattis Puma"
          ],
          description:
            "morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst",
          images: [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk5NDE1NjY4OV5BMl5BanBnXkFtZTcwNjk0MjMzMQ@@._V1_SX300.jpg",
            "@/assets/movies/So-Ends-Our-Night/poster-2.jpeg",
            "@/assets/movies/So-Ends-Our-Night/poster-3.jpeg"
          ],
          youtubeTrailers: ["https://www.youtube.com/watch?v=O5ROSS9ReUY"],
          reviews: [
            {
              source: "Svenska Dagbladet",
              quote: "Ganska rolig, mycket blod",
              stars: 2,
              max: 5
            },
            {
              source: "Svenska Nattbladet",
              quote: "Vi gillade att det var så mycket blod",
              stars: 5,
              max: 5
            },
            {
              source: "Svenska Eftermiddagsbladet",
              quote: "Krig när det är som bäst",
              stars: 4,
              max: 5
            }
          ],
          ageRestriction: 11,
          price: 100
        },
        {
          title: "Declaration of War",
          productionCountries: ["Denmark", "Norway"],
          productionYear: 2019,
          length: 101,
          genre: "Drama",
          distributor: "Wrapsafe",
          language: "Estonian",
          subtitles: "Lao",
          director: "Neils Curnock",
          actors: [
            "Jan-Olof Strömqvist",
            "Anna Blad",
            "Pedra Blomquist",
            "Labradoro Knutsson"
          ],
          description:
            "rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras",
          images: [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1NjI1Mjg3Ml5BMl5BanBnXkFtZTcwMDk0ODAxNw@@._V1_SX300.jpg",
            "@/assets/movies/Declaration-of-War/poster-2.jpeg",
            "@/assets/movies/Declaration-of-War/poster-3.jpeg"
          ],
          youtubeTrailers: ["https://www.youtube.com/watch?v=v5NMhtOTC-s"],
          reviews: [
            {
              source: "Svenska Dagbladet",
              quote: "Realistisk krigsfilm, vi är traumatiserade",
              stars: 4,
              max: 5
            },
            {
              source: "Svenska Nattbladet",
              quote: "För många huvudkaraktärer dog tidigt i filmen",
              stars: 3,
              max: 5
            },
            {
              source: "Svenska Eftermiddagsbladet",
              quote: "Trevligt regi av Neils Curnock",
              stars: 2,
              max: 5
            }
          ],
          ageRestriction: 16,
          price: 100
        },
        {
          title: "Gallowwalkers",
          productionCountries: ["Italy", "Sweden"],
          productionYear: 2019,
          length: 120,
          genre: "Action|Horror|Sci-Fi|Western",
          distributor: "Holdlamis",
          language: "Kashmiri",
          subtitles: "Tetum",
          director: "Mei Edlyn",
          actors: [
            "Jannie Kekelen",
            "Annie Löfven",
            "Peter Skogstokig",
            "Kalkonen Adamsson"
          ],
          description:
            "in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin",
          images: [
            
            "https://m.media-amazon.com/images/M/MV5BMjI3MzIxNzM0OV5BMl5BanBnXkFtZTgwNDEzOTQxMDE@._V1_SX300.jpg",
            "@/assets/movies/Gallowwalkers/poster-2.jpg",
            "@/assets/movies/Gallowwalkers/poster-3.jpg"
          ],
          youtubeTrailers: ["https://www.youtube.com/watch?v=_frXIZZSaO4"],
          reviews: [
            {
              source: "Svenska Dagbladet",
              quote: "En film som får en att äta asmycket smörpopcorn",
              stars: 4,
              max: 5
            },
            {
              source: "Svenska Nattbladet",
              quote: "Enastående film, härliga subtitles",
              stars: 3,
              max: 5
            },
            {
              source: "Svenska Eftermiddagsbladet",
              quote: "Fantastiskt landskap, fin CGI",
              stars: 4,
              max: 5
            }
          ],
          ageRestriction: 8,
          price: 100
        },
        {
          title: "Emperor's New Groove 2: Kronk's New Groove",
          productionCountries: ["Spain", "USA"],
          productionYear: 2019,
          length: 115,
          genre: "Animation|Children|Comedy",
          distributor: "Flexidy",
          language: "Finnish",
          subtitles: "Burmese",
          director: "Carley Gerrietz",
          actors: ["Stefan Kvistholm", "Makuna Hatata", "Petra Torgstokig"],
          description:
            "vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue",
          images: [
            "https://m.media-amazon.com/images/M/MV5BMTQ5NjQyOTU2MF5BMl5BanBnXkFtZTcwOTU0NjMzMQ@@._V1_.jpg",
            "@/assets/movies/Emperors-Groove/poster-2.jpeg",
            "@/assets/movies/Emperors-Groove/poster-3.jpeg"
          ],
          youtubeTrailers: ["https://www.youtube.com/watch?v=Hjvy8vc39kw"],
          reviews: [
            {
              source: "Svenska Dagbladet",
              quote: "Petra Torgstokig sjunger fantastiskt vackert",
              stars: 5,
              max: 5
            },
            {
              source: "Svenska Nattbladet",
              quote: "Rörande, även barnen grät",
              stars: 4,
              max: 5
            },
            {
              source: "Svenska Eftermiddagsbladet",
              quote: "Helt ok, men så mycket mer",
              stars: 3,
              max: 5
            }
          ],
          ageRestriction: 12,
          price: 100
        },
        {
          title: "Luzhin Defence",
          productionCountries: ["Brazil", "USA"],
          productionYear: 2019,
          length: 114,
          genre: "Drama|Romance",
          distributor: "Tresom",
          language: "Swedish",
          subtitles: "Kannada",
          director: "Rosemonde Hemeret",
          actors: [
            "Lady Gaga",
            "Ulf Löfven",
            "Peder Tokskogs",
            "Tiger Lenasson"
          ],
          description:
            "hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac",
          images: [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzOTYyNDY0Ml5BMl5BanBnXkFtZTcwNzQ5MjcyMQ@@._V1_SX300.jpg",
            "@/assets/movies/Luzhin-Defence/poster-2.jpeg",
            "@/assets/movies/Luzhin-Defence/poster-3.jpeg"
          ],
          youtubeTrailers: ["https://www.youtube.com/watch?v=9BeWpZVVDhw"],
          reviews: [
            {
              source: "Svenska Dagbladet",
              quote: "Om man gillar shack är detta filmen för dig",
              stars: 2,
              max: 5
            },
            {
              source: "Svenska Nattbladet",
              quote: "En enastående shackfilm för shacklovers",
              stars: 3,
              max: 5
            },
            {
              source: "Svenska Eftermiddagsbladet",
              quote: "Inte passande för barn",
              stars: 2,
              max: 5
            }
          ],
          ageRestriction: 16,
          price: 100
        },
        {
          title: "So Ends Our Night",
          productionCountries: ["France", "Belgium"],
          productionYear: 2019,
          length: 127,
          genre: "Drama|War",
          distributor: "Zoolab",
          language: "Yiddish",
          subtitles: "Estonian",
          director: "Reagen Gunney",
          actors: [
            "Erika Neandersson",
            "Andres Kelpity",
            "Pedro Pedriotto",
            "Cattis Puma"
          ],
          description:
            "morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst",
          images: [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk5NDE1NjY4OV5BMl5BanBnXkFtZTcwNjk0MjMzMQ@@._V1_SX300.jpg",
            "@/assets/movies/So-Ends-Our-Night/poster-2.jpeg",
            "@/assets/movies/So-Ends-Our-Night/poster-3.jpeg"
          ],
          youtubeTrailers: ["https://www.youtube.com/watch?v=O5ROSS9ReUY"],
          reviews: [
            {
              source: "Svenska Dagbladet",
              quote: "Ganska rolig, mycket blod",
              stars: 2,
              max: 5
            },
            {
              source: "Svenska Nattbladet",
              quote: "Vi gillade att det var så mycket blod",
              stars: 5,
              max: 5
            },
            {
              source: "Svenska Eftermiddagsbladet",
              quote: "Krig när det är som bäst",
              stars: 4,
              max: 5
            }
          ],
          ageRestriction: 11,
          price: 100
        },
        {
          title: "Declaration of War",
          productionCountries: ["Denmark", "Norway"],
          productionYear: 2019,
          length: 101,
          genre: "Drama",
          distributor: "Wrapsafe",
          language: "Estonian",
          subtitles: "Lao",
          director: "Neils Curnock",
          actors: [
            "Jan-Olof Strömqvist",
            "Anna Blad",
            "Pedra Blomquist",
            "Labradoro Knutsson"
          ],
          description:
            "rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras",
          images: [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1NjI1Mjg3Ml5BMl5BanBnXkFtZTcwMDk0ODAxNw@@._V1_SX300.jpg",
            "@/assets/movies/Declaration-of-War/poster-2.jpeg",
            "@/assets/movies/Declaration-of-War/poster-3.jpeg"
          ],
          youtubeTrailers: ["https://www.youtube.com/watch?v=v5NMhtOTC-s"],
          reviews: [
            {
              source: "Svenska Dagbladet",
              quote: "Realistisk krigsfilm, vi är traumatiserade",
              stars: 4,
              max: 5
            },
            {
              source: "Svenska Nattbladet",
              quote: "För många huvudkaraktärer dog tidigt i filmen",
              stars: 3,
              max: 5
            },
            {
              source: "Svenska Eftermiddagsbladet",
              quote: "Trevligt regi av Neils Curnock",
              stars: 2,
              max: 5
            }
          ],
          ageRestriction: 16,
          price: 100
        },
        {
          title: "Gallowwalkers",
          productionCountries: ["Italy", "Sweden"],
          productionYear: 2019,
          length: 120,
          genre: "Action|Horror|Sci-Fi|Western",
          distributor: "Holdlamis",
          language: "Kashmiri",
          subtitles: "Tetum",
          director: "Mei Edlyn",
          actors: [
            "Jannie Kekelen",
            "Annie Löfven",
            "Peter Skogstokig",
            "Kalkonen Adamsson"
          ],
          description:
            "in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin",
          images: [
            
            "https://m.media-amazon.com/images/M/MV5BMjI3MzIxNzM0OV5BMl5BanBnXkFtZTgwNDEzOTQxMDE@._V1_SX300.jpg",
            "@/assets/movies/Gallowwalkers/poster-2.jpg",
            "@/assets/movies/Gallowwalkers/poster-3.jpg"
          ],
          youtubeTrailers: ["https://www.youtube.com/watch?v=_frXIZZSaO4"],
          reviews: [
            {
              source: "Svenska Dagbladet",
              quote: "En film som får en att äta asmycket smörpopcorn",
              stars: 4,
              max: 5
            },
            {
              source: "Svenska Nattbladet",
              quote: "Enastående film, härliga subtitles",
              stars: 3,
              max: 5
            },
            {
              source: "Svenska Eftermiddagsbladet",
              quote: "Fantastiskt landskap, fin CGI",
              stars: 4,
              max: 5
            }
          ],
          ageRestriction: 8,
          price: 100
        },
        {
          title: "Emperor's New Groove 2: Kronk's New Groove",
          productionCountries: ["Spain", "USA"],
          productionYear: 2019,
          length: 115,
          genre: "Animation|Children|Comedy",
          distributor: "Flexidy",
          language: "Finnish",
          subtitles: "Burmese",
          director: "Carley Gerrietz",
          actors: ["Stefan Kvistholm", "Makuna Hatata", "Petra Torgstokig"],
          description:
            "vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue",
          images: [
            "https://m.media-amazon.com/images/M/MV5BMTQ5NjQyOTU2MF5BMl5BanBnXkFtZTcwOTU0NjMzMQ@@._V1_.jpg",
            "@/assets/movies/Emperors-Groove/poster-2.jpeg",
            "@/assets/movies/Emperors-Groove/poster-3.jpeg"
          ],
          youtubeTrailers: ["https://www.youtube.com/watch?v=Hjvy8vc39kw"],
          reviews: [
            {
              source: "Svenska Dagbladet",
              quote: "Petra Torgstokig sjunger fantastiskt vackert",
              stars: 5,
              max: 5
            },
            {
              source: "Svenska Nattbladet",
              quote: "Rörande, även barnen grät",
              stars: 4,
              max: 5
            },
            {
              source: "Svenska Eftermiddagsbladet",
              quote: "Helt ok, men så mycket mer",
              stars: 3,
              max: 5
            }
          ],
          ageRestriction: 12,
          price: 100
        },       
        
      ]
    };
  }
};
</script>

<style scoped>
.graphicList {
  display: flex;
}

.movieList {
  width: 100vw;
  align-self: center;
  align-content: center;
  display: flex;
  list-style: none;
  justify-content: center;
  flex-wrap: wrap;
}

.movieItem {
  width: 15%;
  padding-top: 2vh;
  margin: 5px;
}

.movie-image {
  width: 30%;
  height: 100%;
  object-fit: cover;

}

@media only screen and (max-width: 600px) {
  .movieItem {
    flex-direction: column;
    width: 90vw;
  }
}
</style>