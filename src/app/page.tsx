"use client";
import { Desktop } from "@/components/Desktop";
import { Window } from "@/components/Window";
import { useOS } from "@/hooks/useOS";

export default function Home() {
	const { windows } = useOS();

	return (
		<>
			<Desktop />

			{windows.map((window) => (
				<Window key={window.id} window={window} />
			))}
		</>
	);
}
