import { ref } from "vue";
import { defineStore } from "pinia";

export const useSideBarStore = defineStore("counter", () => {
  const state = ref(true);
  function handToggModel(value) {
    state.value = value;
  }

  return { state, handToggModel };
});
