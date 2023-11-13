import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = function (s1, s2) {
    const arrayS1 = Array.from(s1)
    const arrayS2 = Array.from(s2)
    let c = 0
    let merged = ""
    while (c < (Math.max(arrayS1.length, arrayS2.length))) {
        merged += (typeof arrayS1[c] !== 'undefined') ? arrayS1[c] : "";
        merged += (typeof arrayS2[c] !== 'undefined') ? arrayS2[c] : "";
        c++
    }
    return merged
}

const UseRef = (props) => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    const mergedValue = merge(value1, value2)

    useEffect(function () {
        count.current += 1
        myInput2.current.focus()
    }, [value1])

    useEffect(function () {
        count.current++
        myInput1.current.focus()
    }, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{mergedValue} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input" ref={myInput1}
                    value={value1} onChange={e => setValue1(e.target.value)} />
            </div>
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <input type="text" className="input" ref={myInput2}
                    value={value2} onChange={e => setValue2(e.target.value)} />
            </div>
        </div>
    )
}

export default UseRef
