import { card, layout } from "../styles";

const About = () => {
	return (
		<div className="bg-gray-100">
			<div className={layout.container}>
				<h1 className="mb-4 text-2xl font-bold">About</h1>
				<div className={card.wrapper}>
					<h3 className="mb-2 text-xl font-bold">
						Basic Frontend Development Starter <br /> with following
						libraries
					</h3>
					<ul className="flex divide-x-2 divide-gray-300">
						<li className="px-3 first:pl-0 last:pr-0">React JS</li>
						<li className="px-3 first:pl-0 last:pr-0">
							React Router
						</li>
						<li className="px-3 first:pl-0 last:pr-0">
							Prop Types
						</li>
						<li className="px-3 first:pl-0 last:pr-0">Vite</li>
						<li className="px-3 first:pl-0 last:pr-0">
							TailwindCSS
						</li>
						<li className="px-3 first:pl-0 last:pr-0">
							React Icons
						</li>
						<li className="px-3 first:pl-0 last:pr-0">
							Headless UI
						</li>
						<li className="px-3 first:pl-0 last:pr-0">Axios</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default About;
