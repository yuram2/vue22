<template>
  <div>
    <HeaderCont class="light" />
    <MainCont />
    <FooterCont class="light" />
  </div>
</template>

<script>
import HeaderCont from "@/components/HeaderCont.vue";
import MainCont from "@/components/MainCont.vue";
import FooterCont from "@/components/FooterCont.vue";

export default {
  components: {
    HeaderCont,
    MainCont,
    FooterCont,
  },
};
</script>
