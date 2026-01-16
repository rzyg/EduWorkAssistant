<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
import type { DialogTransition } from "element-plus";

const dialogVisible = ref(false);
const currentAnimation = ref("fade");
const isObjectConfig = ref(false);

const transitionConfig = computed<DialogTransition>(() => {
  if (isObjectConfig.value) {
    return {
      name: "dialog-custom-object",
      appear: true,
      mode: "out-in",
      duration: 500,
    };
  }
  return `dialog-${currentAnimation.value}`;
});
const openDialog = (type: string) => {
  currentAnimation.value = type;
  isObjectConfig.value = false;
  dialogVisible.value = true;
};

import { h } from "vue";
import { ElNotification } from "element-plus";

// 不同时间段的随机提示语
const timeBasedMessages = {
  morning: [
    // 早上 6:00-9:00
    "早安！美好的一天开始了",
    "新的一天，新的开始",
    "元气满满的一天，加油！",
    "晨光初照，活力无限",
    "早起的鸟儿有虫吃",
  ],
  forenoon: [
    // 上午 9:00-12:00
    "上午好！工作顺利",
    "专注工作，效率最高",
    "上午时光，事半功倍",
    "精神饱满，状态最佳",
    "今日计划，逐步完成",
  ],
  afternoon: [
    // 下午 12:00-18:00
    "下午好！继续努力",
    "午后时光，稳步前行",
    "保持节奏，不要急躁",
    "阳光正好，心情也美",
    "工作推进，渐入佳境",
  ],
  evening: [
    // 傍晚 18:00-22:00
    "傍晚好！注意劳逸结合",
    "工作之余，也要放松",
    "夕阳西下，美景相伴",
    "适时休息，恢复精力",
    "今日份的努力，值得肯定",
  ],
  night: [
    // 夜晚 22:00-6:00
    "夜深了，早点休息吧",
    "熬夜伤身，早点睡",
    "明天还要早起，该休息了",
    "深夜时分，身体需要休息",
    "早点睡觉，明天更美好",
  ],
};

const notice = () => {
  const hour = new Date().getHours();
  let period: keyof typeof timeBasedMessages;

  if (hour >= 6 && hour < 9) {
    period = "morning";
  } else if (hour >= 9 && hour < 12) {
    period = "forenoon";
  } else if (hour >= 12 && hour < 18) {
    period = "afternoon";
  } else if (hour >= 18 && hour < 22) {
    period = "evening";
  } else {
    period = "night";
  }

  // 从对应时间段随机选择一条提示
  const messages = timeBasedMessages[period];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  ElNotification({
    title: getPeriodTitle(period),
    duration: 1500,
    message: h("i", { style: "color: teal" }, randomMessage),
  });
};

// 获取时间段标题
const getPeriodTitle = (period: keyof typeof timeBasedMessages) => {
  const titles: Record<keyof typeof timeBasedMessages, string> = {
    morning: "早上好",
    forenoon: "上午好",
    afternoon: "下午好",
    evening: "傍晚好",
    night: "温馨提示",
  };
  return titles[period];
};

onMounted(() => {
  notice(); // 页面加载完成后自动执行
});
</script>

<template>
  <div class="container">
    <div class="start-page">
      <img alt="Logo" class="logo" src="../resources/icons/128x128@2x.png" />
      <h1 class="app-title">
        𝑬𝒅𝒖𝑾𝒐𝒓𝒌 𝑨𝒔𝒔𝒊𝒔𝒕𝒂𝒏𝒕<span class="version">v0.0.1</span>
      </h1>
      <p class="tagline">让重复的工作自动化 还宝贵的时间于休息</p>
    </div>
    <div class="button-container">
      <div class="button GitHub">
        <a href="https://github.com/rzyg/EduWorkAssistant" target="_blank"
          ><img
            alt="GitHub"
            src="../resources/icons/github.svg"
            style="height: 3rem"
        /></a>

        <span>Github</span>
      </div>
      <div class="button coffee" @click="openDialog('bounce')">
        <el-icon size="3rem">
          <HotWater />
        </el-icon>
        <span>请咖啡</span>
      </div>
      <el-dialog
        v-model="dialogVisible"
        :transition="transitionConfig"
        class="custom-transition-dialog"
        title="投喂"
        width="500"
      >
        <span>您的支持是我们更新的最大动力</span>
        <div class="container-tip">
          <img
            alt="微信收款码"
            height="200rem"
            src="../resources/tip/Wechat.png"
          />
          <img
            alt="支付宝收款码"
            height="200rem"
            src="../resources/tip/Alipay.jpg"
          />
        </div>
        <template #footer>
          <div class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">
              关闭
            </el-button>
          </div>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 5rem;
  margin: 1rem 3rem 3rem 0;
  font-family: "SimSun", serif;
  font-size: 1.25rem;
  cursor: pointer;
}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.container-tip {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.start-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.app-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #294459;
  margin-bottom: 1rem;
}

.version {
  font-size: 0.8rem;
  color: #ffffff;
  font-family: "SimSun", serif;
  border-radius: 0.5rem;
  /* 添加红色边框样式 */
  background-color: #f46161;
  padding: 2px 6px;
}

.tagline {
  font-size: 1.7rem;
  color: #555555;
  line-height: 2;
  max-width: 600px;
  margin: 0 auto;
  font-family: "SimSun", serif;
}

.logo {
  filter: drop-shadow(0 0 2em #366c39);
}
</style>

<style>
/* Bounce Animation */
.dialog-bounce-enter-active,
.dialog-bounce-leave-active,
.dialog-bounce-enter-active .el-dialog,
.dialog-bounce-leave-active .el-dialog {
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.dialog-bounce-enter-from,
.dialog-bounce-leave-to {
  opacity: 0;
}

.dialog-bounce-enter-from .el-dialog,
.dialog-bounce-leave-to .el-dialog {
  transform: scale(0.3) translateY(-50px);
  opacity: 0;
}
</style>
