<script lang="ts" setup>
import { ref } from "vue";
import { ElMessageBox } from "element-plus";

const dialogVisible = ref(false);

const handleClose = (done: () => void) => {
  ElMessageBox.confirm("Are you sure to close this dialog?")
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};
</script>
<template>
  <div class="container">
    <div class="start-page">
      <img alt="Logo" src="../resources/icons/128x128@2x.png" />
      <!-- 或使用 <img> 标签 -->
      <h1 class="app-title">
        𝑬𝒅𝒖𝑾𝒐𝒓𝒌 𝑨𝒔𝒔𝒊𝒔𝒕𝒂𝒏𝒕<span class="version">v0.0.1</span>
      </h1>
      <!-- 替换为你的应用名 -->
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
      <div class="button coffee" @click="dialogVisible = true">
        <el-icon size="3rem">
          <HotWater />
        </el-icon>
        <span>请咖啡</span>
      </div>
      <el-dialog
        v-model="dialogVisible"
        :before-close="handleClose"
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
</style>
