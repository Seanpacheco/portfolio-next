import React, { FC } from 'react'
import { useForm, ValidationError } from '@formspree/react';

const Contact: FC = () => {
    const [state, handleSubmit] = useForm("mrgdndzl");
    if (state.succeeded) {
        return <div className="alert alert-success">
                    <div>
                        <span>Thank you for contacting me, I'll get back to you as soon as I can.</span>
                    </div>
                </div>;
    
    }    
    return(
        <div className="bg-[#8E8B9E] mt-40 mb-36">
            <h1 className="mb-20 text-5xl font-bold tracking-widest text-center">Contact Me</h1>
            <div className="py-8 lg:py-16 px-4 mx-4 md:mx-auto max-w-screen-md bg-[#B1B0C0] card">
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-[#3B3F48]">Your email</label>
                        <input name='email' type="email" id="email" className="shadow-sm bg-[#3B3F48] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@email.com" required/>
                        <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-[#3B3F48]">Subject</label>
                        <input name='subject' type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-[#3B3F48] rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know how I can help you" required/>
                        <ValidationError 
                        prefix="Subject" 
                        field="subject"
                        errors={state.errors}
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-[#3B3F48]">Your message</label>
                        <textarea id="message"  className="block p-2.5 w-full text-sm text-gray-900 bg-[#3B3F48] rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                        />
                    </div>
                    <div className='flex justify-end'>
                        <div className='group w-28 active:animate-[slide] transition-none bg-[#4e309f] border-[6px] border-[#4e309f] rounded-md shadow-2xl'>
                            <button id='contact-btn' type="submit" disabled={state.submitting} className="end w-[6.2rem] flex group-active:animate-[slide] text-[#9c8ae0] transition-duration-0 transition-none shadow-inner shadow-[#4e309f] !rounded-full justify-center tracking-widest bg-gradient-to-b from-[#341f62] via-[#55379b] to-[#907acd]">Send message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact