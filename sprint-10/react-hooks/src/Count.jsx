import { useState, useMemo } from "react";

function Count() {
  const [count, setCount] = useState(0);
  // memoized value from the function
  // params
  // 1 -> function
  // 2 -> array of dependencies

  // count 1 - 2
  // count 2 - 3
  const memoizedValue = useMemo(() => doMath(count, 1), [count]);

  function doMath(number1, number2) {
    return number1 + number2;
  }

  function handleCount() {
    // const magicNumber = doMath(count, 1);
    // setCount(magicNumber);
    setCount(memoizedValue);
  }

  return (
    <button type="button" onClick={handleCount}>
      count is {count}
    </button>
  );
}

export default Count;
