/* eslint-disable react/prop-types */
function CalcBody({ onClick, handleCalculation, onReset, onDelete }) {
  return (
    <div
      className="calcbody grid grid-cols-4 py-4 sm:py-6 px-4 
          rounded-md gap-3 sm:gap-4 [&>*button]:hover:cursor-pointer"
    >
      <button
        className="btn  py-2 rounded-md border-b-4  text-3xl font-extrabold"
        value={7}
        onClick={e => onClick(+e.target.value)}
      >
        7
      </button>
      <button
        className=" btn py-2 rounded-md border-b-4  text-3xl font-extrabold"
        value={8}
        onClick={e => onClick(+e.target.value)}
      >
        8
      </button>
      <button
        className=" btn py-2 rounded-md border-b-4  text-3xl font-extrabold"
        value={9}
        onClick={e => onClick(+e.target.value)}
      >
        9
      </button>
      <button
        className="delkey py-2 rounded-lg border-b-4  shadow-md  uppercase font-bold text-2xl text-white"
        value={"del"}
        onClick={onDelete}
      >
        del
      </button>
      <button
        className=" btn py-2 rounded-md border-b-4  text-3xl font-extrabold"
        value={4}
        onClick={e => onClick(+e.target.value)}
      >
        4
      </button>
      <button
        className=" btn py-2 rounded-md border-b-4  text-3xl font-extrabold"
        value={5}
        onClick={e => onClick(+e.target.value)}
      >
        5
      </button>
      <button
        className=" btn py-2 rounded-md border-b-4  text-3xl font-extrabold"
        value={6}
        onClick={e => onClick(+e.target.value)}
      >
        6
      </button>
      <button
        className=" btn py-2 rounded-md border-b-4  text-3xl font-extrabold"
        value={"+"}
        onClick={e => onClick(e.target.value)}
      >
        +
      </button>
      <button
        className=" btn py-2 rounded-md border-b-4  text-3xl font-extrabold"
        value={1}
        onClick={e => onClick(+e.target.value)}
      >
        1
      </button>
      <button
        className=" btn py-2 rounded-md border-b-4  text-3xl font-extrabold"
        value={2}
        onClick={e => onClick(+e.target.value)}
      >
        2
      </button>
      <button
        className=" btn py-2 rounded-md border-b-4  text-3xl font-extrabold"
        value={3}
        onClick={e => onClick(+e.target.value)}
      >
        3
      </button>
      <button
        className=" btn py-2 rounded-md border-b-4  text-3xl font-extrabold"
        value={"-"}
        onClick={e => onClick(e.target.value)}
      >
        -
      </button>
      <button
        className=" btn py-2 rounded-md border-b-4  text-3xl font-extrabold"
        value={"."}
        onClick={e => onClick(e.target.value)}
      >
        .
      </button>
      <button
        className=" btn py-2 rounded-md border-b-4  text-3xl font-extrabold  "
        value={0}
        onClick={e => onClick(+e.target.value)}
      >
        0
      </button>
      <button
        className=" btn py-2 rounded-md border-b-4  text-3xl font-extrabold"
        value={"/"}
        onClick={e => onClick(e.target.value)}
      >
        /
      </button>
      <button
        className=" btn py-2 rounded-md  border-b-4  text-3xl font-extrabold"
        value={"*"}
        onClick={e => onClick(e.target.value)}
      >
        x
      </button>
      <button
        className="resetbtn py-2 rounded-lg border-b-4   uppercase font-bold text-2xl col-span-2  text-white"
        value={"reset"}
        onClick={onReset}
      >
        reset
      </button>
      <button
        className="equalsbtn  col-span-2 shadow-md  rounded-md border-b-4  text-3xl font-extrabold  "
        value={"="}
        onClick={handleCalculation}
      >
        =
      </button>
    </div>
  );
}

export default CalcBody;
