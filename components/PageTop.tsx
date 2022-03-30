import { ReactElement } from 'react';
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
					<Image
						alt=''
						src={Logo}
						width={420}
						height={71}
					/>
				</div>
				<div className={styles.burger}>
					<Burger />
				</div>
			</div>
		</div>
	)
}

export default PageTop