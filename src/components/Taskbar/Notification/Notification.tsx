import { Icon } from "./Icon";
import { Watch } from "./Watch";

export function Notification() {
	return (
		<div className="flex items-center pr-6 pl-4 bg-os-shortcuts shadow-[-2px_0_1px_rgba(0,0,0,0.50),inset_5px_5px_5px_#16ACF0,inset_-2px_-4px_15px_rgba(0,0,0,0.25)]">
			<div className="flex items-center gap-4 text-white">
				<div className="flex items-center gap-2">
					<Icon src="/img/icons/netshell-icon.png" />
					<Icon src="/img/icons/sound-icon.png" />
				</div>
				<Watch />
			</div>
		</div>
	);
}
