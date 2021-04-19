
import React, { useState } from 'react';

const App = () => {

    const [num, setNum] = useState();
    const [fnum, setFnum] = useState();
    const [lnum, setLnum] = useState();
    const [psum, setPsum] = useState();

    const [equal, setEqual] = useState();


    const num1 = (e) => {
        setFnum(e.target.value);
    }

    const num2 = (e) => {
        setLnum(e.target.value);
    }


    const Increm = () => {
        setNum('+');
        console.log(num);
    }

    const decrem = () => {

        setNum('-');
    }

    const Prod = () => {
        setNum('×');
    }

    const divide = () => {
        setNum('/');
    }

    const Calc = () => {
        const x = parseInt(fnum);
        const y = parseInt(lnum);
        let o = num;
        if (o === '+') {
            setEqual(x + y);
        }
        else if (o === '-') {
            setEqual(x - y);
        }
        else if (o === '×') {
            setEqual(x * y);
        }
        else {
            setEqual(Math.round(100 * x / y) / 100);
        }
        setFnum("");
        setNum("");
        setLnum("");

    }

    const Clear = () => {
        setEqual("");
        setFnum("");
        setNum("");
        setLnum("");
    }


    return (
        <>
            <div className="maindiv">
                <p>{equal}{fnum} {num} {lnum}</p>

                <div className="inputdiv">
                    <input placeholder="Num1" onChange={num1} value={psum}></input>
                    <input placeholder="Num2" onChange={num2} value={psum}></input>
                </div>

                <div className="btndiv">
                    <span>
                        <button className="btn1" onClick={Increm} value={num} >+</button>
                        <button className="btn2" onClick={decrem} value={num}>-</button>
                        <br></br>
                        <button onClick={Prod} value={num}>×</button>
                        <button onClick={divide} value={num}>/</button>
                        <br></br>
                        <span className="btnspan">
                            <button className="calc" onClick={Calc}>Calculate</button>
                            <button className="calc" onClick={Clear}>Clear</button>
                        </span>
                    </span>
                </div>
            </div>
        </>
    )


}

export default App;