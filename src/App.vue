<script></script>
<template>
  <div class="sidebar">
    <el-row class="tac">
      <el-col>
        <el-menu
          class="el-menu-vertical-demo"
          default-active="0"
          style="
            height: 100%;
            background: linear-gradient(
              135deg,
              #f8fffe 0%,
              #ebedf3 100%
            ); /* 简约渐变背景 */
          "
        >
          <div class="header-title">
            <img alt="logo" height="64" src="./resources/icons/128x128.png" />
            <h2 class="mb-2" style="text-align: center; margin-right: 0.5rem">
              下班工具箱
            </h2>
          </div>
          <!--主页-->
          <el-menu-item index="0" @click="$router.push('/HomePage')">
            <el-icon><House /></el-icon>
            <span>主页</span>
          </el-menu-item>
          <!--成绩分析-->
          <el-menu-item index="1" @click="$router.push('/GradeAnalysis')">
            <el-icon><Memo /></el-icon>
            <span>成绩分析</span>
          </el-menu-item>
          <!--津贴计算-->
          <el-sub-menu index="2">
            <template #title>
              <el-icon><Money /></el-icon>
              <span>津贴计算</span>
            </template>
            <el-menu-item index="2-1" @click="$router.push('/ScheduleMake')">
              <span>制作课表</span>
            </el-menu-item>
            <el-menu-item index="2-2" @click="$router.push('/CalendarPage')">
              <span>编辑日历</span>
            </el-menu-item>
          </el-sub-menu>
          <!--自动刷课-->
          <el-menu-item index="3" @click="$router.push('/AutomaticCourse')">
            <el-icon><document /></el-icon>
            <span>自动刷课</span>
          </el-menu-item>
          <!--设置-->
          <el-menu-item index="4" @click="$router.push('/SettingPage')">
            <el-icon><setting /></el-icon>
            <span>设置</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
  <div class="content-area">
    <transition mode="out-in" name="page-transition">
      <router-view />
    </transition>
  </div>
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
  padding: 0.3rem 0 0 0.5rem;
}

.sidebar {
  display: flex;
  height: 100vh;
  margin: 0 0.5rem 0 0;
  padding: 0;
  background-color: #f0f2f7;
}

/* 去除 router-link 默认样式 */
:deep(a[href^="/"]) {
  text-decoration: none;
  color: inherit;
}

:deep(a[href^="/"]:hover) {
  text-decoration: none;
  color: inherit;
}

.content-area {
  flex: 1;
  padding: 0.5rem;
}
</style>
<style>
.page-transition-enter-active,
.page-transition-leave-active {
  transition: all 0.3s ease;
}
.page-transition-enter-from {
  transform: translateX(100%);
}
.page-transition-leave-to {
  transform: translateX(-100%);
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease;
}
.slide-left-enter-from {
  transform: translateX(100%);
}
.slide-left-leave-to {
  transform: translateX(-100%);
}
.page-transition-enter-from {
  transform: translateY(-100%);
}
.page-transition-leave-to {
  transform: translateY(100%);
}
</style>
