import React from 'react'
import { StyleSheet } from 'react-native'
import { BlurView } from 'expo-blur'
import { BottomTabBar } from 'react-navigation-tabs'

const styles = StyleSheet.create({
	blurView: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0
	},
	bottomTabBar: {
		backgroundColor: 'transparent',
		borderTopWidth: 0
	}
})

const BlurredTabbar = props => {
	return (
		<BlurView tint='light' intensity={90} style={styles.blurView}>
			<BottomTabBar {...props} style={styles.bottomTabBar} />
		</BlurView>
	)
}

export default BlurredTabbar
