import { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import { ChevronLeft, ChevronRight } from "lucide-react";
const screenWidth = window.innerWidth;

const Slider = () => {
	// create a state to store the movies
	const [movieList, setMovieList] = useState([]);

	// useRef allows us to access and interact with DOM elements without causing a re-render of the component
	const elementref = useRef();

	// we use useEffect and pass an empty array so that the code in it (or function) can load whenever this component is mounted/the page loads
	useEffect(() => {
		getTrendingMovies();
	}, []);

	const getTrendingMovies = async () => {
		try {
			const response = await GlobalApi.getTrendingVideos;
			console.log(response);
			setMovieList(response.data.results);
		} catch (error) {
			console.log(error);
		}
	};

	// functions to scroll left or right
	// use screenWidth so that it always shows the next card in the centre irrespective of current screen size.
	// we remove 110
	const sliderLeft = (element) => {
		element.scrollLeft -= screenWidth - 110;
	};

	const sliderRight = (element) => {
		element.scrollLeft += screenWidth - 110;
	};

	return (
		<>
			<div>
				<ChevronLeft
					className="hidden md:block absolute mx-8  mt-[155px] text-gray-200"
					size={"36px"}
					onClick={() => sliderLeft(elementref.current)}
				/>
				<ChevronRight
					className="hidden md:block absolute mx-8 mt-[155px] text-gray-200 right-0"
					size={"36px"}
					onClick={() => sliderRight(elementref.current)}
				/>
			</div>
			<div
				className="flex overflow-x-auto w-full px-10 md:px-16 py-4 scrollbar-none scroll-smooth"
				ref={elementref} //this ref allows us access the movie div directly and interct with it (scroll it left or right)
			>
				{movieList.map((item, index) => (
					<img
						key={index}
						src={`${IMAGE_BASE_URL}${item.backdrop_path}`}
						alt={item.title}
						className="min-w-full md:h-[310px] object-cover object-top mr-5 rounded-xl hover:cursor-pointer hover:border-[4px] border-gray-400 transition-all duration-120 ease-in"
					/>
				))}
			</div>
		</>
	);
};

export default Slider;
