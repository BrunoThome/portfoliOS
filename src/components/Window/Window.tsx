import { useOS } from "@/hooks/useOS";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { windowStyles } from "./Window.styles";
import type { WindowProps } from "./Window.types";

export function Window({ window }: WindowProps) {
	const {
		activeWindow,
		closeWindow,
		setActiveWindow,
		minimizeWindow,
		desktopRef,
	} = useOS();
	const [isMaximized, setIsMaximized] = useState(false);
	const [isMinimized, setIsMinimized] = useState(false);
	if (!window.visible) return null;

	useEffect(() => {
		if (window.id === activeWindow?.id) {
			setIsMinimized(false);
		}
	}, [activeWindow?.id, window.id]);

	return (
		<motion.div
			className={windowStyles({
				currentWindow: window.id === activeWindow?.id,
				isMaximized,
				isMinimized,
			})}
			drag
			dragConstraints={desktopRef || {}}
			dragMomentum={false}
			onDragStart={() => setActiveWindow(window)}
			onClick={() => setActiveWindow(window)}
		>
			<div
				className="title-bar"
				onDoubleClick={() => setIsMaximized(!isMaximized)}
			>
				<div className="title-bar-text">{window.name}</div>
				<div className="title-bar-controls">
					<button
						type="button"
						aria-label="Minimize"
						onClick={(event) => {
							setIsMinimized(true);
							minimizeWindow();
							event.stopPropagation();
						}}
					/>
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
			<div className="window-body text-4xl">{}</div>
			<div className="status-bar">Sei lá</div>
		</motion.div>
	);
}
