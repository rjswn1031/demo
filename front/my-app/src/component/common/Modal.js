import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toggleMask } from '../../slice/modalSlice'

import BoardWriteModal from '../modal/BoardWriteModal';
import BoardDetailModal from '../modal/BoardDetailModal';

import '../../css/modal.css'

Modal.propTypes = {

};

function Modal(props) {
  const dispatch = useDispatch();
  const type = useSelector(state => state.modal.modalType);

  let modalTitle, modalContent;
  switch (type) {
    case 'boardWrite':
      modalTitle = '건의 게시글 작성';
      modalContent = <BoardWriteModal></BoardWriteModal>;
      break;
    case 'boardDetail': 
      modalTitle = '게시글 상세보기';
      modalContent = <BoardDetailModal></BoardDetailModal>;
      break;
    default: break;
  }

  return (
    <div id='mask'>
      <div className='modalContainer'>
        <div className='modalHeader'>
          <div>{modalTitle}</div>
          <div style={{cursor: 'pointer'}} onClick={()=>{dispatch(toggleMask(false))}}><FontAwesomeIcon icon="fa-solid fa-xmark" /></div>
        </div>
        <div className='modalContent'>
          {modalContent}
        </div>
      </div>
    </div>
  );
}

export default Modal;