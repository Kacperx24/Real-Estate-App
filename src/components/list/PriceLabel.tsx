import { FC } from 'react'

const PriceLabel: FC<{ price: number; variant?: 'normal' | 'large' }> = ({
	price,
	variant = 'normal',
}) => {
	const formattedPrice = price.toFixed(3)

	return (
		<p
			className={`${
				variant === 'normal' ? 'text-sm' : 'text-sm'
			} text-secondary-extralight`}
		>
			<span
				className={`${
					variant === 'normal'
						? 'text-base font-medium'
						: 'text-2xl font-semibold'
				} text-primary-main`}
			>
				${formattedPrice}
			</span>{' '}
			/ {price > 10 ? 'total' : 'month'}
		</p>
	)
}

export default PriceLabel
