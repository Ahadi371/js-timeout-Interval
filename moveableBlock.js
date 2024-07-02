const Pondit = {
    moveableEl : null,
    target : function(container){
        const target = document.getElementById(container);
        this.moveableEl = this.createMoveableElement();
        target.appendChild(this.moveableEl);
        
       return this;
    },

    createMoveableElement : function(){
        const div = document.createElement('DIV');
        div.style.backgroundColor = 'red';
        div.style.height = '100px';
        div.style.width = '100px';
        div.style.position = 'absolute';
        div.style.top = '100px';
        div.style.left = '100px';
     
        return div;
    },

     move : function(){
        console.log(this.moveableEl)
        let currentPos = this.moveableEl.style.left;
        currentPos = parseInt( currentPos.substring(0, currentPos.length-2,-1 ))
        this.moveableEl.style.left = (currentPos + 50) + 'px'; 
    
        timer = setTimeout(move, 100);
    
       },

    setMoveableBlock: function(){
        
        console.log("I am moveable block")
    }
}




var timer = null;






   function stopMovement(){
     clearTimeout(timer);
   }