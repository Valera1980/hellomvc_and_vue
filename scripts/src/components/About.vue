
<template>
  <div class="container">
    <h2>{{ text }}</h2>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class AboutMe extends Vue {
  @Prop() private text!: string;
}
</script>
<style scoped>
.container {
  width: 1000px;
  height: 1000px;
  background-color: #f3e9e9;
  font-size: 15px;
}
</style>