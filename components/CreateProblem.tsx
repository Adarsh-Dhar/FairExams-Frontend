"use client"
import BigButton from "./BigButton";
import Input from "./Input"
import React, {  useState } from 'react';
import { useRecoilValue, useSetRecoilState } from "recoil";
import { questionAtom, option1atom, option2atom, option3atom, option4atom, correctOptionAtom } from "@/store/problem";
import SmallButton from "./SmallButton";
const crypto = require('crypto');
import Puzzle from 'crypto-puzzle';
import axios from 'axios';
import { BACKEND_URL } from '@/utils';



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

        const [decryptedQuestion, setDecryptedQuestion] = useState("")

        
        
        const CreateProblem = async () => {
                try{
                    const response = await axios.post(`${BACKEND_URL}/validator/problem`,{
                        question: encryptedQuestion,
                        option1: encryptedOption1,
                        option2: encryptedOption2,
                        option3: encryptedOption3,
                        option4: encryptedOption4,
                        correctOption: encryptedCorrectOption
                    })
              console.log(response.data)

                } catch(error){
                console.log(error)
            
            }

        }



        const sss = require('shamirs-secret-sharing')

        const secret = Buffer.from('Encryption key')
        const shares = sss.split(secret, { shares: 3, threshold: 2})
        // ["asdid9d9", "asdid9d9", "asdid9d9"]
        const smallerShares = shares.slice(0, 2); // ["asdid9d9"]
        const recovered = sss.combine(smallerShares)
        //@ts-ignore
        console.log(shares.map(x => x.toString('hex')));
        console.log(recovered.toString()) // 'Encryption key'

        function encrypt(text : any, key : any, iv : any) {
            const algorithm = 'aes-256-cbc';
        
            const cipher = crypto.createCipheriv(algorithm, key, iv);
            
            let encrypted = cipher.update(text, 'utf8', 'hex'); // 0123456789ABCDEF
            encrypted += cipher.final('hex'); 
            return encrypted; 
        } 

        function decrypt(encrypted : any, key : any, iv : any) {
            const algorithm = 'aes-256-cbc';
            const decipher = crypto.createDecipheriv(algorithm, key, iv);
            let decrypted = decipher.update(encrypted, 'hex', 'utf8');
            decrypted += decipher.final('utf8');
            return decrypted;
        }


        async function main() {
            const puzzle = await Puzzle.generate({
                opsPerSecond: 3_300_000,
                duration: 5_000, // Rough minimum number of milliseconds that this puzzle will be unsolvable for
                message: decrypt(encryptedQuestion,key,iv)
                 // Message to encrypt inside the puzzle
            });
        
            const solution = await Puzzle.solve ( puzzle );
        
            // About 10 seconds later...
        
            console.log ( solution );
        }
        


   

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <Input value={question} onChange={(e : any) => setQuestion(e.target.value)} type="text" text="Enter Question" placeholder="enter the question" />
            <SmallButton text="Enter" onClick={async () => {
                    const encrypted = encrypt(question,key,iv)
                    setEncryptedQuestion(encrypted)
                    
                    setDecryptedQuestion(decrypt(encrypted,key,iv))
                    
            } 
             } />
            <Input value={option1} onChange={(e : any) => setOption1(e.target.value)} type="text" text="option1" placeholder="enter the option1" />
            <SmallButton text="Enter" onClick={() => setEncryptedOption1(option1) } />
            <Input value={option2} onChange={(e : any) => setOption2(e.target.value)} type="text" text="option2" placeholder="enter the option2" />
            <SmallButton text="Enter" onClick={() => setEncryptedOption2(option2) } />
            <Input value={option3} onChange={(e : any) => setOption3(e.target.value)} type="text" text="option3" placeholder="enter the option3" />
            <SmallButton text="Enter" onClick={() => setEncryptedOption3(option3) } />
            <Input value={option4} onChange={(e : any) => setOption4(e.target.value)} type="text" text="option4" placeholder="enter the option4" />
            <SmallButton text="Enter" onClick={() => setEncryptedOption4(option4) } />
            <Input value={correctOption} onChange={(e : any) => setCorrectOption(e.target.value)} type="number" text="correct option" placeholder="enter the correct option" />
            <SmallButton text="Enter" onClick={() => setEncryptedCorrectOption(correctOption) } />
            <BigButton text="Create Problem" onClick={CreateProblem} />
            </div>
        </div>
    );
};

export default CreateProblem;