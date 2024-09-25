//living room 불켜기
document.addEventListener("DOMContentLoaded", function () {
  const lightImg = document.querySelector(".img-pendant-light");
  const livingRoomWall = document.querySelector(".living-room-wall");

  lightImg.addEventListener("click", function () {
    // .livingroom 요소의 배경색을 변경
    if (livingRoomWall.style.backgroundColor === "lemonchiffon") {
      livingRoomWall.style.backgroundColor = "beige";
    } else {
      livingRoomWall.style.backgroundColor = "lemonchiffon";
    }
  });
});
