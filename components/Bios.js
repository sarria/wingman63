import parse from 'html-react-parser';
import styles from './styles/bios.module.scss'
import ImageRatio from './elements/ImageRatio'

const Bios = ({data}) => {
	// console.log('data ::', data)
	return data?.bios &&  (
		<div className={styles.root}>
			<div className={styles.wrapper}>
			{data.bios.map((item, idx) => (
				<div key={idx} className={styles.item}>
					<div className={styles.content}>
						<div className={styles.name}>
							<h2>{item.name}</h2>
						</div>
					</div>
					<div className={styles.content}>
						<div className={styles.photo}>
							<div className={styles.imageRatio}>
								<ImageRatio image={item.photo} ratio='80%' />
							</div>
						</div>
						<div className={styles.bio}>
							<div className={styles.text}>
								{parse(item.bio)}
							</div>
						</div>
					</div>
				</div>	
			))}
			</div>
		</div>
	)
}

export default Bios;