import React from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5"; 
import Tick from "../assets/images/Tick.gif"
const Modal = ({ message, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <Message>{message}</Message>
        <img src={Tick} alt="tick" />
        <CloseIcon onClick={onClose} />
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  width: 90%;
  max-width: 400px;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 15px;
  position: relative;
  margin-bottom: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-around;

  img{
    width: 50px;
  }
`;

const CloseIcon = styled(IoClose)`
  cursor: pointer;
  font-size: 1.2rem;
  color: #888;
  position: absolute;
  right: 0;
  top: 0;
  margin-right: 1rem;
  margin-top: 0.55rem;
`;

const Message = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 0;
`;
