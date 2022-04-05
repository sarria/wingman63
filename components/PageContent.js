import Header from './Header'
import Footer from './Footer'
import Logo from './Logo'
import Navigation from './Navigation'
import Hero from './Hero'
import Text from './Text'
import Label from './Label'
import Video from './Video'
import Thumbnails from './Thumbnails'
import Bios from './Bios'
import Carousel from './Carousel'
import Burger from './Burger'
import Article from './Article'

function PageContent({page, global}) {
	// console.log("page ::", page)

	const isHomePage = page.slug === 'home-page';

	return page ? (
		<>
			<Header seo={page.seo} />

			<Navigation
				navigationPicture={global.burgerNavigationPicture}
				navigationLeft={global.burgerNavigationLeft}
				navigationRightTop={global.burgerNavigationRightTop}
				navigationRightBottom={global.burgerNavigationRightBottom}
			/>
			<Logo isHomePage={isHomePage} />
			<Burger />
			{isHomePage  && <Carousel carousel={page.homePage.carousel} />}
			{!isHomePage && <Hero title={page.title} mobileHeaderImage={page.content_blocks.mobileHeaderImage} desktopHeaderImage={page.content_blocks.desktopHeaderImage} />}
			
			{page.content_blocks.modules && page.content_blocks.modules.map((module, idx) => {
				let ele = <>{module.moduleType}</>
				
				switch(module.moduleType) {
					case 'text':
						ele = <Text data={module} />
						break;
					case 'label':
						ele = <Label data={module} />
						break;
					case 'video':
						ele = <Video data={module} />
						break;
					case 'thumbnails':
						ele = <Thumbnails data={module} />
						break;
					case 'bios':
						ele = <Bios data={module} />
						break;
					case 'article':
						ele = <Article data={module} />
						break;
					default:
						// code block
				}
				
				return (
					<div key={idx}>
						{ele}
					</div>
				)
			})}

			<Footer 
				global={global} 
			/>
		</>		
	) : <></>
}

export default PageContent