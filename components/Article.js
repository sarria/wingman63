import parse from 'html-react-parser';
import Link from 'next/link'
import ImageRatio from './elements/ImageRatio'
import styles from './styles/article.module.scss'

const Article = ({data}) => {
	// console.log('Article ::', data)
	
	return  (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<ImageRatio image={data.image} ratio='55%' />
				</div>
				<div className={styles.right}>
					<div className={styles.headline}>
						{parse(data.headline)}
					</div>
					<div className={styles.text}>
						{parse(data.text)}
					</div>
					<div className={styles.link}>
						<Link href={data.linkPage.slug} passHref>
							{data.linkLabel}
						</Link>
						&nbsp;&nbsp;<gold>></gold>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Article;