import { tv } from "tailwind-variants";

export const windowStyles = tv({
	base: "window visible absolute z-10 resize grid grid-rows-[auto_1fr_auto]",
	variants: {
		currentWindow: {
			true: "z-20",
		},
		isMaximized: {
			true: "inset-0 !translate-x-0 !translate-y-0",
		},
		isMinimized: {
			true: "hidden",
		},
	},
});
