import parse from 'html-react-parser';
import Link from 'next/link'
import styles from './styles/article.module.scss'

const Article = ({data}) => {
	console.log('Article ::', data)
	
	return  (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<div className='left'>
					image here
				</div>
				<div className='right'>
					<div className='headline'>
						{parse(data(headline))}
					</div>
					<div className='text'>
						{parse(data(text))}
					</div>
					<div className='link'>
						<Link href={data.linkPage.slug}>{data.linkLabel}</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Article;