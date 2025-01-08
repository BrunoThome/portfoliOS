import type { Window } from "@/types/globals";

type UseOSState = {
	activeWindow: Window | null;
	desktopRef: React.RefObject<HTMLDivElement> | null;
	windows: Window[];
};

type UseOSActions = {
	openWindow(windowName: string): void;
	closeWindow(window: Window): void;
	minimizeWindow(): void;
	setActiveWindow(window: Window): void;
	setDesktopRef(ref: React.RefObject<HTMLDivElement>): void;
};

export type UseOSStore = UseOSState & UseOSActions;
