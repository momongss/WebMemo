### fileSystem

    Use the chrome.fileSystem API to create, read, navigate, and write to the user's local file system. With this API, Chrome Apps can read and write to a user-selected location. For example, a text editor app can use the API to read and write local documents. All failures are notified via chrome.runtime.lastError.

~~일반적인 파일 시스템 api 로 보인다. 가장 로우레벨 api 로 보이고, 내가 로직을 제대로 짠다는 가정하에 안정적으로 동작할 수 있을 걸로 보임.~~

프로그램이 파일시스템에 접근하는게 아니라, 사용자가 직접 조작해야하는 걸 불러오는 거였다... 못쓴다..

### storage

    Use the chrome.storage API to store, retrieve, and track changes to user data.

내가 원하는 기능을 가진 api 로 보인다. localStorage 와 유사하게 key value 로 데이터를 저장할 수 있고 각 페이지 마다 따로 데이터를 관리된다. 또 localStorage 와는 다르게 사용자가 history 를 지울 때 예기치 못하게 데이터가 지워지지 않는다고 한다.

### system.storage

    Use the chrome.system.storage API to query storage device information and be notified when a removable storage device is attached and detached.

USB 등 외장 스토리지에 접근할 수 있는 API 로 보인다.
