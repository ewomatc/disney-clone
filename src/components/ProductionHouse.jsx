import { disney, starwar, marvel, nationalG, pixar } from "../assets/images";
import {
	disneyVid,
	pixarVid,
	nationalGVid,
	starwarVid,
	marvelVid,
} from "../assets/videos";

const ProductionHouse = () => {
	const productionHouseList = [
		{
			id: 1,
			image: disney,
			video: disneyVid,
		},
		{
			id: 2,
			image: pixar,
			video: pixarVid,
		},
		{
			id: 3,
			image: marvel,
			video: marvelVid,
		},
		{
			id: 4,
			image: starwar,
			video: starwarVid,
		},
		{
			id: 5,
			image: nationalG,
			video: nationalGVid,
		},
	];

	return (
		<div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16 ">
			{productionHouseList.map((item, index) => (
				<div
					key={index}
					className="border-[2px] border-gray-600
        rounded-lg hover:scale-110 transition-all duration-300
        ease-in-out cursor-pointer relative shadow-2xl 
        shadow-gray-800
        "
				>
					<video
						src={item.video}
						autoPlay
						loop
						playsInline
						muted
						className="absolute z-0  top-0 rounded-md 
        opacity-0 hover:opacity-50"
					/>
					<img src={item.image} className="w-full z-[1] opacity-100" />
				</div>
			))}
		</div>
	);
};

export default ProductionHouse;
