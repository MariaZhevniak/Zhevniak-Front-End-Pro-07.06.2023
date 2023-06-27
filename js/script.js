class SuperMath {
	constructor(obj) {
		this.X = obj.X;
		this.Y = obj.Y;
		this.znak = obj.znak;
	}

	check() {
		const {X, Y, znak} = this;
		const operators = ['+', '-', '/', '*', '%'];

		if(!operators.includes(znak)) {
			alert('Неправильний оператор');
			this.input();
			return;
		}

		const userConfirm = prompt(`Чи хочете ви виконати дію ${znak} з ${X} і ${Y}?`);

		if(userConfirm.toLocaleLowerCase() === 'так') {

			const result = eval(`${X} ${znak} ${Y}`);
			alert(`Результат: ${result}`);
			//або
			let result2;
			switch(znak) {
				case '+': result2 = X + Y;
				break;
				case '-': result2 = X - Y;
				break;
				case '/': result2 = X / Y;
				break;
				case '*': result2 = X * Y;
				break;
				case '%': result2 = X % Y;
				break;
			}

			console.log(`Результат: ${result2}`);

		} else {
			this.input();
		}
	}

	input() {
		this.X = +prompt('Введіть X', '');
		this.Y = +prompt('Введіть Y', '');
		this.znak = prompt('Введіть оператор (+, -, /, *, %):');

		this.check();
	}
}
const obj = { 
	X: 12, 
	Y: 3, 
	znak: '/',
};
const p = new SuperMath(obj);

p.check(obj);