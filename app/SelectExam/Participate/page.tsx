import React, { use } from 'react';
import Input from '@/components/Input';
import BigButton from '@/components/BigButton';
import { useRecoilValue, useSetRecoilState} from 'recoil';
import { studentEmailAtom, studentPasswordAtom } from '@/store/StudentDetails';
import axios from 'axios';
import { BACKEND_URL } from '@/utils';

const StudentSignup: React.FC = () => {
    const email = useRecoilValue(studentEmailAtom)
    const password = useRecoilValue(studentPasswordAtom)
    const setEmail = useSetRecoilState(studentEmailAtom)
    const setPassword = useSetRecoilState(studentPasswordAtom)

    const StudentSignin = async () => {
        const response = await axios.post(`${BACKEND_URL}/student/signin`,{
            email,
            password
        })
        console.log(response.data)
    }


    return (
        <div>
            <Input value={email} onChange={(e : any) => setEmail(e.target.value)} type="text" text='enter your email' placeholder='adarsh@gmail.com' />
            <Input value={password} onChange={(e : any) => setPassword(e.target.value)} type="password" text='enter your password' placeholder='adarsh123' />
            <BigButton text='Signin' onClick={StudentSignin} />
        </div>
    );
};

export default StudentSignup;