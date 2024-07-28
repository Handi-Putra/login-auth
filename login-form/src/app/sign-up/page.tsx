"use client"

import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { UserInfo } from '../models/user.model'
import Notify, { showToast } from '@/component/notify'
import { headers } from 'next/headers'

const SignUp = () => {
  const {register, handleSubmit, reset} = useForm<UserInfo>();

  const onSubmit = async (data: UserInfo) => {
    try {
      const endpoint = `${process.env.NEXT_PUBLIC_API_PATH}user`;
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
                          rounded-t-xl m-0 py-4'>Register Form</h1>

            <form className='p-6'>
              <input type='text' placeholder='ex: John Hudson' 
                className='py-2 px-3 w-full 
                        text-black font-light outline-none'
                {...register("fullname", {required: true})}
              />

              <input type='email' placeholder='ex: johnss12@gmail.com' 
                className='py-2 px-3 w-full 
                      text-black font-light outline-none mt-3'
                {...register("email", {required: true})}
              />

              {/* <input type='text' placeholder='ex: +6281234567890' 
                className='py-2 px-3 w-full 
                      text-black font-light outline-none mt-3'
                {...register("phone", {required: true})}
              /> */}

              <input type='password' placeholder='Pass -> Min: 3, Max: 14 chars' 
                className='py-2 px-3 w-full 
                        text-black font-light outline-none mt-3'
                {...register("password", {required: true})}
              />

              <input type='password' placeholder='Retype your Password again!' 
                className='py-2 px-3 w-full 
                        text-black font-light outline-none mt-3'
                {...register("confirmPassword", {required: true})}
              />

              <div className='flex mt-5 justify-between items-center'>
                <Link href='/' className='text-white 
                                          cursor-pointer transition 
                                          hover:text-black'>
                  Already Registered?
                </Link>
                <button type='submit' className='bg-black text-white 
                                                  font-medium py-2 px-8 
                                                  transition hover:bg-white hover:text-black'
                  onClick={handleSubmit(onSubmit)}
                >
                    Register
                </button>
              </div>
            </form>
          </aside>
        </div>
      </main>
    </>
  )
}

export default SignUp