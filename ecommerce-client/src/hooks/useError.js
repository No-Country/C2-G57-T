import { useState } from "react";

export const useError = () => {
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");

  const sendError = ()=>{
    setError(true)
    setTimeout(() => {
        setError(false)        
    }, 3000);
  }  
  const message = (msg)=>{
      setMsg(msg)
  }

  
  return { error,msg, sendError, message };
};
