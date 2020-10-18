function sortAndCount( n, arr ) {
    let sorted = arr.sort( (a,b) => a - b);
    let pairs = 0;

    for (let i = 0; i < n - 1; i++) {
        if ( sorted[i] === sorted[i + 1]) {
            pairs++;
            i += 1;
        }
    }

    return pairs;
}


function stockAndCount( n, arr ) {
    let pairs = 0;
    const colors = arr.reduce((acc, val) => {
        (!!acc[val]) ? acc[val] += 1 : acc[val] = 1;
        return acc;
    }, {});
  
    Object.keys(colors).forEach( n => {
        let _pair = parseInt( colors[n] / 2);
        if ( _pair >= 1 ) pairs += _pair;
    });

    return pairs;
}

const n = 17;
const socks = [1,1,1,1,2,3,3,3,3,3,3,3,4,4,4,4,4];

console.clear();

console.group('Sorted and counted');
    console.log(`There is a total of ${sortAndCount(n, socks)} pairs`);
console.groupEnd();

console.group('Stocked and counted');
    console.log(`There is a total of ${stockAndCount(n, socks)} pairs`);
console.groupEnd();