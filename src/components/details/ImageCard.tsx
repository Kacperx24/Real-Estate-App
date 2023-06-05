import Image from 'next/image'
import React, { FC } from 'react'

const ImageCard: FC<{ url: string; title: string }> = ({ url, title }) => {
	return (
		<div className='max-h-[400px] w-full max-w-[720px]'>
			<div className='relative mx-auto h-[50vw]  w-[90vw] max-w-full overflow-hidden rounded-2xl md:h-auto md:w-full md:pb-[55.55%]'>
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
