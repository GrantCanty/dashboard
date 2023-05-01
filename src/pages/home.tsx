import { FC } from "react";
import View from "../components/view";
import Component from "../types/view";

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
        <>
            {c.map((comp: Component) => {
                type Props = {cc: Component}
                return <View view={comp} />
            })}
        </>
    )
}

export default Home;