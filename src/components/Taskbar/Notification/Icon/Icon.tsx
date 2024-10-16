import type { IconProps } from "./Icon.types";

export function Icon({ src, alt = "" }: IconProps) {
	return <img className="size-4" src={src} alt={alt} />;
}
