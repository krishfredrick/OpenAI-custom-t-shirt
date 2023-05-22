import React from 'react'

import CustomButton from './CustomButton'



function AiPicker({prompt, setPrompt, generatingImg, handleSubmit}) {
  return (
    <div className='aipicker-container'>
      <textarea
       className='apipicker-textarea'
       placeholder='Genearte Prompt'
       rows={5}
       value={prompt}
       onChange={(e)=>setPrompt(e.target.value)}
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg?(
          <CustomButton 
            type='outline'
            title='Asking AI...'
            customStyle='text-xs'
          />
        ):(
          <>
            <CustomButton 
            type='outline'
            title='AI logo'
            customStyle='text-xs'
            handleClick={()=>handleSubmit('logo')}
          />
           <CustomButton 
            type='filled'
            title='AI Full'
            customStyle='text-xs'
            handleClick={()=>handleSubmit('full')}
          />
          </>
        )}
      </div>
      AiPicker
    </div>
  )
}

export default AiPicker
