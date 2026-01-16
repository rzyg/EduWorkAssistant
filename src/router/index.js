import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import GradeAnalysis from "../views/GradeAnalysis.vue";
import ScheduleMake from "../views/ScheduleMake.vue";
import CalendarPage from "../views/CalendarPage.vue";
import AutomaticCourse from "../views/AutomaticCourse.vue";
import SettingPage from "../views/SettingPage.vue";

const routes = [
  { path: "/", redirect: "/HomePage" }, // 默认重定向
  { path: "/HomePage", component: HomePage, name: "HomePage" },
  { path: "/GradeAnalysis", component: GradeAnalysis, name: "GradeAnalysis" },
  { path: "/ScheduleMake", component: ScheduleMake, name: "ScheduleMake" },
  { path: "/CalendarPage", component: CalendarPage, name: "CalendarPage" },
  {
    path: "/AutomaticCourse",
    component: AutomaticCourse,
    name: "AutomaticCourse",
  },
  { path: "/SettingPage", component: SettingPage, name: "SettingPage" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
