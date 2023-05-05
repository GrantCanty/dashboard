import { FC, useEffect } from "react";
import ViewElement from "../components/viewElement";
import View from "../types/views/view";
import "../assets/styles/home.css"
import WeatherView from "../types/views/weather";

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
            
            let cp: WeatherView = new WeatherView((i%3)+1, Math.floor(i/3) +1, 1, 1)
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