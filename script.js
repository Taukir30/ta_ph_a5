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
