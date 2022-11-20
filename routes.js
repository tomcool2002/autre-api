var routes = function(app){
    app.get("/",function(req,res){
        res.send("salut");
    })
    console.log("received get");
};

module.exports = routes;
