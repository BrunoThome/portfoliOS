import type { Window } from "@/types/globals";
import { getUniqueId } from "@/utils/getUniqueId";
import { produce } from "immer";
import { create } from "zustand";
import type { UseOSStore } from "./useOS.types";

export const useOS = create<UseOSStore>((set, get) => ({
	windows: [],
	activeWindow: null,
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
	// minimizeWindow: (window: Window) => {
	// 	set(
	// 		produce((state: UseOSStore) => {
	// 			window.visible = false;
	// 			const windowIndex = state.windows.findIndex(
	// 				(openWindows) => openWindows.id === window.id,
	// 			);
	// 			state.windows[windowIndex] = window;
	// 			if (state.activeWindow?.id === window.id) state.activeWindow = null;
	// 		}),
	// 	);
	// },
	setActiveWindow: (window: Window) => {
		set({ activeWindow: { ...window, visible: true } });
	},
}));
