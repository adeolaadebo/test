 function Modal (props){
        
    function closeModalHandler(){
        props.onCancel();
      }
  
      function confirmModalHandler(){
          props.onConfirm();
      }

    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn--alt" onClick={closeModalHandler} >Cancel</button>
            <button className="btn" onClick={confirmModalHandler}>Confirm</button>
         </div>
         )
        
 }
 export default Modal; 
 