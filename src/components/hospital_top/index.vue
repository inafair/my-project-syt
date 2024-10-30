<script setup lang="ts">

</script>
<template>
  <div class="top">
    <div class="content">
      <!--左侧-->
      <div class="left">
       <img src="../../assets/images/logo.png" alt="">
        <p>尚医通 预约挂号统一平台</p>
      </div>
      <div class="right">
        <p class="help">帮助中心</p>
        <p class="login">登录/注册</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top{
  z-index: 999;
  position: fixed;
  width: 100%;
  height: 70p ;
  background:#fff;
  display: flex;
}
.content {
  width: 1200px;
  height: 70px;
  background: white;
  display: flex;
  justify-content: space-between;
}
.left{
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 50px;
    height: 50px;
    margin-right: 10px ;
  }
  p{
    font-size: 20px;
    color: #55a6fe;
  }
}
.right{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: gray;
  .help{
    margin-right: 10px;
  }
}
</style>