import { connection } from 'next/server';
import React from 'react';

const DisplayTime = async() => {
    await connection();
    const date = new Date().toLocaleDateString("en",{dateStyle:"full"});
    return (
        <div>
            {date}
        </div>
    );
};

export default DisplayTime;