import { useState } from "react";

export function Header() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Title</h1>
      <h2>Subtitle</h2>

      <div>
        <span>Counter: {count}</span>
        <button onClick={() => setCount((old) => ++old)}>add</button>
      </div>
    </div>
  );
}
