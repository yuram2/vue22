<template>
  <section className="main__cont">
    <div className="main__inner">
      <!-- <div>{{ msg }}</div>  기본형-->
      <!-- <div v-if="seen">Visual coding</div> 함수형-->
      <!-- <div v-for="list in texts" v-bind:key="list.text">{{ text.text }}</div> 반복문 -->
      <!-- <div>for you webs</div>
      <p>{{ msg }}</p>
      <button v-on:click="reverseMessage">메세지 뒤집기</button> -->
      <!-- <div>{{ msg1 }}</div>
      <div>{{ msg2 }}</div>
      <div>{{ msg3 }}</div>
      <div>{{ msg4 }}</div> -->
      <div v-for="list in lists" v-bind:key="list.text">
        {{ list.text }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        { text: "We Provide" },
        { text: "Visual coding" },
        { text: "Solutions" },
        { text: "for you webs" },
      ],
    };
  },

  // data() {
  //   return {
  //     msg1: "We Provide",
  //     msg2: "Visual coding",
  //     msg3: "Solutions",
  //     msg4: "for you webs",
  //   };
  // },

  //반복문
  // data: function () {
  //     return {
  //         text: [
  //             { text: "We Provide"},
  //             { text: "Visual coding"},
  //             { text: "Solutions"},
  //             { text: "for you webs"},
  //         ],
  //     };
  // },

  //함수형
  // data : function () {
  //     return {
  //         seen: true, //키값
  //     };
  // },

  //기본형
  // data() {
  //     return {
  //         msg : "We Provide",
  //     };
  // },
};
</script>

<style lang="scss">
.main__cont {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: var(--light_bg);

  .main__inner {
    font-size: 10vw;
    line-height: 0.85;
    font-family: var(--main_font);
    color: var(--black);
    text-transform: uppercase;
  }
}
</style>
