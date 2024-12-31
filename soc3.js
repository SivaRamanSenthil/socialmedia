let currentUser  = null;

document.getElementById('createProfile').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    if (username) {
        currentUser  = username;
        alert(`Profile created for ${currentUser }`);
        document.getElementById('username').value = '';
    } else {
        alert('Please enter a username.');
    }
});

document.getElementById('submitPost').addEventListener('click', function() {
    if (!currentUser ) {
        alert('Please create a profile first.');
        return;
    }

    const postContent = document.getElementById('postContent').value;
    const postImage = document.getElementById('postImage').files[0];

    if (postContent || postImage) {
        const post = document.createElement('div');
        post.classList.add('post');

        const postText = document.createElement('p');
        postText.textContent = `${currentUser }: ${postContent}`;
        post.appendChild(postText);

        if (postImage) {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(postImage);
            post.appendChild(img);
        }

        const likeButton = document.createElement('button');
        likeButton.textContent = 'Like';
        let likes = 0;
        likeButton.addEventListener('click', function() {
            likes++;
            like