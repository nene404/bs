<template>
  <header class="header"></header>
</template>

<script>
export default {
  name: "HeaderMsg",
  data() {
    return {
      //响应式数据，用于收集表单元素文本内容
      keyword: "",
    };
  },
};
</script>

<style scoped>
.header {
  background-color: rgb(255, 193, 79);
  height: 50px;
}
</style>
