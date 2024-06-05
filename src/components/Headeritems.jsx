const Headeritems = ({ name, Icon }) => {
	return (
		<div className="flex items-center gap-2 text-[16px] font-semibold cursor-pointer hover:underline underline-offset-8">
			<Icon />
			<h2 className="hidden lg:block">{name}</h2>
		</div>
	);
};

export default Headeritems;
