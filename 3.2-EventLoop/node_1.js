const fs = require('fs');

function someAsyncOperation (callback) {
	fs.readFile(__dirname, callback);
}

const timeoutScheduled = Date.now();

setTimeout (() => {
	const delay = Date.now() - timeoutScheduled;
	console.log(`${delay}ms have passed since I was scheduled`);
}, 1); // 如果这里的时间小于读文件所需要的时间是不是就会先执行这个方法的回调？

someAsyncOperation(() => { // 现在的情况是因为读文件操作的时间小于 setTimeout 的时间，所以这里的回调会先执行。
	const startCallback = Date.now();
	while (Date.now() - startCallback < 200) {
		// do nothing
	}
	console.log(Date.now() - startCallback, 'readFile end')
})
