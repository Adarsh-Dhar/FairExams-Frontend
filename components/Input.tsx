import React from 'react';

interface InputProps {
    value: any;
    onChange: any;
    type : any;
    placeholder : string;
    text : string;
}

const Input: React.FC<InputProps> = ({ value, onChange, type, text, placeholder }) => {
    return (
        <div>
    <label className="block mb-2 text-sm font-medium text-black ">{text}</label>
    <input type={type}  className="block w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" placeholder={placeholder} value={value} onChange={onChange}></input>
</div>


    );
};

export default Input;