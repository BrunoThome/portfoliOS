"use client";
import { useOS } from "@/hooks/useOS";
import { doubleTouch } from "@/utils/doubleTapHandler";
import { Shortcut } from "./Shortcut";

export function Desktop() {
	return (
		<div className="absolute inset-0 bg-transparent p-7 flex flex-col gap-7">
			<Shortcut name="Notepad" iconSrc="/img/icons/folder-icon.png" />
			<Shortcut name="Meu computador" iconSrc="/img/icons/folder-icon.png" />
		</div>
	);
}
