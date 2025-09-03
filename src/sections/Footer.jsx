import React from 'react'

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 ">
        <div className="text-white-500 flex gap-2">
            <p>Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>
        
        <div className="flex gap-3">
            {/* <div className="social-icon">
                <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
            </div> */}
            <button
                type="button"
                className="social-icon flex items-center justify-center rounded-full hover:bg-gray-800 transition-colors"
                onClick={() => window.open('https://github.com/zakahmedd', '_blank')}
                >
                <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
            </button>

             <button
                type="button"
                className="social-icon flex items-center justify-center rounded-full hover:bg-gray-800 transition-colors"
                onClick={() => window.open('https://www.linkedin.com/in/zak-ahmed-126620333/', '_blank')}
                >
                <img src="/assets/LinkedIn.png" alt="LinkedIn" className="w-1/2 h-1/2" />
            </button>

        </div>

        <p className="text-white-500">
            © 2025 Zak. All rights reserved.
        </p>

    </section>
  )
}

export default Footer