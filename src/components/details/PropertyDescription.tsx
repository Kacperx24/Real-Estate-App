import React, { FC } from 'react'

const PropertyDescription: FC<{ description: string }> = ({ description }) => {
	return (
		<div className='mt-6 w-full md:mt-9'>
			<p className='mb-3 text-[15px] font-semibold md:text-base'>
				Property details
			</p>
			<p className='text-[13px] text-secondary-extralight md:text-sm'>
				{description}
			</p>
		</div>
	)
}

export default PropertyDescription
