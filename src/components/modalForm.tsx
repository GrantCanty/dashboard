import React, { FC, useEffect } from "react";
import View from "../types/views/view";

interface Props {
    views: Map<string, View>
}

const ModalForm: FC<Props> =({views}: Props) => {

    const [tmpViews, setTmpViews] = React.useState<Map<string, View>>(new Map())
    
    useEffect(() => {
        setTmpViews(views)
    }, [])
    
    let arr: string[] = [...tmpViews.keys()]

    return (
        <form>
            {arr.map((val: string, i: number) => {
                let c: View | undefined = views.get(val)
                if(c !== undefined) {
                    return <input type="text" value={c.getTitle()} key={i}></input>
                }
            })}
        </form>
    )
}

export default ModalForm;