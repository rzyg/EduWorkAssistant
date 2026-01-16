<template>
  <el-row class="tac">
    <el-col :span="5">
      <div class="header-title">
        <img alt="logo" height="64" src="./resources/icons/128x128.png" />
        <h2 class="mb-2" style="text-align: center">下班工具箱</h2>
      </div>
      <el-menu class="el-menu-vertical-demo" default-active="0">
        <!--主页-->
        <el-menu-item index="0">
          <el-icon><House /></el-icon>
          <span>主页</span>
        </el-menu-item>
        <!--成绩分析-->
        <el-menu-item index="1">
          <el-icon><Memo /></el-icon>
          <span>成绩分析</span>
        </el-menu-item>
        <!--津贴计算-->
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Money /></el-icon>
            <span>津贴计算</span>
          </template>
          <el-menu-item index="2-1">
            <span>制作课表</span>
          </el-menu-item>
          <el-menu-item index="2-2">
            <span>编辑日历</span>
          </el-menu-item>
        </el-sub-menu>
        <!--自动刷课-->
        <el-menu-item index="3">
          <el-icon><document /></el-icon>
          <span>自动刷课</span>
        </el-menu-item>
        <!--设置-->
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>设置</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<style scoped>
* {
  user-select: none;
}

.header-title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
<script lang="ts" setup></script>
