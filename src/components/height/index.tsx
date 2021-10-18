import { useNumber} from "../../hooks"

const Height = (props : {value:number})=>{
    const {height} = useNumber(props.value)
    return <div>
        {height}
    </div>
}
export default Height