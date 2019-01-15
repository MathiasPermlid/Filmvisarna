<template>
  <div id="graphicList">
    <ul class="movieList">
      <li v-for="(data, index) in movies" :key="index" class="movieItem, col-6, col-lg-4">
        <img v-bind:src="data.image" class="movie-image">        
        
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
          title: "Call me by your name",
          productionCountries: ["Italien", "USA"],
          productionYear: 2017,
          length: 132,
          genre: "Drama",
          distributor: "UIP",
          language: "engelska",
          subtitles: "svenska",
          director: "Luca Guadagnino",
          actors: ["Armie Hammer", "Timothée Chalamet", "Michael Stuhlbarg"],
          description:
            "Filmen utspelas i norra Italien sommaren 1983. En ung amerikansk-italienare blir förälskad i en amerikansk student som kommer för att studera och bo hos hans familj. Tillsammans upplever de en oförglömlig sommar - full av musik, mat och kärlek - som för evigt kommer att förändra dem.",
          image:
            "https://bookshelf.ca/i/size/o/media--2152c737-28ca-44fe-6bf8-539128d2c3ac/w/200/h/300",
          youtubeTrailers: ["Z9AYPxH5NTM"],
          reviews: [
            {
              source: "Sydsvenskan",
              quote: "ett drama berättat med stor ömhet",
              stars: 4,
              max: 5
            },
            {
              source: "Svenska Dagbladet",
              quote: "en film att förälska sig i",
              stars: 5,
              max: 5
            },
            {
              source: "DN",
              quote: "en het romans i åttiotalskostym",
              stars: 4,
              max: 5
            }
          ]
        },
        {
          title: "Fightclub",
          productionCountries: ["Italien", "USA"],
          productionYear: 2017,
          length: 132,
          genre: "Action Love Story",
          distributor: "UIP",
          language: "engelska",
          subtitles: "svenska",
          director: "Luca Guadagnino",
          actors: ["Armie Hammer", "Timothée Chalamet", "Michael Stuhlbarg"],
          description:
            "Angry men hit each other a lot. Woman cleans up after men and saves him, as per usual",
          image:
            "https://i.pinimg.com/originals/dd/ca/f3/ddcaf376aa330c99b80da5db39c41b6a.jpg",
          youtubeTrailers: ["Z9AYPxH5NTM"],
          reviews: [
            {
              source: "Sydsvenskan",
              quote: "ett drama berättat med stor ömhet",
              stars: 4,
              max: 5
            },
            {
              source: "Svenska Dagbladet",
              quote: "en film att förälska sig i",
              stars: 5,
              max: 5
            },
            {
              source: "DN",
              quote: "en het romans i åttiotalskostym",
              stars: 4,
              max: 5
            }
          ]
        },
        {
          title: "Batman",
          productionCountries: ["Italien", "USA"],
          productionYear: 2017,
          length: 132,
          genre: "Action Love Story",
          distributor: "UIP",
          language: "engelska",
          subtitles: "svenska",
          director: "Luca Guadagnino",
          actors: ["Armie Hammer", "Timothée Chalamet", "Michael Stuhlbarg"],
          description:
            "Angry men hit each other a lot. Woman cleans up after men and saves him, as per usual",
          image:
            "https://i.embed.ly/1/display/resize?width=800&height=800&key=3e750996b20f47be9451da09d3fffa5b&url=https%3A%2F%2Fi.kinja-img.com%2Fgawker-media%2Fimage%2Fupload%2Fs--OgfqF89X--%2Fc_scale%2Cfl_progressive%2Cq_80%2Cw_800%2Fdrdfgdfjttt1tn32zuck.jpg",
          youtubeTrailers: ["Z9AYPxH5NTM"],
          reviews: [
            {
              source: "Sydsvenskan",
              quote: "ett drama berättat med stor ömhet",
              stars: 4,
              max: 5
            },
            {
              source: "Svenska Dagbladet",
              quote: "en film att förälska sig i",
              stars: 5,
              max: 5
            },
            {
              source: "DN",
              quote: "en het romans i åttiotalskostym",
              stars: 4,
              max: 5
            }
          ]
        },
        {
          title: "Aquaman",
          productionCountries: ["Italien", "USA"],
          productionYear: 2017,
          length: 132,
          genre: "Action Love Story",
          distributor: "UIP",
          language: "engelska",
          subtitles: "svenska",
          director: "Luca Guadagnino",
          actors: ["Armie Hammer", "Timothée Chalamet", "Michael Stuhlbarg"],
          description:
            "Angry men hit each other a lot. Woman cleans up after men and saves him, as per usual",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/51MDpDiZKOL.jpg",
          youtubeTrailers: ["Z9AYPxH5NTM"],
          reviews: [
            {
              source: "Sydsvenskan",
              quote: "ett drama berättat med stor ömhet",
              stars: 4,
              max: 5
            },
            {
              source: "Svenska Dagbladet",
              quote: "en film att förälska sig i",
              stars: 5,
              max: 5
            },
            {
              source: "DN",
              quote: "en het romans i åttiotalskostym",
              stars: 4,
              max: 5
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.movieList {
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: center;
}

.movieItem {
    flex-direction: column;
}

.movie-image {
  max-width: 100%;
  height: auto;
  border: 8px black solid;
}

.movie-title {
    font-size: 1.3em;
    font-weight: bolder;
}
</style>