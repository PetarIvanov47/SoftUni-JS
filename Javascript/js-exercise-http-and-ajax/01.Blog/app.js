function attachEvents() {
    // Menu buttons Elements
    const loadPostsButtonElement = document.getElementById('btnLoadPosts');
    const viewPostButtonElement = document.getElementById('btnViewPost');

    // Select post menu element
    const selectPostsElement = document.getElementById('posts');

    // Post details Elements
    const postTitleElement = document.getElementById('post-title');
    const postBodyElement = document.getElementById('post-body');
    const postCommentsElement = document.getElementById('post-comments');

    // Blog Base Url
    const blogUrl = 'http://localhost:3030/jsonstore/blog';

    // // Add Event Listener to "Load Posts" Button
    loadPostsButtonElement.addEventListener('click', async () => {
        selectPostsElement.innerHTML = '';

        const postsResponse = await fetch(`${blogUrl}/posts`);
        const posts = await postsResponse.json();

        for (const postId in posts) {
            const currentPostInfo = posts[postId];

            // Create option Element
            const optionElement = document.createElement('option');
            optionElement.value = postId;
            optionElement.textContent = currentPostInfo.title;

            // Append the option element in menu
            selectPostsElement.appendChild(optionElement);
        }


    });

    // Add Event Listener to "View" Button
    viewPostButtonElement.addEventListener('click', async () => {
        postCommentsElement.innerHTML = '';

        const allCommentsResponse = await fetch(`${blogUrl}/comments`);
        const allComments = await allCommentsResponse.json();

        const selectedPostId = selectPostsElement.value;

        const currentPostResponse = await fetch(`${blogUrl}/posts/${selectedPostId}`);
        const currentPostData = await currentPostResponse.json();

        postTitleElement.textContent = currentPostData.title;
        postBodyElement.textContent = currentPostData.body;

        for (const commentId in allComments) {
            const currentCommentData = allComments[commentId];

            if (currentCommentData.postId === selectedPostId) {
                const liElement = document.createElement('li');
                liElement.id = commentId;
                liElement.textContent = currentCommentData.text;

                postCommentsElement.appendChild(liElement)
            }
        };


    });
}

attachEvents();




