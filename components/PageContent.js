import Header from './Header'
import Footer from './Footer'
import PageTop from './PageTop'
import Navigation from './Navigation'
import Hero from './Hero.tsx'
import Text from './Text'
import Label from './Label'
import Video from './Video'
import Thumbnails from './Thumbnails'
import Bios from './Bios'

function PageContent({page, global}) {
	// console.log("global ::", global)
	return page ? (
		<>
			<Header seo={page.seo} />

			{/* {page.slug !== 'home-page' &&  */}
				<>
					<Navigation 
						navigationPicture={global.burgerNavigationPicture}
						navigationLeft={global.burgerNavigationLeft}
						navigationRightTop={global.burgerNavigationRightTop}
						navigationRightBottom={global.burgerNavigationRightBottom}
					/>
					<PageTop />					
					<Hero title={page.title} headerImage={page.content_blocks.headerImage} />
				</>
			{/* } */}

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