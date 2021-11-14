import styles from "./register-input.module.scss"

interface RegisterInputPrpops{
    id:string
    label:string
    onCheck?:any
    onChange:(event: React.ChangeEvent<HTMLInputElement>) => void
}

export const RegisterInput = (props:RegisterInputPrpops) =>{
    return(
        <div className={styles.container}>
            <label htmlFor={props.id} className={styles.label}>{props.label}</label>
            <div className={styles.input_container}>
                <input type="text" id={props.id} name={props.id} 
                    className={props.onCheck? styles.input : styles.notchecked_input} 
                    onChange={props.onChange} >
                </input>
                {props.onCheck? <button className={styles.register_btn} onClick={props.onCheck}> 중복체크</button> : null} 
            </div>
        </div>
    )
}