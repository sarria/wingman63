import { ReactElement } from 'react';
import Link from 'next/link'
import cx from 'classnames'
import Image from 'next/image'
import Burger from './Burger'
import Logo from '../images/logo-inner-71x420.png'
import styles from './styles/pageTop.module.scss'

function PageTop({ navigation }: { navigation: object }): ReactElement {
	return (
		<div className={cx('pageTop', styles.root)}>
			<div className={styles.wrapper}>
				<div className={styles.logo}>
					<Link href="/" passHref>
						<Image
							alt=''
							src={Logo}
							width={335}
							height={57}
						/>
					</Link>
				</div>
				<div className={styles.burger}>
					<Burger />
				</div>
			</div>
		</div>
	)
}

export default PageTop