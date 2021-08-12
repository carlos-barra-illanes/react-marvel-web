import React from "react";

import Modal from "react-bootstrap/Modal";




const Example = () => {

    const [isOpen, setIsOpen] = React.useState(false);


    const showModal = () => {

        setIsOpen(true);

    };


    const hideModal = () => {

        setIsOpen(false);

    };
    return (

        <>
        <div className="text-center d-inline-block">
			<a className="fh5co_display_table" onClick={showModal}>
                <div className="fh5co_verticle_middle">
                    <i className="fa fa-google-plus"></i>
                </div>
            </a>
		</div>
                                
     

      <Modal show={isOpen} onHide={hideModal}>

        <Modal.Header>

          <Modal.Title>Hi</Modal.Title>

        </Modal.Header>

        <Modal.Body>The body</Modal.Body>

        <Modal.Footer>

          <button onClick={hideModal}>Cancel</button>

          <button>Save</button>

        </Modal.Footer>

      </Modal>

    </>

    );

};

export default Example;