export const useExampleStore = defineStore("exampleStore", {
  state: () => ({
    appTitle: "APP TEMPLATE",
  }),

  getters: {
    getAppTitle: (state) => state.appTitle,
  },

  actions: {},
});
