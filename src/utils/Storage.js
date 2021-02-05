export default class Storage {
  static setItem(memoLists) {
    chrome.storage.local.set({ WebMemoLists: memoLists }, function () {
      console.log("Value is set to " + JSON.stringify(memoLists));
    });
  }

  static getItem() {
    let gettingItem = new Promise((resolve) =>
      chrome.storage.local.get("WebMemoLists", resolve)
    );
    return gettingItem.then((re) => {
      return JSON.parse(re.WebMemoLists);
    });
  }
}
