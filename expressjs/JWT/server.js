import express from 'express';

import jwt from 'jsonwebtoken';
const SECRET_ACCESS_TOKEN = "80374d5b1c24a079494035e7334d2880979f23aff11d41127ca5a67bcdbda9662bdde35d4c3b834a520c3c1763c11688a80e3f2e1bfe72e5236ab9c60b445e4e";
const app = express();
app.use(express.json())

app.get('/', authenticationToken, (req, res) => {
	return res.json({user: req.user});
}); 


app.post('/login', (req, res) => {

    const username = req.body.username;
    console.log("reqbody: ", req.body)
    const password = req.body.password;

    const user = {
        username: username,
        userId: "333"

    }
    console.log("user in create token: ", user)

    const accessToken = jwt.sign(user, SECRET_ACCESS_TOKEN);

    res.json({accessToken});
})


function authenticationToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) 
        return res.status(404).send('Token not found or invalid')


    console.log("decoded token: ", jwt.decode(token))
    jwt.verify(token, SECRET_ACCESS_TOKEN, (error, user) => {
        console.log('user in authentication token: ', user);
        if(error)
            return res.status(404).send('Token not found or invalid')
        req.user = user;
        
        next();
    })


}

app.listen(3000, () => {
    console.log('http://localhost:3000');
});