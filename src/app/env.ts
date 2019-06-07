export const firebaseConfig = {
    apiKey: "AIzaSyBZJLxSyvifGQGsc6K2RsG4rWRkIJJyjAc",
    authDomain: "mydata-cbe03.firebaseapp.com",
    databaseURL: "https://mydata-cbe03.firebaseio.com",
    projectId: "mydata-cbe03",
    storageBucket: "mydata-cbe03.appspot.com",
    messagingSenderId: "66510068099",
    appId: "1:66510068099:web:69f1136543c241e7"
  };

  export const snapshotToArray = snapshot => {
      let returnArray = [];
      snapshot.forEach(element => {
        let item = element.val();
        item.key = element.key;
        returnArray.push(item)
      });
      return returnArray;

  }