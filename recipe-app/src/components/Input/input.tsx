import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { Button } from "../Button/button";

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    clearable?: boolean
    onClear?: () => void
}

export const Input = ({ clearable, onClear, ...props }: InputProps) => {
    return (
        <div>
            <input {...props} />
            {clearable &&
                <Button style={{ marginRight: 20 }} onClick={() => onClear && onClear()}>
                    clear
            </Button>}
        </div>
    )
}