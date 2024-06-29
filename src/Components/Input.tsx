function Input(props:any){
    const {placeholder, inputChange} = props
      return(
        <input placeholder={placeholder} onChange={inputChange}/>
    )
}
export default Input;