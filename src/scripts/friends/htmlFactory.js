const friendsHtmlFactory = {
    form: {
        makeFormHtml(){
            return `
            <article id="friend__form">
                <h2>Add New Friend</h2>
                <form action="">
                    <fieldset>
                        <label for="new-friend-name__field">New Friend</label>
                        <input type="text" name="new-friend-name__field" id="new-friend-name__field" placeholder="Enter username here...">
                    </fieldset>
                </form>
                <div class="buttons">       
                    <button id="friend-save__button">Save</button>
                    <button id="friend-cancel__button">Cancel</button>
                </div>
            </article>
            `
        }
    },
    friend: {
        makeHtml(friend){
            return `
                <article>
                    <div>
                        <p><strong>Friend:</strong> ${friend.user.username}</p>
                    </div>
                    <div>
                        <button class="delete-button" id="friend-delete__button__${friend.id}">Delete</button>
                    </div>
                </article>
            `
        }
    }
}

export default friendsHtmlFactory;