let id = 0;
export function getUniqueId(): string {
	return (id++).toString();
}
