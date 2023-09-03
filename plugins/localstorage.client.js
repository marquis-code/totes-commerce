//  ~/plugins/vuex-persistedstate.js
import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
  createPersistedState({
    key: "vuex",
    storage: window.sessionStorage
  })(store);
};
