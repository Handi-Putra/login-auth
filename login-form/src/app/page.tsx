"use client"

import Notify, { showToast } from '@/component/notify'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { UserInfo } from './models/user.model'

const LoginForm = () => {
  const {register, handleSubmit, reset} = useForm<UserInfo>();

  const onSubmit = async (data: UserInfo) => {
    try {
      const endpoint = `${process.env.NEXT_PUBLIC_API_PATH}user/login`;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      }

      const res: any = await fetch(endpoint, options);
      const resMsg = await res.json();

      if (res.status == 202) {
        showToast(resMsg, "success");
        reset();
      } else showToast(resMsg, "error");

    } catch (e:any) {
      showToast(e, "error");
    }
  }

  return (
    <>
      <Notify />

      <main className='bg-pageBg bg-cover bg-center bg-no-repeat'>
        <div className='w-full h-screen flex justify-center 
                        items-center bg-black bg-opacity-25'>
          <aside className='bg-transparent w-full max-w-md rounded-xl 
                              bg-opacity-20 shadow-lg shadow-black'>
            <h1 className='text-center text-black font-light 
                          text-4xl bg-yellow 
                          rounded-t-xl m-0 py-4'>Login Form</h1>
            <form className='p-6'>
              <input type='text' placeholder='Email' 
                className='py-2 px-3 w-full 
                        text-black font-light outline-none'
                {...register("email", {required: true})}
              />

              <input type='password' placeholder='Password' 
                className='py-2 px-3 w-full 
                        text-black font-light outline-none mt-3'
                {...register("password", {required: true})}
              />

              <div className='flex mt-5 justify-between items-center'>
                <Link href='/sign-up' className='text-white cursor-pointer 
                                      transition hover:text-black'>
                  Not Yet Registered?
                </Link>
                <button type='submit' className='bg-black text-white 
                                                  font-medium py-2 px-8 
                                                  transition hover:bg-white hover:text-black'
                  onClick={handleSubmit(onSubmit)}
                >
                    Login
                </button>
              </div>
            </form>
          </aside>
        </div>
      </main>
    </>
  )
}

export default LoginForm