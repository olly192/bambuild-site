<script>
    import ContentWrapper from "$lib/components/ContentWrapper.svelte"
    import {onMount} from "svelte"

    const redirectUrl = "https://docs.google.com/forms/d/e/1FAIpQLScnuv-GqqC3iMxz17O048kIvm9uZWE-XgXm32qeNEEUBasnXQ/viewform?usp=sf_link";
    onMount(() => {
        window.location.replace(redirectUrl)
    });
</script>

<ContentWrapper>
    <div class="card-container">
        <div class="order-card max-w-xl w-full">
            <h1 class="heading-1 mb-0">Redirecting...</h1>
            <p class="text-gray-400">You will be redirected to the email form in a few seconds.</p>
            <p class="text-gray-400">If you are not redirected, please click the button below.</p>
            <div class="w-full flex flex-col items-center">
                <a class="btn btn-lg btn-primary mt-4" href={redirectUrl}>
                    Continue <i class="ml-4 fa-solid fa-arrow-up-right-from-square"></i>
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
