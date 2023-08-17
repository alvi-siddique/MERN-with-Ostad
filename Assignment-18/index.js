const app = require('./app')

app.listen(process.env.PORT, () => {
  console.log("website running on "+process.env.PORT)
})