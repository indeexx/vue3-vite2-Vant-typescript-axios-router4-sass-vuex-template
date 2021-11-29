<script setup lang="ts">
import { ref, onMounted } from "vue";

const list: any = ref([]);
const loading = ref(false);
const finished = ref(true);

onMounted(() => {
  list.value = [
    {
      id: list.value.length,
      desc: "浏览器支持性检测",
      name: "demo1",
      url: "demo1",
    },
    {
      id: list.value.length,
      desc: "浏览器支持性检测",
      name: "demo2",
      url: "demo2",
    },
    {
      id: list.value.length,
      desc: "浏览器支持性检测",
      name: "demo2",
      url: "demo2",
    },
  ];
});
// const onLoad = () => {
//   setTimeout(() => {
//     for (let i = 0; i < 10; i++) {
//       list.value.push({
//         id: list.value.length,
//         name: "demo" + (list.value.length + 1),
//         desc: "浏览器支持性检测",
//         url: "demo1",
//       });
//     }
//     loading.value = false;
//     if (list.value.length >= 40) {
//       finished.value = true;
//     }
//   }, 1000);
// };
</script>

<template>
  <h1>Demo列表</h1>
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    class="list"
  >
    <van-cell
      class="item"
      v-for="item in list"
      :key="item.id"
      :title="item.name + ' ' + item.desc"
      is-link
      :to="item.url"
    />
  </van-list>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 16px;
  margin-top: 10px;
}
.list {
  text-align: left;
  margin-top: 10px;
  .item {
    font-size: 10px;
  }
}
</style>