/**
 * Created by rajatdua on 2020-01-02
 */
import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
	updateBirthday: ['data'],
	removeBirthday: ['key'],
	addBirthday: ['data'],
});

export const BirthdayTypes = Types;
export default Creators;
