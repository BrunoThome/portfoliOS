import type { Window } from "@/types/globals";

type UseOSState = {
	activeWindow: Window | null;
	windows: Window[];
};

type UseOSActions = {
	openWindow(windowName: string): void;
	closeWindow(window: Window): void;
	// minimizeWindow(window: Window): void;
	setActiveWindow(window: Window): void;
};

export type UseOSStore = UseOSState & UseOSActions;
