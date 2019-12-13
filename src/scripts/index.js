import '../styles/index.scss'
import modernizr from './modernizr'
import LocomotiveScroll from 'locomotive-scroll'

modernizr()

const scroll = new LocomotiveScroll({
	el: document.querySelector('#js-scroll'),
	smooth: true
})

document.addEventListener('DOMContentLoaded', () => {})
