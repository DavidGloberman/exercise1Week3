//==================[1]=======================
function successPromise() {
  return new Promise((resolve, reject) => {
    resolve("Success!");
  });
}

successPromise().then((resolveValue) => {
  console.log(resolveValue);
});

//==================[2]=======================
function fullName(firstName, lastName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(firstName + " " + lastName);
    }, 1000);
  });
}

fullName("david", "gloiberman").then((resolveValue) => {
  console.log(resolveValue);
});

//==================[3]=======================
function addFive(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num + 5);
    }, 500);
  });
}
function multiplyByTwo(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 500);
  });
}
function subtractTen(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num - 10);
    });
  });
}

addFive(10)
  .then((resolve1) => multiplyByTwo(resolve1))
  .then((resolve1) => subtractTen(resolve1))
  .then((resolve1) => console.log(resolve1));

//==================[4]=======================
function divide(numerator, denominator) {
  return new Promise((resolve, reject) => {
    if (denominator > 0) {
      resolve(numerator / denominator);
    } else {
      reject("Cannot be divided by zero");
    }
  });
}

divide(3, 0)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.error(error));

//==================[5]=======================
async function fullNameAsync() {
  let s = await fullName("david", "gloiberman");
  console.log(s);
}

fullNameAsync();

async function addMultiplySubtractAsync() {
  let resolve = await addFive(5);
  resolve = await multiplyByTwo(resolve);
  resolve = await subtractTen(resolve);
  console.log(resolve);
}
addMultiplySubtractAsync();

//==================[5]=======================

async function divideAsync() {
  try {
    let resolve = await divide(4, 0);
    console.log(resolve);
  } catch (error) {
    console.error(error);
  }
}
divideAsync();
