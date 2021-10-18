import { useNumber} from "../../hooks"

const Age = (props : {value:number})=>{
    const {age} = useNumber(props.value)
    return <div>
        {age}
    </div>
}
export default Age