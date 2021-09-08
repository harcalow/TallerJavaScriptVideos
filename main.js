(function(){
  self.Board = function(width,height){
this.width = width;
this.height = height;
this.playing = false;
this.game_over = false;
this.bars = [];
this.ball = null;
this.playing = false;
}

self.Board.prototype = { // metodo que retorna las barras y las pelotas que estan dentro del tablero
get elements(){
 var elements = this.bars.map(function(bar){
  return bar;
 });
 elements.push(this.ball);
 return elements;
}
}
})();



(function(){
  self.Bar = function(x,y,width,height,board){
   this.x = x;
   this.y = y;
   this.width = width;
   this.height = height;
   this.board = board;
   this.board.bars.push(this);
   this.kind = "rectangle";
   this.speed = 10;
  }
 
  self.Bar.prototype = {
   down: function(){
    this.y += this.speed;
 
   },
   up: function(){
    this.y -= this.speed;
   },
   toString: function(){
    return "x: "+ this.x +"y: "+ this.y ;
   }
  }
 })();
