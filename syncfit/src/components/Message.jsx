import { useState, useContext } from 'react';
import "./css/Message.css";
import emotion from '../assets/videos/emotion.mp4'
import { TypeAnimation } from 'react-type-animation';
import CustomButton from './CustomButton';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
// import { useLoading } from '../contexts/LoadingContext';

const Message = () => {
  const [input, setInput] = useState("");
  const { accessToken } = useContext(AuthContext);
  const nav = useNavigate();
  // const { setLoading } = useLoading();

  // const handleInputChange = (e) => {
  //   setInput(e.target.value);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!accessToken) {
      alert("로그인이 필요한 서비스입니다.");
      nav("/mypage", { replace: true });
      return;
    }
    // accessToken이 존재하면 실제 submit 로직 실행
    // 예: 서버에 메시지 전송 요청
    console.log("전송할 메시지:", input);
    // 예시: setLoading(true);
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
        <CustomButton type={"submit"} text={"전송"} className={"message-button"}/>
      </form>
    </div>
  );
};

export default Message;