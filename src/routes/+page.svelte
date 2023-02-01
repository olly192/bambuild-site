<script>
    import {Fullpage, FullpageSection} from "$lib/fullpage";
    import ShopCard from "$lib/components/ShopCard.svelte";
    import ShopCardCountdown from "$lib/components/ShopCardCountdown.svelte";
    import HeaderParralax from "$lib/components/HeaderParralax.svelte";
    import Footer from "$lib/components/Footer.svelte";

    let windowWidth;
</script>

<svelte:window bind:innerWidth={windowWidth} />
<Fullpage>
    <FullpageSection title="home" icon="fas fa-home">
        <div class="header-container">
            <div class="header-title">
                <h1 class="header-heading1">We Are <span class="text-primary-400">BamBuild</span></h1>
                <h2 class="header-heading2">Creating sustainable products from <span class="text-primary-400">bamboo</span></h2>
            </div>
            <HeaderParralax />
        </div>
    </FullpageSection>
    <FullpageSection title="products" icon="fas fa-shop">
        <div class="products flex flex-col mx-14 md:mx-28 w-full">
            <div class="mt-8 mb-4 flex flex-row items-center justify-between">
                <h1 class="heading-1 mb-0">Our Products</h1>
                {#if windowWidth < 768}
                    <a href="/shop" class="btn btn-sm btn-circle btn-primary mt-2 md:mt-0"><i class="fas fa-arrow-right"></i></a>
                {:else}
                    <a href="/shop" class="btn btn-sm btn-primary mt-2 md:mt-0">View All Products <i class="fas fa-arrow-right ml-2"></i></a>
                {/if}
            </div>
            <div class="w-full flex flex-col justify-center items-center gap-4">
                <div class="max-w-sm md:max-w-xl">
                    <ShopCard title="Christmas Light Box Bundle" link="/shop/product/lightbox/christmas-bundle">
                        <span slot="price"><s class="text-red-400 font-thin">£19.99</s> £16.99</span>
                        <div slot="header" class="flex flex-row justify-center h-48 rounded-lg">
                            <img src="/images/lightbox/demo1.jpg" alt="Light Box" class="product-image"/>
                            <img src="/images/lightbox/demo2.jpg" alt="Light Box" class="product-image"/>
                            <img src="/images/lightbox/model1.png" alt="Light Box" class="hidden md:block product-image"/>
                        </div>
                        <p class="font-bold">Currently on pre-order, expected delivery: 12/12/2022</p>
                        <p class="hidden md:block">The BamBuild light box bundle includes our bamboo, self-assembled light box (with optional personalised engraving), an acrylic insert of your choice, LEDs and a battery box (3 AA batteries not included)</p>
                        <p class="md:hidden">
                            The BamBuild light box bundle includes our bamboo, self-assembled light box...<br>
                            <a class="link link-primary" href="/shop">Read More</a>
                        </p>
                    </ShopCard>
                </div>
                {#if windowWidth > 768}
                <div class="max-w-xl md:min-w-[320px] flex flex-row gap-4">
                    <ShopCard title="Personalised Tote Bags" link="/shop/product/totebag" columns="2" smallLink>
                        <span slot="price"><s class="text-red-400 font-thin">£6.99</s> £5</span>
                        <div slot="header" class="flex flex-row h-48 rounded-lg">
                            <img src="/images/totebag/totebag1.jpeg" alt="Light Box" class="product-image-half"/>
                            <img src="/images/totebag/totebag2.jpeg" alt="Light Box" class="product-image-half"/>
                        </div>
                        <p>Create your own custom printed tote bag.</p>
                    </ShopCard>
                    <ShopCard title="Custom Keyrings" link="/shop/product/keyring" columns="2" smallLink>
                        <span slot="price"><s class="text-red-400 font-thin">£3.99</s> £2.50</span>
                        <div slot="header" class="flex flex-row h-48 rounded-lg">
                            <img src="/images/keyring/keyring1.jpeg" alt="Light Box" class="product-image-half"/>
                            <img src="/images/keyring/keyring2.jpeg" alt="Light Box" class="product-image-half"/>
                        </div>
                        <p>Create your own custom engraved keyring.</p>
                    </ShopCard>
                </div>
                {/if}
            </div>
            <!-- <ShopSectionCountdown date="2022-12-25 09:30:00" style="grid-column: span 2"/> -->
            <!-- <div class="product-wrapper"> -->
            <!--     {#if windowWidth < 768} -->
            <!--     <ShopCard title="Premium Light Box Bundle" price="£30" columns="1" small> -->
            <!--         <ShopCardCountdown slot="header" date="2022-12-25 09:30:00" small/> -->
            <!--         Hello World -->
            <!--     </ShopCard> -->
            <!--     <ShopCard title="Premium Light Box Bundle" price="£30" columns="1" small> -->
            <!--         <ShopCardCountdown slot="header" date="2022-12-25 09:30:00" small/> -->
            <!--         Hello World -->
            <!--     </ShopCard> -->
            <!--     {:else if windowWidth < 1024} -->
            <!--         <ShopCard title="Premium Light Box Bundle" price="£30" columns="1"> -->
            <!--             <ShopCardCountdown slot="header" date="2022-12-25 09:30:00" small/> -->
            <!--             Hello World -->
            <!--         </ShopCard> -->
            <!--         <ShopCard title="Premium Light Box Bundle" price="£30" columns="1"> -->
            <!--             <ShopCardCountdown slot="header" date="2022-12-25 09:30:00" small/> -->
            <!--             Hello World -->
            <!--         </ShopCard> -->
            <!--         <ShopCard title="Premium Light Box Bundle" price="£30" columns="1"> -->
            <!--             <ShopCardCountdown slot="header" date="2022-12-25 09:30:00" small/> -->
            <!--             Hello World -->
            <!--         </ShopCard> -->
            <!--         <ShopCard title="Premium Light Box Bundle" price="£30" columns="1"> -->
            <!--             <ShopCardCountdown slot="header" date="2022-12-25 09:30:00" small/> -->
            <!--             Hello World -->
            <!--         </ShopCard> -->
            <!--     {:else if windowWidth < 1280} -->
            <!--         <ShopCard title="Premium Light Box Bundle" price="£30" columns="2"> -->
            <!--             <ShopCardCountdown slot="header" date="2022-12-25 09:30:00"/> -->
            <!--             Hello World -->
            <!--         </ShopCard> -->
            <!--         <ShopCard title="Premium Light Box Bundle" price="£30" columns="1"> -->
            <!--             <ShopCardCountdown slot="header" date="2022-12-25 09:30:00" small/> -->
            <!--             Hello World -->
            <!--         </ShopCard> -->
            <!--         <ShopCard title="Premium Light Box Bundle" price="£30" columns="1"> -->
            <!--             <ShopCardCountdown slot="header" date="2022-12-25 09:30:00" small/> -->
            <!--             Hello World -->
            <!--         </ShopCard> -->
            <!--         <ShopCard title="Premium Light Box Bundle" price="£30" columns="2"> -->
            <!--             <ShopCardCountdown slot="header" date="2022-12-25 09:30:00"/> -->
            <!--             Hello World -->
            <!--         </ShopCard> -->
            <!--     {:else} -->
            <!--         <ShopCard title="Premium Light Box Bundle" price="£30" columns="2"> -->
            <!--             <ShopCardCountdown slot="header" date="2022-12-25 09:30:00"/> -->
            <!--             Hello World -->
            <!--         </ShopCard> -->
            <!--         <ShopCard title="Premium Light Box Bundle" price="£30" columns="2"> -->
            <!--             <ShopCardCountdown slot="header" date="2022-12-25 09:30:00"/> -->
            <!--             Hello World -->
            <!--         </ShopCard> -->
            <!--         <ShopCard title="Premium Light Box Bundle" price="£30" columns="1"> -->
            <!--             <ShopCardCountdown slot="header" date="2022-12-25 09:30:00" small/> -->
            <!--             Hello World -->
            <!--         </ShopCard> -->
            <!--         <ShopCard title="Premium Light Box Bundle" price="£30" columns="1"> -->
            <!--             <ShopCardCountdown slot="header" date="2022-12-25 09:30:00" small/> -->
            <!--             Hello World -->
            <!--         </ShopCard> -->
            <!--         <ShopCard title="Premium Light Box Bundle" price="£30" columns="1"> -->
            <!--             <ShopCardCountdown slot="header" date="2022-12-25 09:30:00" small/> -->
            <!--             Hello World -->
            <!--         </ShopCard> -->
            <!--         <ShopCard title="Premium Light Box Bundle" price="£30" columns="1"> -->
            <!--             <ShopCardCountdown slot="header" date="2022-12-25 09:30:00" small/> -->
            <!--             Hello World -->
            <!--         </ShopCard> -->
            <!--     {/if} -->
            <!-- </div> -->
        </div>
    </FullpageSection>
    <!-- <FullpageSection id="about" title="about" icon="fas fa-user-group" class="bg-primary-900"> -->
    <!--     <div class="about-us flex flex-col lg:flex-row mx-14 md:mx-28"> -->
    <!--         <div class="my-8 lg:w-1/3 h-100 flex flex-col justify-center"> -->
    <!--             <h1 class="heading-1">About Us</h1> -->
    <!--             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur esse fugit incidunt laboriosam nesciunt repellendus repudiandae sapiente sunt totam.</p> -->
    <!--         </div> -->
    <!--         <div class="lg:w-2/3 grid grid-cols-1 xl:grid-cols-2 gap-4"> -->
    <!--             <AboutUsCard index="1" title="Who We Are"> -->
    <!--                 Example card 1 -->
    <!--             </AboutUsCard> -->
    <!--             <AboutUsCard index="2" title="What We Do"> -->
    <!--                 Example card 2 -->
    <!--             </AboutUsCard> -->
    <!--             <AboutUsCard index="3" title="How We Help"> -->
    <!--                 Example card 3 -->
    <!--             </AboutUsCard> -->
    <!--             <AboutUsCard index="4" title="Other"> -->
    <!--                 Example card 4 -->
    <!--             </AboutUsCard> -->
    <!--         </div> -->
    <!--     </div> -->
    <!-- </FullpageSection> -->
    <FullpageSection title="footer" icon="fa fa-circle-info">
        <div class="w-full h-full flex items-end">
            <Footer homepage/>
        </div>
    </FullpageSection>
</Fullpage>

<style>
    :global(body) {
        height: 100vh;
    }
    .header-container {
        @apply mx-14 md:mx-28 my-32 relative w-full h-full;
        @apply flex flex-col justify-center items-end;
    }
    .header-title {
        @apply absolute z-10 left-0 bottom-[70%] sm:bottom-3/4 md:bottom-[10%] lg:bottom-[15%] xl:bottom-1/4 w-full;
        @apply text-center lg:text-left;
        text-shadow: 0.3rem 0.3rem 0.8rem rgba(17, 24, 39, 0.5),
                     0.1rem 0.1rem 0.8rem rgba(17, 24, 39, 0.5);
    }
    .header-heading1 {
        @apply font-extrabold leading-none text-white;
        @apply text-[10vw] md:text-7xl lg:text-7xl xl:text-8xl;
    }
    .header-heading2 {
        @apply font-bold text-white;
        @apply text-[4vw] md:text-4xl lg:text-4xl xl:text-5xl;
    }
    .product-wrapper {
        @apply grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
    }
    .product-image {
        @apply w-1/2 md:w-1/3 object-cover;
        border-radius: inherit;
    }
    .product-image-half {
        @apply w-1/2 object-cover;
        border-radius: inherit;
    }
</style>