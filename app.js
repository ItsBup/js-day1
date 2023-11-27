console.log('hello there! -Obi Wan Kenobi')

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

function badClick1K(){
    console.log('-1 Ye')
    kVotes += -1
    updateDOM()
}

function badClick1DJ(){
    console.log('-1 DJ')
    djVotes += -1
    updateDOM()
}


function click3(who){
    console.log('click 3', who)
    if(who == 'kanye'){
        kVotes += 3
    } else {
        djVotes += 3
    }
    updateDOM()
}

function badClick3(who){
    console.log('bad click 3', who)
    if(who == 'kanye'){
        kVotes += -3
    } else {
        djVotes += -3
    }
    updateDOM()
}

function updateDOM(){
    document.getElementById('kVotes').innerText = kVotes
    document.getElementById('djVotes').innerText = djVotes
}