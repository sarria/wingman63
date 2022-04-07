import parse from 'html-react-parser';
import cx from 'classnames'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './styles/imageSlider.module.scss'
import Image from 'next/image'
import arrowLeft from '../images/arrow-left.png'
import arrowRight from '../images/arrow-right.png'

const ImageSlider = ({data}) => {
	const {linkPage, slider} = data;
	// console.log('ImageSlider ::', linkPage, slider);

	const settings = {
		autoplay: true,
		dots: false,
		infinite: true,
		speed: 500,
		slidesPerRow: 3,
		className: styles.imageSliderWrapper,
		prevArrow: <Arrow direction='left' />,
		nextArrow: <Arrow direction='right' />
	};

	return (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<Slider {...settings}>
				{slider && slider.map((image, idx) => (
					<div key={idx} className={styles.image}>
						<Image
							alt={image.altText}
							src={image.sourceUrl}
							layout='fill'
							objectFit='cover'
							
						/>
					</div>
				))}
				</Slider>
			</div>
		</div>
	)
}

export default ImageSlider;

function Arrow(props) {
	const { className, onClick, direction } = props;
	return (
	  <div
		className={cx(className, styles.arrow, styles[direction])}
		onClick={onClick}
	  >
		  <div className=''>
		  		<Image
					alt=''
					src={direction==='left' ? arrowLeft : arrowRight}
					width={21}
					height={40}
				/>
		  </div>
	  </div>
	);
}