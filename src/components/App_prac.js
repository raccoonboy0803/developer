import { useState } from "react";

function MyComponent({ value, onChange }) {
  const handleChange = (e) => {
    const nextValue = e.target.vlaue.toUppercase();
    onChange(nextValue);
  };

  return <input value={value} /*제어컴포넌트*/ onChange={handleChange} />;
}

function App_prac() {
  const [value, setValue] = useState("");

  const handleClear = () => setValue("");

  return (
    <div>
      <MyComponent value={value} onChange={setValue} />
      <button onClick={handleClear}>지우기</button>
    </div>
  );
}

export default App_prac;
