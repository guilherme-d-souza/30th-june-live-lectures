function example() {
  console.log("Hello World!");
}

example(); // call a function = invoke a function

// its almost legacy code
// not modern code
(function () {
  // Private variables and functions
  let counter = 0;

  function pressButton() {
    increment();
    console.log("cool button");
  }

  // hidden from other files
  function increment() {
    counter++;
  }

  // Expose public interface
  // window variable is global (JS code) -> similar to the document (DOM)
  window.counter = {
    pressButton: pressButton,
    getCounter: () => counter,
  };
})();
