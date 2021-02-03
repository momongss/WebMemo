"use strict";

import createNewMemo from "./components/Memo.js";

import { getMousePos } from "./utils/eventHandler.js";

let isAltPressed = false;
let mousePos = {
  x: 0,
  y: 0,
};

const IdSet = new Set();
const MemoList = [];

export function main() {
  console.log("app running");
  addListener();
}

function createNewId() {
  let id = 0;
  while (IdSet.has(id)) id++;
  IdSet.add(id);
  return id;
}

function printMemoList() {
  for (const memo of MemoList) {
    console.log(memo);
  }
}

function deleteMemoById(id) {
  for (const i = 0; i < MemoList.length; i++) {
    if (MemoList[i].id === id) {
      MemoList.splice(i, 1);
      deleteId(id);
      return true;
    }
  }
  throw `attempt to del nonexistent id : ${id}`;
}

function deleteId(id) {
  IdSet.delete(id);
}

function addListener() {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Alt") {
      isAltPressed = true;
    }
    if (isAltPressed && (e.key === "q" || e.key === "Q")) {
      const initData = {
        pos: mousePos,
        createTime: null,
        modifyTime: null,
        text: null,
      };
      const id = createNewId();
      const memo = createNewMemo(id, initData, deleteMemoById);
      MemoList.push(memo);
    }

    // debug
    if (e.key === "Shift") {
      printMemoList();
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
