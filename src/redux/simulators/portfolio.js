import faker from "faker";
import mobileapp from "../../assets/images/projects/mobileapp.png";
import webapp from "../../assets/images/projects/webapp.png";

export const simulatedPortfolioData = {
	payload: {
		id: faker.random.uuid(),
		title: "John Doe",
		media: webapp,
		code: "yXbXwlBxfp",
		description:faker.lorem.sentences(2),
		components: [
			{
				id: faker.random.uuid(),
				name: "Refined Concrete Sausages",
				summary: faker.lorem.sentences(2),
				description: faker.lorem.sentences(5),
				category: {
					id: "31765c4c-2606-4e1b-a613-7866212a86b6",
					name: "Web Development",
					icon: {
						type: "mdi",
						name: "clock"
					},
					createdAt: "2019-10-13T07:47:09.376Z",
					updatedAt: "2019-10-13T07:47:09.376Z"
				},
				
				cover: {
					link: webapp
				},
				logo: {
					link:
						"https://storage.googleapis.com/octalogic/public/images/e140073a-092e-48dd-8159-c0a67b617894"
				},
				project: {
					id: "31765c4c-2606-4e1b-a613-7866212a86b6",
					name: "Order For Me",
					cover: {
						link:
							"https://storage.googleapis.com/octalogic/public/images/e140073a-092e-48dd-8159-c0a67b617894"
					},
					logo: {
						link:
							"https://storage.googleapis.com/octalogic/public/images/e140073a-092e-48dd-8159-c0a67b617894"
					},
					gallery: [
						{
							id: "31765c4c-2606-4e1b-a613-7866212a86b6",
							name: "Mobile",
							description:
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
							link:
								"https://storage.googleapis.com/octalogic/public/images/e140073a-092e-48dd-8159-c0a67b617894"
						}
					],
					client: {
						id: "31765c4c-2606-4e1b-a613-7866212a86b6",
						name: "John Doe",
						address: "India",
						createdAt: "2019-10-13T07:47:09.376Z",
						updatedAt: "2019-10-13T07:47:09.376Z"
					},
					startDate: "2019-10-13T07:47:09.376Z",
					endDate: "2019-10-13T07:47:09.376Z",
					cost: 150000,
					currency: "$",
					createdAt: "2019-10-13T07:47:09.376Z",
					updatedAt: "2019-10-13T07:47:09.376Z"
				},
				technology: [
					{
						id: "31765c4c-2606-4e1b-a613-7866212a86b6",
						name: "Node JS",
						icon: {
							type: "mdi",
							name: "clock"
						},
						category: {
							id: "31765c4c-2606-4e1b-a613-7866212a86b6",
							name: "Web Development",
							icon: {
								type: "mdi",
								name: "clock"
							},
							createdAt: "2019-10-13T07:47:09.376Z",
							updatedAt: "2019-10-13T07:47:09.376Z"
						},
						createdAt: "2019-10-13T07:47:09.376Z",
						updatedAt: "2019-10-13T07:47:09.376Z"
					}
				],
				links: [
					{
						type: "blog",
						url: "https://google.com",
						text: "Google"
					}
				],
			},
			{
				id: faker.random.uuid(),
				name: "Unbranded Concrete Hat",
				summary: faker.lorem.sentences(2),
				description: faker.lorem.sentences(5),
				category: {
					id: "31765c4c-2606-4e1b-a613-7866212a86b6",
					name: "Mobile Development",
					icon: {
						type: "mdi",
						name: "clock"
					},
					createdAt: "2019-10-13T07:47:09.376Z",
					updatedAt: "2019-10-13T07:47:09.376Z"
				},
				cover: {
					link: mobileapp
				},
				logo: {
					link:
						"https://storage.googleapis.com/octalogic/public/images/e140073a-092e-48dd-8159-c0a67b617894"
				},
				project: {
					id: "31765c4c-2606-4e1b-a613-7866212a86b6",
					name: "Order For Me",
					cover: {
						link:
							"https://storage.googleapis.com/octalogic/public/images/e140073a-092e-48dd-8159-c0a67b617894"
					},
					logo: {
						link:
							"https://storage.googleapis.com/octalogic/public/images/e140073a-092e-48dd-8159-c0a67b617894"
					},
					gallery: [
						{
							id: "31765c4c-2606-4e1b-a613-7866212a86b6",
							name: "Mobile",
							description:
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
							link:
								"https://storage.googleapis.com/octalogic/public/images/e140073a-092e-48dd-8159-c0a67b617894"
						}
					],
					client: {
						id: "31765c4c-2606-4e1b-a613-7866212a86b6",
						name: "John Doe",
						address: "India",
						createdAt: "2019-10-13T07:47:09.376Z",
						updatedAt: "2019-10-13T07:47:09.376Z"
					},
					startDate: "2019-10-13T07:47:09.376Z",
					endDate: "2019-10-13T07:47:09.376Z",
					cost: 150000,
					currency: "$",
					createdAt: "2019-10-13T07:47:09.376Z",
					updatedAt: "2019-10-13T07:47:09.376Z"
				},
				technology: [
					{
						id: "31765c4c-2606-4e1b-a613-7866212a86b6",
						name: "Node JS",
						icon: {
							type: "mdi",
							name: "clock"
						},
						category: {
							id: "31765c4c-2606-4e1b-a613-7866212a86b6",
							name: "Web Development",
							icon: {
								type: "mdi",
								name: "clock"
							},
							createdAt: "2019-10-13T07:47:09.376Z",
							updatedAt: "2019-10-13T07:47:09.376Z"
						},
						createdAt: "2019-10-13T07:47:09.376Z",
						updatedAt: "2019-10-13T07:47:09.376Z"
					}
				],
				links: [
					{
						type: "blog",
						url: "https://google.com",
						text: "Google"
					}
				],
			},
			{
				id: faker.random.uuid(),
				name: "Sleek Metal Keyboard",
				summary: faker.lorem.sentences(2),
				description: faker.lorem.sentences(5),
				category: {
					id: "31765c4c-2606-4e1b-a613-7866212a86b6",
					name: "Emerging Tech",
					icon: {
						type: "mdi",
						name: "clock"
					},
					createdAt: "2019-10-13T07:47:09.376Z",
					updatedAt: "2019-10-13T07:47:09.376Z"
				},
				
				cover: {
					link: webapp
				},
				logo: {
					link:
						"https://storage.googleapis.com/octalogic/public/images/e140073a-092e-48dd-8159-c0a67b617894"
				},
				project: {
					id: "31765c4c-2606-4e1b-a613-7866212a86b6",
					name: "Order For Me",
					cover: {
						link:
							"https://storage.googleapis.com/octalogic/public/images/e140073a-092e-48dd-8159-c0a67b617894"
					},
					logo: {
						link:
							"https://storage.googleapis.com/octalogic/public/images/e140073a-092e-48dd-8159-c0a67b617894"
					},
					gallery: [
						{
							id: "31765c4c-2606-4e1b-a613-7866212a86b6",
							name: "Mobile",
							description:
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
							link:
								"https://storage.googleapis.com/octalogic/public/images/e140073a-092e-48dd-8159-c0a67b617894"
						}
					],
					client: {
						id: "31765c4c-2606-4e1b-a613-7866212a86b6",
						name: "John Doe",
						address: "India",
						createdAt: "2019-10-13T07:47:09.376Z",
						updatedAt: "2019-10-13T07:47:09.376Z"
					},
					startDate: "2019-10-13T07:47:09.376Z",
					endDate: "2019-10-13T07:47:09.376Z",
					cost: 150000,
					currency: "$",
					createdAt: "2019-10-13T07:47:09.376Z",
					updatedAt: "2019-10-13T07:47:09.376Z"
				},
				technology: [
					{
						id: "31765c4c-2606-4e1b-a613-7866212a86b6",
						name: "Node JS",
						icon: {
							type: "mdi",
							name: "clock"
						},
						category: {
							id: "31765c4c-2606-4e1b-a613-7866212a86b6",
							name: "Web Development",
							icon: {
								type: "mdi",
								name: "clock"
							},
							createdAt: "2019-10-13T07:47:09.376Z",
							updatedAt: "2019-10-13T07:47:09.376Z"
						},
						createdAt: "2019-10-13T07:47:09.376Z",
						updatedAt: "2019-10-13T07:47:09.376Z"
					}
				],
				links: [
					{
						type: "blog",
						url: "https://google.com",
						text: "Google"
					}
				],
			},
			{
				id: faker.random.uuid(),
				name: "Pretty Landing Page",
				summary: faker.lorem.sentences(2),
				description: faker.lorem.sentences(5),
				category: {
					id: "31765c4c-2606-4e1b-a613-7866212a86b6",
					name: "Mobile Development",
					icon: {
						type: "mdi",
						name: "clock"
					},
					createdAt: "2019-10-13T07:47:09.376Z",
					updatedAt: "2019-10-13T07:47:09.376Z"
				},
				cover: {
					link: mobileapp
				},
				logo: {
					link:
						"https://storage.googleapis.com/octalogic/public/images/e140073a-092e-48dd-8159-c0a67b617894"
				},
				project: {
					id: "31765c4c-2606-4e1b-a613-7866212a86b6",
					name: "Order For Me",
					cover: {
						link:
							"https://storage.googleapis.com/octalogic/public/images/e140073a-092e-48dd-8159-c0a67b617894"
					},
					logo: {
						link:
							"https://storage.googleapis.com/octalogic/public/images/e140073a-092e-48dd-8159-c0a67b617894"
					},
					gallery: [
						{
							id: "31765c4c-2606-4e1b-a613-7866212a86b6",
							name: "Mobile",
							description:
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
							link:
								"https://storage.googleapis.com/octalogic/public/images/e140073a-092e-48dd-8159-c0a67b617894"
						}
					],
					client: {
						id: "31765c4c-2606-4e1b-a613-7866212a86b6",
						name: "John Doe",
						address: "India",
						createdAt: "2019-10-13T07:47:09.376Z",
						updatedAt: "2019-10-13T07:47:09.376Z"
					},
					startDate: "2019-10-13T07:47:09.376Z",
					endDate: "2019-10-13T07:47:09.376Z",
					cost: 150000,
					currency: "$",
					createdAt: "2019-10-13T07:47:09.376Z",
					updatedAt: "2019-10-13T07:47:09.376Z"
				},
				technology: [
					{
						id: "31765c4c-2606-4e1b-a613-7866212a86b6",
						name: "Node JS",
						icon: {
							type: "mdi",
							name: "clock"
						},
						category: {
							id: "31765c4c-2606-4e1b-a613-7866212a86b6",
							name: "Web Development",
							icon: {
								type: "mdi",
								name: "clock"
							},
							createdAt: "2019-10-13T07:47:09.376Z",
							updatedAt: "2019-10-13T07:47:09.376Z"
						},
						createdAt: "2019-10-13T07:47:09.376Z",
						updatedAt: "2019-10-13T07:47:09.376Z"
					}
				],
				links: [
					{
						type: "blog",
						url: "https://google.com",
						text: "Google"
					}
				],
			}
		],
		createdAt: "2019-10-13T07:47:09.376Z",
		updatedAt: "2019-10-13T07:47:09.376Z"
	}
};

