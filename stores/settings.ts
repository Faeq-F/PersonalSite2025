import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settingsStore", {
  state: () => ({
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  }),
  actions: {},
});
