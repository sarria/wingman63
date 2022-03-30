import Image from 'next/image'
import Link from 'next/link'
import cx from 'classnames'
import styles from './styles/navigation.module.scss'
import { useRouter } from "next/router";

	
const handleClick = () => {
	document.getElementById('toggle').checked = false;
}

const PrintNavigation = (items) => {

	const router = useRouter();
	console.log("router.asPath ::", router.asPath)
	return (
		<>
			{items.map((item) => (
				<div key={item.page.slug} className={cx(styles.item, {[styles.active]: router.asPath === "/" + item.page.slug})}>
					<Link href={"/" + (item.page.slug === 'home-page' ? '' : item.page.slug)} >
						<a onClick={handleClick}>{item.page.title}</a>
					</Link>
				</div>
			))}
		</>
	)
}

const Navigation = ({navigationPicture, navigationLeft, navigationRightTop, navigationRightBottom}) => {
	return (
		<>
			<input id="toggle" type="checkbox"></input>
			<div className={cx('navigation', styles.root)}>
				<div className={styles.wrapper}>
					<div className={styles.content}>
						<div className={styles.navigation}>
							<div className={cx(styles.items, styles.left)}>
								{PrintNavigation(navigationLeft)}
							</div>
							<div className={styles.right}>
								<div className={cx(styles.items, styles.top)}>
									{PrintNavigation(navigationRightTop)}
								</div>
								<div className={cx(styles.items, styles.bottom)}>
									{PrintNavigation(navigationRightBottom)}
								</div>
							</div>
						</div>
						<div className={styles.picture}>
							{navigationPicture && 
							<Image
								alt={navigationPicture.altText}
								src={navigationPicture.sourceUrl}
								width={1070}
								height={624}
							/>}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navigation;