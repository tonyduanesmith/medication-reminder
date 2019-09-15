import React, { useEffect, useContext, Fragment } from 'react'
import { Context as AppContext } from '../context/AppContext'

const AssetPreLoader = ({ children }) => {
	const {
		state: { fontsLoaded },
		loadFonts
	} = useContext(AppContext)

	useEffect(() => {
		loadFonts()
	}, [])

	if (fontsLoaded) {
		return <Fragment>{children}</Fragment>
	}
	return null
}

export default AssetPreLoader
