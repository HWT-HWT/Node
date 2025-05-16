const url = require('url')

var api = 'http://www.itying.com?name=zhangsan&age=20'


var temp = url.parse(api,true).query

console.log(temp);

console.log(`名字：${temp.name} 年龄：${temp.age}`);


