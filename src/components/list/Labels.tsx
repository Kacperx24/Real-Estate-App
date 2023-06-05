import { HomeIcon, ViewfinderCircleIcon } from '@heroicons/react/24/solid'
import Label from '../ui/Label'
import { FC } from 'react'

const Labels: FC<{ rooms: number; squareMeters: number }> = ({
	rooms,
	squareMeters,
}) => (
	<div className='mt-3 flex flex-wrap gap-2 lg:mt-[14px]'>
		<Label>
			<HomeIcon className='mb-[1px] h-3 w-3' />
			<p>{rooms} rooms </p>
		</Label>
		<Label>
			<ViewfinderCircleIcon className='mb-[1px] h-3 w-3' />
			<p>
				{squareMeters}
				<span className='text-[10px]'>
					m<sup>2</sup>
				</span>
			</p>
		</Label>
	</div>
)

export default Labels
