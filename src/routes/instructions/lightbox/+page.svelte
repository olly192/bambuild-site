<script>
    import ContentWrapper from "$lib/components/ContentWrapper.svelte"
    let duration, height
    let y = 0
    let container, image
    let frame = 1
    const frames = 648
    $: if (container && height && image) {
        frame = Math.floor((y / (height - container.clientHeight) * frames))
        if (frame < 1) frame = 1
        if (frame > frames) frame = frames
        image.src = `/instructions/light-box/frame-${frame.toString().padStart(3, '0')}.jpg`
        console.log("Frame: ", frame)
    }
</script>


<ContentWrapper breadcrumb>
    <div class="flex flex-col lg:flex-row items-start md:items-center mb-4 justify-between">
        <h2 class="heading-2">Light Box Assembly Instructions</h2>
    </div>
    <div id="instruction-container">
        <div id="instruction-scroll" bind:this={container} on:scroll={() => y = container.scrollTop}>
            <div id="instructions" bind:clientHeight={height}>
                <img bind:this={image} src="/instructions/light-box/frame-000.jpg">
                <span id="instructions-scroll-prompt">Scroll to begin</span>
            </div>
        </div>
    </div>
</ContentWrapper>

<style>
    #instruction-container {
        @apply flex flex-row justify-center;
        width: calc(100vw - 4rem);
    }
    #instruction-scroll {
        width: calc(100vmin - 4rem);
        height: calc(100vmin - 4rem);
        @apply overflow-y-scroll;
    }
    #instructions {
        @apply w-full h-[2000vh] relative;
        @apply flex flex-row justify-center;
    }
    #instructions > img {
        @apply sticky top-0 z-10;
        width: calc(100vmin - 4rem);
        height: calc(100vmin - 4rem);
    }
    #instructions-scroll-prompt {
        @apply absolute top-16 left-0 right-0 text-center text-black;
        @apply text-2xl sm:text-6xl md:text-7xl lg:text-8xl font-bold;
        @apply pointer-events-none z-20;
    }
</style>
