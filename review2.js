var movies = [
    'Avengers Endgame',
    'A Clockwork Orange',
    'Pulp Fiction',
    'A Bugs Life',
    'Toy Story'
];

movies.forEach(item => {
    console.log(item);
});

for(var i = 0; i < movies.length; i++) {
    console.log(i);
    var x = movies[i];
    console.log(x);
}

var movies2 = movies.map(item => {
    return item + ':THE FINAL CHAPTER';
}) 
console.log(movies2);

var movies3 = movies.filter(item => {
    return  item.length > 15;
})
console.log(movies3);