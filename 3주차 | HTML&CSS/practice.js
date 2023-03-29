// li 태그 안에 있는 h3 태그 클릭 이벤트
const liTags = document.querySelectorAll("li");

liTags.forEach((liTag) => {
  const h3Tag = liTag.querySelector("h3");
  const detailTag = liTag.querySelector(".detail");

  h3Tag.addEventListener("click", () => {
    if (detailTag.style.display === "none") {
      detailTag.style.display = "block";
    } else {
      detailTag.style.display = "none";
    }
  });
});
