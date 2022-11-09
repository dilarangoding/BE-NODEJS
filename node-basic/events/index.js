const { EventEmitter } = require("events");

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}`);
};

const myEmitter = new EventEmitter();

myEmitter.on("birthday-john", birthdayEventListener);
myEmitter.emit("birthday-john", "John Kaneddy");
