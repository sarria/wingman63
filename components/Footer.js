// import Image from 'next/image'
// import Link from 'next/link'
import styles from './styles/footer.module.scss'
// import logo from '../public/PSLogo-footer.png'
// import facebookImg from '../public/facebook.png'
// import twitterImg from '../public/twitter.png'
// import instagramImg from '../public/instagram.png'
// import decorationImg from '../public/decoration-footer.png'

const Footer = ({email, telephone, facebook, twitter, instagram}) => {
	return (
		<footer className={styles.root}>
			<div className={styles.wrapper}>
				FOOTER
			</div>
		</footer>
	)
}

export default Footer;