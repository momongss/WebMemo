"use strict";

import Memo from "./components/Memo.js";

import { getMousePos } from "./utils/eventHandler.js";

let isAltPressed = false;
let mousePos = {
  x: 0,
  y: 0,
};

export function main() {
  console.log("app running");
  addListener();
}

function addListener() {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Alt") {
      isAltPressed = true;
    }
    if (isAltPressed && (e.key === "q" || e.key === "Q")) {
      const memo = new Memo(mousePos);
    }
  });

  window.addEventListener("keyup", (e) => {
    if (e.key === "Alt") {
      isAltPressed = false;
    }
  });

  // 메모가 생성됬을 때 제자리에 가게하기 위한 처리.
  window.addEventListener("mousemove", (e) => {
    const pos = getMousePos(e);
    mousePos.x = pos.x;
    mousePos.y = pos.y;
  });
}
