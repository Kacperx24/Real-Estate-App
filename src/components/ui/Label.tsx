import React, { FC, ReactNode } from 'react'

interface LabelProps {
	children: ReactNode
}

const Label: FC<LabelProps> = ({ children }) => {
	return (
		<div className='flex items-center gap-2 rounded-md bg-primary-light px-3 py-1 text-[11px] text-secondary-light'>
			{children}
		</div>
	)
}

export default Label
