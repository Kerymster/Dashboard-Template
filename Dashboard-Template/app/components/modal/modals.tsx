import React from 'react';
import { Modal } from '.';
import { MODAL_NAMES } from './modal.contsants';
import DeleteConfirmation from '../delete-confirmation';
import { CreateEditStudent } from '../../Students/patterns/create-edit-students';

const Modals = () => {
  return (
    <div>
      <Modal stateName={MODAL_NAMES.DELETE_STUDENT} title="" maxWidth="512px">
        <DeleteConfirmation />
      </Modal>
      <Modal stateName={MODAL_NAMES.CREATE_STUDENT} title="" maxWidth="550px">
        <CreateEditStudent />
      </Modal>
      <Modal stateName={MODAL_NAMES.EDIT_STUDENT} title="" maxWidth="550px">
        <CreateEditStudent />
      </Modal>
    </div>
  );
};

export default Modals;
