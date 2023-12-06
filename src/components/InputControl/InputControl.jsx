import style from './Inputcontrol.module.css'

const InputControl = (props) => {
    return (
        <>

            <div className={style.container}>
                {
                    props.label && <label>{props.label}</label>
                }
                <input  {...props}/>
            </div>


        </>
    )
}
export default InputControl
