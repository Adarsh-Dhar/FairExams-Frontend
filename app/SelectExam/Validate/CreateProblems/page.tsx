"use client"
import BigButton from "@/components/BigButton";
import Input from "@/components/Input"
import React, {  useState } from 'react';
import { useRecoilValue, useSetRecoilState } from "recoil";
import { questionAtom, option1atom, option2atom, option3atom, option4atom, correctOptionAtom } from "@/store/problem";
import SmallButton from "@/components/SmallButton";
const crypto = require('crypto');


const CreateProblem = () => {
        const encryptedQuestion = useRecoilValue(questionAtom)
        const encryptedOption1 = useRecoilValue(option1atom)
        const encryptedOption2 = useRecoilValue(option2atom)
        const encryptedOption3 = useRecoilValue(option3atom)
        const encryptedOption4 = useRecoilValue(option4atom)
        const encryptedCorrectOption = useRecoilValue(correctOptionAtom)
        const setEncryptedQuestion = useSetRecoilState(questionAtom)
        const setEncryptedOption1 = useSetRecoilState(option1atom)
        const setEncryptedOption2 = useSetRecoilState(option2atom)
        const setEncryptedOption3 = useSetRecoilState(option3atom)
        const setEncryptedOption4 = useSetRecoilState(option4atom)
        const setEncryptedCorrectOption = useSetRecoilState(correctOptionAtom)
        const key = crypto.randomBytes(32); 
        const iv = crypto.randomBytes(16);
        const [question, setQuestion] = useState("")
        const [option1, setOption1] = useState("")
        const [option2, setOption2] = useState("")
        const [option3, setOption3] = useState("")
        const [option4, setOption4] = useState("")
        const [correctOption, setCorrectOption] = useState(null)
        
        
        const CreateProblem = async () => {
                try{
                    console.log("problem created")
                    console.log(encryptedQuestion)
                    console.log(encryptedOption1)
                    console.log(encryptedOption2)
                    console.log(encryptedOption3)
                    console.log(encryptedOption4)
                    console.log(encryptedCorrectOption)
                } catch(error){
                console.log(error)
            
            }

        }

        function encrypt(text : string, key : string, iv : string) {
            const algorithm = 'aes-256-cbc';
        
            const cipher = crypto.createCipheriv(algorithm, key, iv);
            
            let encrypted = cipher.update(text, 'utf8', 'hex'); // 0123456789ABCDEF
            encrypted += cipher.final('hex');   
            return encrypted; 
        } 


   

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <Input value={question} onChange={(e : any) => setQuestion(encrypt(e.target.value, key, iv))} type="text" text="Enter Question" placeholder="enter the question" />
            <SmallButton text="Enter" onClick={() => setEncryptedQuestion(question) } />
            <Input value={option1} onChange={(e : any) => setOption1(encrypt(e.target.value, key, iv))} type="text" text="option1" placeholder="enter the option1" />
            <SmallButton text="Enter" onClick={() => setEncryptedOption1(option1) } />
            <Input value={option2} onChange={(e : any) => setOption2(encrypt(e.target.value, key, iv))} type="text" text="option2" placeholder="enter the option2" />
            <SmallButton text="Enter" onClick={() => setEncryptedOption2(option2) } />
            <Input value={option3} onChange={(e : any) => setOption3(encrypt(e.target.value, key, iv))} type="text" text="option3" placeholder="enter the option3" />
            <SmallButton text="Enter" onClick={() => setEncryptedOption3(option3) } />
            <Input value={option4} onChange={(e : any) => setOption4(encrypt(e.target.value, key, iv))} type="text" text="option4" placeholder="enter the option4" />
            <SmallButton text="Enter" onClick={() => setEncryptedOption4(option4) } />
            <Input value={correctOption} onChange={(e : any) => setCorrectOption(encrypt(e.target.value, key, iv))} type="number" text="correct option" placeholder="enter the correct option" />
            <SmallButton text="Enter" onClick={() => setEncryptedCorrectOption(correctOption) } />
            <BigButton text="Create Problem" onClick={CreateProblem} />
            </div>
        </div>
    );
};

export default CreateProblem;