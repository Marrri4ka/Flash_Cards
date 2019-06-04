# Flash_Cards
 ⏳Flash card application


1) npm install gh-pages --save-dev
2) Add in package json -
  "deploy": "gh-pages -d dist",
  3)    publicPath: "/webpack-demo/"
  4) npm run build
  5) npm run deploy




Pictures

1)  WEBPACK
 {
    test:/\.html$/,
    use:['html-loader']
  },
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: [
      'file-loader'
    ]
  },

  2) Package.json

    "html-loader": "^0.5.5"



https://marrri4ka.github.io/Flash_Cards/
