<script lang="ts">
    import { createEventDispatcher } from 'svelte'

    export let activeDot = 0
    export let index = 0
    export let title = ''
    export let icon = false

    const dispatch = createEventDispatcher()

    const goto = () => {
        dispatch('goto', index)
    }
</script>

<li>
    <button title={title || ''} on:click={goto}>
        {#if icon}
            <span class:svelte-fp-active-dot={activeDot === index}>
                <i class={icon}></i>
            </span>
        {:else}
            <span class:svelte-fp-active-dot={activeDot === index}></span>
        {/if}
    </button>
</li>

<style>
    li {
        margin: 1rem;
        padding: 0;
        width: 1.5rem;
        height: 1.5rem;
    }
    button {
        height: 100%;
        width: 100%;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: transparent;
    }
    i {
        @apply text-xs text-white;
    }
    .svelte-fp-active-dot > i {
        @apply text-black;
    }
    span {
        width: 100%;
        height: 100%;
        transition: width 1s, height 1s;
        border-radius: 50%;
        @apply bg-gray-600 flex justify-center items-center;
    }
    .svelte-fp-active-dot {
        @apply bg-primary-500;
    }

    @media only screen and (max-width: 767px){
        li {
            margin: 0.5rem;
        }
    }
</style>
