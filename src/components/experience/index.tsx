import { useNumber} from "../../hooks"

const Experience = (props : {value:number})=>{
    const {experience} = useNumber(props.value)
    return <div>
        {experience}
    </div>
}
export default Experience