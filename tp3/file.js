function once(fct) {
    let result;
    let executed = false;

    return function(...args) {
        if (!executed) {
            result = fct(...args);
            executed = true;
        }
        return result;
    };
}

// Exemple d'utilisation
function add(a, b) {
    console.log("Function add is executed.");
    return a + b;
}

const addOnce = once(add);

console.log(addOnce(2, 3)); // Appelé pour la première fois, affiche "Function add is executed." et renvoie 5
console.log(addOnce(4, 5)); // Ne pas appeler add, renvoie 5

/////////////////////////////////:

function maybeUnary(fct, def) {
    let result;
    let executed = false;

    return function(arg) {
        if (!executed) {
            result = fct(arg);
            executed = true;
            if (result === undefined) {
                return def;
            }
        }
        return result;
    };
}

// Exemple d'utilisation
function divideByTwo(x) {
    console.log("Function divideByTwo is executed.");
    return x / 2;
}

const divideByTwoMaybe = maybeUnary(divideByTwo, "Default");

console.log(divideByTwoMaybe(10)); // Appelé pour la première fois, affiche "Function divideByTwo is executed." et renvoie 5
console.log(divideByTwoMaybe(20)); // Ne pas appeler divideByTwo, renvoie 5 (le résultat précédent)

//// ***
function maybe(fct, def) {
    let result;
    let executed = false;

    return function(...args) {
        if (!executed) {
            result = fct(...args);
            executed = true;
            if (result === undefined) {
                return def;
            }
        }
        return result;
    };
}

// Exemple d'utilisation
function divide(...nums) {
    console.log("Function divide is executed.");
    const result = nums.reduce((acc, num) => acc / num, nums[0]);
    return isFinite(result) ? result : undefined;
}

const divideMaybe = maybe(divide, "Default");

console.log(divideMaybe(20, 2)); // Appelé pour la première fois, affiche "Function divide is executed." et renvoie 10
console.log(divideMaybe(10, 0)); // Ne pas appeler divide, renvoie "Default" (car la division par zéro retourne undefined)

////////////////////////////////

function memoize(fct) {
    const cache = new Map();

    return function(arg) {
        if (cache.has(arg)) {
            return cache.get(arg);
        } else {
            const result = fct(arg);
            cache.set(arg, result);
            return result;
        }
    };
}

// Exemple d'utilisation
function square(x) {
    console.log(`Calculating square of ${x}`);
    return x * x;
}

const memoizedSquare = memoize(square);

console.log(memoizedSquare(5)); // Calcule et renvoie le carré de 5
console.log(memoizedSquare(5)); // Renvoie directement le carré de 5 depuis le cache, sans recalculer
console.log(memoizedSquare(10)); // Calcule et renvoie le carré de 10
console.log(memoizedSquare(10)); // Renvoie directement le carré de 10 depuis le cache

///////////////

/////iter
function chainIterative(n) {
    return function(fct) {
        if (n === 0) {
            return function(x) { return x; }; // Fonction identité
        } else {
            return function(x) {
                let result = x;
                for (let i = 0; i < n; i++) {
                    result = fct(result);
                }
                return result;
            };
        }
    };
}

// Exemple d'utilisation
function double(x) {
    return x * 2;
}

const chainTwice = chainIterative(2)(double);
console.log(chainTwice(3)); // Renvoie double(double(3)) = 12

/////recurs

function chainRecursive(n) {
    if (n === 0) {
        return function(x) { return x; }; // Fonction identité
    } else {
        return function(fct) {
            return function(x) {
                return chainRecursive(n - 1)(fct)(fct(x));
            };
        };
    }
}

// Exemple d'utilisation
function triple(x) {
    return x * 3;
}

const chainThrice = chainRecursive(3)(triple);
console.log(chainThrice(2)); // Renvoie triple(triple(triple(2))) = 54
