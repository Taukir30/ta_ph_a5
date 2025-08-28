let histories = [];  //history array--------

//like counter functionality--------
let likes = document.getElementsByClassName('like');
let likeClick = 0;
for( let like of likes ){
    // console.log(like)
    like.addEventListener('click', function(e){
        likeClick++ ;
        document.getElementById('like_counter').innerText = likeClick;
    })
}

//copy counter function--------
let copyCount = 0;

function copyToClipboard(id){
    const textToCopy = document.getElementById(id).innerText;
    // console.log(textToCopy)

    //calling clipboard API for copying
    navigator.clipboard.writeText(textToCopy).then( () => {
        console.log('Text copied', textToCopy);
        document.getElementById('msg').style.display = 'block';

        alert('Number Copied !');

        setTimeout(() => {
            document.getElementById('msg').style.display = 'none';
        }, 2000);
    } )

    //increasing copy count----
    copyCount++;
    document.getElementById('copy_counter').innerText = copyCount;
}


//calling function-----------
function makeCall(id1, id2){

    let coins = parseInt( document.getElementById('coins').innerText );
    let callingName = document.getElementById(id1).innerText;
    let callingNumber = document.getElementById(id2).innerText;

    // console.log(callingNumber)

    if( coins < 20 ){
        alert('Unable to make the call. \nNot enough coins to make the call');
        return;
    }

    alert( `Now Calling: ${callingName} \nNumber: ${callingNumber}` );
    coins -= 20;
    document.getElementById('coins').innerText = coins;

    let now = new Date();
    let time = now.toLocaleTimeString();
    let lastCall = {name:callingName, number:callingNumber, time:time};

    histories.push(lastCall);

    printHistory();

}

let historySection = document.getElementById('history');



//history section dynamic functionality----------
function printHistory(){

    historySection.innerHTML = "";

    for( let history of histories ){

        let tile = document.createElement('div');
        tile.className = "tile bg-[#FAFAFA] rounded-md p-2 m-2 shadow-md flex justify-between items-center";

        tile.innerHTML = `<div class="left">
                            <h4 class="inter font-semibold text-xs">${history.name}</h4>
                            <p class="text-xs text-gray-500 my-1">${history.number}</p>
                        </div>
                        <span class="text-xs">${history.time}</span>`
        
        historySection.appendChild(tile);

    }

}

printHistory();

//clear history fuction-----
document.getElementById('btn_clear').addEventListener('click', function(e){
    histories = [];
    historySection.innerHTML = "";
})




