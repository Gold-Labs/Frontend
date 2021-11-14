import { useState } from 'react'
import React from "react";
import AuthService from '../../service/authservice'
import { RegisterInput } from './register-Input'
import styles from './register.module.scss'

interface RegisterPrpops{
  authService:AuthService
}

export const Register = (props:RegisterPrpops) =>{
    const [inputs,setInputs] = useState({
        email:"",
        passwordCheck:"",
        password:"",
        name:"",
    })
    const [duplicateCheck,setDuplicateCheck] = useState(false)
    const {authService} = props

    const onDateChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const emailDupulicateCheck = async(email:string) =>{
        try{
            await authService.checkDuplicate(email)
            setDuplicateCheck(true)
        }catch(err){
            alert("중복된 이메일 입니다.")
        }
    }

    const register = async(event:any) =>{
        event.preventDefault()
        try{
            const {email,passwordCheck,password,name} = inputs
            if(!duplicateCheck) {alert("회원가입이 실패했습니다.");return}
            if(!email) {alert("이메일을 작성해주세요");return}
            if(!passwordCheck) {alert("패스워드 확인을 작성해주세요");return}
            if(!password) {alert("패스워드를 작성해주세요");return}
            if(!name) {alert("이름을 작성해주세요");return}
            if(passwordCheck !==password) {alert("비밀번호 확인이 다릅니다.");return}

            const payload = {
                email, 
                password,
                name
            }
            // await authService.register(payload)
        }catch(error){
            alert("회원가입이 실패했습니다.")
        }
    }

    return(
       <form className={styles.container} onSubmit={register}>
           <RegisterInput id="email" label="이메일"  onCheck ={emailDupulicateCheck} onChange={onDateChange}></RegisterInput>
           <RegisterInput id="password" label="비밀번호"  onChange={onDateChange}></RegisterInput>
           <RegisterInput id="passwordCheck" label="비밀번호 확인"  onChange={onDateChange}></RegisterInput>
           <RegisterInput id="name" label="이름"  onChange={onDateChange}></RegisterInput>
           <button type="submit" className={styles.register_btn}>가입하기</button>
       </form>
    )
}