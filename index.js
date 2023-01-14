// var figlet = require('figlet');

// figlet('sypark!!', function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data)
// });

// setTimeout(() => {console.log('2초')} , 2000)

const express = require("express");
var cors = require('cors')
const app = express();
const port = 3000;

app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/dog", (req, res) => {
  res.json({ sound: "멍멍" });
});

app.get("/cat", (req, res) => {
  res.send({ sound: "야옹" });
});

app.get("/user/:id", (req, res) => {
  // const q = req.params
  // console.log(q.id)

  const q = req.query;
  console.log(q);

  res.json({ user: q.id });
});

app.get("/sound/:name",(req,res) => {
    // const p = req.params
    const {name} = req.params
    console.log(name)
    if (name == 'dog') {
        res.json({ sound: "멍멍" })
    } else if (name == 'cat') {
        res.json({ sound: "야옹" })
    } else if (name == 'pig') {
        res.json({ sound: "꿀꿀" })
    } else {
        res.json({ sound: "알수없음" })
    }
}); 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
