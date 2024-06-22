"use client";
import BigButton from "./BigButton";
import Input from "./Input";
import React, { useState, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from "recoil";
import { questionAtom } from "@/store/problem"; // Adjust other atoms if needed
import SmallButton from "./SmallButton";
const crypto = require('crypto');
import Puzzle from 'crypto-puzzle';

const Test = () => {
    const encryptedQuestion = useRecoilValue(questionAtom);
    const setEncryptedQuestion = useSetRecoilState(questionAtom);
    const key = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);
    const [question, setQuestion] = useState("");
    const [decryptedQuestion, setDecryptedQuestion] = useState("");

    function encrypt(text : any, key : any, iv : any) {
        const algorithm = 'aes-256-cbc';
        const cipher = crypto.createCipheriv(algorithm, key, iv);
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }

    function decrypt(encrypted : any, key : any, iv : any) {
        try{
            const algorithm = 'aes-256-cbc';
            const decipher = crypto.createDecipheriv(algorithm, key, iv);
            console.log(`decipher: ${decipher}`);
            console.log(`encrypted: ${encrypted}`);
            console.log(`key: ${key}`);
            console.log(`iv: ${iv}`);
            let decrypted = decipher.update(encrypted, 'hex', 'utf8');
            console.log(`decrypted: ${decrypted}`);
            decrypted += decipher.final('utf8');
            return decrypted;
        } catch (error) {
            console.log(error);
            return null;
        }
        
    }

    useEffect(() => {
        try{
            if (encryptedQuestion) {
                const decrypted = decrypt(encryptedQuestion, key, iv);
                setDecryptedQuestion(decrypted);
                console.log(`decrypted: ${decrypted}`);
            }else{
                console.log("No encrypted question");
            }
        }catch(error){
           console.log(error);
        }
        
    }, [encryptedQuestion, key, iv]);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <Input
                    value={question}
                    onChange={(e : any) => setQuestion(e.target.value)}
                    type="text"
                    text="Enter Question"
                    placeholder="Enter the question"
                />
                <SmallButton
                    text="Enter"
                    onClick={async () => {
                        const encrypted = encrypt(question, key, iv);
                        setEncryptedQuestion(encrypted);
                        console.log(encrypted);
                    }}
                />
                <div>Encrypted Question: {encryptedQuestion}</div>
                <div>Decrypted Question: {decryptedQuestion}</div>
            </div>
        </div>
    );
};

export default Test;
