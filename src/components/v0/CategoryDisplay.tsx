import {useState} from "preact/compat";

type CategoryDisplayProps = {
    data: Category
    onSelect: (item: PackOption) => void
    onUnSelect: (item: PackOption) => void
}

type SelectableElementProps = {
    data: PackOption
    onSelect: (item: PackOption) => void
    onUnSelect: (item: PackOption) => void
}
export default function ({data, onSelect, onUnSelect}: CategoryDisplayProps){
    return (<div class="flex flex-col gap-4 px-8 py-3 bg-white bg-opacity-5 rounded-3xl ">
        <h1 class="pl-5 text-3xl font-bold font-mono">{data.name}</h1>
        <div class="flex flex-wrap gap-4">{data.children.map(child => (
            <SelectableElement key={child.id} data={child} onSelect={onSelect} onUnSelect={onUnSelect}/>))}
        </div>
    </div>)
}
function SelectableElement({data, onSelect, onUnSelect}: SelectableElementProps) {
    let [selected, setSelected] = useState(false)
    return (<div class={`w-28 lg:w-32 text-center flex flex-col items-center rounded-xl bg-opacity-5 px-3 py-6 ${selected ? "bg-white" : ""}`}
                 onClick={() => {
                     selected ? onUnSelect(data) : onSelect(data)
                     setSelected(!selected)
                 }}>
        <img src={data.img || "https://vectorified.com/images/default-user-icon-33.jpg"}
             alt={`${data.name} icon`} class="w-16 "/>
        <h3 class="font-semibold text-lg">{data.name}</h3>
        <span class="italic text-sm opacity-50">{data.version}</span>
    </div>)
}