// 질문과 답을 배열로 저장합니다.
const questions = [
  "#1 요소 더블 클릭",
  "#2 요소 위에서 마우스 버턴을 누르고 있을 때",
  "#3 요소 위에서 마우스를 움직일 때",
  "#4 키를 눌렀다 놓았을 때",
  "#5 폼을 제출할 때",
  "#6 폼을 초기화할 때",
  "#7 요소에 마우스를 올렸을 때",
  "#8 요소에서 마우스를 떼었을 때",
];

const answers = [
  "답: dbclick",
  "답: mousedown",
  "답: mousemove",
  "답: keyup",
  "답: submit",
  "답: reset",
  "답: mouseover",
  "답: mouseout",
];

const postits = document.querySelectorAll(".postit");

let num = 0;
postits.forEach((postit) => {
  let front = postit.querySelector(".front");
  let back = postit.querySelector(".back");

  let question = front.querySelector(".question");
  let answer = back.querySelector(".answer");
  question.innerHTML = questions[num];
  answer.innerHTML = answers[num];

  front.addEventListener("click", () => {
    let answer = back.querySelector(".answer");
    postit.classList.add("flip");
  });

  back.addEventListener("click", () => {
    postit.classList.remove("flip");
  });

  front.addEventListener("mouseover", () => {
    front.style.cursor = "pointer";
    front.style.opacity = 0.7;
  });
  back.addEventListener("mouseover", () => {
    back.style.cursor = "pointer";
    back.style.opacity = 0.7;
  });
  front.addEventListener("mouseout", () => {
    front.style.opacity = 1;
  });
  back.addEventListener("mouseout", () => {
    back.style.opacity = 1;
  });

  num++;
});
