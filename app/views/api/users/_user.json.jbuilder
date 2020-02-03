json.id user.id
json.fname user.fname
json.username user.username
json.funds user.funds


$.ajax({
    method: "POST",
    url:  '/api/users',
    data: {
        user:{
            username: "hi",
            password: "password",
            fname:"phelipe",
            lname:"fernandes",
            email:"phelipe"
        }
    }

    
})