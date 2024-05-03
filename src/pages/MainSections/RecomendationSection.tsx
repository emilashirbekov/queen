import {
	useAppDispatch,
	useAppSelector,
} from '@/app/providers/StoreProvider/config/hooks'
import { productsSelector } from '@/entities/Product'
import { fetchProducts } from '@/entities/Product/model/services/fetchProducts'
import { useEffect } from 'react'
import Slider from '../MainComponents/Slider'

const RecomendationSection = () => {
	const dispatch = useAppDispatch()
	const products = useAppSelector(productsSelector)

	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])

	return (
		<section>
			<div className='max-container'>
				<h1 className='mb-[32px] text-[26px] font-semibold'>
					Наши рекомендации
				</h1>
			</div>
			{products.length === 0 ? (
				<div>Нет рекомендаций(</div>
			) : (
				<Slider
					slidesPerView={1}
					spaceBetween={30}
					className='h-full relative'
					slideClassName=' h-full flex flex-col items-center gap-[16px] cursor-pointer relative'
					imageClassName='w-full h-full min-h-[180px] min-w-[180px] max-h-[310px] object-cover bg-white rounded-[20px]'
					textClassName='w-full'
					favorite={true}
					data={products}
					//break0={1}
					break500={2}
					break768={2}
					break1024={4}
					break1366={4}
					break2560={5}
				/>
			)}
		</section>
	)
}

export default RecomendationSection
