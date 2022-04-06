import cx from 'classnames'
import styles from './styles/images.module.scss'
import ImageCard from './imageCard'

const Images = ({data}) => {
	console.log('Images data ::', data)
	const {prevModuleType, imagesLayout, imagePadding, images} = data;
	const hasPadding = imagePadding ? 'padding' : '';
	// console.log('Images ::', imagesLayout, images, data)

	return (
		<>
			{imagesLayout === '23_13' && <div className={cx(styles.root, styles['layout_' + imagesLayout], {[styles.paddingTop]: prevModuleType!=='images'})}>
				{images.length === 3 &&<div className={styles.wrapper}>
					{images[0]?.image && <div className={cx(styles.image1)}>
						<ImageCard image={images[0]} hasPadding={hasPadding} ratio='75.4%' />
					</div>}
					{(images[1]?.image || images[2]?.image) &&
					<div className={styles.image23}>
						{images[1]?.image && <div className={cx(styles.image2)}>
							<ImageCard image={images[1]} hasPadding={hasPadding} ratio='70%' />
						</div>}
						{images[2]?.image && <div className={cx(styles.image3)}>
							<ImageCard image={images[2]} hasPadding={hasPadding} ratio='70%' />
						</div>}
					</div>}
				</div>}
				{images.length === 2 &&<div className={styles.wrapper}>
					{images[0]?.image && <div className={cx(styles.image1)}>
						<ImageCard image={images[0]} hasPadding={hasPadding} ratio='75.4%' />
					</div>}
					{(images[1]?.image || images[2]?.image) &&
					<div className={styles.image23}>
						{images[1]?.image && <div className={cx(styles.image2)}>
							<ImageCard image={images[1]} hasPadding={hasPadding} ratio='140%' />
						</div>}
					</div>}
				</div>}
			</div>}
			{imagesLayout === '13_23' && <div className={cx(styles.root, styles['layout_' + imagesLayout])}>
				{images.length === 3 &&
				<div className={styles.wrapper}>
					{(images[1]?.image || images[2]?.image) &&
					<div className={styles.image23}>
						{images[0]?.image && <div className={cx(styles.image2)}>
							<ImageCard image={images[0]} hasPadding={hasPadding} ratio='70%' />
						</div>}
						{images[1]?.image && <div className={cx(styles.image3)}>
							<ImageCard image={images[1]} hasPadding={hasPadding} ratio='70%' />
						</div>}
					</div>}					
					{images[2]?.image && <div className={cx(styles.image1)}>
						<ImageCard image={images[2]} hasPadding={hasPadding} ratio='75.4%' />
					</div>}
				</div>}
				{images.length === 2 &&
				<div className={styles.wrapper}>
					{(images[1]?.image || images[2]?.image) &&
					<div className={styles.image23}>
						{images[0]?.image && <div className={cx(styles.image2)}>
							<ImageCard image={images[0]} hasPadding={hasPadding} ratio='130%' />
						</div>}
					</div>}					
					{images[1]?.image && <div className={cx(styles.image1)}>
						<ImageCard image={images[1]} hasPadding={hasPadding} ratio='70%' />
					</div>}
				</div>}
			</div>}
			{imagesLayout === '13' && <div className={cx(styles.root, styles['layout_' + imagesLayout])}>
				<div className={styles.wrapper}>
					{images[0]?.image && <div className={cx(styles.image1)}>
						<ImageCard image={images[0]} hasPadding={hasPadding} ratio='70%' />
					</div>}
					{images[1]?.image && <div className={cx(styles.image2)}>
						<ImageCard image={images[1]} hasPadding={hasPadding} ratio='75.3%' />
					</div>}
					{images[2]?.image && <div className={cx(styles.image3)}>
						<ImageCard image={images[2]} hasPadding={hasPadding} ratio='75.3%' />
					</div>}
				</div>
			</div>}
		</>
	)

}

export default Images;