const htmlMaster = {
    factory: {
        navBar() {
            return `
                <header>
                <h1 class="header-title">Nutshell</h1>
                <nav class="main-nav">
                    <ul>
                        <li><a href="index.html">Articles</a></li>
                        <li><a href="chat.html">Chat</a></li>
                        <li><a href="friends.html">Friends</a></li>
                        <li><a href="tasks.html">Tasks</a></li>
                        <li><a href="user.html">User</a></li>
                        <li><a href="events.html">Events</a></li>
                    </ul>
                </nav>
                </header>
            `
        },
        footer() {
            return `
            <div id="footer">
                <p>Copyright 2020 Modest Milky Way</p>
                <p>Created by: Modest Milky Way </p>
                <p><a href="https://github.com/nss-day-cohort-38/nutshell-modest-milky-way">
                Repo Link</a></p>
            </div>
            `
        }
    },
    renderer: {
        navBar() {
            const container = document.querySelector("header")
            let html = htmlMaster.factory.navBar();
            container.innerHTML = html;
        },
        footer() {
            const container = document.querySelector("footer")
            let html = htmlMaster.factory.footer();
            container.innerHTML = html;
        }
    }

}

export default htmlMaster;