import { firebaseApp } from "../shared/services/firebase";

// create cost 
export const createCost = (cost) => {
  return {
    type: 'CREATE_COST',
    cost
  }
}

export const startCreateCost = (costData = {}) => {
  const {
    date = '',
    buyer = '',
    thing = '',
    cost = 0,
    flag = ''
  } = costData;
  return (dispatch, getState) => {
    const userId = getState().auth.user.uid;
    const costRecord = {
      date,
      buyer,
      thing,
      cost,
      flag
    }
    firebaseApp.database().ref(`/users/${userId}/costs`).push(costRecord).then((snapshot) => {
      dispatch(createCost({
        id: snapshot.key,
        ...costRecord
      }));
    })
  }
}

// update cost 
export const updateCost = (id, update) => {
  return {
    type: 'UPDATE_COST',
    id,
    update
  }
}

export const startUpdateCost = (id, update) => {
  return (dispatch, getState) => {
    const userId = getState().auth.user.uid;
    firebaseApp.database().ref(`/users/${userId}/costs/${id}`).update(update).then(() => {
      dispatch(updateCost(id, update));
    });
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
    firebaseApp.database().ref(`/users/${userId}/costs`).once('value').then((snapshot) => {
      const costsRecords = [];
      snapshot.forEach((eachCost) => {
        costsRecords.push({
          id: eachCost.key,
          ...eachCost.val()
        });
      });
      dispatch(readCosts(costsRecords));
    });
  }
}

// delete cost 
export const deleteCost = ({id} = {}) => {
  return {
    type: 'DELETE_COST',
    id
  }
}

export const startDeleteCost = ({ id }) => {
  return (dispatch, getState) => {
    const userId = getState().auth.user.uid;
    firebaseApp.database().ref(`/users/${userId}/costs/${id}`).remove().then((snapshot) => {
      dispatch(deleteCost({id}));
    });
  }
}