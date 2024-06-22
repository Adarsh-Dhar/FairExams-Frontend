"use client"

import BigButton from "./BigButton";
import Input from "./Input"
import React, {  useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '@/utils';


const CreateExam = () => {
        const [fee, setFee] = useState(null);
        const [name , setName] = useState("");
        const [totalMarks, setTotalMarks] = useState(null);
        const [totalQuestions, setTotalQuestions] = useState(null);
        const [maxParticipants, setMaxParticipants] = useState(null);
        const [applicationDeadline, setApplicationDeadline] = useState(null);
        const [examDate, setExamDate] = useState(null);
        const [examStartTime, setExamStartTime] = useState(null);
        const [examDuration, setExamDuration] = useState(null);
        const [totalValidators, setTotalValidators] = useState(null);
        const [essentialValidators, setEssentialValidators] = useState(null);
        
        
        const CreateExam = async () => {
            const response = await axios.post(`${BACKEND_URL}/admin/exam`,{
                fee,
                name,
                totalMarks,
                totalQuestions,
                maxParticipants,
                applicationDeadline,
                examDate,
                examStartTime,
                examDuration,
                totalValidators,
                essentialValidators
            })

            console.log(response.data)
        }
   

    return (
        <div>
            <Input value={fee} onChange={(e : any) => Number(setFee(e.target.value))} type="number" text="Enter Fee" placeholder="enter the registration fee for exam" />
            <Input value={name} onChange={(e : any) => setName(e.target.value)} type="text" text="Enter Name" placeholder="enter the name of the exam" />
            <Input value={totalMarks} onChange={(e : any) => Number(setTotalMarks(e.target.value))} type="number" text="total marks" placeholder="enter the total marks for the exam" />
            
            <Input value={totalQuestions} onChange={(e : any) => Number(setTotalQuestions(e.target.value))} type="number" text="total questions" placeholder="enter the total questions for the exam" />
            <Input value={maxParticipants} onChange={(e : any) => Number(setMaxParticipants(e.target.value))} type="number" text="max participants" placeholder="enter the max participants for the exam" />
            <Input value={applicationDeadline} onChange={(e : any) => setApplicationDeadline(e.target.value)} type="date" text="application deadline" placeholder="enter the application deadline for the exam" />
            <Input value={examDate} onChange={(e : any) => setExamDate(e.target.value)} type="date" text="exam date" placeholder="enter the exam date" />
            <Input value={examStartTime} onChange={(e : any) => setExamStartTime(e.target.value)} type="time" text="exam start time" placeholder="enter the exam start time" />
            <Input value={examDuration} onChange={(e : any) => setExamDuration(e.target.value)} type="number" text="exam duration" placeholder="enter the exam duration" />
            <Input value={totalValidators} onChange={(e : any) => Number(setTotalValidators(e.target.value))} type="number" text="total validators" placeholder="enter the total validators" />
            <Input value={essentialValidators} onChange={(e : any) => Number(setEssentialValidators(e.target.value))} type="number" text="essential validators" placeholder="enter the essential validators" />

            <BigButton text="Create Exam" onClick={CreateExam} />
        </div>
    );
};

export default CreateExam;