<template>
  <HeaderCont class="light" />
  <main id="main">
    <section class="youtube__cont">
      <TitleCont name1="youtube" name2="book" />
      <div class="container">
        <div class="youtube__inner">
          <div className="youtube__search">
            <form @submit.prevent="SearchMovies()">
              <div>
                <label for="search">검색하기</label>
                <input
                  type="search"
                  id="search"
                  placeholder="검색하기"
                  v-model="search"
                />
                <button type="submit">검색</button>
              </div>
            </form>
          </div>
          <div class="youtube__list">
            <ul>
              <li v-for="movie in movies" :key="movie.id.videoId">
                <a href="">
                  <img
                    :src="movie.snippet.thumbnails.medium.url"
                    :alt="movie.snippet.title"
                  />
                  <p>
                    {{ movie.snippet.title }}
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ContactCont />
    </section>
  </main>
  <FooterCont class="light" />
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
    const movies = ref("");
    const SearchMovies = () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      fetch(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=dingo&key=AIzaSyD7ugBCFG50mv7WGVZgjDRPDnLWXtnVUn4&type=video",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          movies.value = data.items;
          console.log(movies);
        })
        .catch((error) => console.log("error", error));
    };
    SearchMovies();
    return {
      movies,
      SearchMovies,
    };
  },
};
</script>

<style lang="scss" scoped>
.youtube__cont {
  background-color: var(--light_bg);
}
.youtube__list {
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      flex: 1 1 23%;
      margin: 1%;
      img {
        border-radius: 0.4em;
      }
      p {
        color: var(--balck);
        font-family: var(--subKor_font);
        padding-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
.youtube__search {
  position: relative;
  h2 {
    color: var(--white);
    font-size: 40px;
    font-family: var(--subKor_font);
    text-indent: -9999px;
    width: 0;
    height: 0;
  }
  input {
    border: 2px solid var(--light_border);
    width: 98%;
    background: var(--black);
    border-radius: 50px;
    padding: 1rem 3rem 1rem 2rem;
    color: var(--light_bg);
    font-family: var(--subKor_font);
    margin: 0 1%;
    margin-bottom: 5%;
  }
  button {
    position: absolute;
    right: 22px;
    top: 9px;
    background: transparent;
    border: 0;
    color: var(--black);
    background: #fff;
    font-family: var(--subKor_font);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 12px;
    transition: opacity 0.3s ease;
    &:active {
      opacity: 0.7;
    }
  }
}
@media (max-width: 800px) {
  .youtube__list ul li {
    flex: 1 1 43%;
  }
}
</style>
