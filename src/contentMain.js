"use strict";

import Memo from "./components/Memo.js";

let isAltPressed = false;

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
      const memo = new Memo();
    }
  });

  window.addEventListener("keyup", (e) => {
    if (e.key === "Alt") {
      isAltPressed = false;
    }
  });
}
