import Image from 'next/image'

const ImageRatio = ({image, ratio}) => {
	return (
		<div className='ratio_container'>
			<div className='outer' style={{
				'paddingTop': ratio,
				'height': (ratio ? 'auto' : '300px')
			}}>
				<div className='inner' style={{'height': (ratio ? 'auto' : '300px')}}>
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