import { FC } from "react";
import ViewElement from "../components/viewElement";
import Component from "../types/views/view";
import "../assets/styles/home.css"


/**
 * @description Home page
 */
const Home: FC = () => {
    let c: Component[] = new Array()
    
    /*let cp: Component = new Component(1,1,2,2)
    cp.title = `Test: ${0}`
    c.push(cp)

    cp = new Component(3,1,1,1)
    cp.title = `Test: ${1}`
    c.push(cp)

    cp = new Component(3,2,1,1)
    cp.title = `Test: ${2}`
    c.push(cp)

    cp = new Component(1,3,3,3)
    cp.title = `Test: ${3}`
    c.push(cp)*/

    for (let i = 0; i < 9; i++) {
        let cp: Component = new Component((i%3)+1, Math.floor(i/3) +1, 1, 1)
        cp.title = `Test: ${i}`
        c.push(cp)
    }

    return(
        <div className="views-wrapper">
            {c.map((comp: Component, i: number) => {

                return <ViewElement view={comp} key={i} />
            })}
        </div>
    )
}

export default Home;