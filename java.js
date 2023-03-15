const logo = document.querySelector(".logo");

logo.style.animationName = "logo-animation";
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    burger.classList.toggle("toggle");
  });
};

navSlide();

const episodes = document.querySelectorAll(".episodes li a");
const videoPlayer = document.querySelector("#episode-video");

episodes.forEach((episode) => {
  episode.addEventListener("click", (e) => {
    e.preventDefault();
    const videoSrc = e.target.getAttribute("data-video");
    videoPlayer.setAttribute("src", videoSrc);
    videoPlayer.load();
    videoPlayer.play();
  });
});

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
