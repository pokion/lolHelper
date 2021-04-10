const http = require('http');
module.exports = {
	/*array must contain comand,champion,for statment and position np ('build', 'ekko', 'for', 'mid')*/
	connect: function(array){
		let options = {
			host: 'www.mobafire.com',
			port: 80,
			path: '/'
		}
		http.get(options,(res)=>{
			console.log(res)
		}).on('error',(e)=>{
			console.log(e);
		})
	}
}