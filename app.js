console.log('hello there -Obi Wan Kenobi')

let kVotes = 0
let djVotes = 0

function clickReset(){
    console.log('reset button clicked')
    kVotes = 0
    djVotes = 0
    updateDOM()
}

function click1K(){
    console.log('1 Ye')
    kVotes += 1
    updateDOM()
}

function click1DJ(){
    console.log('1 DJ')
    djVotes += 1
    updateDOM()
}

function click3K(){
    console.log('3 for Kanye')
    kVotes += 3
    updateDOM()
}

function click3DJ(){
    console.log('3 for DJ Khalid')
    djVotes += 3
    updateDOM()
}

function updateDOM(){
    document.getElementById('kVotes').innerText = kVotes
    document.getElementById('djVotes').innerText = djVotes

}