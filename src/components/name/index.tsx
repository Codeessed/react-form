import { useString } from "../../hooks"

const Name = (props:{value: string}) =>{
    const {name} = useString(props.value)
    return <div>
        {name}
    </div>
}
export default Name