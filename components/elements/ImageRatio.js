import Image from 'next/image'
import cx from 'classnames'
import styles from '../styles/ImageRatio.module.scss'

const ImageRatio = ({image, ratio}) => {
	return (
		<div className={cx('ratio_container', {[styles.large]: !ratio})}>
			<div className='outer' style={{'paddingTop': ratio}}>
				<div className='inner'>
					{image && 
					<Image
						alt={image.altText}
						src={image.sourceUrl}
						layout="fill"
						objectFit="cover"
						objectPosition="top center"
					/>}
				</div>
			</div>
		</div>
	)
}

export default ImageRatio;