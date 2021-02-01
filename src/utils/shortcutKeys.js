"use strict";

import Memo from "/src/components/Memo.js";

let isAltPressed = false;

function registerShortcutKeys() {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Alt") isAltPressed = true;
    if (e.key === "q") {
      if (isAltPressed) new Memo();
    }
  });

  window.addEventListener("keyup", (e) => {
    if (e.key === "Alt") isAltPressed = false;
  });
}

export { registerShortcutKeys };
