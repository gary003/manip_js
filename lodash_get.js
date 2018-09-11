const _ = require('lodash')

const obj = {
    "id" : 12332 ,
    "data" : [
        {
            "nom" : "yellow_98" ,
            "value" : 34
        },
        {
            "nom" : "blue_12" ,
            "value" : 12
        },
        {
            "nom" : "red_42" ,
            "value" : 32
        }
    ]
}

console.log(_.get(obj , "data" , 0));
