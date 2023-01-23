<script>
    export let homepage = false
</script>

<footer class={homepage ? 'pl-16' : 'pl-5'} class:md:pl-28={homepage} style="background: hsl(221, 39%, 5%)">
    <div class="footer-info md:order-1">
        <div class="flex flex-row items-center">
            <img class="w-32 h-32" src="/images/logo.png">
            <div class="ml-4">
                <h4 class="text-2xl font-bold text-primary-400">BamBuild</h4>
                <p class="mt-0 font-medium text-gray-100">Creating sustainable products from bamboo</p>
            </div>
        </div>
        <div>
            <p class="mt-2 text-sm">Website © 2022 BamBuild, <br class="md:hidden">A Branch of Young Enterprise</p>
            <p class="mt-0 text-sm">Young Enterprise Company Number <br class="md:hidden">E0401CP123253395</p>
        </div>
    </div>
    <div class="md:col-span-2 md:order-8 lg:order-1">
        <span class="footer-title mb-0">Shop</span>
        <a class="link link-hover" href="/shop/product/lightbox/christmas-bundle">Light Box</a>
        <a class="link link-hover" href="/shop">Custom Keyrings</a>
        <a class="link link-hover" href="/shop">Personalised Tote Bags</a>
    </div>
    <div class="md:col-span-2 md:order-7 lg:order-2">
        <span class="footer-title mb-0">Company</span>
        <a class="link link-hover">About us</a>
        <a class="link link-hover" href="/contact">Contact</a>
        <a class="link link-hover">FAQ</a>
    </div>
    <div class="md:col-span-2 md:order-6 lg:order-3">
        <span class="footer-title mb-0">Legal</span>
        <a class="link link-hover">Terms of Service</a>
        <a class="link link-hover">Privacy Policy</a>
        <a class="link link-hover">Returns Policy</a>
    </div>
    <div class="md:col-span-1 md:order-5 lg:order-4">
        <span class="footer-title mb-0">Social</span>
        <div class="flex flex-row gap-4 text-2xl">
            <a href="https://instagram.com/bambuild.ye" target="_blank">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@bambuild.ye" target="_blank">
                <i class="fab fa-tiktok"></i>
            </a>
            <a href="mailto:hello@bambuild.ml">
                <i class="fas fa-envelope"></i>
            </a>
        </div>
    </div>
</footer>

<style>
    footer {
        @apply w-full py-10 pr-5 md:pr-10 text-base-content;
        @apply grid gap-4 grid-cols-2 md:grid-cols-6 lg:grid-cols-12;
    }
    footer > div {
        @apply flex flex-col;
    }
    .footer-info {
        @apply col-span-2;
        @apply md:col-span-5;
    }
</style>