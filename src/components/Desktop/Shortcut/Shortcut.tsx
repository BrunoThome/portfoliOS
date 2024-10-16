import { useOS } from "@/hooks/useOS";
import type { ShortcutProps } from "./Shortcut.types";

export function Shortcut({ name, iconSrc }: ShortcutProps) {
	const openWindow = useOS((state) => state.openWindow);

	return (
		<div
			className="flex flex-col items-center justify-center gap-2 max-w-9"
			onDoubleClick={() => openWindow(name)}
		>
			<img src={iconSrc} alt="" className="size-8" />
			<p className="text-center text-white [text-shadow:_1px_1px_2px_#000]">
				{name}
			</p>
		</div>
	);
}
