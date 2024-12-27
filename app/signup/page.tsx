"use client";

import axios from "axios";
import { useState } from "react";

export default function Page() {
    const[username,setUsername]=useState('');
        const[password,setPassword]=useState('');
        const[email,setEmail]=useState('');
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className="flex flex-col bg-zinc-900 items-center border rounded-lg p-4">
                <h3 className="text-xl m-3">Sign up</h3>
                <input className="m-2 text-black border-none rounded-md p-2" type="text" placeholder="username" onChange={e=>{
                    setUsername(e.target.value);
                }}  />
                <input className="m-2 text-black border-none rounded-md p-2" type="password" placeholder="password" onChange={e=>{
                    setPassword(e.target.value);
                }}  />
                <input className="m-2 text-black border-none rounded-md p-2" type="email" placeholder="email" onChange={e=>{
                    setEmail(e.target.value);
                }}  />
                <button className="bg-slate-500 m-4 px-5 py-2 rounded-md border-none " onClick={() => {
                
                    axios.post('http://localhost:3000/v1/signup', {
                        username,
                        password,
                        email
                    })
                }}>Sign up</button>
            </div>
        </div>
    );
    }