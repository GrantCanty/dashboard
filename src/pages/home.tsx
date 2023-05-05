import { FC, useEffect } from "react";
import ViewElement from "../components/viewElement";
import View from "../types/views/view";
import "../assets/styles/home.css"

interface Props {
    c: View[]
    push: (v: View) => void
}

/**
 * @description Home page
 */
const Home: FC<Props> = ({c, push}: Props) => {

    useEffect(() => {
        for (let i = 0; i < 9; i++) {
            let cp: View = new View((i%3)+1, Math.floor(i/3) +1, 1, 1)
            cp.title = `Test: ${i}`
            push(cp)
        }
    }, [])

    return(
        <div className="views-wrapper">
            {c.map((comp: View, i: number) => {

                return <ViewElement view={comp} key={i} />
            })}
        </div>
    )
}

export default Home;