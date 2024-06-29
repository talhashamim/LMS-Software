function Button(props: {
    btnValue: string;
    onclick: ()=>void;
    className: any;
    style?: any;
}){
const {className, onclick, btnValue} = props;
     return(
        <button className={className} onClick={onclick}>{btnValue}</button>
     )
}
export default Button;
