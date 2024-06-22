import React, { use } from 'react';
import Input from './Input';
import BigButton from './BigButton';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { validatorEmailAtom, validatorPasswordAtom } from '@/store/ValidatorDetails';
import axios from 'axios';
import { BACKEND_URL } from '@/utils';

const ValidatorSignup: React.FC = () => {
    const email = useRecoilValue(validatorEmailAtom)
    const password = useRecoilValue(validatorPasswordAtom)
    const setEmail = useSetRecoilState(validatorEmailAtom)
    const setPassword = useSetRecoilState(validatorPasswordAtom)


    const validatorSignin = async () => {
        const response = await axios.post(`${BACKEND_URL}/validator/signin`,{
            email,
            password
        })
        console.log(response.data)
    }

    return (
        <div>
            <Input value={email} onChange={(e : any) => setEmail(e.target.value)} type="text" text='enter your email' placeholder='adarsh@gmail.com' />
            <Input value={password} onChange={(e : any) => setPassword(e.target.value)} type="password" text='enter your password' placeholder='adarsh123' />
            <BigButton text='Signin' onClick={validatorSignin} />
        </div>
    );
};

export default ValidatorSignup;