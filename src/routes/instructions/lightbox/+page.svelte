<script>
    import ContentWrapper from "$lib/components/ContentWrapper.svelte"
    import {onMount} from "svelte";
    let duration, height
    let y = 0
    let container, image, loader
    let frame = 1
    const frames = 648
    onMount(() => {
        for (let i = 1; i < frames; i++) {
            const img = new Image()
            img.src = `/instructions/light-box/frame-${i.toString().padStart(3, '0')}.jpg`
        }
        loader.style.display = 'none'
    })
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
            <div id="instructions-loader" bind:this={loader}>
                <svg aria-hidden="true" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                Loading Instructions
            </div>
            <div id="instructions" bind:clientHeight={height}>
                <span id="instructions-scroll-prompt">Scroll to begin</span>
                <img bind:this={image} src="/instructions/light-box/frame-000.jpg">
            </div>
        </div>
    </div>
</ContentWrapper>

<style>
    #instruction-container {
        @apply flex flex-row justify-center relative;
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
    #instructions-loader {
        @apply absolute top-0 text-center text-black;
        width: calc(100vmin - 4rem);
        height: calc(100vmin - 4rem);
        @apply flex flex-row items-center justify-center;
        @apply text-2xl sm:text-6xl md:text-7xl lg:text-8xl font-bold;
        @apply z-30 bg-white;
    }
    #instructions-loader > svg {
        @apply w-20 h-20 mr-12 text-black;
        @apply animate-spin fill-primary-500;
    }
    #instructions-scroll-prompt {
        @apply absolute top-16 left-0 right-0 text-center text-black;
        @apply text-2xl sm:text-6xl md:text-7xl lg:text-8xl font-bold;
        @apply pointer-events-none z-20;
    }
</style>
