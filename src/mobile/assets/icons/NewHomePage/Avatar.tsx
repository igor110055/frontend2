import React from 'react';

export const Avatar = ({ className = '' }) => {
	return (
		<svg className={className} width="26" height="26" viewBox="0 0 26 26" fill="#017890" xmlns="http://www.w3.org/2000/svg">
			<rect width="26" height="26" rx="13" fill="##017890" />
			<path
				d="M14.9473 13.3438C14.2109 13.3438 13.8809 13.75 12.6875 13.75C11.4688 13.75 11.1387 13.3438 10.4023 13.3438C8.52344 13.3438 7 14.8926 7 16.7715V17.4062C7 18.0918 7.5332 18.625 8.21875 18.625H17.1562C17.8164 18.625 18.375 18.0918 18.375 17.4062V16.7715C18.375 14.8926 16.8262 13.3438 14.9473 13.3438ZM17.1562 17.4062H8.21875V16.7715C8.21875 15.5527 9.18359 14.5625 10.4023 14.5625C10.7832 14.5625 11.3672 14.9688 12.6875 14.9688C13.9824 14.9688 14.5664 14.5625 14.9473 14.5625C16.166 14.5625 17.1562 15.5527 17.1562 16.7715V17.4062ZM12.6875 12.9375C14.6934 12.9375 16.3438 11.3125 16.3438 9.28125C16.3438 7.27539 14.6934 5.625 12.6875 5.625C10.6562 5.625 9.03125 7.27539 9.03125 9.28125C9.03125 11.3125 10.6562 12.9375 12.6875 12.9375ZM12.6875 6.84375C14.0078 6.84375 15.125 7.96094 15.125 9.28125C15.125 10.627 14.0078 11.7188 12.6875 11.7188C11.3418 11.7188 10.25 10.627 10.25 9.28125C10.25 7.96094 11.3418 6.84375 12.6875 6.84375Z"
				fill="white"
			/>
		</svg>
	);
};
