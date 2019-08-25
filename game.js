// RANDOM HELPER FUNCTIONS //
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}
movesound = new sound("move.wav");
window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

if(typeof(String.prototype.trim) === "undefined"){
    String.prototype.trim = function(){
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}
function getRandomInt(min,max){
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random()*(max-min))+min;
}
function windowClose() {
	window.open('','_parent','');
	window.close();
}
function size_update(){
	$("#designer").show()
	if(window.mobilecheck()){
		if(window.innerHeight > window.innerWidth){
			$("#score").css("font-size","5vw")
			preview.style.left = "76vw"
			canvas.height = .75*window.innerHeight
			canvas.width = .55*window.innerWidth
			canvas.style.margin = "6vh auto auto 20vw";
		}else{
			$("#score").css("font-size","3vw")
			$("#designer").hide()
			preview.style.left = "60vw"
			canvas.height = .96*window.innerHeight
			canvas.width =.25*window.innerWidth
			canvas.style.margin = "1vh auto 0 36vw";
		}

	}else{
		$("#score").css("font-size","2vw")
		preview.style.left = "60vw"
		canvas.height = .97*window.innerHeight
		canvas.width = .25*window.innerWidth
		canvas.style.margin = "1vh auto 0 35%"
	}
	// $("#board").width(1.1*canvas.width);
	context.fillStyle = 'rgb(210,210,210)';
	context.fillRect(0,0,canvas.width,canvas.height);
	b_height = (1/13)*canvas.clientHeight
	b_width = (1/6)*canvas.clientWidth
	preview.height = b_height*3
	preview.width = b_width
	ptext.fillStyle = 'rgb(210,210,210)'
	ptext.fillRect(0,0,preview.width,preview.height)
}
// CODING BELOW //
const canvas = document.getElementById('columns');
const context = canvas.getContext('2d');
const preview = document.getElementById('preview');
const ptext = preview.getContext('2d');
size_update()
// LOGIC BELOW //
class Game{
	constructor(){
		this._running = false
		this.game_over = false
		this.matched = []
		// this.cell_list = []
		this._cell_list = []
		this._cell_col = 0
		this._cell_row = 0
		this._swap = 0

		this._board = []
		this._board_col = 6
		this._board_row = 13

		this._dropInterval = 1000;
		this.score = 0
		this.encrypted = 0
		this._frozen = 0
	}
	check(){
		var leftover = 0
		for (let r=1; r<2;r++){
			for (let c=0; c<this._board_col; c++){
				if(this._board[r][c] != '   ' && this.matched.length==0 && this._cell_list.length == 0){
					leftover = 1
				}
			}
		if (leftover != 0){
			this.encrypted = this.score
			$("#final-score").html("SCORE: " + this.score)
			$('#force').val(this.score);
			this.game_over = true
			this._running = false
			} 
		}if(this.game_over ==true){
			$( "#save").prop( "disabled", false );
			M.Modal.getInstance($("#modal2")).open();
		}
	}

	printer(){
		for (let r=2; r<this._board_row+2;r++){
			var string = "|"
			for (let c = 0; c<this._board_col; c++){
				string += this._board[r][c]
			}	
			console.log(string + "|")
			if (r == this._board_row +1){
				console.log(' ' + "---".repeat(this._board_col) + ' ')}	
		}
		this.check()
		if (this.game_over == true){
			console.log("GAME OVER")
		}
	}
	pause(){
		this._running = false
	}
	resume(){
		this._running = true
	}
	restart(){
		this.new_game_board()
		this.pause()
		$("#score").html("SCORE: "+ this.score);
	}
	new_game_board(){
		this._frozen = 0
		this._swap = 0
		this.score = 0
		this._board = []
		this._dropInterval = 1000;
		var board = this._board
		for (let r=0; r<this._board_row+2;r++){
			board.push([])
			for (let c=0; c<this._board_col;c++){
				board[r].push('   ')
			}
		}
		this._board = board
		this._running = true
		this.game_over = false
		this._cell_list = []
		this._cell_col = 0
		this._cell_row = 0 
	}

	gap_scan(){
		var gaps = 0
		for (let r=0; r<this._board_row+1; r++){
			for (let c=0; c<this._board_col; c++){
				if (this._board[r][c] != '   ' && this._board[r+1][c] =='   '){
					gaps++
				}
			}
		}
		return gaps != 0
	}

