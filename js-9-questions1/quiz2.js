//? follow these steps:
// todo1: Write a code that logs “wait 5 sec”
// todo2: and then after 5 seconds logs “ready?”
// todo3: and finally logs “🚀”  every one second
// todo4: (write a condition that cleans up the setInterval after 10 seconds to avoid crashing)

//!   Answer:
console.log("wait 5 sec");
function deleyAndRepeat(delay, interval) {
  setTimeout(() => {
    console.log("ready?");
    let i = "🚀";
    let count = 0;
    const timer = setInterval(() => {
      console.log(i);
      count++;
      if (count == 10) {
        clearInterval(timer);
      }
    }, interval);
  }, delay);
}

deleyAndRepeat(5000,1000);
