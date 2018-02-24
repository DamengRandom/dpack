const initialState = [];

export default (state=initialState, action) => {
  switch(action.type){
    case 'CREATE_COST':
      return state.concat(action.cost)
    case 'UPDATE_COST':
      return state.map((cost) => {
        if(cost.id === action.id){
          return {
            ...cost,
            ...action.updates
          }
        }else {
          return cost;
        }
      });
    case 'READ_COSTS':
      return action.costs;
    case 'DELETE_COST':
      return state.filter(({id}) => id !== action.id);  
    default:
      return state;
  }
}