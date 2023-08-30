/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
  theme: {
    extend: {
        backgroundImage: {
            'feuerwehrhaus': "url('http://ffhausen.test/images/feuerwehrhaus.jpeg')"
        }
    },
  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
}

