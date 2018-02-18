const initialState = {};

export default (state=initialState, action) => {
  switch(action.type){
    case 'SIGNIN':
      console.log("state when login: ", state);
      return {
        user: action.user
      };
    case 'SIGNOUT':
      console.log("state when logout: ", state);
      return {};
    default:
      return state;
  }
}