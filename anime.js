const videoList = document.querySelectorAll(".video-list li");
const videos = document.querySelectorAll(".videos iframe");

videoList.forEach((item) => {
  item.addEventListener("click", () => {
    const videoNumber = item.getAttribute("data-video");

    videoList.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");

    videos.forEach((item) => {
      item.classList.remove("active");
    });
    videos[videoNumber - 1].classList.add("active");
  });
});
function setRating(rating) {
  const stars = document.getElementsByClassName("star");
  for (let i = 0; i < rating; i++) {
    stars[i].classList.add("active");
  }
  for (let i = rating; i < stars.length; i++) {
    stars[i].classList.remove("active");
  }
}
