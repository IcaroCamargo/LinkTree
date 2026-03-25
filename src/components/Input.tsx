interface InputProps{
    name: string;
    id: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input(props:InputProps){
    return(
        <div>
        <label className="text-xl flex mb-2" htmlFor={props.id}>{props.name}</label>
        <input className="bg-white border border-cyan-400 rounded-block rounded-xl px-4 py-2 w-full"type={props.type || "text"} id={props.id} name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
        </div>
    )
}