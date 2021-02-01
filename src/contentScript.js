"use strict";

const MEMOWIDTH = 190;
const MEMOHEIGHT = 150;

const $memoList = [];

let id = 0;

console.log("app running");

loadPrevMemos();

window.addEventListener("keyup", (e) => {
  if (e.key === "Alt") {
    const $memo = createMemo();
    document.body.appendChild($memo);
    $memoList.push($memo);

    this.$memo = $memo;
    console.log("new Memo generated");
  }
});

function createMemo() {
  const $memo = document.createElement("textarea");
  $memo.className = "new-note-content";
  $memo.style.position = "absolute";
  $memo.style.width = `${MEMOWIDTH}px`;
  $memo.style.height = `${MEMOHEIGHT}px`;
  $memo.style.zIndex = "2147483647";
  $memo.style.fontSize = "14px";

  $memo.id = id;
  id++;

  // the Memo follow Mouse Pointer
  window.addEventListener("mousemove", trackingMouse);

  // Stop moving Memo when Clicked.
  $memo.addEventListener("click", () => {
    window.removeEventListener("mousemove", trackingMouse);

    $memo.focus();
  });

  $memo.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      alert("메모가 저장됬습니다..");
      localStorage.setItem(`WebMemo${$memo.id}`, $memo.value);
    }
  });

  return $memo;
}

function trackingMouse(e) {
  let posX = e.pageX - 10;
  let posY = e.pageY - 10;
  if (posX < 0) posX = 0;
  else if (posX + MEMOWIDTH > document.body.offsetWidth)
    posX = document.body.offsetWidth - MEMOWIDTH;
  if (posY < 0) posY = 0;
  else if (posY + MEMOHEIGHT > document.body.scrollHeight)
    posY = document.body.scrollHeight - MEMOHEIGHT;

  this.$memo.style.left = `${posX}px`;
  this.$memo.style.top = `${posY}px`;
}

function loadPrevMemos() {
  let id = 0;
  while (true) {
    const memoVal = localStorage.getItem(`WebMemo${id}`);
    if (memoVal == null) break;
    console.log(memoVal);
    id++;
  }
}
