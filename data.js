const mongoose = require('mongoose')

userschma = mongoose.Schema(
    {
        Day: String,
        DATE: String,
       
        SUN: String,
        MOON: String,
        MERCURY: String,
        VENUS: String,
        MARS: String,
        JUPITER: String,
        SATURN: String,
        URANUS: String,
        NEPTUNE: String,
        PLUTO: String,
        NODE: String
    
    
})

module.exports=mongoose.model('as',userschma)