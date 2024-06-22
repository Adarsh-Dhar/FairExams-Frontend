import React, { useEffect, useState } from 'react';
import ExamCard from './ExamCard';
import axios from 'axios';
import { BACKEND_URL } from '@/utils';


const AllExams = () => {
    const [exams, setExams] = useState([])
    const RenderExams = async () => { 
        const response = await axios.get(`${BACKEND_URL}/admin/exam`)
        console.log(response.data)
        setExams(response.data)
    }

    useEffect(() => {
        RenderExams()
    
    },[])
    return (
        <div>{exams.map((exam, index) => (
            // @ts-ignore
            <ExamCard key={index} fee={exam.fee} name={exam.name} totalMarks={exam.totalMarks} totalQuestions={exam.totalQuestions} maxParticipants={exam.maxParticipants} applicationDeadline={exam.applicationDeadline} examDate={exam.examDate} examStartTime={exam.examStartTime} examDuration={exam.examDuration} totalValidators={exam.totalValidators} essentialValidators={exam.essentialValidators} />
          ))}</div>
    );
};

export default AllExams;