	gravity(){
		if (this._cell_list.length == 0){
			while(this.gap_scan()){
				for (let r=0; r<this._board_row+2; r++){
					for (let c=0; c<this._board_col; c++){
						if(this.valid_row(r+1) && this._board[r+1][c]=='   '){
							this._board[r+1][c] = this._board[r][c]
							this._board[r][c] = '   '
						}	}	}	}	}
		this.refresh()
	}
	construct(instruction){
		if(instruction!=null && instruction.split(' ').length == 5){
			if(this._cell_list.length == 0 && this.matched.length == 0){
				var cell = instruction.slice(2).split(' ')
				this._cell_col = cell[0] - 1 ; 
				if(this._cell_col >= this._board_col || this._cell_col<0){
				}else if(this._board[this._cell_row+2][this._cell_col] != '   '){
					this.encrypted = this.score
					$("#final-score").html("SCORE: " + this.score)
					$('#force').val(this.score);
					this.game_over = true;
					this._running = false;
					$( "#save").prop( "disabled", false );
					M.Modal.getInstance($("#modal2")).open();
				}else{
					for(let r=1;r<4;r++){
						this._board[r-1][this._cell_col] = '['+cell[r]+']';
						this._cell_list.push(cell[r]);
					}
					if(this._board[this._cell_row + 3][this._cell_col] != '   '){
						this.land()
					}
				}
			}
		}
	}

	drop(){
		if(this._cell_list.length != 0){
			if(this._board[this._cell_row][this._cell_col].includes("|")){
				this.freeze()
			}else if(this._board[this._cell_row + 3][this._cell_col] == '   '){
				var count = 0
				for(let r=this._cell_row; r<this._cell_row+3; r++){
					this._board[r+1][this._cell_col] = '['+this._cell_list[count]+']'
					count++
				}
				this._board[this._cell_row][this._cell_col] = '   ';
				this._cell_row++
				try{
					if (this._board[this._cell_row+3][this._cell_col] != '   '){
						this.land()}}
				catch{
					this.land()}
			}else{
				this.land()}
		}
	}
	land(){
		var count = 0
		for(let r=this._cell_row; r<this._cell_row+3; r++){
			this._board[r][this._cell_col] = '|'+this._cell_list[count]+'|'
			count++
		}
	}

	freeze(){
		var count = 0
		for(let r=this._cell_row; r<this._cell_row+3; r++){
			this._board[r][this._cell_col] = ' '+this._cell_list[count]+' ';
			count++
		}
		this._cell_list = []
		this._cell_row = 0
		this._cell_col = 0
		this._swap = 0 
		this._frozen += 1
	}

	left_obstacle(){
		for(let r=this._cell_row; r< this._cell_row+3; r++){
			if(this._board[r][this._cell_col-1] != '   ')
				return 1
		}
		return 0
	}
	right_obstacle(){
		for(let r=this._cell_row;r<this._cell_row+3;r++){
			if(this._board[r][this._cell_col+1]!= '   '){
				return 1
			}
		}
		return 0
	}

	move_left(){
		if (this._cell_list.length != 0 && this._cell_col-1>=0 && this.left_obstacle() == 0){
			try{
				if(this._board[this._cell_row+3][this._cell_col-1] != '   '){
					this.left()
					this.land()
				}else{
					this.left()
				}
			}catch{
				this.left()
				this.land()
			}
		}
	}
	move_right(){
		if(this._cell_list.length != 0 && this._cell_col+1<this._board_col && this.right_obstacle() == 0){
			try{
				if(this._board[this._cell_row+3][this._cell_col+1] != '   '){
					this.right()
					this.land()
				}else{
					this.right()
				}
			}catch{
				this.right()
				this.land()
			}
		}
	}
	right(){
		var count=0
		for(let r=this._cell_row;r<this._cell_row+3;r++){
			this._board[r][this._cell_col+1] = '['+this._cell_list[count]+']'
			this._board[r][this._cell_col] = '   '
			count++
		}
		this._cell_col++
		movesound.play()
	}
	left(){
		var count=0
		for(let r=this._cell_row;r<this._cell_row+3;r++){
			this._board[r][this._cell_col-1] = '['+this._cell_list[count]+']'
			this._board[r][this._cell_col] = '   '
			count++
		}
		this._cell_col--
		movesound.play()
	}
	rotate(){
		if (this._cell_list.length != 0){
			let temp = []
			var landed = false
			temp.push(this._cell_list[2])
			temp.push(...this._cell_list.slice(0,2));
			this._cell_list=temp
			if(this._board[this._cell_row][this._cell_col].includes('|')){
				landed = true}
			var counter=0
			for(let r=this._cell_row; r< this._cell_row +3; r++){
				this._board[r][this._cell_col] = '['+this._cell_list[counter]+']'
				counter++
			}if (landed==true){
				this.land()
			}
			movesound.play()
		}
	}
	clear(){
		for(let r=0;r<this._board_row+2;r++){
			for(let c=0; c<this._board_col;c++){
				if(this._board[r][c].includes('*')){
					this._board[r][c] = '   '
				}
			}
		}this.matched = []
		this.gravity()
	}

