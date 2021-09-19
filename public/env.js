const mainWrapper = document.getElementById(`mainWrapper`);
const loading = document.getElementsByClassName(`loader`);
// const url = "https://jsonplaceholder.typicode.com/photos"



let limit = 10;
let page = 1;

async function getPosts() {

    // This is a placeholder RestAPI
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit${limit}&_page=${page}`);

    const data = await response.json();
    return data;
}

// This DB has an inbuilt limiting function which is wh we can retrieve limited number of entries
// But if our db does not have a limiting function and we have to retirieve one entry at a time we can use a for loop here and put our posts.forEach in a for loop and set i=10 for 10 posts. Most of thew logic will still be the same
async function showPosts() {
    const posts = await getPosts();
    posts.forEach(posts => {
        const postElement = document.createElement(`div`);
        postElement.classList.add(`post`);
        postElement.innerHTML = `<div class="imgPost">
        <img src="${posts.thumbnailUrl}" class="card-img-top" alt="post">
    </div>
    <div class="card-body postInfo">
        <p class="card-text postBody">${posts.title}</p>
        <h5 class="card-title postTag">#tags</h5>
        <a href="#" class="link-secondary postUsername">@username</a>
        <p class="text-end mb-0 pb-0 link-secondary postDate">date here</p>
    </div>`

        mainWrapper.appendChild(postElement);
    });
}


// Tried to add Animation didn't work as expected :'(
// function showLoading() {
//     loading.classList.add('show');

//     setTimeout(() => {
//         loading.classList.remove('show');
//         setTimeout(() => {
//             page++;
//             showPosts();
//         }, 3000)
//     }, 1000);
// }

showPosts();

window.addEventListener('scroll', () => {
    // To detect when we reach page end
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        page++;
        showPosts();
    }
});