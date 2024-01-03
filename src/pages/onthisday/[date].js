import React from 'react';
import { useRouter } from 'next/router'; 


export default function OnThisDay() {
    const router = useRouter();
    return (
        <>
        <div>
            <h1>OnThisDay: {router.query.name}</h1>
        </div>
        </>
    )
}