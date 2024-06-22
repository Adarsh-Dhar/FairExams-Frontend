"use client"

import React, { useEffect, useState } from 'react';
import ExamCard from '@/components/ExamCard';
import axios from 'axios';
import { BACKEND_URL } from '@/utils';
import CreateProblem from '@/components/CreateProblem';
import { RecoilRoot } from 'recoil';
import Test from '@/components/Test';
import HomePage from '@/components/HomePage';


const App = () => {
    return(
        <div>
            <RecoilRoot>
            <HomePage />

            </RecoilRoot>
        </div>
    )
};

export default App;