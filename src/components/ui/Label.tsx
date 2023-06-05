import React, { FC, ReactNode } from 'react'

interface LabelProps {
	children: ReactNode
	px?: number
	py?: number
	fontSize?: number
}

const Label: FC<LabelProps> = ({
	children,
	px = 12,
	py = 4,
	fontSize = 11,
}) => {
	return (
		<div
			style={{ padding: `${py}px ${px}px`, fontSize: `${fontSize}px` }}
			className='flex items-center gap-2 rounded-md bg-primary-light text-secondary-light'
		>
			{children}
		</div>
	)
}

export default Label
