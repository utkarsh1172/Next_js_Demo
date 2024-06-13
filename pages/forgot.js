import Link from 'next/link'
import React from 'react'

const forgot = () => {
  return (
    <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
  <div className="w-full max-w-md space-y-8">
    <div>
      <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=yellow&shade=600" alt="Your Company"/>
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Forgot Password</h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Or
        <Link href="/login" className="font-medium text-yellow-600 hover:text-yellow-500"> Log in</Link>
      </p>
    </div>
    <form className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div className="-space-y-px rounded-md shadow-sm">
     
        <div>
          <label for="email-address" className="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autoComplete="email" required className="pl-2 relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6" placeholder="Email address"/>
        </div>
       
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-yellow-600 focus:ring-yellow-600"/>
          <label for="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
        </div>

        
      </div>

      <div>
        <button type="submit" className="group relative flex w-full justify-center rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-yellow-500 group-hover:text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
            </svg>
          </span>
          Continue
        </button>
      </div>
    </form>
  </div>
</div> 
  )
}

export default forgot