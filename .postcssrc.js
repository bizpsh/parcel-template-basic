//ECM ( Ecma Script Module) import, export
//CommonJS => Nodejs 지원 require

// import autoprefixer from 'autoprefixer';
// const autoprefixer = require('autoprefixer')

//export {
//   Plugin: [
//     autoprefixer
//   ]
// }

module.exports = {
  plugins: [
      require('autoprefixer')
  ]
}