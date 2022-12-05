<script>
    import ContentWrapper from "$lib/components/ContentWrapper.svelte";
    import Alert from "$lib/components/Alert.svelte";

    import {onMount} from "svelte";
    let Carousel;
    onMount(async () => {
        const module = await import('svelte-carousel');
        Carousel = module.default;
    });
</script>

<ContentWrapper breadcrumb>
    <div class="flex flex-col lg:flex-row items-start md:items-center mb-4 justify-between">
        <h2 class="heading-2">Christmas Light Box Bundle</h2>
    </div>
    <div id="product-main">
        <div id="preview-container">
            <svelte:component
                this={Carousel}
                autoplay
                autoplayDuration={5000}
                autoplayProgressVisible
                pauseOnFocus
            >
                <img class="preview-image" src="/images/lightbox/demo1.jpg">
                <img class="preview-image" src="/images/lightbox/demo2.jpg">
                <img class="preview-image" src="/images/lightbox/model1.png">
            </svelte:component>
        </div>
        <div id="options-container">
            <div id="options-card">
                <div>
                    <Alert color="warning">
                        <p class="font-bold">Currently on pre-order</p>
                        <p>Expected delivery date: 12/12/2022</p>
                    </Alert>
                    <h3 class="heading-3">Description</h3>
                    <p>
                        Build your own light box with the BamBuild Christmas Light Box Bundle.
                    </p>
                    <p>
                        This bundle includes our bamboo, self-assembled light box (with optional personalised engraving),
                        an acrylic insert of your choice, LEDs and a battery box (3 AA batteries not included)
                    </p>
                    <p>
                        Our light boxes are made from bamboo, and are designed to be self-assembled with no tools required.
                        The light box is fully reusable with compatible acrylic inserts and can be easily repaired with
                        spare parts shortly available on our website.
                    </p>
                </div>
                <div>
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">
                        <s class="text-red-400 font-thin">£19.99</s> £16.99
                    </span>
                    <div class="w-full flex flex-row justify-around mt-4 gap-4">
                        <a class="btn btn-primary" href="/order/lightbox/christmas-bundle">
                            <i class="mr-2 fas fa-cart-plus"></i> Customise
                        </a>
                        <div class="tooltip" data-tip="Coming Soon">
                            <a class="btn btn-secondary" disabled>
                                <i class="mr-2 fas fa-book"></i> Assembly
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
</ContentWrapper>

<style>
#product-main {
    @apply flex flex-col lg:flex-row;
}

#preview-container {
    @apply w-full p-6 lg:mr-16 border bg-gray-800 border-gray-700 rounded-lg shadow-md;
    @apply overflow-hidden;
    @apply lg:max-h-[75vmin] lg:h-[75vmin];
}

.preview-image {
    @apply object-contain;
    @apply lg:max-h-[calc(75vmin-3rem)] lg:h-[calc(75vmin-3rem)]
}

#options-container {
    @apply w-full lg:w-1/2;
    @apply flex justify-end;
    @apply lg:max-h-[75vmin] lg:h-[75vmin];
}

#options-card {
    @apply lg:max-w-lg w-full mt-8 lg:mt-0 p-6 border bg-gray-800 border-gray-700 rounded-lg shadow-md;
    @apply overflow-scroll;
    @apply flex flex-col justify-between;
}

label {
    @apply block mt-2 font-medium text-white;
}

input, select {
    @apply block w-full p-2.5 rounded-lg;
    @apply text-white text-sm placeholder-gray-400;
    @apply bg-gray-700 border border-gray-600;
    @apply focus:ring-primary-500 focus:border-primary-500;
}

input:disabled {
    @apply bg-gray-900 text-gray-500;
}

input:not(:placeholder-shown)[data-valid=false] {
    @apply border-red-800 ring ring-2 ring-red-800;
}
</style>
