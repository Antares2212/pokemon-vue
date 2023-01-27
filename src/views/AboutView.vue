<template>
    <div class="aboutView">
        <header class="page-header">
            <div class="container">
                <div class="page-header-content">
                    <h1 class="page-header-title">About</h1>
                </div>
            </div>
        </header>
        <main class="page-content">
            <div class="container">
                <div class="content-section">
                  <p>
                    TCG Collector is an extensive Pokémon card database and collection tracker. It has the most complete database of both international and Japanese cards and includes almost every card variant ever released such as <em>Reverse Holo</em> and <em>1st Edition</em>. Its aim is to track as much information about your collection as possible and to provide you detailed insights about it. It's created and maintained by
                    <a href="https://github.com/egonolieux" rel="external nofollow noreferrer" target="_blank">Egon Olieux</a>.
                  </p>
                </div>
                <div class="content-section">
                    <h2>Donate</h2>
                    <p>
                        To make the site faster and more enjoyable to use, TCG Collector is free of advertisements. However, keeping the site running is not without its costs. If you would like to help us cover these costs, please feel free to make a donation. Thanks!
                    </p>
                    <a href="https://www.paypal.com/donate" rel="external nofollow noreferrer" target="_blank" class="btn">
                        <i class="fa-solid fa-circle-dollar-to-slot"></i>
                        Donate now
                    </a>
                </div>
                <div class="content-section">
                    <h2>Credits</h2>
                    <p>
                        TCG Collector wouldn't be possible without the help of its contributors! Here is a list of people and projects that we would like to thank for their work.
                    </p>
                    <ul>
                        <li>
                            <span>
                                <a href="https://pkmncards.com/" rel="external nofollow noreferrer" target="_blank">PkmnCards</a> and
                                <a href="https://malie.io/" rel="external nofollow noreferrer" target="_blank">Malie</a>
                                for their work on high quality card images and scans.
                            </span>
                        </li>
                        <li>
                            <span>
                                <a href="https://github.com/benluelo" rel="external nofollow noreferrer" target="_blank">Ben Luelo</a>
                                for his overall help to the project and his involvement with our community.
                            </span>
                        </li>
                        <li>
                            <span>
                                <a href="https://www.deviantart.com/strawbanya" rel="external nofollow noreferrer" target="_blank">strawbanya</a>
                                for creating our logo.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .aboutView .btn {
        color: initial;
        margin-top: 20px;
    }

    .aboutView .btn:hover {
        text-decoration: none;
    }
    
    .aboutView ul {
        display: block;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px; 
    }

    .aboutView li {
        color: coral;
    }
    
    .aboutView span {
        color: initial;
    }

    .aboutView a {
        color: #106bc5;
    }

    .aboutView a:hover {
        text-decoration: underline;
    }
</style>