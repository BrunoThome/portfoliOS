import type { Window } from "@/types/globals";
import { getUniqueId } from "@/utils/getUniqueId";
import { produce } from "immer";
import { create } from "zustand";
import type { UseOSStore } from "./useOS.types";

export const useOS = create<UseOSStore>((set, get) => ({
	windows: [],
	activeWindow: null,
	desktopRef: null,
	openWindow: (name: string) => {
		const window = { id: getUniqueId(), name: name, visible: true };
		set({
			windows: [...get().windows, window],
			activeWindow: window,
		});
	},
	closeWindow: (window: Window) => {
		const activeWindow = get().activeWindow;
		set({
			windows: get().windows.filter(
				(openWindows) => openWindows.id !== window.id,
			),
			activeWindow: activeWindow?.id === window.id ? null : activeWindow,
		});
	},
	minimizeWindow: () => {
		set({ activeWindow: null });
	},
	setActiveWindow: (window: Window) => {
		set({ activeWindow: { ...window, visible: true } });
	},
	setDesktopRef: (ref: React.RefObject<HTMLDivElement>) => {
		set({ desktopRef: ref });
	},
}));
