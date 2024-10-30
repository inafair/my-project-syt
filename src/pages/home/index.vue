<script setup lang="ts">
//引入轮播图组件
import Carousel from './carousel/index.vue'
//引入搜索框组件
import Search from'./search/index.vue'
//引入首页等级
import Level from './level/index.vue'
//引入首页地区选择组件
import Region from './region/index.vue'
//展示医院组件信息
import Card from './card/index.vue'
//分页器需要的数组
import {ref} from "vue";
//分页器页码
let pageNo = ref<number>(1);
//规定一页显示几条数据
let pageSize = ref<number>(10);
</script>

<template >
  <div class="home">
    <!--轮播图展示区-->
    <Carousel/>
    <!--搜索框展示区-->
    <Search/>
    <!--展示医院的结构-->
    <el-row gutter="20px ">
      <el-col :span="20">
        <Level/>
        <!--地区-->
        <Region/>
        <!--展示医院结构-->
        <div class="hospital">
          <Card class="item" v-for="item in 10" :key="item"/>
          <!--分页器-->
          <el-pagination
              v-model:current-page="pageNo"
              v-model:page-size="pageSize"
              :page-sizes="[10, 20, 30, 40]"
              :background="true"
              layout="prev, pager, next, jumper,->,sizes,total"
              :total="100"
          />
        </div>
      </el-col>
      <el-col :span="4">223</el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.hospital{
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  .item{
    width: 48%;
    margin:10px 0;
  }
}

</style>