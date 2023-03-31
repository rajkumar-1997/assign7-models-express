const products=[];
const path=require('path');
const fs=require('fs');

module.exports= class Product{

    constructor(t){
        this.title=t;
    }

    save(){
       const p=path.join(path.dirname(process.mainModule.filename),'data','products.json');
       fs.readFile(p,(err,filecontent)=>{
        let products=[];
        if(!err){
            products=JSON.parse(filecontent);
        }

        products.push(this);
        fs.writeFile(p,JSON.stringify(products),(err)=>{
            console.log(err);
        })
       })
    }

    static fatchAll(cb){
        const p=path.join(path.dirname(process.mainModule.filename),'data','products.json');
        fs.readFile(p,(err,filecontent)=>{
            if(err){
                return cb ([]);
            }
            else{

                cb(JSON.parse(filecontent));
            }
        })
    }

} 