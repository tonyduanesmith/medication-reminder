import React, { useEffect, useContext, Fragment } from 'react'
import { Context as AppContext } from '../context/AppContext'
import { Context as MedicationContext } from '../context/MedicationContext'

const AssetPreLoader = ({ children }) => {
	const {
		state: { fontsLoaded },
		loadFonts
	} = useContext(AppContext)
	const { fetchMedications } = useContext(MedicationContext)

	useEffect(() => {
		fetchMedications()
		loadFonts()
	}, [])

	if (fontsLoaded) {
		return <Fragment>{children}</Fragment>
	}
	return null
}

export default AssetPreLoader
