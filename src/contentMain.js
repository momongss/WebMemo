"use strict";

import createMemo from "./components/Memo.js";
import Storage from "./utils/Storage.js";

import { getMousePos } from "./utils/eventHandler.js";
import { findMainContainer } from "./utils/findMainContainer.js";

let isAltPressed = false;
let mousePos = {
  x: 0,
  y: 0,
};
let MemoList = [];

const IdSet = new Set();

export async function main() {
  console.log("app running");
  let preMemoList = await Storage.getItem();
  MemoList = preMemoList == null ? [] : preMemoList;
  console.log(MemoList);
  const mainContainer = findMainContainer();

  // 메모가 생성된 시점에 마우스 포인터 위치에 생성하기 위한 처리
  mainContainer.addEventListener("mousemove", trackingMouse);
  function trackingMouse(e) {
    const pos = getMousePos(e, mainContainer);
    mousePos.x = pos.x;
    mousePos.y = pos.y;
  }

  // Alt + q
  mainContainer.addEventListener("keydown", createMemoHandler);
  mainContainer.addEventListener("keyup", (e) => {
    if (e.key === "Alt") {
      isAltPressed = false;
    }
  });

  function createMemoHandler(e) {
    // for debugging
    if (e.key === "Shift") {
      printMemoList();
    }

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
      const id = createMemoId();
      const memo = createMemo(
        id,
        initData,
        mainContainer,
        deleteMemoById,
        () => {
          storeMemoList();
        }
      );
      MemoList.push(memo);
    }
  }
}

function storeMemoList() {
  Storage.setItem(JSON.stringify(MemoList));
}

function createMemoId() {
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
  for (let i = 0; i < MemoList.length; i++) {
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
