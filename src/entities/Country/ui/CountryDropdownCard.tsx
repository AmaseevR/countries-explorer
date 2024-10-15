import React, { useState } from 'react';

interface CardDropdownProps {
	languages: string[];
	currencies: string[];
}

const CardDropdown: React.FC<CardDropdownProps> = ({ languages, currencies }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="card-dropdown">
			<button
				onClick={toggleDropdown}
				className=" mt-10 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
			>
				{isOpen ? 'Hide Details' : 'Show Details'}
			</button>
			{isOpen && (
				<div className="dropdown-content">
					<p><strong>Languages:</strong> {languages.join(', ')}</p>
					<p><strong>Currencies:</strong> {currencies.join(', ')}</p>
				</div>
			)}
		</div>
	);
};

export default CardDropdown;
