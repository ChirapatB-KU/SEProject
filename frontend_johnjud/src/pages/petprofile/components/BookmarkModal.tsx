import React, { useState } from 'react';
import './BookmarkModal.css'
import { Button, Modal, ModalBody } from 'reactstrap';
import alert from './img/Warning.png'
import { NavLink } from 'react-router-dom';
import plus from './img/add.png';


export const BookmarkModal = (props:any) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="link" onClick={toggle} id="addToBmk"><img src={plus}/>Add to bookmark</Button>
      <Modal isOpen={modal} toggle={toggle} id="proPopUp">
        <ModalBody className="Modalbody">
          <img id="alertPro" src={alert}/>
          <h5 id="pleaseSignInPro">Please sign in</h5>
        </ModalBody>
        <div className="proAllButt">
            <div id="proButt1">
                <NavLink to='/signin'>
                    <Button color="link" onClick={toggle} className="Probutton1">confirm</Button>
                </NavLink>
            </div>
            <div id="proButt2">
                <Button color="link" onClick={toggle} className="Probutton2">cancel</Button>
            </div>
        </div>
      </Modal>
    </div>
  );
}

export default BookmarkModal;