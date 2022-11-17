export function roll(sides, dice, rolls){
	let values = []
	
	for(let i = 0; i < rolls; i++){
		let val = 0;
		for(let j = 0; j < dice; j++){
			val += choose(sides);
		}
		values[i] = val;
	}
	var results = {
		sides: sides,
		dice: dice,
		rolls: rolls,
		results: values
	}
	return JSON.stringify(results);
}

function choose(sides){
	let randNum = Math.floor(Math.random() * sides) + 1;
	return randNum;
}
