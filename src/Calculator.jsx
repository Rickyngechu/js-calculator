import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { evaluate } from "mathjs";

import CalcBody from "./CalcBody";
import CalcHeader from "./CalcHeader";
import CalcScreen from "./CalcScreen";

function Calculator() {
  const [inputVal, setInputVal] = useState("");
  const [answer, setAnswer] = useState("");

  /*In this small calculator we shall be using the math.js library to perform calculations */
  function handleCalculation() {
    try {
      const ans = evaluate(inputVal);
      setAnswer(ans.toLocaleString());
    } catch {
      toast("Please use the correct parameters", {
        duration: 2000,
        position: "top-right",
        icon: "😑",
      });
    }
  }

  function handleDel() {
    setInputVal(inputVal.slice(0, -1));
    setAnswer(answer.slice(0, -1));
  }

  function handleReset() {
    setInputVal("");
    setAnswer("");
  }

  function handleSetInputVal(val) {
    if (val) setInputVal(inputVal + val);
    if (answer) {
      setInputVal(inputVal + val);
    }
  }

  useEffect(function () {
    function handleKeyEvents() {
      document.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          handleCalculation();
        } else if (e.key === "Escape") {
          handleReset();
        } else if (e.key === "Backspace") {
          handleDel();
        }
      });
    }
    handleKeyEvents();

    return document.removeEventListener("keydown", handleKeyEvents);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-[30rem] w-[100%]  sm:w-[60%] space-y-2 max-w-[30rem]  p-4">
      <CalcHeader />
      <CalcScreen inputVal={inputVal} answer={answer} />
      <CalcBody
        onClick={handleSetInputVal}
        handleCalculation={handleCalculation}
        onReset={handleReset}
        onDelete={handleDel}
      />
    </div>
  );
}

export default Calculator;
