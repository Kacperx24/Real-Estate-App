'use client'

import React, { FC, useEffect, useRef, useState } from 'react'

interface MultiRangeInputProps {
	minMaxValue: { min: number; max: number }
	setMinMaxValue: (value: { min: number; max: number }) => void
	max: number
	min: number
	step: number
}

const MultiRangeInput: FC<MultiRangeInputProps> = ({
	minMaxValue,
	setMinMaxValue,
	max,
	min,
	step,
}) => {
	const gap = max / 10
	const rangeRef = useRef<HTMLDivElement>(null)

	const handleMinValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let val = Math.min(Number(e.target.value), minMaxValue.max - gap)
		val = Math.max(val, min)
		setMinMaxValue({ min: val, max: Math.max(val + gap, minMaxValue.max) })
	}

	const handleMaxValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let val = Math.max(Number(e.target.value), minMaxValue.min + gap)
		val = Math.min(val, max)
		setMinMaxValue({ min: Math.min(val - gap, minMaxValue.min), max: val })
	}

	useEffect(() => {
		const minPercent = ((minMaxValue.min - min) / (max - min)) * 100
		const maxPercent = ((minMaxValue.max - min) / (max - min)) * 100

		if (rangeRef.current) {
			rangeRef.current.style.left = `${minPercent}%`
			rangeRef.current.style.right = `${100 - maxPercent}%`
		}
	}, [minMaxValue, min, max])

	return (
		<div className='w-full'>
			<div className='relative h-[3px] w-full overflow-hidden rounded bg-[#CFCFCF]'>
				<div
					className='absolute left-1/4 right-1/4 h-full rounded bg-primary-main'
					ref={rangeRef}
				></div>
			</div>
			<div className='relative'>
				<input
					type='range'
					className='range-input'
					min={min}
					max={max}
					value={minMaxValue.min}
					step={step}
					onChange={handleMinValueChange}
				/>
				<input
					type='range'
					className='range-input'
					min={min}
					max={max}
					value={minMaxValue.max}
					step={step}
					onChange={handleMaxValueChange}
				/>
			</div>
		</div>
	)
}

export default MultiRangeInput
