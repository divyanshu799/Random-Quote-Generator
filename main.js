let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quote = [
    '"The complexity of array is O(n)"',
    '"Our labour preserves us from three great evils -- weariness, vice, and want."',
    '"Too much freedom can lead to the souls decay."',
];
btn.addEventListener('click',function(){
    var random = quote[Math.floor(Math.random()*quote.length)]
    output.innerHTML = random;
})