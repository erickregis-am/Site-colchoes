import "../components-styles/Checkbox.css";

type typeofCheckBox = {
    checked: boolean,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    label: string,
}

export function Checkbox(props: typeofCheckBox){
    return(
        <div>
            <label className="checkboxContainer">
                <input type="checkbox" checked={props.checked} onChange={props.onChange} />
                <div>{props.label}</div>
            </label>
        </div>
    );
}