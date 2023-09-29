
export default class Line {
    constructor(element) {
      this.element = element;
      
      this.path = document.getElementById('path');
      
      this.pathLength = this.path.getTotalLength();
      this.init();
     
    }
  
    init() {
        
        this.path.style.strokeDasharray = this.pathLength + ' ' + this.pathLength;
        
        this.path.style.strokeDashoffset = this.pathLength;
        
        window.addEventListener('scroll', () => {
             // what % is it down
        var scrollPercentage = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        
        // length to offset the dashes
        var drawLength = this.pathLength * scrollPercentage;
         
        //Draw in reverse
        this.path.style.strokeDashoffset = this.pathLength - drawLength;
        });
        
    }
        
    
  
    // draw(){
    //     
    //     // what % is it down
    //     var scrollPercentage = (document.body.scrollTop + document.documentElement.scrolltop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        
    //     // length to offset the dashes
    //     var drawLength = this.pathLength * scrollPercentage;
         
    //     //Draw in reverse
    //     this.path.style.strokeDashoffset = this.pathLength - drawLength;

        
    // }
}
  