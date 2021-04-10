const mobafire = require(__dirname+'/mobafire.js');

module.exports ={
	config: {
		prefix: '/',
		comands: [
			{name: 'build',
				fun: function(string){
					
				}
			},
			{name: 'search', desc: ':('}
		]
	},
	/*funkcja wyszukuje prefixu w całym zapytaniu i zwraca wartość*/
	searchComand: function(msg){
		let comand = (msg[0] === this.config.prefix) ? true : false;
		let split = msg.split(' ');
	}
}