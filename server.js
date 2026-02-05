const express=require('express');
const usersdata=require('./MOCK_DATA.json')
const app=express();

const port=3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/api/users',(req,res)=>{
    res.json(usersdata);
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});