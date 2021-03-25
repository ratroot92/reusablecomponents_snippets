import React from 'react';

// import IconButton from '@material-ui/core/IconButton';

// import Tooltip from '@material-ui/core/Tooltip';

import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { withStyles } from '@material-ui/core/styles';

import { ModalContextConsumer } from '../../context/modalContext';

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
  add: {
    fontSize: '15px',
    fontWeight: 'bold',
    marginBottom: '2px',
  },
  addUser: {
    color: '#20a84c',
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
};

// eslint-disable-next-line react/prefer-stateless-function
class MTableCustomBtn extends React.Component {
  render() {
    const { classes, formDetails, addService, dispatcher } = this.props;
    return (
      <ModalContextConsumer>
        {({ openModal }) => {
          return (
            //   <Tooltip title='Add New '>
            //     <IconButton
            //       className={classes.iconButton}
            //       onClick={() => {
            //         openModal(addService, formDetails, dispatcher);
            //       }}
            //     >
            //       {/* <AddIcon className={classes.deleteIcon} /> */}
            //     </IconButton>

            //   </Tooltip>

            <Button
              color='primary'
              size='small'
              className={classes.addUser}
              onClick={() => {
                openModal(addService, formDetails, dispatcher);
              }}
            >
              <AddIcon className={classes.add} /> Add User
            </Button>
          );
        }}
      </ModalContextConsumer>
    );
  }
}

export default withStyles(defaultToolbarStyles, { name: 'MTableCustomBtn' })(
  MTableCustomBtn
);
