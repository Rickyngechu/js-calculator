/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //   colors: {
      //     "darkblue-mode": {
      //       "main-background": "hsl(222, 26%, 31%)",
      //       "toggle-background": "hsl(223, 31%, 20%)",
      //       "keypad-background": "hsl(223, 31%, 20%)",
      //       "screen-background": "hsl(224, 36%, 15%)",

      //       "enterdelkey-background": "hsl(225, 21%, 49%)",
      //       "enterdelkey-shadow": "hsl(224, 28%, 35%)",

      //       " toggle": "hsl(6, 63%, 50%)",
      //       "togglekey-shadow": "hsl(6, 70%, 34%)",

      //       "key-background": "hsl(30, 25%, 89%)",
      //       "key-shadow": "hsl(28, 16%, 65%)",

      //       blue: "hsl(221, 14%, 31%)",
      //       white: "hsl(0, 0%, 100%)",
      //     },

      //     "light-mode": {
      //       "main-background": "hsl(0, 0%, 90%)",
      //       "toggle-background": "hsl(0, 5%, 81%)",
      //       "keypad-background": "hsl(0, 5%, 81%)",
      //       "screen-background": "hsl(0, 0%, 93%)",

      //       "enterdelkey-background": "hsl(185, 42%, 37%)",
      //       "enterdelkey-shadow": "hsl(185, 58%, 25%)",

      //       toggle: "hsl(25, 98%, 40%)",
      //       "togglekey-shadow": "hsl(25, 99%, 27%)",

      //       "key-background": "hsl(45, 7%, 89%)",
      //       "key-shadow": "hsl(35, 11%, 61%)",

      //       " blue": "hsl(60, 10%, 19%)",
      //       white: "hsl(0, 0%, 100%)",
      //     },

      //     "bright-mode": {
      //       "main-background": "hsl(268, 75%, 9%)",
      //       "toggle-background": "hsl(268, 71%, 12%)",
      //       "keypad-background": "hsl(268, 71%, 12%)",
      //       "screen-background": "hsl(268, 71%, 12%)",

      //       "enterdelkey-background": "hsl(281, 89%, 26%)",
      //       " enterdelkey-shadow": "hsl(285, 91%, 52%)",

      //       toggle: "hsl(176, 100%, 44%)",
      //       "togglekey-shadow": "hsl(177, 92%, 70%)",

      //       "key-background": "hsl(268, 47%, 21%)",
      //       "key-shadow": "hsl(290, 70%, 36%)",

      //       blue: "hsl(60, 10%, 19%)",
      //       white: "hsl(0, 0%, 100%)",
      //       light: "hsl(52, 100%, 62%)",
      //     },
      //   },
      // },
      colors: {
        "Very-dark-desaturated-blue-mainbg": "'hsl(222, 26%, 31%)'",
        "Very-dark-desaturated-blue": "hsl(223, 31%, 20%)",
        "Very-dark-desaturated-blue-1": "hsl(224, 36%, 15%)",

        "Desaturated-dark-blue": "hsl(225, 21%, 49%)",
        "Desaturated-dark-blue-1": "hsl(224, 28%, 35%)",

        Red: "hsl(6, 63%, 50%)",

        "Dark-red": "hsl(6, 70%, 34%)",

        "Light-grayish-orange": "hsl(30, 25%, 89%)",

        "Grayish-orange": "hsl(28, 16%, 65%)",

        "Very-dark-grayish-blue": " hsl(221, 14%, 31%)",
        White: "hsl(0, 0%, 100%)",

        "Light-gray": " hsl(0, 0%, 90%)",
        "Grayish-red": "hsl(0, 5%, 81%)",

        "Very-light-gray": "hsl(0, 0%, 93%)",

        "Dark moderate cyan": "hsl(185, 42%, 37%)",
        "Very-dark-cyan": "hsl(185, 58%, 25%)",

        Orange: "hsl(25, 98%, 40%)",
        "Dark-orange": "hsl(25, 99%, 27%)",

        "Light-grayish-yellow": "hsl(45, 7%, 89%)",
        "Dark-grayish-orange": "hsl(35, 11%, 61%)",

        "Very-dark-grayish-yellow": "hsl(60, 10%, 19%)",

        "Very-dark-violet": "hsl(268, 71%, 12%)",
        "Very-dark-violet-1": "hsl(268, 75%, 9%)",

        "Dark-violet": "hsl(281, 89%, 26%)",
        "Vivid magenta": "hsl(285, 91%, 52%)",

        "Pure-cyan": "hsl(176, 100%, 44%)",
        "Soft-cyan": "hsl(177, 92%, 70%)",

        "Dark-magenta": "hsl(290, 70%, 36%)",

        "Light yellow": "hsl(52, 100%, 62%)",
        "Very-dark-blue": "hsl(198, 20%, 13%)",
      },
    },
  },
  plugins: [],
};
