"use client"
import { Button } from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import { useState } from "react";
import { FaEnvelope, FaEye, FaEyeDropper, FaEyeSlash, FaLock } from "react-icons/fa";

export default function Home() {
    const [showPass, setShowPass] = useState(false);
  return (
    <main className="flex items-center justify-center h-[90vh]">
        <div className="flex flex-col min-w-72 w-[40%] bg-primaryTransparent rounded-md p-4">
            <div className="text-3xl text-primary font-black text-center">
                Login to Admin Dashboard
            </div>
            <div className="mt-16">
                <div className="flex flex-col gap-4 w-[90%] mx-[5%]">
                    <div className="relative">
                        <label htmlFor="email" className="absolute top-1.5 left-12 text-md text-gray-700 font-medium">Email Address</label>
                        <FaEnvelope className="absolute top-[62.5%] translate-y-[-50%] left-3 text-primary text-2xl "/>
                        <Input type="text" placeholder="someone@gmail.com" name="email" className="px-12 pt-10 pb-6 text-xl placeholder:text-gray-400 placeholder:font-medium"/>
                    </div>
                    <div className="relative">
                        <label htmlFor="password" className="absolute top-1.5 left-12 text-md text-gray-700 font-medium">Password</label>
                        <FaLock className="absolute top-[62.5%] translate-y-[-50%] left-3 text-primary text-2xl "/>
                        <Input  type={`${showPass ? 'text' : 'password'}`} placeholder="✱ ✱ ✱ ✱ ✱ ✱ ✱ ✱" name="email" className="px-12 pt-10 pb-6 text-xl placeholder:text-gray-400"/>
                        <FaEyeSlash className={`absolute top-[50%] translate-y-[-50%] right-6 text-2xl cursor-pointer ${showPass ? 'text-primary' : 'text-gray-400'}`} onClick={() => setShowPass(prev=> !prev)}/>
                    </div>
                    <div className="mt-8">
                        <Button className="w-full">Login</Button>
                    </div>
                    <div className="w-full text-center"><span className="text-primary">forgot password? </span> contact your administrator</div>
                </div>
            </div>
        </div>
       
    </main>
  );
}
