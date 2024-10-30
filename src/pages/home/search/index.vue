<script setup lang="ts">
//引入element-plus图标组件
import {Search} from "@element-plus/icons-vue";
</script>

<template>
  <div class="search">
    <el-autocomplete
      clearable
      class="inline-input w-50"
      placeholder="请你输入医院的名字"
  />
    <el-button type="primary" size="default" :icon="Search">搜索</el-button>
  </div>

</template>

<style scoped lang="scss">
.search{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  :deep(.el-input__inner){
    width: 600px;
    margin-right: 10px;
  }
}
</style>