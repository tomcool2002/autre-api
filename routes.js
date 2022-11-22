const fs = require('fs');

var routes = function(app){
    app.get("/",function(req,res){
        console.log("received get");
        fs.readFile('./data.json','utf-8',(err,jsonString)=>{
            if(err){
                res.send(err);
            }else{
                try {
                const data = JSON.parse(jsonString);
                data.sort(function(a,b){
                    return b.score - a.score;
                });
                let BestScore = [];
                for(let compteur = 0; compteur < 10; compteur++){ 
                    console.log(data[compteur]);
                    BestScore[compteur] = data[compteur]; 
                }


                res.send(BestScore);
                } catch (error) {
                    console.log("error parsing JSON",err);
                }

            }

        })
    })


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
