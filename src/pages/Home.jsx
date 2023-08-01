import { card, layout } from "../styles";

const Home = () => {
	return (
		<div>
			<div className={layout.container}>
				<h1 className="mb-4 text-2xl font-bold">Home</h1>
				<div className={card.wrapper}>
					<h2 className="text-xl font-bold">Frontend Starter App</h2>
					<p>
						<span className="font-medium">Github</span>{" "}
						<a
							href="https://github.com/tarikulwebx/frontend-dev-starter"
							target="_blank"
							rel="noopener noreferrer"
							className="italic text-blue-500 underline underline-offset-2"
						>
							https://github.com/tarikulwebx/frontend-dev-starter
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
