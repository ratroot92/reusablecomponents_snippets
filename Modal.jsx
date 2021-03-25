import React from 'react'

import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function Modal() {
   






export default ({ children }) => {
	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			width:'60%',
			transform: 'translate(-50%, -50%)',
		},
	};
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const [form, setForm] = React.useState();
	const [service, setService] = React.useState();


React.useEffect(()=>{
	console.log(service)
},[service])

	function openModal(addService,formDetails) {
		setIsOpen(true);
		console.log(addService)
		const callback = addService
		 // eslint-disable-next-line no-unused-expressions
		 setService(() => callback)
		 setForm(formDetails)
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		// subtitle.style.color = '#f00';
		console.log('after modal open');
	}

	function closeModal() {
		console.log('modal closed');
		setIsOpen(false);
	}

	
	return (
		<ModalContext.Provider value={{ closeModal, afterOpenModal, openModal,setForm,setService }}>
			{children}
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel='Example Modal'
			>
				{/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}

				<MuiAddNew closeModal={closeModal} addService={service} formDetails={form} />
			</Modal>
		</ModalContext.Provider>
	);
};

       
    
}
