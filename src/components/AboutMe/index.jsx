import { Waves } from '../../layouts/Waves'


export const AboutMe = () => {
	return (
		<div id='me' className=' flex items-center px-12 relative bg-secondary h-[100dvh]'>
			<Waves>
				<div className='flex w-full gap-y-10 flex-col-reverse md:space-x-44 items-center'>
					<div className=' flex flex-col'>
						<h2 className=' text-2xl font-semibold md:text-7xl'>Всем привет, я Машка</h2>
						<span className='text-lg md:text-4xl'>Любимая зая<br /> Лучшая хозяйка<br /> И отличный водитель</span>
						<small className='text-sm md:text-2xl'>А еще кому угодно развалю кабину на Лойке</small>
					</div>
					<div className=' overflow-hidden border-4 border-dashed border-text p-2 rounded-2xl -rotate-12'>
						<img src="/src/assets/icons/mashka.jpg" className='w-[400px] rounded-2xl' />
					</div>
				</div>
			</Waves>
		</div>)
}



