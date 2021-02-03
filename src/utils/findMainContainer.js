// body 가 메인 컨테이너가 아닌 사이트들에 대응하기 위한 처리
// ex) youtube: body height=0, ytn-app 태그를 가진 container 가 body 의 역할을 대신함.

export function findMainContainer() {
  const body = document.body;
  let mainContainer = body;

  if (sizeOfElement(body) === 0 && body.hasChildNodes()) {
    let children = body.childNodes;
    let maxChild = { element: document.body, size: sizeOfElement(body) };
    for (let i = 0; i < children.length; i++) {
      const size = sizeOfElement(children[i]);
      if (size > maxChild.size) {
        maxChild.element = children[i];
        maxChild.size = size;
      }
    }
    mainContainer = maxChild.element;
  }

  return mainContainer;
}

function sizeOfElement(element) {
  return element.offsetWidth * element.offsetHeight;
}
