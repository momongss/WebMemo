(async () => {
  const src = chrome.extension.getURL("src/contentMain.js");
  const contentScript = await import(src);
  contentScript.main(/* chrome: no need to pass it */);
})();
