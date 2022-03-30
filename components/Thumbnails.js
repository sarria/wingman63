import parse from 'html-react-parser';
import styles from './styles/thumbnails.module.scss'

const Thumbnails = ({data}) => {

	return data?.thumbnails && (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				THUMBNAILS VAN AQUI
			</div>
		</div>
	)
}

export default Thumbnails;