import { HomeIcon, ViewfinderCircleIcon } from '@heroicons/react/24/solid'
import Label from '../ui/Label'
import { FC } from 'react'

const DetailsLabels: FC<{ rooms: number; squareMeters: number }> = ({
	rooms,
	squareMeters,
}) => (
	<div className='mt-6 flex w-full flex-wrap gap-3'>
		<Label py={6} px={14} fontSize={13}>
			<HomeIcon className='mb-[2px] h-3 w-3' />
			<p>{rooms} rooms </p>
		</Label>

		<Label py={6} px={14} fontSize={13}>
			<ViewfinderCircleIcon className='mb-[2px] h-3 w-3' />
			<p>
				{squareMeters}
				<span className='text-[12px]'>
					m<sup>2</sup>
				</span>
			</p>
		</Label>
	</div>
)

export default DetailsLabels
