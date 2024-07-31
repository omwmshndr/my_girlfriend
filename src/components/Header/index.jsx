import { useState } from 'react'
import './index.css'
export const Header = () => {

	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const burgerClickHandler = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const closeMenu = () => {
		setIsMenuOpen(false)
	}

	return <header className=' flex justify-between px-4 py-6 relative z-2'>
		<div className=' flex items-center space-x-1'>
			<img src="/src/assets/icons/heart.svg" />
			<span className=' text-2xl font-semibold'>My Girlfriend</span>
		</div>
		<button><img src={isMenuOpen ? '/src/assets/icons/close.svg' : '/src/assets/icons/burger.svg'
		} className='block md:hidden' onClick={burgerClickHandler} /></button>
		<nav className={`hidden md:flex space-x-4   `}>
			<a href="#me" className='link'>Про меня</a>
			<a href="#mikki" className='link'>Моя Микки </a>
			<a href="#lyalya" className='link'>Моя ляля</a>
			<a href="#medved" className='link'>Мой медведь</a>
		</nav>
		<nav className={` py-11 absolute bg-main w-[100dvw] -left-0 -bottom-80 items-center space-y-6 flex-col ${isMenuOpen ? 'flex' : 'hidden'} z-40 md:hidden `}>
			<a href="#me" onClick={closeMenu} className='burger-link'>Про меня</a>
			<a href="#mikki" onClick={closeMenu} className='burger-link'>Моя Микки </a>
			<a href="#lyalya" onClick={closeMenu} className='burger-link'>Моя ляля</a>
			<a href="#medved" onClick={closeMenu} className='burger-link'>Мой медведь</a>
		</nav>
	</header>
}