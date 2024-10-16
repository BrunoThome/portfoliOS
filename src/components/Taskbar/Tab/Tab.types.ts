export type TabProps = {
	name: string;
	iconSrc: string;
	isPressed?: boolean;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
};
