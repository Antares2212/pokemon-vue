<template>
    <nav class="navbar">
        <div class="container">
            <div class="navbar__content">
                <router-link to="/">
                    <img class="logo" src="https://assets.tcgcollector.com/build/images/navbar-logo.a9e74745.svg" alt="logo">
                </router-link>
                <div class="navbar__menu">
                    <router-link class="navbar__link" to="">
                        Expansions
                    </router-link>
                    <router-link class="navbar__link" to="/cards">
                        Cards
                    </router-link>
                    <router-link class="navbar__link" to="">
                        Premium
                    </router-link>
                    <router-link class="navbar__link" to="">
                        News
                    </router-link>
                    <div class="dropdown">
                        <div class="dropdown__link">
                            <router-link class="navbar__link" to="">
                                More
                            </router-link>
                        </div>
                        <ul class="dropdown__content">
                            <li>
                                <router-link to="">
                                    Help
                                </router-link>
                            </li>
                            <li>
                                <router-link to="">
                                    About
                                </router-link>
                            </li>
                            <li>
                                <router-link to="">
                                    Roadmap
                                </router-link>
                            </li>
                            <hr>
                            <li>
                                <router-link to="">
                                    <i class="fa-solid fa-envelope"></i>
                                    Contact
                                </router-link>
                            </li>
                            <li>
                                <router-link to="">
                                    <i class="fa-brands fa-discord"></i>
                                    Dsicord
                                </router-link>
                            </li>
                            <hr>
                            <li>
                                <router-link to="">
                                    <i class="fa-solid fa-clock-rotate-left"></i>
                                    Card database log
                                </router-link>
                            </li>
                            <li>
                                <router-link to="">
                                    <i class="fa-solid fa-circle-dollar-to-slot"></i>
                                    Donate
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="navbar__buttons">
                    <div class="dropdown">
                        <router-link class="navbar__link" to="#">
                            s
                        </router-link>
                        <div class="dropdown__content">
                            <li>
                                <a href="#">
                                    Sign in
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Create an account
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'NavBar',
}
</script>
<style>
    .navbar {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 56px;
        color: #fff;
        background-color: #112b45;
    }

    .navbar a {
        color: inherit;
        text-decoration: none;
    }

    .navbar__content {
        display: flex;
        align-items: center;
        width: 100%;
        margin-left: -0.5rem;
        margin-right: -0.5rem;
    }

    .navbar__menu {
        display: flex;
        height: 56px;
    }

    .navbar__link {
        display: flex;
        align-items: center;
        background-color: initial;
        border: 0;
        height: 56px;
        padding: 0 0.5rem;
        white-space: nowrap;
    }

    .navbar__buttons {
        display: flex;
        align-items: center;
        margin-left: auto;
    }

    .navbar__buttons button {
        margin-left: 1rem;
    }

    .logo {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 1.375rem;
        width: auto;
        margin-right: 3rem;
    }

    .dropdown {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .dropdown__link {
        display: flex;
    }
    
    .dropdown__content {
        position: absolute;
        width: 190px;
        top: 56px;
        right: 0;
        visibility: hidden;
        padding: 10px;
        color: #000000;
        box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.4);
        z-index: 99;
        background-color: #fff;
    }

    .dropdown__content hr {
        height: 1px;
        width: 100%;
        background-color: #b6b6b6;
    }

    .dropdown:hover .dropdown__content {
        visibility: visible;
    }

    .dropdown__content li {
        display: block;
        width: 100%;
        padding: 5px;
        text-decoration: none;
    }

    .dropdown__content li a {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px;
        text-decoration: none;
    }

    .dropdown__content li svg {
        margin-right: 5px;
    }
</style>