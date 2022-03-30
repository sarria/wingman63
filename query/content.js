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
