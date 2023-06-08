import { EnvelopeIcon } from '@heroicons/react/24/outline'

import { StarIcon, UserCircleIcon, PhoneIcon } from '@heroicons/react/24/solid'

import React from 'react'

const Footer = () => {
	return (
		<div className='mt-6 flex w-full items-center justify-between border-t-2 border-border py-7'>
			<div className='flex items-center gap-4'>
				<div>
					<UserCircleIcon className='h-14 w-14 text-secondary-extralight' />
				</div>
				<div>
					<p className='mb-2 font-semibold'>Michael Joseph</p>
					<div className='flex items-center text-sm'>
						<StarIcon className='mr-2 h-6 w-6 text-gold' />
						<span className='mr-1 font-semibold'>4.8</span>
						<span className='mt-[2px] text-[13px] text-secondary-extralight'>
							(15 reviews)
						</span>
					</div>
				</div>
			</div>
			<div className='flex gap-2'>
				<button className='flex h-10 items-center gap-3 rounded-lg bg-primary-main px-6 text-sm text-white'>
					<PhoneIcon className='h-4 w-4' /> Contact
				</button>
				<button className='h-10 rounded-lg bg-secondary-main px-3 text-white'>
					<EnvelopeIcon className='h-5 w-5' />
				</button>
			</div>
		</div>
	)
}

export default Footer
