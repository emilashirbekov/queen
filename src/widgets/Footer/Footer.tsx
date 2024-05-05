import { useGetCategoriesQuery } from '@/features/Categories/ui/model/services/categoriesAPI'
import {
	EnvelopeSimple,
	InstagramLogo,
	PhoneCall,
	TelegramLogo,
	WhatsappLogo,
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import logo from '../../../public/Icons/logo.svg'
import './footer.module.css'

const Footer = () => {
	const { data: category } = useGetCategoriesQuery()

	return (
		<footer className='max-h-[570px] mt-24 mb-24 bg-tertiary-800 text-primary p-10'>
			<div className='max-w-[1200px] sm:pb-40 pb-7 border-b-2 border-primary-800 mx-auto flex flex-col sm:flex-row justify-between font-montserrat text-base font-medium leading-4 tracking-normal'>
				<div>
					<a href='/'>
						<img src={logo} alt='Логотип Queen' />
					</a>
				</div>
				<div className='max-w-[213px] h-[114px] flex flex-col gap-4 sm:mt-0 mt-8'>
					<div className='flex items-center'>
						<PhoneCall size={24} />
						<a href='tel:+996123123' className='ml-3'>
							+996 502 435 363
						</a>
					</div>
					<div className='flex items-center'>
						<EnvelopeSimple size={24} />
						<a href='mailto:shop.queen.kg@gmail.com' className='ml-3'>
							shop.queen.kg@gmail.com
						</a>
					</div>
				</div>
				<nav className='hidden md:block'>
					<ul>
						<li className='mb-2'>
							<Link to='/about'>О нас</Link>
						</li>
						<li className='mb-2'>
							<Link to='/delivery'>Доставка</Link>
						</li>
						<li className='mb-2'>
							<Link to='/paymentMethod'>Оплата</Link>
						</li>
						<li className='mb-2'>
							<Link to='/catalog/all'>Каталог</Link>
						</li>
					</ul>
				</nav>
				<nav className='hidden md:block'>
					<ul>
						{category?.results.slice(0, 4).map(el => (
							<li className='mb-2' key={el.id}>
								<Link to={`catalog/${el.title}`}>{el.title}</Link>
							</li>
						))}
					</ul>
				</nav>
				<div className='w-[139px] flex flex-col justify-start sm:mt-0 mt-6'>
					<p className='font-montserrat font-medium leading-4 tracking-normal'>
						Социальные сети
					</p>
					<div className='w-[139px] flex justify-around mt-6'>
						<a href='https://wa.me/502435363<'>
							<WhatsappLogo size={24} />
						</a>
						<a href='https://www.instagram.com/queenstore.bish?igsh=MWtodnlpZnF4Zzg3eQ=='>
							<InstagramLogo size={24} />
						</a>
						<a href='https://t.me/meemeemum'>
							<TelegramLogo size={24} />
						</a>
					</div>
				</div>
			</div>
			<div className='max-w-[1200px] mx-auto sm:pt-12 pt-5 text-primaryDark flex justify-center'>
				<p className='sm:w-[360px] font-montserrat text-primaryDark font-medium leading-4 text-center'>
					© 2024 ООО &ldquo; Queen &ldquo; | Все права <br /> защищены
				</p>
			</div>
		</footer>
	)
}

export default Footer
