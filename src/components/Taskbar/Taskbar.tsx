"use client";
import { useOS } from "@/hooks/useOS";

import { Notification } from "./Notification";
import { StartButton } from "./StartButton";
import { Tab } from "./Tab";

export function Taskbar() {
	const { windows, activeWindow, setActiveWindow } = useOS();

	return (
		<div className="h-[51px] w-screen grid grid-cols-[180px_auto_140px] bg-os-taskbar shadow-[inset_0_4px_4px_#6DB2FF70,inset_0_-5px_7px_#00000022,inset_0_10px_8px_#3888E9]">
			<StartButton />
			<div className="px-4 max-w-full overflow-hidden py-2 gap-1 flex items-center text-white">
				{windows.map((window, index) => (
					<Tab
						key={window.id}
						name={window.name}
						iconSrc="/img/icons/folder-icon.png"
						isPressed={activeWindow?.id === window.id}
						onClick={() => setActiveWindow(window)}
					/>
				))}
			</div>
			<Notification />
		</div>
	);
}
