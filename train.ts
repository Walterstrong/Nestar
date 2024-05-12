//////////////////////////////////////
console.log('*******************************');
console.log('ZL-TASK 👎👎👎 ');

function stringToKebab(input: string): string {
	return input.toLowerCase().replace(/\s+/g, '-');
}

console.log(stringToKebab('I love Kebab'));

console.log('*******************************');
//////////////
console.log('*******************************');
console.log('ZK-TASK 👎👎👎 ');
function printNumbers(): void {
	let count = 1;
	const intervalId = setInterval(() => {
		console.log(count);
		count++;
		if (count > 5) {
			clearInterval(intervalId);
		}
	}, 1000);
}

printNumbers();
console.log('*******************************');
////
