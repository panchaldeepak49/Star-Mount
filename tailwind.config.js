/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      keyframes: {
                moveImages: {
                  '0%': { right: '-100%' }, /* Start off-screen on the right */
                  '100%': { right: '100%' }, /* Move completely off-screen on the left */
                },
              },
              animation: {
                moveImages: 'moveImages 20s linear infinite', /* Adjust animation duration as needed */
              },
      
       fontFamily :{
        DarkerGrotesque : ['Darker Grotesque','sans-serif'],
        OpenSans : ['Open Sans','sans-serif'],
        Syne : ['Syne','sans-serif'],
        PlayFair : ['Playfair Display','sans-serif'],
        ZillaSlab : ['Zilla Slab', 'serif']
       }       
            
    },
  },
  plugins: [],
}


// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         moveImages: {
//           '0%': { right: '-100%' }, /* Start off-screen on the right */
//           '100%': { right: '100%' }, /* Move completely off-screen on the left */
//         },
//       },
//       animation: {
//         moveImages: 'moveImages 10s linear infinite', /* Adjust animation duration as needed */
//       },
//     },
//   },
//   plugins: [],
// };