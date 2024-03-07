//****** Exercice 1 ********/

function iterate_array1(arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        console.log(arr[i]);
    }
}

function iterate_array2(arr)
{
    for(const element of arr)
    {
        console.log(element);
    }
}

function iterate_array3(arr)
{
    for(const element in arr)
    {
        console.log(element,", ", arr[element] );
    }
}

function iterate_array4(arr)
{
    arr.forEach(element => {
        console.log(element);
    });
}

function test_arr()
{
    const my_arr = [1, 2, 3, 4, 6, 7];

    console.log("Tableau : ");
    iterate_array4(my_arr);
}

//test_arr();

//******** fibonatcci */

function fibo(n)
{
    if(n==0) return 0;
    if(n==1) return 1;
    else{
        return fibo(n-1)+fibo(n-2);
    }
}

function fibonacci(n)
{
    if(!Number.isInteger(n) || n < 0)
    {
        console.log("Forme invalide !");
        return undefined;
    }
    let tab =[];
    for(let i=0; i< n ; i++)
    {
        tab.push(fibo(i));
    }
    console.log(tab);
}

//fibonacci(8);

//****** Exercice 2 ******/

function bottles()
{
    song = '';
    for(let i=99; i>1; i--)
    {
        song +=`${i} bottles of beer on the wall, ${i} bottles of beer.\n`;
        song +=`Take one down and pass it around, ${i-1} bottles of beer on the wall.\n\n`;
    }

    song +='1 bottle of beer on the wall, 1 bottle of beer.\n';
    song +='Take one down and pass it around, no more bottles of beer on the wall.\n\n';
    
    song +='No more bottles of beer on the wall, no more bottles of beer.\n';
    song +='Go to the store and buy some more, 99 bottles of beer on the wall.';
    
    return song;
}

/* console.log(bottles()); */

function evaluate(exp)
{
    const stack = [];

    const letters = exp.split(' ');

    for(const letter of letters)
    {
        if(!isNaN(letter))
        {
            stack.push(Number(letter));
        }
        else if(isOperator(letter))
        {
            const operand1 = stack.pop();
            const operand2 = stack.pop();

            if(letter === '+')
            {
                stack.push(operand1 + operand2);
            }
            else if(letter === '-')
            {
                stack.push(operand1 - operand2);
            }
            else if(letter === '*')
            {
                stack.push(operand1 * operand2);
            }
            else if(letter === '/')
            {
                stack.push(operand1 / operand2);
            }
        }
    }
    return stack.pop();
}

function isOperator(letter)
{
    return letter === '+' || letter === '-' || letter === '*' || letter === '/';
}

const exp = '5 4 +';
console.log(`The evaluation of the expression ${exp} is ${evaluate(exp)}`);