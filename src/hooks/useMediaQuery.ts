import { useEffect, useState } from 'react'

const MOBILE_SCREEN_WIDTH = 768

function useMediaQuery() {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkDeviceType = () => {
			setIsMobile(window.innerWidth < MOBILE_SCREEN_WIDTH)
		}

		checkDeviceType()

		window.addEventListener('resize', checkDeviceType)

		return () => {
			window.removeEventListener('resize', checkDeviceType)
		}
	}, [])

	return isMobile
}

export default useMediaQuery
