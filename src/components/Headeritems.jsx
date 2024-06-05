const Headeritems = ({ name, Icon }) => {
	return (
		<div className="flex items-center gap-2 text-[16px] font-semibold cursor-pointer hover:underline underline-offset-8 my-4 lg:my-0">
			<Icon />
			<h2 className="">{name}</h2>
		</div>
	);
};

export default Headeritems;
