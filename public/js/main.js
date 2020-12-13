//* Global Variables
const aboutBtn = $(".about-btn");
const devlogBtn = $(".devlog-btn");

//*Event Listeners
aboutBtn.on("click", () => {
  window.location.replace("/about");
});
devlogBtn.on("click", () => {
  window.location.replace("/devlog");
});
