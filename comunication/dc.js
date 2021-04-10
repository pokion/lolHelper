module.exports = {
	config: {
		prefix: 'xD ',
		comands: [
			{name: 'build',
				fun: function(string){
					/*składnia (prefix build ekko for jungle)*/
					if(string[2].toLowerCase() === 'for'&&
						string[0].toLowerCase() === 'build'){
						return string;	
					}else{
						return undefined;
					}
					
				}
			}
		]
	},
	/*funkcja wyszukuje prefixu w całym zapytaniu i zwraca komendę*/
	searchComand: function(msg){
		let prefix = this.config.prefix;
		let comands = this.config.comands;
		let reg = new RegExp("^"+prefix);
		/*sprawdzanie czy się zgadza prefix z wiadomością*/
		let outputRegex = msg.match(reg);

		if(outputRegex != null){
			let splitMsgPrefix = msg.split(prefix);
			let splitMsg = splitMsgPrefix[1].split(' ');
			let output = null;
			/*wyszukanie odpowiedniej komendy*/
			for(let i=0;comands.length>i;i++){
				if(splitMsg[0] === comands[i].name){
					output = comands[i].fun(splitMsg);
				}
			}
			return output;
		}else{
			return false;
		}
	}
}