<template>
    <div class="helpView">
        <div class="container">
            <div class="helpView__content">
                <nav class="helpView__nav">
                    <div class="helpView__nav-title">TCG Collector help</div>
                    <router-link to="">
                        Getting started (coming soon)
                    </router-link>
                    <router-link to="">
                        Frequently asked questions
                    </router-link>
                    <router-link to="">
                        Report an issue
                    </router-link>
                </nav>
                <div class="helpView__body">
                    <h1 class="page-content-title">Frequently asked questions</h1>
                    <div class="helpView__acordion-list">
                        <app-acordion 
                            class="helpView__acordion-item"
                            v-for="item in helps" 
                            :title="item.title" 
                            :text="item.text" 
                            :key="item.id" 
                            :id="item.id"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        const acordion = [
            {id: 1, title: "I have a Japanese card that is not listed", text: "The Japanese TCG does not have the same structure as the international TCG. Therefore it's listed separately on the expansions page and cards page."},
            {id: 2, title: "I have a variant of a Japanese card that is not listed", text: "Currently most Japanese cards only have the Normal variant. We're looking for reliable sources to add other variants like Normal Holo, Reverse Holo and 1st Edition. Please don't hesitate to contact us if you have knowledge to share. Thanks!"},
            {id: 3, title: "How is the market price on the dashboard calculated?", text: "It's based on the card variant market price multiplied by the quantity in your collection. If no price is available for a variant, the market price of the most common variant of the same card is used. Card languages and conditions have no effect on the price calculation."},
            {id: 4, title: "The market price on the dashboard is incorrect or doesn't change", text: "We do our best to include pricing information for all cards and variants, but unfortunately there will always be cards or variants that don't have pricing information. If we don't have the data, it will simply be left out."},
            {id: 5, title: "How are the prices on the expansions and cards overview calculated?", text: "They're calculated by using the market price of the most common variant of a card. Card languages and conditions are not included in the pricing information."},
            {id: 6, title: "Why are there no prices for Japanese cards?", text: "Pricing information for Japanese cards is very limited and spread across multiple websites. We'll definitely look into this in the future, but it's going to be a long and difficult task."},
            {id: 7, title: "What will happen to my collection when my premium subscription ends?", text: "You'll keep all your collection data. You might no longer be able to add new cards to your collection because of certain limits though. If you start a premium subscription again, you'll be able to continue where your previously left off."},
            {id: 8, title: "Is there an app for Android or iOS?", text: "No, but you don't need one! TCG Collector was designed to work on any device. Simply open it on your mobile browser and you're good to go. You can also pin TCG Collector to your home screen and use it exactly like an app. We might add the site to the App or Play Store for discoverability though."},
        ]

        return {
            helps: acordion
        }
    }
}
</script>
<style>
    .helpView {
        padding: 1.5rem 0 2.5rem;
    }

    .helpView__content {
        column-gap: 2rem;
        display: grid;
        grid-template-columns: 250px auto;
    }

    .helpView__nav {
        position: sticky;
        top: calc(56px + 2rem);
        height: max-content;
    }

    .helpView__nav a:last-child {
        border-bottom-left-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
    }

    .page-content-title {
        text-align: left;
    }

    .helpView__nav-title {
        font-weight: 600;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }

    .helpView__nav a:not(:last-child),
    .helpView__nav-title {
        margin-bottom: -1px;
    }
    
    .helpView__nav a,
    .helpView__nav-title {
        align-items: center;
        display: flex;
        font-size: 1rem;
        line-height: 1.5;
        padding: 0.5rem 1rem;
        position: relative;
        text-align: left;
        width: 100%;
        border: 1px solid #dfdfdf;
    }
    
    .helpView__nav a:hover {
        background-color: #e6e6e6;
    }

    .helpView__body {
        width: 100%;
    }
    
    .helpView__acordion-list {
        width: 100%;
        text-align: left;
    }

    .helpView__acordion-item {
        width: 100%;
    }
</style>