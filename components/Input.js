import React from 'react'

function Input({value, type, required, onChange}) {
  return (
    <input value={value} type={type} onChange={onChange}
    required className="border rounded px-3 py-1 w-80" />
  )
}

export default Input