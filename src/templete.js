this.noteWidth = 190;
this.noteHeight = 150;

// console.log(a, "a");

this.state = "loading";

function makeMemo() {
  const $note = document.createElement("textarea");
  $note.className = "new-note-content";
  $note.style.position = "absolute";
  $note.style.top = "0px";
  $note.style.left = "656px";
  $note.style.width = `${this.noteWidth}px`;
  $note.style.height = `${this.noteHeight}px`;
  $note.style.zIndex = "2147483647";
  $note.style.fontSize = "14px";

  $note.focus();

  $note.addEventListener("click", () => {
    console.log("click");
    this.state = "completed";
    document.body.removeEventListener("mousemove", mouseMove);
  });

  return $note;
}

function getMousePos($note) {
  this.noteWidth = 190;
  this.noteHeight = 150;
  document.body.addEventListener("mousemove", mouseMove);
}

function mouseMove(e) {
  let posX = e.pageX - 10;
  let posY = e.pageY - 10;
  if (posX < 0) posX = 0;
  else if (posX + this.noteWidth > document.body.offsetWidth)
    posX = document.body.offsetWidth - this.noteWidth;
  if (posY < 0) posY = 0;
  else if (posY + this.noteHeight > document.body.scrollHeight)
    posY = document.body.scrollHeight - this.noteHeight;

  console.log(posX, this.noteWidth, document.body.offsetWidth);

  $note.style.left = `${posX}px`;
  $note.style.top = `${posY}px`;
}

this.$note = makeMemo();
getMousePos(this.$note);
document.body.appendChild(this.$note);
console.log("new Memo generated");
