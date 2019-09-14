import createDataContext from './createDataContext'

const initialState = {
	firstUse: true
}

const appReducer = (state, { type, payload }) => {
	switch (type) {
		default:
			return state
	}
}

const checkForFirstUse = () => dispatch => {}

export const { Provider, Context } = createDataContext(
	appReducer,
	{ checkForFirstUse },
	initialState
)
