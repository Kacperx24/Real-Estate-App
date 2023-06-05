import Image from 'next/image'
import React, { FC } from 'react'

const ImageCard: FC<{ url: string; title: string }> = ({ url, title }) => {
	return (
		<div className='w-full max-w-[720px] overflow-hidden'>
			<div className='relative h-[50vw] max-h-[400px] w-[90vw] max-w-full overflow-hidden rounded-2xl'>
				<Image
					src={url}
					fill
					sizes='(max-width: 200px)'
					alt={title}
					style={{ objectFit: 'cover' }}
					priority
				/>
			</div>
		</div>
	)
}

export default ImageCard
