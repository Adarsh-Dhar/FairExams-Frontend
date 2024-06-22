import React from 'react';
import Input from './Input';
import BigButton from './BigButton';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { adminEmailAtom, adminPasswordAtom } from '@/store/AdminDetails';
import axios from 'axios';
import { BACKEND_URL } from '@/utils';

const AdminSignup: React.FC = () => {
    const email = useRecoilValue(adminEmailAtom)
    const password = useRecoilValue(adminPasswordAtom)
    const setEmail = useSetRecoilState(adminEmailAtom)
    const setPassword = useSetRecoilState(adminPasswordAtom)

    const adminSignin = async () => {
         const response = await axios.post(`${BACKEND_URL}/admin/signin`,{
            email,
            password
         })
            console.log(response.data)
    }

    return (
        <div>
            <Input value={email} onChange={(e : any) => setEmail(e.target.value)} type="text" text='enter your email' placeholder='adarsh@gmail.com' />
            <Input value={password} onChange={(e : any) => setPassword(e.target.value)} type="password" text='enter your password' placeholder='adarsh123' />
            <BigButton text='Signin' onClick={adminSignin} />
        </div>
    );
};

export default AdminSignup;