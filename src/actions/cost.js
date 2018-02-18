import { firebaseApp } from "../shared/services/firebase";

// create cost 
export const createCost = (cost) => {
  return {
    type: 'CREATE_COST',
    cost
  }
}

export const startCreateCost = () => {
  return (dispatch, getState) => {
    const userId = getState().auth.user.uid;
  }
}

// update cost 
export const updateCost = () => {
  return {
    type: 'UPDATE_COST'
  }
}

export const startUpdateCost = () => {
  return (dispatch, getState) => {
    const userId = getState().auth.user.uid;
  }
}

// read costs
export const readCosts = (costs) => {
  return {
    type: 'READ_COSTS',
    costs
  }
}

export const startReadCosts = () => {
  return (dispatch, getState) => {
    const userId = getState().auth.user.uid;
  }
}

// delete cost 
export const deleteCost = (costId) => {
  return {
    type: 'DELETE_COST',
    costId
  }
}

export const startDeleteCost = () => {
  return (dispatch, getState) => {
    const userId = getState().auth.user.uid;
  }
}