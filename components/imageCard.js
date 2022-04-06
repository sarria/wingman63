import parse from 'html-react-parser';
import cx from 'classnames'
import Link from 'next/link'
import ImageRatio from './elements/ImageRatio'
import styles from './styles/imageCard.module.scss'

const ImageCard = ({image, ratio, hasPadding}) => {
	// console.log('imageCard :: ', image, ratio)
	const hasLink = image.linkPage?.slug ? 'hasLink' : ''
	const label = image.linkLabel || image.linkPage?.title
	// console.log('link ', image.linkPage?.slug || '/')
	return (
		<Link href={image.linkPage?.slug || '/'} passHref>
		<div className={cx(styles.root)}>
			<div className={cx(styles.wrapper, styles[hasPadding], styles[hasLink], hasLink)}>
				<div className={cx(styles.image)}>
					<ImageRatio image={image.image} ratio={ratio} />
				</div>
				{hasLink != '' && 
				<div className={styles.link}>
					{label.toUpperCase()}&nbsp;&nbsp;<gold>&gt;</gold>
				</div>}
			</div>
		</div>	
		</Link>
	)
}

export default ImageCard;