	refresh(){
		if(this._cell_list.length == 0){
			this.matcher()
		}
	}
	matcher(){
		for(let r=0; r<this._board_row+2; r++){
			for(let c=0; c<this._board_col; c++){
				this.matchBegin(r,c)
			}
		}
		this.mark()
	}
	mark(){
		var blocks=0
		for(let i=0; i<this.matched.length; i++){
			var coord = this.matched[i]
			if(!this._board[coord[0]][coord[1]].includes('*')){
				this._board[coord[0]][coord[1]] = '*'+this._board[coord[0]][coord[1]].trim()+'*'
				blocks++
			}
		}
		if(blocks>=3){
			if(blocks == 3){
				this.score += blocks*5
			}else{
				this.score += (blocks-3)*10 + 15
			}
		}
		$("#score").html("SCORE: "+ this.score);
	}
	matchBegin(r,c){
		return this.match(r,c,0,1)||this.match(r,c,1,1)||this.match(r,c,1,0)||this.match(r,c,1,-1)||this.match(r,c,0,-1)||this.match(r,c,-1,-1)||this.match(r,c,-1,0)||this.match(r,c,-1,1)
	}
	match(r,c,cdelta,rdelta){
		var start_cell = this._board[r][c]
		if(start_cell == '   '){
			return false
		}else{
			let tlist = []
			for(let i = 1; i<3;i++){
				if(this.valid_col(c+cdelta*i)&&this.valid_row(r+rdelta*i)&&this._board[r+rdelta*i][c+cdelta*i]==start_cell){
					if(!this.matched.includes([r+rdelta*i,c+cdelta*i])){
						tlist.push([r+rdelta*i,c+cdelta*i])
					}if(!this.matched.includes([r,c]) && !tlist.includes([r,c])){
						tlist.push([r,c])
					}
				}else{
					return false
				}
			}
			this.matched.push(...tlist)
			return true
		}
	}

	valid_col(c){
		return c>=0 && c<this._board_col
	}
	valid_row(r){
		return r>=0 && r<this._board_row+2
	}
}

class Columns{
	constructor(){
		this.text = 'rgba(0,0,0,0.54)'
		this.textcontrast = '#e0e0e0'
		this._bg = 'rgb(255,255,255)'
		this._contrast = 'rgb(33,33,40)' 
		this._turquoise = "rgb(136,250,236)"
		this._blue = "rgb(0,0,250)"
		this._red = "rgb(250,0,0)"
		this._green = "rgb(0,250,0)"
		this._orange = "rgb(250,165,0)"
		this._purple = "rgb(170,0,250)"
		this._yellow = "rgb(250,250,0)"
		this._next = null
		this.game = new Game()
		this.game.new_game_board()
		this.display()
		
	}
	switch(){
		if (this._next != null && this.game._cell_list.length != 0 && this.game._swap == 0){
			var next = this._next
			var current = this.game._cell_list
			next = next.split(' ').slice(2)
			this.game._cell_list = next
			this._next = `F ${this.game._cell_col+1} ${current.join(' ')}`
			var count = 0
			for(let r=this.game._cell_row; r<this.game._cell_row+3; r++){
				this.game._board[r][this.game._cell_col] = '['+this.game._cell_list[count]+']'
				count++
			this.game._swap = 1
			}
		}
	}

