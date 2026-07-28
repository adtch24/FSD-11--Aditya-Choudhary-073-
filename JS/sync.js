function register(callback) {
  setTimeout(() => {
    console.log("Register here");
    callback();
  }, 1000);
}

function login(callback) {
  setTimeout(() => {
    console.log("Login here");
    callback();
  }, 2000);
}

function getData(callback) {
  setTimeout(() => {
    console.log("Get data from DB");
    callback();
  }, 3000);
}

function displayData() {
  setTimeout(() => {
    console.log("Display data");
  }, 6000);
}

register(() => {
  login(() => {
    getData(() => {
      displayData();
    });
  });
});