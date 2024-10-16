let clickCount = 0;
let timeout: NodeJS.Timeout;
export function doubleTouch(callback: () => void) {
	if (timeout) {
		clearTimeout(timeout);
	}
	clickCount++;

	if (clickCount === 2) {
		callback();
		clickCount = 0;
	}
	timeout = setTimeout(() => {
		clickCount = 0;
	}, 300);
}
