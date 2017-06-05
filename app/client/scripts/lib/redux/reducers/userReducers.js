export default (state = [], action) => {
	switch(action.type) {
		case 'CREATE_USER':
			//state.push(action.user);
			return [
				...state,
				Object.assign({}, action.user)
			];
		default:
			return state;
	}
};
