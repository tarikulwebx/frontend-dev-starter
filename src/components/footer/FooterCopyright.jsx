import { layout } from "../../styles";

const FooterCopyright = () => {
	return (
		<div className="border-t bg-white py-6">
			<div className={layout.container}>
				<p className="text-center text-sm">
					Copyright &copy;{new Date().getFullYear()} All Rights
					Reserved by{" "}
					<a
						className="font-bold text-gray-700 hover:text-primary"
						href="http://"
						target="_blank"
						rel="noopener noreferrer"
					>
						Md. Tarikul Islam
					</a>
				</p>
			</div>
		</div>
	);
};

export default FooterCopyright;
