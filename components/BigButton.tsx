import React from 'react';

interface BigButtonProps {
    onClick: () => any;
    text: string;
}

const BigButton: React.FC<BigButtonProps> = ({ onClick, text }) => {
    return (
        <button type="button" onClick={onClick} className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{text}</button>
    );
};

export default BigButton;