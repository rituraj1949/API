var token = jwt.sign({email_id:'123@gmail.com'}, "Stack", {

    expiresIn: '30d' // expires in 30 days

     });