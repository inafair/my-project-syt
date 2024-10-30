<script setup lang="ts">

</script>

<template >
  <div class="container">
    <!--显示顶部组件区域-->
    <HospitalTop/>
    <!--展示路由组件区域-->
    <div class="content">
      <!--展示路由组件-->
      <router-view></router-view>
    </div >
    <!--底部组件区域-->
    <HospitalBottom/>

  </div>
</template>
<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  .content{
    margin-top: 70px;
    width: 1200px;
    min-height: 700px;
    background: white ;
  }
}
</style>