export const backendSimulated = {
	payload: {
		id: "31765c4c-2606-4e1b-a613-7866212a86b6",
		title: "Mobile Portfolio",
		code: "yXbXwlBxfp",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		components: [
			{
				id: "31765c4c-2606-4e1b-a613-7866212a86b6",
				name: "Mobile Component",
				summary:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				cover: {
					link:
						"https://storage.googleapis.com/octalogic/public/images/e140073a-092e-48dd-8159-c0a67b617894"
				},
				logo: {
					link:
						"https://storage.googleapis.com/octalogic/public/images/e140073a-092e-48dd-8159-c0a67b617894"
				},
				category: {
					id: "31765c4c-2606-4e1b-a613-7866212a86b6",
					name: "Web Development",
					icon: {
						type: "mdi",
						name: "clock"
					},
					createdAt: "2019-10-13T07:47:09.376Z",
					updatedAt: "2019-10-13T07:47:09.376Z"
				},
				project: {
					id: "31765c4c-2606-4e1b-a613-7866212a86b6",
					name: "Order For Me",
					cover: {
						link:
							"https://storage.googleapis.com/octalogic/public/images/e140073a-092e-48dd-8159-c0a67b617894"
					},
					logo: {
						link:
							"https://storage.googleapis.com/octalogic/public/images/e140073a-092e-48dd-8159-c0a67b617894"
					},
					gallery: [
						{
							id: "31765c4c-2606-4e1b-a613-7866212a86b6",
							name: "Mobile",
							description:
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
							link:
								"https://storage.googleapis.com/octalogic/public/images/e140073a-092e-48dd-8159-c0a67b617894"
						}
					],
					client: {
						id: "31765c4c-2606-4e1b-a613-7866212a86b6",
						name: "John Doe",
						address: "India",
						createdAt: "2019-10-13T07:47:09.376Z",
						updatedAt: "2019-10-13T07:47:09.376Z"
					},
					startDate: "2019-10-13T07:47:09.376Z",
					endDate: "2019-10-13T07:47:09.376Z",
					cost: 150000,
					currency: "$",
					createdAt: "2019-10-13T07:47:09.376Z",
					updatedAt: "2019-10-13T07:47:09.376Z"
				},
				technology: [
					{
						id: "31765c4c-2606-4e1b-a613-7866212a86b6",
						name: "Node JS",
						icon: {
							type: "mdi",
							name: "clock"
						},
						category: {
							id: "31765c4c-2606-4e1b-a613-7866212a86b6",
							name: "Web Development",
							icon: {
								type: "mdi",
								name: "clock"
							},
							createdAt: "2019-10-13T07:47:09.376Z",
							updatedAt: "2019-10-13T07:47:09.376Z"
						},
						createdAt: "2019-10-13T07:47:09.376Z",
						updatedAt: "2019-10-13T07:47:09.376Z"
					}
				],
				links: [
					{
						type: "blog",
						url: "https://google.com",
						text: "Google"
					}
				],
				createdAt: "2019-10-13T07:47:09.376Z",
				updatedAt: "2019-10-13T07:47:09.376Z"
			},
			{
				id: "31765c4c-2606-4e1b-a613-7866212a86b6",
				name: "Mobile Component",
				summary:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				cover: {
					link:
						"https://storage.googleapis.com/octalogic/public/images/e140073a-092e-48dd-8159-c0a67b617894"
				},
				logo: {
					link:
						"https://storage.googleapis.com/octalogic/public/images/e140073a-092e-48dd-8159-c0a67b617894"
				},
				category: {
					id: "31765c4c-2606-4e1b-a613-7866212a86b6",
					name: "Web Development",
					icon: {
						type: "mdi",
						name: "clock"
					},
					createdAt: "2019-10-13T07:47:09.376Z",
					updatedAt: "2019-10-13T07:47:09.376Z"
				},
				project: {
					id: "31765c4c-2606-4e1b-a613-7866212a86b6",
					name: "Order For Me",
					cover: {
						link:
							"https://storage.googleapis.com/octalogic/public/images/e140073a-092e-48dd-8159-c0a67b617894"
					},
					logo: {
						link:
							"https://storage.googleapis.com/octalogic/public/images/e140073a-092e-48dd-8159-c0a67b617894"
					},
					gallery: [
						{
							id: "31765c4c-2606-4e1b-a613-7866212a86b6",
							name: "Mobile",
							description:
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
							link:
								"https://storage.googleapis.com/octalogic/public/images/e140073a-092e-48dd-8159-c0a67b617894"
						}
					],
					client: {
						id: "31765c4c-2606-4e1b-a613-7866212a86b6",
						name: "John Doe",
						address: "India",
						createdAt: "2019-10-13T07:47:09.376Z",
						updatedAt: "2019-10-13T07:47:09.376Z"
					},
					startDate: "2019-10-13T07:47:09.376Z",
					endDate: "2019-10-13T07:47:09.376Z",
					cost: 150000,
					currency: "$",
					createdAt: "2019-10-13T07:47:09.376Z",
					updatedAt: "2019-10-13T07:47:09.376Z"
				},
				technology: [
					{
						id: "31765c4c-2606-4e1b-a613-7866212a86b6",
						name: "Node JS",
						icon: {
							type: "mdi",
							name: "clock"
						},
						category: {
							id: "31765c4c-2606-4e1b-a613-7866212a86b6",
							name: "Web Development",
							icon: {
								type: "mdi",
								name: "clock"
							},
							createdAt: "2019-10-13T07:47:09.376Z",
							updatedAt: "2019-10-13T07:47:09.376Z"
						},
						createdAt: "2019-10-13T07:47:09.376Z",
						updatedAt: "2019-10-13T07:47:09.376Z"
					}
				],
				links: [
					{
						type: "blog",
						url: "https://google.com",
						text: "Google"
					}
				],
				createdAt: "2019-10-13T07:47:09.376Z",
				updatedAt: "2019-10-13T07:47:09.376Z"
			}
		],
		createdAt: "2019-10-13T07:47:09.376Z",
		updatedAt: "2019-10-13T07:47:09.376Z"
	}
};
