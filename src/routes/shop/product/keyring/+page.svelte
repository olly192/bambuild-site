<script>
    import ContentWrapper from "$lib/components/ContentWrapper.svelte";
    import Alert from "$lib/components/Alert.svelte";

    import {onMount} from "svelte";
    import ImagePlaceholder from "$lib/components/ImagePlaceholder.svelte";
    let Carousel;
    onMount(async () => {
        const module = await import('svelte-carousel');
        Carousel = module.default;
    });
</script>

<ContentWrapper breadcrumb>
    <div class="flex flex-col lg:flex-row items-start md:items-center mb-4 justify-between">
        <h2 class="heading-2">Custom Keyring</h2>
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
                <ImagePlaceholder className="preview-image h-full"/>
                <ImagePlaceholder className="preview-image h-full"/>
                <ImagePlaceholder className="preview-image h-full"/>
                <!-- <img class="preview-image" src="/images/lightbox/demo1.jpg"> -->
                <!-- <img class="preview-image" src="/images/lightbox/demo2.jpg"> -->
                <!-- <img class="preview-image" src="/images/lightbox/model1.png"> -->
            </svelte:component>
        </div>
        <div id="options-container">
            <div id="options-card">
                <div>
                    <Alert color="warning">
                        <p class="font-bold">Currently on pre-order</p>
                        <p>Expected delivery date: 01/02/2023</p>
                    </Alert>
                    <h3 class="heading-3">Description</h3>
                    <p>
                        Create your own custom engraved keyring.
                    </p>
                </div>
                <div>
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">
                        <s class="text-red-400 font-thin">£3.99</s> £2.50
                    </span>
                    <div class="w-full flex flex-row justify-around mt-4 gap-4">
                        <div class="tooltip" data-tip="Coming Soon">
                            <a class="btn btn-primary" disabled>
                                <i class="mr-2 fas fa-cart-plus"></i> Customise
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
