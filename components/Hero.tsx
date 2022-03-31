import { ReactElement } from 'react';
import Image from 'next/image'
import styles from './styles/hero.module.scss'

function Hero({ title, headerImage }: { title: string, headerImage: {altText: string, sourceUrl: string} }): ReactElement {
	return (
		<div className={styles.root}>
			<div className={styles.background}>
				<div className={styles.left}></div>
				<div className={styles.right}></div>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.center}>
					<div className={styles.headerImage}>
						{headerImage && 
							<Image
								alt={headerImage.altText}
								src={headerImage.sourceUrl}
								layout="fill"
								objectFit="cover"
								objectPosition="bottom center"
							/>
						}
					</div>
					<div className={styles.title}>
						<div className={styles.titleWrapper}>
							{title}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero