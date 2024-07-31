import { Waves } from '../../layouts/Waves'

export const AboutCar = () => {
	return <div id='lyalya' className=' flex items-center px-12 relative bg-secondary h-[90dvh]'>
		<Waves>
			<div className='flex w-full gap-y-10 flex-col-reverse md:space-x-44 items-center'>
				<div className=' flex flex-col'>
					<h2 className=' text-2xl font-semibold md:text-7xl'>А еще у меня есть Ляля</h2>
					<span className='text-lg md:text-4xl'>Очень люблю делать на ней врум-врум</span>
					<small className='text-sm md:text-2xl'>Правда один раз она заболела и я очень за нее переживала :(</small>
				</div>
				<div className=' overflow-hidden border-4 border-dashed border-text p-2 rounded-2xl -rotate-12'>
					<img src="https://raw.githubusercontent.com/omwmshndr/my_girlfriend/ef2b18df2861266b1ed791e9b46dc571afd4ab55/src/assets/icons/lyalya.jpg" className='w-[400px] rounded-2xl' />
				</div>
			</div>
		</Waves>
	</div>
}