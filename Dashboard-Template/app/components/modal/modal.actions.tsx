/* eslint-disable @typescript-eslint/no-explicit-any */

import { GenericActionCreator } from '@/app/utils/generic.action';

export enum MODAL_ACTION_TYPES {
  TOGGLE_MODAL = '[Modal] Toggle Modal',
}

export interface IToggleModalAction {
  type: MODAL_ACTION_TYPES.TOGGLE_MODAL;
  data: {
    stateName: string;
  };
}

export const toggleModalVisibility = (stateName: string) =>
  GenericActionCreator<IToggleModalAction>({
    type: MODAL_ACTION_TYPES.TOGGLE_MODAL,
    data: { stateName: stateName },
  });

export type ModalActions = IToggleModalAction;
