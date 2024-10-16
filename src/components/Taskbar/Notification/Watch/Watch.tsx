export function Watch() {
	return (
		<p className="flex items-center text-base">
			{`${new Date().getHours()}:${new Date().getMinutes()}`}
		</p>
	);
}
