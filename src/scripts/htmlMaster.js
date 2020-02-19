const htmlMaster = {
    factory: {
        navBar() {
            return `
                <header>
                <a href="/src" class="header-link"><h1 class="header-title">Nutshell</h1></a>
                <nav class="main-nav">
                    <ul>
                        <li><a href="#user__div">User</a></li>
                        <li><a href="#friends__div">Friends</a></li>
                        <li><a href="#tasks__div">Tasks</a></li>
                        <li><a href="#chat__div">Chat</a></li>
                        <li><a href="#news__div">Articles</a></li>
                        <li><a href="#events__div">Events</a></li>
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