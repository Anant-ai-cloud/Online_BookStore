import React from 'react'

function Container({children}) {
  return (
    <div className=' dark:bg-slate-900'>
      {children}
    </div>
  )
}

export default Container
