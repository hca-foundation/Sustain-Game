import React, { useState } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody,
} from 'reactstrap';
import sustaingame from '../../images/sustaingame.png';

const GameModal = (props) => {
  const {
    buttonLabel,
    className,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  // add custom close button icon here
  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

  return (
    <div>
      <Button className="btn-transparent" color="info" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}></ModalHeader>
        <ModalBody>
          <img src={sustaingame} alt="sustain game" class="sustaingame-img"/>
          <h1>How to Play</h1>
          <p>Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis</p>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default GameModal;
