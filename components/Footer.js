import parse from 'html-react-parser';
import Image from 'next/image'
// import Link from 'next/link'
import styles from './styles/footer.module.scss'
import logoicon from '../images/logoicon.svg'
import logo from '../images/logo-inner-71x420.png'
import social from '../images/icons.svg'

// import logo from '../public/PSLogo-footer.png'
// import facebookImg from '../public/facebook.png'
// import twitterImg from '../public/twitter.png'
// import instagramImg from '../public/instagram.png'
// import decorationImg from '../public/decoration-footer.png'

const Footer = ({global}) => {
	console.log("footer global ::", global)
	return (
		<footer className={styles.root}>
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<div className={styles.logo}>
						<Image
							alt=''
							src={logo}
							layout='responsive'
						/>
					</div>
					<div className={styles.social}>
						<Image
							alt=''
							src={social}
							layout='responsive'
						/>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.quote}>
						{parse(global.footerQuote)}
					</div>
					<div className={styles.address}>
						{parse(global.address)}
						<div className={styles.smallLogo}>
							<Image
								alt=''
								src={logoicon}
								layout='responsive'
							/>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;