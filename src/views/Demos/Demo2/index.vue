<script setup lang="ts">
import { onMounted, ref } from "vue";
import { App } from "./app";

const show = ref(false);
const content = ref("哦豁哦豁😁");

onMounted(() => {
  const app: any = new App();
  app.CreateCanvas(document.body);
  app
    .InitWebGPU()
    .then(() => {
      //最好使用promise
      content.value = "哦豁哦豁😁";
      show.value = true;
    })
    .catch(() => {
      content.value = "你浏览器不支持😒";
      show.value = true;
    });
});
</script>

<template>
  <van-popup
    class="i-popup"
    v-model:show="show"
    :close-on-click-overlay="false"
    >{{ content }}</van-popup
  >
</template>

<style lang="scss">
.i-popup {
  font-size: 10px;
  padding: 20px;
}
</style>