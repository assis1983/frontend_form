import { useEffect, useState } from "react";
import { WhatsAppButtonWrapper } from "../button/style"
import Whats from "../../assets/whatsapp.png"

const WhatsAppButton = () => {
    const [showButton, setShowButton] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const scrollThreshold = 200;
  
        setShowButton(scrollY > scrollThreshold);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const openWhatsApp = () => {
      window.open('https://api.whatsapp.com/send?phone=5518997974147', '_blank');
    };
  
    return (
      <WhatsAppButtonWrapper className={showButton ? 'show' : 'hide'} onClick={openWhatsApp}>
        <img src= { Whats } alt="WhatsApp" />
      </WhatsAppButtonWrapper>
    );
  };
  
  export default WhatsAppButton;