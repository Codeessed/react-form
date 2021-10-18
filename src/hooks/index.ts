export const useString = (value:string) =>{
    const name = `Your name is ${value}`
    const job = `Being a ${value} is your source of livelihood`
    
    return {name, job}
}
export const useNumber = (value: number) =>{
    const age = `You're ${value} years old`
    const experience = `You have ${value} years of experience`
    const height =  `You are ${value}ft tall`
    return {age, experience, height}
}
