const logout = async(req,res) =>{
    res.cookie('token', null, {
        expires: new Date(Date.now()),
    })
    res.send("User Successfully Logout");
}

module.exports = logout;