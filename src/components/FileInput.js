import { useState } from "react";

function FileInput({ name, value, onChange }) {
  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  return <input type="file" onChange={handleChange} />; //비제어 컴포넌트로 구현해야함
}

export default FileInput;
