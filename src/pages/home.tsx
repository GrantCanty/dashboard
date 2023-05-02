import { FC } from "react";
import View from "../components/view";
import Component from "../types/views/view";
import "../assets/styles/home.css"

/**
 * @description Home page
 */
const Home: FC = () => {
    let c: Component[] = new Array()
    for (let i = 0; i < 9; i++) {
        let cp: Component = new Component(1,1)
        c.push(cp)
    }

    return(
        <div className="views-wrapper">
            {c.map((comp: Component, i: number) => {
                return <View view={comp} key={i} />
            })}
        </div>
    )
}

export default Home;