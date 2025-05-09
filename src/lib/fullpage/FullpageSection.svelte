<script lang="ts">
    import FullpageSectionController from './FullpageSectionController.svelte'
    import Indicator from './Indicator/Slide.svelte'
    import { getContext, onMount, setContext } from 'svelte'
    import { FullpageActivity } from './stores'
    import { writable } from 'svelte/store'

    export let title = ''
    export let disableCentering = false
    export let icon = false

    const { registerSection, activeSectionStore, config } = getContext('section')
    const slideCount = writable(0)
    const activeSlideStore = FullpageActivity(slideCount)

    let sectionId: number
    let slides: Array<string> = []
    let icons: Array<string> = []
    let toSlide: (event: Event) => void

    // Passing data about slide visibility to all slides, same principle as setContext('section',{...}) in Fullpage.svelte
    setContext('slide', {
        activeSlideStore,
        registerSlide: (title?: string, icon?: string): void => {
            const id = $slideCount
            $slideCount++
            slides = [
                ...slides,
                title || `${id + 1}`
            ]
            icons = [
                ...icons,
                icon || ''
            ]
        }
    })

    onMount(() => {
        sectionId = registerSection(title, icon)
    })

    $: isActive = (sectionId === $activeSectionStore)
    $: isSlidable = $slideCount > 0
</script>

<section {...$$restProps}>
    <FullpageSectionController bind:toSlide {activeSlideStore} {isSlidable} {isActive}
                               {disableCentering} scrollDuration={config.scrollDuration}
                               disableDragNavigation={config.disableDragNavigation}
                               disableArrowsNavigation={config.disableArrowsNavigation}
                               pageRoundingThresholdMultiplier={config.pageRoundingThresholdMultiplier}
                               easing={config.easing}>
        <slot/>
    </FullpageSectionController>
    {#if isSlidable}
        <Indicator {slides} {icons} activeSlide={$activeSlideStore} on:goto={toSlide} />
    {/if}
</section>

<style>
    section {
        height: 100%;
        width: 100%;
        position: relative;
    }
</style>
