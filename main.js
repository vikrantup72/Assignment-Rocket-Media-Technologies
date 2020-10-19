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

const n = 17;
const socks = [ 10,10,10,10,20,30,30,30,30,30,30,30,40,40,40,40,40];

console.clear();

console.group('Sorted and counted');
    console.log(`There is a total of ${sortAndCount(n, socks)} pairs`);
console.groupEnd();
