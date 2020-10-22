/**
 * Created by rajatdua on 2020-01-02
 */

const birthdayList = [
	{
		id: 1,
		name: 'Tanisha',
		date: 21,
		month: 1,
		year: 2004,
		alert: true,
		time: '',
		description: 'My sister - Maternal',
	},
	{
		id: 2,
		name: 'Vineet',
		date: 26,
		month: 1,
		year: 1984,
		alert: true,
		time: '',
		description: 'My brother - Maternal',
	},
];

export const INITIAL_STATE = {
	birthdays: birthdayList,
};
