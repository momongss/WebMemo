"use strict";

import Memo from "./components/Memo.js";

const MEMOWIDTH = 190;
const MEMOHEIGHT = 150;

const $memoList = [];

export function main() {
  console.log("app running");
  window.addEventListener("keyup", (e) => {
    if (e.key === "Alt") {
      const memo = new Memo();
      $memoList.push(memo);
    }
  });
  console.log("new Memo generated");
}
