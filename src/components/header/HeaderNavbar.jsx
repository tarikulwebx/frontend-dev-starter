import { NavLink } from "react-router-dom";
import { layout } from "../../styles";

const HeaderNavbar = () => {
	return (
		<div className="bg-white py-4 shadow">
			<div className={layout.container}>
				<div className="flex items-center gap-6">
					<h1 className="text-2xl font-bold text-primary">
						Frontend Starter
					</h1>
					<ul className="flex items-center gap-4 font-medium text-gray-600">
						<li>
							<NavLink to="/" className="[&.active]:text-primary">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/about"
								className="[&.active]:text-primary"
							>
								About
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default HeaderNavbar;
