import { useContext, useEffect } from "react";
import { Context } from "../context/Context";

const Message = ({ text }) => {
  const { message, setMessage } = useContext(Context);
  
  useEffect(() => {
    setTimeout(() => {
      if (message.active) {
        setMessage({ active: false });
      }
    }, 3000);
  }, [message]);

  return <div id="message">{text}</div>;
};

export default Message;
