function solve(commands) {

    let arr = commands
        .shift()
        .split(' ')
        .map(Number);

    for (let i = 0; i < commands.length; i++) {
        let [command, firstNum, secondNum] = commands[i].split(' ');

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);



        switch (command) {
            case'Add':
                add(firstNum);
                break;
            case'Remove':
                remove(firstNum);
                break;
            case'RemoveAt':
                removeAt(firstNum);
                break;
            case'Insert':
                insert(firstNum,secondNum);
                break;

        }
    }

    function add(el) {
        arr.push(el);
    }

    function remove(num) {
        arr = arr.filter(el => el !== num)
    }

    function removeAt(index) {
        arr.splice(index,1)
    }

    function insert(num, index) {
        arr.splice(index, 0, num)

    }


console.log(arr.join(' '));
}
