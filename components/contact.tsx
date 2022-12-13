import React, { FC } from 'react'
import { useForm, ValidationError } from '@formspree/react';

const Contact: FC = () => {
    const [state, handleSubmit] = useForm("mrgdndzl");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }    
    return(
        <div className="bg-[#8E8B9E] mt-40 mb-36">
            <h1 className="mb-20 text-5xl font-bold tracking-tight text-center">Contact Me</h1>
            <div className="py-8 lg:py-16 px-4 mx-4 lg:mx-auto max-w-screen-md bg-[#B1B0C0] card">
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-[#3B3156] dark:text-[#3B3156]">Your email</label>
                        <input name='email' type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@email.com" required/>
                        <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-[#3B3156] dark:text-[#3B3156]">Subject</label>
                        <input name='subject' type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know how I can help you" required/>
                        <ValidationError 
                        prefix="Subject" 
                        field="subject"
                        errors={state.errors}
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-[#3B3156] dark:text-[#3B3156]">Your message</label>
                        <textarea id="message"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                        />
                    </div>
                    <div className='flex justify-end'>
                    <button type="submit" disabled={state.submitting} className="end py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact