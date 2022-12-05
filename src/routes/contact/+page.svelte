<script>
    import ContentWrapper from "$lib/components/ContentWrapper.svelte";
</script>

<ContentWrapper>
    <div class="card-container">
        <div class="order-card max-w-xl w-full">
            <h1 class="heading-1 mb-0">Contact Us</h1>
            <p class="text-lg mb-2">We'd love to hear from you!</p>
            <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                <a class="btn btn-primary" href="mailto:hello@bambuild.ml">
                    <i class="mr-2 text-xl fas fa-envelope"></i>Email Us
                </a>
                <a class="btn btn-primary" href="https://instagram.com/bambuild.ye" target="_blank">
                    <i class="mr-2 text-xl fab fa-instagram"></i> Instagram
                </a>
                <a class="btn btn-primary" href="https://www.tiktok.com/@bambuild.ye" target="_blank">
                    <i class="mr-2 text-xl fab fa-tiktok"></i> TikTok
                </a>
            </div>
        </div>
    </div>
</ContentWrapper>

<style>
    .card-container {
        @apply w-full flex flex-col justify-center items-center;
        min-height: 75vmin;
    }

    .order-card {
        @apply max-w-lg p-6 border bg-gray-800 border-gray-700 rounded-lg shadow-md;
    }
</style>
