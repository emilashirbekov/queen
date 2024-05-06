import {
  useAppDispatch,
  useAppSelector,
} from '@/app/providers/StoreProvider/config/hooks';
import { useEffect } from 'react';
import Slider from '../MainComponents/Slider';
import { recomendationSelector } from '@/entities/Collection/model/selectors/getRecomendationSelector/getRecomendationSelector'
import { fetchRecomendation } from '@/entities/Collection/model/services/fetchRecomendation'

const RecomendationSection = () => {
	const dispatch = useAppDispatch();
	const products = useAppSelector(recomendationSelector);

	useEffect(() => {
		dispatch(fetchRecomendation());
	}, [dispatch]);

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
					slideClassName='h-full flex flex-col items-center gap-[16px] cursor-pointer relative'
					imageClassName='min-h-[180px] min-w-[180px] max-h-[302px] max-w-[302px] h-[180px] w-[180px] md:w-[302px] md:h-[302px] object-cover bg-white rounded-[20px]'
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
	);
};

export default RecomendationSection;