	mode(){
		let bg = this._bg
		let contrast = this._contrast
		let text = this.text
		let textcontrast = this.textcontrast
		this._bg = contrast
		this._contrast = bg
		this.text = textcontrast
		this.textcontrast = text

		document.querySelector("body").style.backgroundColor = this._bg
		$(".modal,.modal-footer").css('background-color',this._bg)
		document.getElementById("slide-out").style.backgroundColor = this._bg
		$(".menu-item,#loader,#scoreboard,html,input[type=text]").css('color',this.text)
	}
	display(){
		let x=0
		let y=0
		for(let r=2;r<this.game._board_row+2;r++){
			for(let c=0;c<this.game._board_col;c++){
				if (this.game._board[r][c]=='   '){
					context.fillStyle = this._bg
					context.fillRect(x,y,b_width,b_height)
				}else if(this.game._board[r][c].includes('S')){
					context.fillStyle = this._turquoise
					context.fillRect(x,y,b_width,b_height)
				}else if(this.game._board[r][c].includes('T')){
					context.fillStyle = this._blue
					context.fillRect(x,y,b_width,b_height)
				}else if(this.game._board[r][c].includes('V')){
					context.fillStyle = this._red
					context.fillRect(x,y,b_width,b_height)
				}else if(this.game._board[r][c].includes('W')){
					context.fillStyle = this._green
					context.fillRect(x,y,b_width,b_height)
				}else if(this.game._board[r][c].includes('X')){
					context.fillStyle = this._orange
					context.fillRect(x,y,b_width,b_height)
				}else if(this.game._board[r][c].includes('Y')){
					context.fillStyle = this._purple
					context.fillRect(x,y,b_width,b_height)
				}else if(this.game._board[r][c].includes('Z')){
					context.fillStyle = this._yellow
					context.fillRect(x,y,b_width,b_height)
				}if(this.game._board[r][c].includes('*')){
					context.fillStyle = 'rgba(255,255,255,0.6)';
					context.fillRect(x,y,b_width,b_height)
				}if(this.game._board[r][c].includes('|')){
					context.fillStyle = 'rgba(0,0,0,.3)'
					context.fillRect(x,y,b_width,b_height)
				}
				context.lineWidth = 2
				context.strokeStyle = 'rgb(230,230,230)'
				context.strokeRect(x,y,b_width,b_height)

				x+=b_width
			}
			y+=b_height
			x=0
		}this.preview()
	}
	preview(){
		if(this._next != null){
			var temp = this._next.slice(4).split(' ')
			let y = 0
			for(let r=0; r<temp.length;r++){
				if(temp[r] == 'S'){
					ptext.fillStyle = this._turquoise
					ptext.fillRect(0,y,b_width,b_height)
				}else if(temp[r]=='T'){
					ptext.fillStyle = this._blue
					ptext.fillRect(0,y,b_width,b_height)
				}else if(temp[r]=='V'){
					ptext.fillStyle = this._red
					ptext.fillRect(0,y,b_width,b_height)
				}else if(temp[r]=='W'){
					ptext.fillStyle = this._green
					ptext.fillRect(0,y,b_width,b_height)
				}else if(temp[r]=='X'){
					ptext.fillStyle = this._orange
					ptext.fillRect(0,y,b_width,b_height)
				}else if(temp[r]=='Y'){
					ptext.fillStyle = this._purple
					ptext.fillRect(0,y,b_width,b_height)
				}else if(temp[r]=='Z'){
					ptext.fillStyle = this._yellow
					ptext.fillRect(0,y,b_width,b_height)
				}
				ptext.lineWidth = 2.5
				ptext.strokeStyle = 'rgb(230,230,230)'
				ptext.strokeRect(0,y,b_width,b_height)
			y+=b_height
			}
		}
	}
	generate(){
		if(this.game.matched.length==0 && this.game.game_over != true){
			if(this._next == null){
				let colors = ['S','T','V','W','X','Y','Z']
				let col = getRandomInt(1,7)
				let first = colors[getRandomInt(0,7)]
				let second = colors[getRandomInt(0,7)]
				for(let i=colors.length;i>=0;i--){if(colors[i]==first){colors.splice(i,1)}}
				let third = colors[getRandomInt(0,6)]
				this._next = "F "+[col,first,second,third].join(' ')
			}
			if(this.game._cell_list.length==0 && this.game.game_over != true){
				this.game.construct(this._next)
				this._next = null
			}
		}
	}
	
}
//GAME_ENGINE

