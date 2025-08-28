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




//history section dynamic functionality----------
let histories = [
    {name:'Fire Service Number', number:999, time:'11:36:58 AM'},
    {name:'Fire Service Number', number:999, time:'11:36:58 AM'}
];

let historySection = document.getElementById('history');

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

//clear history fuction-----
document.getElementById('btn_clear').addEventListener('click', function(e){
    histories = [];
    historySection.innerHTML = "";
})




