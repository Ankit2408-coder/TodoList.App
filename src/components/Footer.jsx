import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center  w-full'>
            <div className="logo font-bold text-white text-2xl">
                <span className='text-green-500'> &lt;</span>

                <span>i</span><span className='text-red-500'>Task/&gt;</span>



            </div>
            <div className='justify-center border-2 border-red-600 rounded-full px-3 py-0 bg-fixed text-white font-bold items-center'> Created By<lord-icon
                src="https://cdn.lordicon.com/gbkitytd.json"
                trigger="morph"
                state="morph-heart"
                colors="primary:#c71f16">
            </lord-icon> CodeWithAnkit </div>
        </div>
    )
}

export default Footer