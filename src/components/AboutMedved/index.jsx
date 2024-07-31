export const AboutMedved = () => {
	return <div id='medved' className=" h-[90dvh] relative overflow-hidden z-0 flex items-center px-12">
		<div className='flex w-full gap-y-10 flex-col md:space-x-44 items-center'>
			<div className=' overflow-hidden border-4 border-dashed border-text p-2 rounded-2xl rotate-12'>
				<img src="/src/assets/icons/medved.jpg" className='w-[600px] rounded-2xl' />
			</div>
			<div className=' flex flex-col'>
				<h2 className=' text-2xl font-semibold md:text-7xl'>А это вот такой у меня личный медведь</h2>
				<span className='text-lg md:text-4xl'>Правда толку от него не много, но я все равно его люблю</span>
				<small className='text-sm md:text-2xl'>Ладно, он хотя бы симпатичный</small>
			</div>
		</div>
	</div>
}