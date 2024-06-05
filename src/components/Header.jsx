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

const Header = () => {
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
					className="w-[80px] md:w-[115px]"
				/>
				<div className="hidden md:flex items-center gap-8">
					{menu.map((item, index) => (
						<Headeritems key={index} name={item.name} Icon={item.icon} />
					))}
				</div>
				<div className="md:hidden flex items-center gap-8">
					{menu.map(
						(item, index) =>
							index < 3 && (
								<Headeritems key={index} name={item.name} Icon={item.icon} />
							)
					)}
					<div className="md:hidden">
						<Headeritems name={""} Icon={EllipsisVertical} />
					</div>
				</div>
			</div>
			<div>
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
