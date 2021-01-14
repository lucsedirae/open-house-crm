import axios from "axios";

export default {
  getRepo: function () {
    return axios.get("https://api.github.com/repos/lucsedirae/open-house-crm", {
    });
  },
};
