/* eslint-disable react/prop-types */
function CalcNavbar({ inputVal, answer }) {
  return (
    <div className="screen text-right  rounded-md ">
      <p className="py-4 px-4 text-3xl font-medium">
        {!inputVal ? "0" : ""}
        {answer ? answer : inputVal}
      </p>
    </div>
  );
}

export default CalcNavbar;
