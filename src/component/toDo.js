import { useState }from 'react'; //render different states depening on the state (can change screen)
import Backdrop from './Backdrop.js';
import Modal from './modal';

function ToDo(props) {
  const [ modalIsOpen, setModalIsOpen ]= useState(false); //create state that react is aware off 
  //2nd to asign new value while first is the name of the model
  //putting it here allows the site to always refresh to latest 
  function deleteHandler (){
      console.log('clicked!');
      console.log(props.text);
      setModalIsOpen(true);
  }
  function closeModeHandler(){
    setModalIsOpen(false);
  }
    /* custom componetns should / need to be capitlaize in js and it's just good practice */
  return (
    /* normally will be class but this is js and not html */
    /* {} will be treated as java script, but not blocks (if statements) */
    /*no () after deleteHandler on onclick as it would activte as soon as react + js sees it and not on click */
     /* document.querySelector('button').addEventListener('click') normally how we do in js*/
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler} > Delete </button>
      </div>
      {modalIsOpen ? <Modal onCancel={closeModeHandler} onConfirm={closeModeHandler} ></Modal> : null} 
      {modalIsOpen && <Backdrop onClick ={closeModeHandler} /> } 
    </div>
  );
}
export default ToDo;

