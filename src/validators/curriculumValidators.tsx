import {isCPF, isPhone, isDate} from "brazilian-values";

export const validateBirthday = (date:string) => {
    if(isDate(date)){
        return
    }
    return 'Insira uma data valida!'
}

export const validateCPF = (cpf:string) => {
    if(isCPF(cpf)){
        return
    }
    return 'Insira um cpf valido!'
}

export const validatePhone = (phone:string) => {
    if(isPhone(phone)){
        return
    }
    return 'Insira um numero valido!'
}