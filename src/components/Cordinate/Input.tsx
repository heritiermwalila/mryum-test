 import React from 'react';

interface CoordinateInputProps {
    onInputValueChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

type InputRef = React.ForwardedRef<HTMLInputElement>

 const CoordinateInput = React.forwardRef((props: CoordinateInputProps, ref: InputRef) => {
    return <input
    ref={ref}
    type="text"
    placeholder="Example: 0,2"
    className="Robot-Input"
    onChange={props?.onInputValueChange}
  />
 })


export default CoordinateInput