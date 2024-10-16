export function StartButton() {
	return (
		<button
			type="button"
			className="w-full flex px-6 text-3xl font-bold italic gap-2 rounded-r-[30px_50px] items-center text-white justify-start border-[#00000018] bg-gradient-to-t from-[#278D27] to-[#15D715] shadow-[2px_2px_2px_#2B72E3,inset_-5px_-2px_20px_#237023,inset_5px_5px_10px_#28772870,inset_-4px_-2px_17px_#287828,inset_3px_6px_10px_#B7FFBA75,inset_3px_6px_22px_#FFFFFF70]"
		>
			<img src="/win-logo.png" alt="" className="w-[35px] h-7" />
			<span className="[text-shadow:_1px_1px_2px_#000]">start</span>
		</button>
	);
}
