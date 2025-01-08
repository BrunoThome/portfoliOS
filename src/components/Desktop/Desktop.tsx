"use client";
import { useOS } from "@/hooks/useOS";
import { doubleTouch } from "@/utils/doubleTapHandler";
import { useEffect, useRef } from "react";
import { Shortcut } from "./Shortcut";

export function Desktop() {
	const setDesktopRef = useOS((state) => state.setDesktopRef);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setDesktopRef(ref);
	}, [setDesktopRef]);

	return (
		<div
			className="absolute inset-0 bg-transparent p-7 flex flex-col gap-7"
			ref={ref}
		>
			<Shortcut name="Notepad" iconSrc="/img/icons/folder-icon.png" />
			<Shortcut name="Meu computador" iconSrc="/img/icons/folder-icon.png" />
		</div>
	);
}
