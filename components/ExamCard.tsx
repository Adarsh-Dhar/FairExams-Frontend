import React from 'react';
import BigButton from './BigButton';

interface CardProps {
    fee : number;
    name : string;
    totalMarks : number;
    totalQuestions : number;
    maxParticipants : number;
    applicationDeadline : number;
    examDate : number;
    examStartTime : number;
    examDuration : number;
    totalValidators : number;
    essentialValidators : number;
}

const ExamCard: React.FC<CardProps> = ({ fee, name, totalMarks, totalQuestions, maxParticipants, applicationDeadline, examDate, examStartTime, examDuration, totalValidators, essentialValidators }) => {
    const ApplyAsValidator = () => {
        console.log('apply')
    }
    const ApplyAsParticipant = () => {
        console.log('apply')
    }
    return (
 <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
    
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{name}</h5>
    
    <p className="mb-3 font-normal text-gray-700 ">{fee}</p>
    <p className="mb-3 font-normal text-gray-700 ">{totalMarks}</p>
    <p className="mb-3 font-normal text-gray-700 ">{totalQuestions}</p>
    <p className="mb-3 font-normal text-gray-700 ">{maxParticipants}</p>
    <p className="mb-3 font-normal text-gray-700 ">{applicationDeadline}</p>
    <p className="mb-3 font-normal text-gray-700 ">{examDate}</p>
    <p className="mb-3 font-normal text-gray-700 ">{examStartTime}</p>
    <p className="mb-3 font-normal text-gray-700 ">{examDuration}</p>
    <p className="mb-3 font-normal text-gray-700 ">{totalValidators}</p>
    <p className="mb-3 font-normal text-gray-700 ">{essentialValidators}</p>
    <BigButton text='Apply to Validate' onClick={ApplyAsValidator} />
    <BigButton text='Apply to Participate' onClick={ApplyAsParticipant} />
</div>

    );
};

export default ExamCard;