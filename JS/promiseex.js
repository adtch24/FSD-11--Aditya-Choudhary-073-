function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Register here");
            reject("failed to register");
        }, 10000);
    });
}

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Login here");
            resolve();
        }, 5000);
    });
}

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetch data from DB");
            resolve();
        }, 3000);
    });
}

function displayData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Display data");
            resolve();
        }, 6000);
    });
}

// register()
//     .then(() => login())
//     .then(() => getData())
//     .then(() => displayData())
//     .catch((err) => {
//         console.error("An error occurred:", err);
//     });

async function test()
{
    try {
    await register();
    await login();
    await getData();
    await displayData();  
    }
    catch (err) {
        console.error("An error occurred:", err);
    }  
}
test();
console.log("Call Another Application");