class Storage {
  static setItem() {
    chrome.storage.local.set({ WebMemoLists: "value" }, function () {
      console.log("Value is set to " + value);
    });
  }

  set() {
    const value = "aaaaa";
    chrome.storage.local.set({ key: "value" }, function () {
      console.log("Value is set to " + value);
    });
  }

  get() {
    chrome.storage.local.get(["key"], function (result) {
      console.log("Value currently is " + result.key);
    });
  }
}
