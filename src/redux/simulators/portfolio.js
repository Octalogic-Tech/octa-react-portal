import faker from "faker";
import mobileapp from "../../assets/images/projects/mobileapp.png";
import webapp from "../../assets/images/projects/webapp.png";

export const simulatedPortfolioData = {
    _id: faker.random.uuid(),
    name: "John Doe",
    media: webapp,
	components: [
		{
			_id: faker.random.uuid(),
			category: "Web",
			name: "Refined Concrete Sausages",
			key: "refined-concrete-sausages",
			media: webapp
		},
		{
			_id: faker.random.uuid(),
			category: "Mobile",
			name: "Unbranded Concrete Hat",
			key: "unbranded-concrete-hat",
			media: mobileapp
		},
		{
			_id: faker.random.uuid(),
			category: "Emerging",
			name: "Sleek Metal Keyboard",
			key: "sleek-metal-keyboard",
			media: webapp
		},
		{
			_id: faker.random.uuid(),
			category: "Mobile",
			name: "Pretty Landing Page",
			key: "pretty-landing-page",
			media: mobileapp
		}
	]
}