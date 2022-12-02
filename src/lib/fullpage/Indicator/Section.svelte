<script lang="ts">
    import Dot from './Dot.svelte'
    import SocialMediaIcons from "$lib/components/SocialMediaIcons.svelte";

    export let sections: Array<string>
    export let icons: Array<string>
    export let activeSection: number
</script>

<div>
    <span class="my-16"></span>
    <ul>
        {#each sections as title, index}
            <Dot {title} {index} icon={icons[index]} bind:activeDot={activeSection} on:goto />
        {/each}
    </ul>
    <SocialMediaIcons/>
</div>

<style>
    div {
        height: 100%;
        width: auto;
        overflow: hidden;
        position: absolute;
        z-index: 10;
        left: 0;
        top: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    ul {
        margin: 1rem;
        padding: 1rem;
        list-style-type: none;
    }
    @media only screen and (max-width: 767px){
        ul {
            margin: 0.3rem;
            padding: 0.3rem;
        }
    }
</style>
