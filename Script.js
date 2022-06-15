// --------------------------------------------------------------------------------------------        
/************************************Shuffle****************************************/
/*


// function sufflé(array) {
    let curly = array.length;

    // Det ligger igjen elementer å shuffle
    while (0 !== curly) {
        // Velg et gjenliggende element
        let randID = Math. floor(Math.random() * CurlyID);
        curly -= 1;
        // Bytt ut med det nåværende elementet
        let tmp =array[randID];
        array[randID] = tmp;
        return array;
        // Selve bruken av Shuffle
        let vits = ["hoho", "haha"];
        arr = shuffleArray(arr);
        console.log(arr);
    }
}



*/

let vitser = 
        [`Why did the programmer quit his job?
        Because he didn't get arrays.`,
        
        `Why did the CSS major quit his job?
        He didn't get arrays.`,

        `An optimist says 'The glass is half full.'
        A pessimist says 'The glass is half empty.'
        A programmer says 'The glass is twice as large as necessary.'`,

        `A programmer puts two glasses on his bedside table before going to sleep. 
        A full one, in case he gets thirsty, and an empty one, in case he doesn't.`,

        `Why do Java programmers have to wear glasses?
        Because they don't C#.`,

        `!false
        (It's funny because it's true.)`
        
        ]
let randomJokes = vitser[Math.floor(Math.random() * 6)];

showRandomJoke();

function showRandomJoke() {
    document.getElementById('randomJokesDiv').innerHTML = randomJokes;
                            
}



// for(i = 0; i < vitser.length; i++) {
    
// };