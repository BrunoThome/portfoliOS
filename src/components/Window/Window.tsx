import { useOS } from "@/hooks/useOS";
import { useState } from "react";
import { windowStyles } from "./Window.styles";
import type { WindowProps } from "./Window.types";

export function Window({ window }: WindowProps) {
	const { activeWindow, closeWindow } = useOS();
	const [isMaximized, setIsMaximized] = useState(false);

	if (!window.visible) return null;

	return (
		<div
			className={windowStyles({
				currentWindow: window.id === activeWindow?.id,
				isMaximized,
			})}
		>
			<div className="title-bar">
				<div className="title-bar-text">{window.name}</div>
				<div className="title-bar-controls">
					{/* <button
						type="button"
						aria-label="Minimize"
					/> */}
					<button
						type="button"
						aria-label={isMaximized ? "Restore" : "Maximize"}
						onClick={() => setIsMaximized(!isMaximized)}
					/>
					<button
						type="button"
						aria-label="Close"
						onClick={() => closeWindow(window)}
					/>
				</div>
			</div>
			<div className="window-body text-4xl">{window.id}</div>
		</div>
	);
}
