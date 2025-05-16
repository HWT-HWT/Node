
let G ={};

let app = function(req,res){
    
    if(G['/login']){
        G['/login'](req,res)
    }

}

app.get= function(string,cb){

    G[string] = cb;
    
}

app.get('/login',function(req,res){
    console.log('执行login方法');
})

app()
