import React from 'react'

interface Heading {
    title: string;
    iconComp?: React.ReactNode;
}
function Button(props:Heading) {
const {iconComp}=props;
  return (
    <div className="flex justify-center items-center border border-indigo-500 bg-indigo-500 text-white rounded-md px-4  transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline py-1 "
    >

{iconComp}
    <button
    type="button"
    >
    {props.title}
  </button>
      </div>
  )
}

export default Button