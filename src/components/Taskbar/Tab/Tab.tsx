import type { TabProps } from "./Tab.types";

export function Tab({ name, iconSrc, isPressed, onClick }: TabProps) {
	if (isPressed) {
		return (
			<button
				type="button"
				onClick={onClick}
				className="px-4 flex gap-1 items-center w-full h-full overflow-hidden max-w-[260px] bg-[#1E53BB] border border-[#234B9D50] rounded-[4px] shadow-[inset_-1px_-1px_#0E3CA2,inset_1.5px_1.5px_1px_#123D94]"
			>
				<div className="w-6">
					<img src={iconSrc} className="w-full" alt="" />
				</div>
				<span className="truncate">{name}</span>
			</button>
		);
	}

	return (
		<button
			type="button"
			onClick={onClick}
			className="px-4 flex gap-1 items-center overflow-hidden w-full h-full max-w-[260px] bg-[#3980F4] border border-[#234B9D50] rounded-[4px] shadow-[2px_0_2px_#00000007,inset_-2px_-2px_2px_#00000010,inset_0_4px_8px_#FFFFFF15,inset_1.5px_1.5px_1px_#FFFFFF25]"
		>
			<div className="w-6">
				<img src={iconSrc} className="w-full" alt="" />
			</div>
			<span className="truncate">{name}</span>
		</button>
	);
}
