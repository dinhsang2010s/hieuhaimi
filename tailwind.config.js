/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('/login.jpg')",
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "body-background": "var(--body-background)",
        "component-background": "var(--component-background)",
        "text-color": "var(--text-color)",
        "components-background-lighten": "var(--components-background-lighten)",
        "text-color-secondary": "var(--text-color-secondary)",
        "antd-primary-color": "var(--antd-primary-color)",
      },
    },
  },
  plugins: [],
};
