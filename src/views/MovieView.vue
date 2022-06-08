<template>
  <div>
    <HeaderCont class="light" />
    <main id="main">
      <section id="movie_cont">
        <TitleCont name1="Movie" name2="book" />
        <div class="container">
          <div class="movie_inner">
            <div class="movie_top">
              <div class="title">Top10 콘텐츠</div>
              <div>
                <div><span>01</span></div>
                <div><span>02</span></div>
                <div><span>03</span></div>
                <div><span>04</span></div>
                <div><span>05</span></div>
              </div>
            </div>
            <div class="movie_search">
              <form @submit.prevent="SearchMovies()">
                <div>
                  <label for="search" class="sr-only">검색하기</label>
                  <input type="search" id="search" />
                </div>
              </form>
            </div>
            <div class="movie_list">
              <ul>
                <li v-for="movie in movies" :key="movie.id">
                  <img
                    :src="
                      'https://image.tmdb.org/t/p/w500/' + movie.poster_path
                    "
                    :alt="movie.title"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ContactCont />
      </section>
    </main>
    <FooterCont class="light" />
  </div>
</template>

<script>
import HeaderCont from "@/components/HeaderCont.vue";
import FooterCont from "@/components/FooterCont.vue";
import TitleCont from "@/components/TitleCont.vue";
import ContactCont from "@/components/ContactCont.vue";
import { ref } from "vue";

export default {
  components: {
    HeaderCont,
    FooterCont,
    TitleCont,
    ContactCont,
  },
  setup() {
    const movies = ref([]);

    const SearchMovies = () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        "https://api.themoviedb.org/3/search/movie?api_key=8670bfd4952ce8072c45c9051875a7b7&query=Netflix",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          movies.value = data.results;
          console.log(movies);
        })
        .catch((error) => console.log("error", error));
    };

    return {
      movies,
      SearchMovies,
    };
  },
};
</script>

<style lang="scss" scoped>
.movie_top {
  .title {
    font-family: var(--subKor_font);
    font-size: 2vw;
  }
}
</style>
