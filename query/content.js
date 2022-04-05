export default function query(slug) {

	return `
		query {
			acfOptionsGlobalOptions {
				global {
				  address
				  footerQuote
				  copyRight
				  email
				  telephone
				  facebook
				  twitter
				  instagram
				  youtube
				  burgerNavigationPicture {
					altText
					sourceUrl
					mediaDetails {
						width
						height
					}
				  }
				  burgerNavigationLeft {
					page {
					  ... on Page {
						slug
						title
					  }
					}
				  }
				  burgerNavigationRightTop {
					page {
					  ... on Page {
						slug
						title
					  }
					}
				  }
				  burgerNavigationRightBottom {
					page {
					  ... on Page {
						slug
						title
					  }
					}
				  }
				}
			}
			content: pages(where: {name: "${slug}"}) {
				edges {
					node {
					slug
					title
					homePage {
						carousel {
						  altText
						  sourceUrl
						  mediaDetails {
							width
							height
						  }
						}
					}					
					content_blocks {
						desktopHeaderImage {
							altText
							sourceUrl
							mediaDetails {
								width
								height
							}
						}
						mobileHeaderImage {
							altText
							sourceUrl
							mediaDetails {
								width
								height
							}
						}
						modules {
							moduleType
							label
							text
							videoUrl
							images {
								image {
									altText
									sourceUrl
									mediaDetails {
										width
										height
									}
								}
							}
							thumbnails {
								image {
									altText
									sourceUrl
									mediaDetails {
										width
										height
									}
								}
								description
							}
							bios {
								photo {
									altText
									sourceUrl
									mediaDetails {
										width
										height
									}
								}
								name
								bio
							}
							image {
								altText
								sourceUrl
								mediaDetails {
								  width
								  height
								}
							  }
							  headline
							  linkLabel
							  linkPage {
								... on Page {
								  slug
								  title
								}
							}
						}
					}
					seo {
						title
						metaDesc
						metaKeywords
					}
					}
				}
			}
		}
	`.replace(/\s\s+/g, ' ');
}
