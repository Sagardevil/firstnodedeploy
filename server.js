const express=require('express');
const usersdata=require('./MOCK_DATA.json')
const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/api/users',(req,res)=>{
    res.json(usersdata);
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
