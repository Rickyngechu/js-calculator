import { useSwitchTheme } from "./context/Themecontext";

function CalcHeader() {
  const { theme, switchTheme } = useSwitchTheme();

  return (
    <div className="flex justify-between items-center py-2">
      <p className="heading  text-2xl font-medium">calc</p>

      <div className="togglecont flex items-center gap-4 ">
        <span className=" uppercase text-sm ">Theme</span>
        <div>
          <div className="py-1 px-1 flex items-center justify-between">
            <label htmlFor="theme1" className="">
              1
            </label>
            <label htmlFor="theme2">2</label>
            <label htmlFor="theme3">3</label>
          </div>
          <div className="btnscont rounded-full py-1 px-1 gap-2 flex items-center justify-between">
            <input
              type="radio"
              id="theme1"
              name="theme"
              value="darkblue-mode"
              className="accent-Red"
              onChange={e => switchTheme(e.target.defaultValue)}
            />
            <input
              type="radio"
              id="theme2"
              name="theme"
              value="light-mode"
              className="accent-Red"
              onChange={e => switchTheme(e.target.value)}
            />
            <input
              type="radio"
              id="theme3"
              name="theme"
              value="bright-mode"
              className="accent-Red"
              onChange={e => switchTheme(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalcHeader;
