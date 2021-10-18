import { useString} from "../../hooks"

const Job = (props : {value:string})=>{
    const {job} = useString(props.value)
    return <div>
        {job}
    </div>
}
export default Job