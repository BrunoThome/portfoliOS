import { tv } from "tailwind-variants";

export const windowStyles = tv({
	base: "window absolute transition-all duration-300 inset-20 z-10",
	variants: {
		currentWindow: {
			true: "z-20",
		},
		isMaximized: {
			true: "inset-0",
		},
	},
});
