import axios from "axios";

export default {
  getIssues: function () {
    return new Promise((resolve, reject) => {
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
              comments: issue.comments,
            };
          });
          resolve(results);
        })
        .catch((err) => reject(err));
    });
  },
};


// export default {
//   getIssues: function () {
//     return new Promise((resolve, reject) => {
//       axios
//         .get("https://api.github.com/repos/lucsedirae/open-house-crm/issues", {
//           headers: {
//             "Access-Control-Allow-Origin": "*",
//             "Access-Control-Allow-Headers":
//               "Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, X-GitHub-OTP, X-Requested-With",
//             "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE",
//             "Access-Control-Expose-Headers":
//               "ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval",
//           },
//         })
//         .then((res) => {
//           const issues = res.data;
//           const results = issues.map((issue) => {
//             return {
//               title: issue.title,
//               ghUser: issue.user.login,
//               state: issue.state,
//               createdAt: issue.created_at,
//               updatedAt: issue.updated_at,
//               description: issue.body,
//               number: issue.number,
//               comments: issue.comments,
//             };
//           });
//           resolve(results);
//         })
//         .catch((err) => reject(err));
//     });
//   },
// };

