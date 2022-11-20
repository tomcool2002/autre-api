var routes = function(app){
    app.get("/",function(req,res){
        res.send("salut");
    })
    console.log("received get");

    app.post("/",function(req,res){
        if(!req.body.name || !req.body.score){
            console.log("erreur");
            return res.send({"status" : "error", "message": "missing parameters"});
        }
        else{
            return res.send(req.body);
        }
    })
};

module.exports = routes;
