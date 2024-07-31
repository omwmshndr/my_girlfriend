export const AboutMikky = () => {
	return <div id='mikki' className=" h-[90dvh] relative overflow-hidden z-0 flex items-center px-12">

		<div className='flex w-full gap-y-10 flex-col md:space-x-44 items-center'>
			<div className=' overflow-hidden border-4 border-dashed border-text p-2 rounded-2xl rotate-12'>
				<img src="https://raw.githubusercontent.com/omwmshndr/my_girlfriend/ef2b18df2861266b1ed791e9b46dc571afd4ab55/src/assets/icons/mikki.jpg" className='w-[400px] rounded-2xl' />
			</div>
			<div className=' flex flex-col'>
				<h2 className=' text-2xl font-semibold md:text-7xl'>А это моя киця - Микки</h2>
				<span className='text-lg md:text-4xl'>Она любит кушать, спать и делать тыгыдык</span>
				<small className='text-sm md:text-2xl'>Я ее очень люблю и она меня кстати тоже</small>
			</div>

		</div>

	</div>
}