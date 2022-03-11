function Cat(){
    this.stomach=[]
}

Cat.prototype.eat=function(mouse){
    this.stomach.push(mouse);
}

Cat.prototype.run=function(){
    Console.log('Run');
}

module.exports=Cat
