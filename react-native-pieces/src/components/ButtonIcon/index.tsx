import React from 'react';
import { StyleSheet, Pressable, ViewStyle } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import ColorScheme from '../../style/colors';
import SizeScheme from '../../style/sizes';

export interface ButtonIconProps {
	handleClick: () => void,
	faIcon: IconDefinition,
	style?: ViewStyle
	fontSize?: number
}


const ButtonIcon = (props: ButtonIconProps) => {
	return (
		<Pressable
			style={{...styles.button, ...props.style}}
			onPress={props.handleClick}>
			<FontAwesomeIcon
				size={props.fontSize || SizeScheme.get().font.c}
				icon={props.faIcon} />
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		color: ColorScheme.get().textDark,
		padding: 5
	}

});

export default ButtonIcon;
