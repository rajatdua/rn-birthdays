/**
 * Created by rajatdua on 2020-01-02
 */
import { createReducer } from 'reduxsauce';
import { INITIAL_STATE } from './InitialState';
import { BirthdayTypes } from './Actions';

export const addBirthday = (state, { data }) => ({
	...state,
	birthdays: [...data, ...state.birthdays],
});
export const removeBirthday = (state, { key }) => {
	const birthdayWithoutKey = state.birthdays.filter((birthday) => birthday.key !== key);
	return {
		...state,
		birthdays: birthdayWithoutKey,
	};
};
export const updateBirthday = (state, { data }) => {
	const birthdayWithoutKey = state.birthdays.filter((birthday) => birthday.key !== data.key);
	return {
		...state,
		birthdays: [...data, ...birthdayWithoutKey],
	};
};
export const reducer = createReducer(INITIAL_STATE, {
	[BirthdayTypes.UPDATE_BIRTHDAY]: updateBirthday,
	[BirthdayTypes.REMOVE_BIRTHDAY]: removeBirthday,
	[BirthdayTypes.ADD_BIRTHDAY]: addBirthday,
});
