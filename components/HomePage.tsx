import React from 'react';
import BigButton from './BigButton';

const HomePage: React.FC = () => {
    const createExam = () => {
        console.log('Create Exam');
    }

    const selectExam = () => {
        console.log('Validate Exam');
    }


    
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="flex flex-col justify-center items-center p-6 bg-white shadow-lg rounded-lg">
                <BigButton text='Create An Exam' onClick={createExam} />
                <BigButton text='Select An Exam' onClick={selectExam} />
            </div>
        </div>
        
    );
};

export default HomePage;