test = new Columns()
let dropCounter=0;
let lastTime=0
function update(time=0){
	if(test.game._frozen == 6){
		test.game._dropInterval = 750
	}else if(test.game._frozen == 18 ){
		test.game._dropInterval = 600
	}else if(test.game._frozen == 36){
		test.game._dropInterval = 450
	}else if(test.game._frozen == 54){
		test.game._dropInterval = 250
	}else if(test.game._frozen == 70){
		test.game._dropInterval = 100
	}

	size_update()
	dropCounter+=time-lastTime;
	lastTime = time;
	if(dropCounter>test.game._dropInterval && test.game._running){
		test.game.clear();
		test.game.drop();
		test.game.refresh()
		dropCounter = 0;
	}
	test.display();
	test.game.check();
	
	test.generate();
	requestAnimationFrame(update);
}

document.addEventListener('keydown',event=>{
	if(test.game._running){
		if(event.keyCode===15){
			test.game.switch()
		}
		if(event.keyCode===37){
			test.game.move_left()
		}if(event.keyCode===38){
			test.game.rotate()
		}if(event.keyCode===39){
			test.game.move_right()
		}if(event.keyCode===40){
			// test.game.clear()
			test.game.drop()
			test.game.refresh()
		}if(event.keyCode===77 || event.keyCode===27 || event.keyCode===80){
			let temp = M.Sidenav.getInstance($(".sidenav"))
			if(temp.isOpen){
				temp.close()
			}else{
				temp.open()
			}
		}
	}
})
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);
var xDown = null;                                                        
var yDown = null;  

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
}; 

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }
    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    if(test.game._running){
	    if(Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
	        if ( xDiff>0 ) {
	        	test.game.move_left() 
	        } else {
	        	test.game.move_right()
	        }                       
	    }else{
	        if(yDiff>0){
	        	test.game.rotate() 
	        }else{ 
	        	test.game.drop()
	        	test.game.drop()
	        	test.game.refresh()
	        }                                                                 
	    }
	}
    /* reset values */
    xDown = null;
    yDown = null;                                             
};

update()

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems, options);
//   });

$(document).ready(function(){
	$('input#user-name').characterCounter();
	$('.modal').modal({});
    $('.sidenav').sidenav({
    	edge:'right',
    	onOpenStart: function(){test.game._running=false},
    	onCloseEnd: function(){test.game._running=true}
    });
});

// ============================================SCOREBOARD====================================================
// document.getElementById("invisible").addEventListener('load', getTopScores)



function getTopScores(e) {
    // if (e.type === 'load') return;
    // showLoader()
    var table = '<table class="scoreboard centered striped highlight">';
    table += '<h4 id="scoreboard" >Scoreboard</h4>';
    table += '<thead><th>Rank</th><th>Name</th><th>Score</th></thead></table>';
    document.getElementById("board").innerHTML = table +'<h4 id="loader" class="center-align" style="position:relative;top:10vh;">Loading...<div class="progress" style="width:70%;margin:2vh auto"><div class="indeterminate"></div></div></h4>'
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://script.google.com/macros/s/AKfycbwnfHP8eGWwdsfA2NqwGftt6YU1j4n3j5OCMWMo1aVgww_X48w/exec" + '?callback=""');
    xhr.onreadystatechange = function(e) {
      if (xhr.readyState === XMLHttpRequest.DONE &&
          xhr.status === 200) {
        var result = JSON.parse(e.target.response);
        buildResultTable(result.data);
      }
    }
    xhr.send();
  }

  function buildResultTable(data) {
    var table = '<table class="scoreboard centered striped highlight">';
    table += '<h4 id="scoreboard" >Scoreboard</h4>';
    table += '<thead><th>Rank</th><th>Name</th><th>Score</th></thead>';
    data.shift()
    var rows = [],
        data = data.sort((a,b)=>b[2]-a[2])
    var str = data.reduce(function(s, row,i) {
      if (row[0] && row[1] && row[2]) {
        s += '<tr>' +
          '<td>' + (i+1) + '</td>' +
          '<td>' + row[1] + '</td>' +
          '<td>' + row[2] + '</td>' +
          '</tr>';
      }
      return s;
    }, '')
    var container = document.getElementById("board")
    container.innerHTML = table + str + '</table>';
    // container.style.height = '80vh';
    // container.style.overflow = 'auto';
  }
function submission(){
	$( "#save").prop( "disabled", true );
	test.game.new_game_board();
	M.Modal.getInstance($('#modal2')).close()
	M.toast({html:'Score Posted!'})
	setTimeout(function(){$('input[name=Name]').val("")}, 3000);
	M.Sidenav.getInstance($(".sidenav")).open()
}