import axios from "axios";

export default {
  getIssues: function () {
    return new Promise((resolve, reject) => {
      const headers = {"header1": "Access-Control-Allow-Headers"}
      axios
        .get("https://api.github.com/repos/lucsedirae/open-house-crm/issues")
        .then((res) => {
          const issues = res.data;
          const results = issues.map((issue) => {
            return {
              title: issue.title,
              ghUser: issue.user.login,
              state: issue.state,
              createdAt: issue.created_at,
              updatedAt: issue.updated_at,
              description: issue.body,
              number: issue.number,
              comments: issue.comments
            };
          });
          resolve(results);
        })
        .catch((err) => reject(err));
    });
  },
};
