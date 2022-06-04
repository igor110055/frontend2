import * as React from 'react';

interface PendingIconProps {
	className?: string;
}

export const PendingIcon: React.FC<PendingIconProps> = (props: PendingIconProps) => (
	<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
		<path
			d="M13 0C11.4443 0 9.92333 0.271917 8.47817 0.808167L8.85517 1.82379C10.1816 1.33203 11.5853 1.08127 13 1.08333C19.571 1.08333 24.9167 6.42904 24.9167 13C24.9167 19.571 19.571 24.9167 13 24.9167C6.42904 24.9167 1.08333 19.571 1.08333 13C1.08437 11.2442 1.47336 9.5104 2.22247 7.92247C2.97158 6.33454 4.06232 4.93175 5.41667 3.81442V7.58333H6.5V2.16667H1.08333V3.25H4.40158C3.01838 4.47003 1.91056 5.97037 1.15167 7.65138C0.392788 9.3324 0.000207836 11.1556 0 13C0 20.1679 5.83213 26 13 26C20.1679 26 26 20.1679 26 13C26 5.83213 20.1679 0 13 0Z"
			fill="var(--system-blue)"
		/>
		<path
			d="M9.75033 17.3333H8.66699V18.4167H17.3337V17.3333H16.2503V15.4841L13.7662 13L16.2503 10.5159V8.66668H17.3337V7.58334H8.66699V8.66668H9.75033V10.5159L12.2344 13L9.75033 15.4841V17.3333ZM10.8337 10.0674V8.66668H15.167V10.0674L13.0003 12.2341L10.8337 10.0674ZM13.0003 13.7659L15.167 15.9326V17.3333H10.8337V15.9326L13.0003 13.7659Z"
			fill="var(--system-blue)"
		/>
		<path d="M9.75 20.5833H10.8333V21.6667H9.75V20.5833Z" fill="var(--system-blue)" />
		<path d="M12.458 20.5833H13.5413V21.6667H12.458V20.5833Z" fill="var(--system-blue)" />
		<path d="M15.167 20.5833H16.2503V21.6667H15.167V20.5833Z" fill="var(--system-blue)" />
	</svg>
);
