const app = require('./app');
const port = 8000;

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
})