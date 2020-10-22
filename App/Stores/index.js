import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas';
import { reducer as CounterReducer } from './Counter/Reducers';
import { reducer as BirthdaysReducer } from './Birthdays/Reducers';

export default () => {
	const rootReducer = combineReducers({
		/**
		 * Register your reducers here.
		 * @see https://redux.js.org/api-reference/combinereducers
		 */
		counter: CounterReducer,
		birthday: BirthdaysReducer,
	});

	return configureStore(rootReducer, rootSaga);
};
