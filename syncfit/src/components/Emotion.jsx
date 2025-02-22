import { useState } from 'react';
import "./css/Emotion.css";
import emotion from '../assets/videos/emotion.mp4'

const Emotion = () => {
  const [input, setInput] = useState("");

  // const handleInputChange = (e) => {
  //   setInput(e.target.value);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className='emotion'>
      <video autoPlay loop muted>
        <source src={emotion} type="video/mp4" />
      </video>
      <h1>Welcome to SyncFit</h1>
      <h3>오늘 당신의 기분은 어떠신가요?</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          name="postContent"
          placeholder='기분을 입력하세요'
          rows={4}
          cols={40}
        />
        <button type="submit">전송</button>
      </form>
    </div>
  );
};

export default Emotion;
