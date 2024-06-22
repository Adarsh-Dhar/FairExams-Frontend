import React from 'react';
import SmallButton from './SmallButton';

const ProblemCard: React.FC = () => {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <div className="grid grid-cols-2 gap-4">
                <SmallButton 
                    text='option 1' 
                    onClick={() => {
                        console.log('option 1');
                    }}
                />
                <SmallButton 
                    text='option 2' 
                    onClick={() => {
                        console.log('option 2');
                    }}
                />
                <SmallButton 
                    text='option 3' 
                    onClick={() => {
                        console.log('option 3');
                    }}
                />
                <SmallButton 
                    text='option 4' 
                    onClick={() => {
                        console.log('option 4');
                    }}
                />
            </div>
        </div>
    );
};

export default ProblemCard;
