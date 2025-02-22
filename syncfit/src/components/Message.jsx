import { useState } from 'react';
import "./css/Message.css";
import emotion from '../assets/videos/emotion.mp4'
import { TypeAnimation } from 'react-type-animation';
// import { useLoading } from '../contexts/LoadingContext';

const Message = () => {
  const [input, setInput] = useState("");
  // const { setLoading } = useLoading();

  // const handleInputChange = (e) => {
  //   setInput(e.target.value);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
  };

  return (
    <div className='message'>
      <video autoPlay loop muted>
        <source src={emotion} type="video/mp4" />
      </video>
      <h1>Welcome to SyncFit</h1>
      <div className='message-typing-animation'>
        <TypeAnimation
          sequence={[
            '오늘 당신의 기분은 어떠신가요?',
            '웃음 가득한 순간이 있으셨나요?',
            '어쩌면 슬픈 일도 있었을 거예요...',
            '당신의 하루를 들려주세요!',
          ]}
          wrapper='span'
          speed={250}
          repeat={0}
          className="type-animation"
        />
      </div>
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

export default Message;
