<template>
    <div class="footer">
        <div class="container">
            <div class="footer__content">
                <div class="footer__nav">
                    <div class="footer__menu">
                        <ul>
                            <li>
                                <router-link to="/help">
                                    Help
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/about">
                                    About
                                </router-link>
                            </li>
                            <li>
                                <router-link to="">
                                    Roadmap
                                </router-link>
                            </li>
                            <li>
                                <router-link to="">
                                    Contact
                                </router-link>
                            </li>
                            <li>
                                <router-link to="">
                                    Terms and privacy
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="footer__social">
                        <ul>
                            <li>
                                <router-link to="">
                                    <i class="fa-brands fa-discord"></i>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="">
                                    <i class="fa-brands fa-twitter"></i>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="">
                                    <i class="fa-brands fa-facebook"></i>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer__description">
                    The information presented on this website about the Pokémon Trading Card Game, 
                    including images and text, is intellectual property of The Pokémon Company, 
                    Nintendo, Game Freak, Creatures and/or Wizards of the Coast. 
                    TCG Collector is not produced by, endorsed by, supported by, 
                    or affiliated with any of these companies.
                </div>
                <div class="footer__coop">
                    Copyright © 2023 – 2023 Alex Shatailov
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FooterBar'
}
</script>
<style>
    .footer {
        margin-top: 40px;
        padding: 1.75rem 0;
        text-align: left;
        background-color: #333;
    }

    .footer__content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .footer__nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        color: #fff;
    }

    .footer__nav ul {
        display: flex;
        align-items: center;
    }
    
    .footer__nav ul li:not(:first-child):not(:last-child) { 
        padding: 0 10px;
    }

    .footer__menu ul li:not(:last-child) {
        border-right: 1px solid silver;
    }

    .footer__nav ul li:first-child {
        padding-right: 10px;
    }

    .footer__nav ul li:last-child {
        padding-left: 10px;
    }

    .footer__social {
        font-size: 24px;
    }
    
    .footer__description,
    .footer__coop {
        font-size: 14px;
        color: #ffffff4d;
    }

    .footer__coop {
        margin-top: 20px;
    }
</style>