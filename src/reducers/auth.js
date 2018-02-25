const initialState = {};

export default (state=initialState, action) => {
  switch(action.type){
    case 'SIGNIN':
      return {
        user: action.user
      };
    case 'SIGNOUT':
      return {};
    default:
      return state;
  }
}