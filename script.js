window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader--hidden");
  loader.addEventListener("transitioned", () => {
    document.body.removeChild(loader);
  });
});
let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};
let loginForm = document.querySelector(".login-form");
document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};
let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
  loginForm.classList.remove("active");
  searchForm.classList.remove("active");
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};
const track = document.getElementById("image-track");
window.onmousedown = (e) => {
  track.dataset.mouseDownAt = e.clientX;
};
window.onmouseup = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
};
window.onmousemove = (e) => {
  if (track.dataset.mouseDownAt === "0") return;
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  const maxDelta = window.innerWidth / 2;
  const percentage = (mouseDelta / maxDelta) * -100;
  const nextPercentageUnconstrained =
    parseFloat(track.dataset.prevPercentage) + percentage;
  const nextPercentage = Math.max(
    Math.min(nextPercentageUnconstrained, 20),
    -20
  );
  track.dataset.percentage = nextPercentage;
  track.animate(
    {
      transform: `translate(${nextPercentage}%,-50%)`,
    },
    { duration: 1200, fill: "forwards" }
  );
  track.dataset.percentage = nextPercentage;
  for (const image of track.getElementsByClassName("image")) {
    image.animate(
      {
        objectPosition: `${nextPercentage + 100}center`,
      },
      { duration: 1200, fill: "forwards" }
    );
  }
  const btn = document.querySelector("button");
  const post = document.querySelector(".post");
  const widget = document.querySelector(".star-widget");
  const editBtn = document.querySelector(".edit");
  btn.onclick = () => {
    widget.style.display = "none";
    post.style.display = "block";
    editBtn.onclick = () => {
      widget.style.display = "block";
      post.style.display = "none";
    };
    return false;
  };
};
