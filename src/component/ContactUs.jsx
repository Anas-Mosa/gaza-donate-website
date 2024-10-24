import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
function ContactUs() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto mt-32">
    <h2 className="text-2xl font-bold text-orange-700 text-center mb-4">تواصل معنا</h2>
    
    <form className="space-y-4">
      <div>
        <label className="block text-right text-gray-700 mb-2" htmlFor="name">
          الاسم
        </label>
        <input
          type="text"
          id="name"
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-700 focus:border-orange-700 sm:text-sm"
          placeholder="أدخل اسمك"
        />
      </div>
      
      <div>
        <label className="block text-right text-gray-700 mb-2" htmlFor="email">
          البريد الإلكتروني
        </label>
        <input
          type="email"
          id="email"
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-700 focus:border-orange-700 sm:text-sm"
          placeholder="أدخل بريدك الإلكتروني"
        />
      </div>
      
      <div>
        <label className="block text-right text-gray-700 mb-2" htmlFor="message">
          الرسالة
        </label>
        <textarea
          id="message"
          rows="4"
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-700 focus:border-orange-700 sm:text-sm"
          placeholder="أدخل رسالتك"
        ></textarea>
      </div>
      
      <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-700 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-700">
        إرسال
      </button>
    </form>
    
    <div className="mt-6 flex justify-center gap-3 text-center mx-auto">
              <div>
                <a
                  href="#"
                  className="w-12 h-12 inline-flex justify-center items-center py-2 px-4 border border-orange-700 rounded-full shadow-sm bg-white text-sm font-medium text-orange-700 hover:bg-orange-700 hover:text-white"
                >
                  <FaFacebookF className="h-full w-full  hover:text-white" />
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="w-12 h-12 inline-flex justify-center items-center py-2 px-4 border border-orange-700 rounded-full shadow-sm bg-white text-sm font-medium text-orange-700 hover:bg-orange-700 hover:text-white"
                >
                  <FaGoogle className="h-full w-full  hover:text-white" />
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="w-12 h-12 inline-flex justify-center items-center py-2 px-4 border border-orange-700 rounded-full shadow-sm bg-white text-sm font-medium text-orange-700 hover:bg-orange-700 hover:text-white"
                >
                  <FaTwitter className="h-full w-full  hover:text-white" />
                </a>
              </div>
            </div>
  </div>
  )
}

export default ContactUs