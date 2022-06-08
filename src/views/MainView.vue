<template>
  <div>
    <HeaderCont class="light" />
    <section class="maincont">
      <div class="maininner">
        <div v-for="title in titles" v-bind:key="title.text">
          {{ title.text }}
        </div>
      </div>
    </section>
    <FooterCont class="light" />
  </div>
</template>

<script>
import HeaderCont from "@/components/HeaderCont.vue";
import FooterCont from "@/components/FooterCont.vue";

export default {
  components: {
    HeaderCont,
    FooterCont,
  },

  data: function () {
    return {
      titles: [
        { text: "we provide" },
        { text: "visual coding" },
        { text: "solution" },
        { text: "for you webs" },
      ],
    };
  },
};
</script>
<style lang="scss">
.maincont {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0eeeb;
  .maininner {
    font-size: 10vw;
    line-height: 0.85;
    font-family: "Saol";
    color: rgb(0, 0, 0);
    text-transform: uppercase;
  }
}
</style>
