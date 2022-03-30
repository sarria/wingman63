export default function query(slug) {

	return `
		query {
			acfOptionsGlobalOptions {
				global {
				  email
				  telephone
				  facebook
				  twitter
				  instagram
				  burgerNavigationPicture {
					altText
					sourceUrl
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
					content_blocks {
						headerImage {
						altText
						sourceUrl
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
							}
						}
						thumbnails {
							image {
							altText
							sourceUrl
							}
							description
						}
						bios {
							photo {
							altText
							sourceUrl
							}
							bio
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
