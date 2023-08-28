import React from 'react'

function Button({children, type}) {
  return (
    <div>
      <button type={type}
      className="bg-green-800 px-4 py-2 text-gray-100 
      rounded hover:bg-green-700 my-2">{children}</button>
    </div>
  )
}

export default Button
