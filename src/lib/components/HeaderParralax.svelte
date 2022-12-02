<script>
    let images = [9, 8, 7, 6, 5, 4, 3, 2, 1];
</script>

<div class="image-container">
    {#each images as image}
        <img id="header-image-{image}" class="header-image" src="/images/header/{image}.png" alt="header" />
    {/each}
</div>

<style>
    .image-container {
        @apply relative;
        @apply w-[150vw]        h-[150vw]       translate-x-[30vw]      translate-y-[30vh];
        @apply sm:w-[110vw]    sm:h-[110vw]   sm:translate-x-[20vw]        sm:translate-y-[20vh];
        @apply md:w-[75vmin]    md:h-[75vmin]   md:translate-x-0        md:translate-y-[-10vh];
        @apply                                  lg:translate-x-[5vw]    lg:translate-y-0;
        @apply                                  xl:translate-x-0        xl:translate-y-0;
        border-radius: 50%;
        overflow: hidden;
    }

    .header-image {
        @apply absolute;
    }

    #header-image-9 { animation: breathe 10s ease-in-out infinite; animation-delay: 3.5s; }
    #header-image-8 { animation: breathe 10s ease-in-out infinite; animation-delay: 3.0s; }
    #header-image-7 { animation: breathe 10s ease-in-out infinite; animation-delay: 2.5s; }
    #header-image-6 { animation: breathe 10s ease-in-out infinite; animation-delay: 2.0s; }
    #header-image-5 { animation: breathe 10s ease-in-out infinite; animation-delay: 1.5s; }
    #header-image-4 { animation: breathe 10s ease-in-out infinite; animation-delay: 1.0s; }
    #header-image-3 { animation: breathe 10s ease-in-out infinite; animation-delay: 0.5s; }
    #header-image-2 { animation: breathe 10s ease-in-out infinite; animation-delay: 0.0s; }

    @keyframes breathe {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
        }
    }
</style>