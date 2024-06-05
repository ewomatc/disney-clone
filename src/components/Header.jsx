import { logo, pfp } from "../assets/images";
import {
	Home,
	Search,
	Plus,
	Star,
	PlayCircle,
	Tv2,
	EllipsisVertical,
} from "lucide-react";
import Headeritems from "./Headeritems";
import { useState } from "react";

const Header = () => {
	const [toggle, setToggle] = useState(false);

	const menu = [
		{
			name: "HOME",
			icon: Home,
		},
		{
			name: "SEARCH",
			icon: Search,
		},
		{
			name: "WATCH LIST",
			icon: Plus,
		},
		{
			name: "ORIGINALS",
			icon: Star,
		},
		{
			name: "MOVIES",
			icon: PlayCircle,
		},
		{
			name: "SERIES",
			icon: Tv2,
		},
	];

	return (
		<header className="flex justify-between p-5">
			<div className="flex items-center gap-8">
				<img
					src={logo}
					alt="logo
        "
					className="w-[90px] md:w-[115px]"
				/>
				<div className="hidden lg:flex items-center gap-8">
					{menu.map((item, index) => (
						<Headeritems key={index} name={item.name} Icon={item.icon} />
					))}
				</div>
				<div className="lg:hidden flex items-center gap-8 ">
					{menu.map(
						(item, index) =>
							index < 3 && (
								<Headeritems key={index} name={""} Icon={item.icon} />
							)
					)}

					<div className="lg:hidden" onClick={() => setToggle(!toggle)}>
						<Headeritems name={""} Icon={EllipsisVertical} />
						{toggle && (
							<div className="absolute mt-3 bg-[#121212] border border-gray-600 rounded-md py-4 px-5">
								{menu.map(
									(item, index) =>
										index > 2 && (
											<Headeritems
												key={index}
												name={item.name}
												Icon={item.icon}
											/>
										)
								)}
							</div>
						)}
					</div>
				</div>
			</div>
			<div className="hover:cursor-pointer mt-2">
				<img
					src={pfp}
					alt="profile-image"
					className="w-[40px] object-contain rounded-full border border-gray-500"
				/>
			</div>
		</header>
	);
};

export default Header;
