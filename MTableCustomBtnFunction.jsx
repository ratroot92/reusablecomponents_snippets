import React from 'react';

import IconButton from '@material-ui/core/IconButton';

import Tooltip from '@material-ui/core/Tooltip';

import AddIcon from '@material-ui/icons/Add';

import { withStyles } from '@material-ui/core/styles';

import { ModalContext } from '../../context/modalContext';

const defaultToolbarStyles = {
	iconButton: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		borderRadius: 3,
		border: 0,
		color: 'white',
		height: 48,
		padding: '0 30px',
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
	},
	label: {
		textTransform: 'capitalize',
	},
};

const MTableCustomBtn = (props) => {
	const { iconButton, deleteIcon } = props;
	const { openModal } = React.useContext(ModalContext);
	const handleClick = () => {
		openModal();
	};

	return (
		<div>
			<Tooltip title='Add New '>
				<IconButton className={iconButton} onClick={handleClick}>
					<AddIcon className={deleteIcon} />
				</IconButton>
			</Tooltip>
		</div>
	);
};

export default withStyles(defaultToolbarStyles, { name: 'MTableCustomBtn' })(MTableCustomBtn);
