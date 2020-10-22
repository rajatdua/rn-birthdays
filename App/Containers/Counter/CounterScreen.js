/**
 * Created by rajatdua on 2020-01-02
 */
import React, { useState } from 'react';
import { View, Text, Button, TextInput, Keyboard, SectionList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CounterActions from '../../Stores/Counter/Actions';
import { Helpers, Metrics } from '../../Theme';
import Style from './CounterScreenStyle';

const birthdayList = [
	{ title: 1, data: [{ name: 'Tanisha', date: 21, month: 1, year: 2004, alert: false }] },
	{ title: 1, data: [{ name: 'Vineet', date: 26, month: 1, year: 1984, alert: false }] },
];

const CounterScreen = ({ count, incrementCounter, decrementCounter, setCounter }) => {
	const [counterInput, setCounterInput] = useState('');
	return (
		<View
			style={[
				Helpers.fill,
				Helpers.colMain,
				Metrics.mediumHorizontalMargin,
				Metrics.mediumVerticalMargin,
			]}
		>
			<SectionList
				sections={birthdayList}
				renderItem={({ item }) => <Text style={Style.item}>{item.name}</Text>}
				renderSectionHeader={({ section }) => (
					<Text style={Style.sectionHeader}>{section.title}</Text>
				)}
				keyExtractor={(item, index) => index}
			/>
			<TextInput
				value={counterInput}
				onChangeText={(text) => setCounterInput(text)}
				keyboardType={'numeric'}
			/>
			<Button
				title="Set"
				onPress={() => {
					Keyboard.dismiss();
					setCounterInput('');
					setCounter(parseInt(counterInput));
				}}
				disabled={counterInput === ''}
			/>
			<Button
				title="Increment"
				onPress={() => {
					Keyboard.dismiss();
					incrementCounter();
				}}
			/>
			<Button
				title="Decrement"
				onPress={() => {
					Keyboard.dismiss();
					decrementCounter();
				}}
				disabled={count < 1}
			/>
			<Text style={Style.text}>{count}</Text>
		</View>
	);
};
CounterScreen.propTypes = {
	count: PropTypes.number,
	incrementCounter: PropTypes.func,
	decrementCounter: PropTypes.func,
	setCounter: PropTypes.func,
};
const mapStateToProps = ({ counter: { count } }) => {
	return {
		count,
	};
};
export default connect(mapStateToProps, {
	incrementCounter: CounterActions.incrementCounter,
	decrementCounter: CounterActions.decrementCounter,
	setCounter: CounterActions.setCounter,
})(CounterScreen);
