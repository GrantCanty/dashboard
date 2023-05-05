import { FC } from "react";
import View from "../types/views/view";

interface Props {
    view: View
}

const FormComp: FC<Props> =({view}: Props) => {

    return (
        <div>
            <h3>{view.getTitle()}</h3>
        </div>
    )
}

export default FormComp;