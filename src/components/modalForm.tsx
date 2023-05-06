import { FC } from "react";
import View from "../types/views/view";

interface Props {
    views: View[]
}

const ModalForm: FC<Props> =({views}: Props) => {

    return (
        <form>
            {views.map((c, i) => {
                return <input type="text" value={`${c.getTitle()} input`} key={i}></input>
            })}
        </form>
    )
}

export default ModalForm;