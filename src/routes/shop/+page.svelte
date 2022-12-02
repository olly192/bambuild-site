<script>
import ContentWrapper from "$lib/components/ContentWrapper.svelte";
import ShopCard from "$lib/components/ShopCard.svelte";
import ShopCardCountdown from "$lib/components/ShopCardCountdown.svelte";
import ShopSectionCountdown from "$lib/components/ShopSectionCountdown.svelte";
import Alert from "$lib/components/Alert.svelte";
</script>

<ContentWrapper>
    <h1 class="heading-1">Shop</h1>
    <Alert color="info" dismissable>
        <span class="font-medium">Early bird pricing!</span> Buy now at a discounted rate - prices subject to change
    </Alert>
    <h2 class="heading-2 mb-4">Light Box Bundles</h2>
    <div class="flex justify-center">
        <div class="shop-card-wrapper">
            <!-- <div style="grid-column: span 4"> -->
            <!--     <ShopSectionCountdown date="2022-12-25 09:30:00" style="grid-column: span 2"/> -->
            <!-- </div> -->
            <ShopCard title="Christmas Light Box Bundle" link="/shop/product/lightbox/christmas-bundle" columns="2">
                <span slot="price"><s class="text-red-400 font-thin">£19.99</s> £16.99</span>
                <div slot="header" class="flex flex-row h-48 rounded-lg">
                    <img src="/images/lightbox/demo1.jpg" alt="Light Box" class="product-image-1/3"/>
                    <img src="/images/lightbox/demo2.jpg" alt="Light Box" class="product-image-1/3"/>
                    <img src="/images/lightbox/model1.png" alt="Light Box" class="product-image-1/3"/>
                </div>
                <p class="font-bold">Currently on pre-order, expected delivery date: 12/12/2022</p>
                <p>The BamBuild light box bundle includes our bamboo, self-assembled light box (with optional personalised engraving), an acrylic insert of your choice, LEDs and a battery box (3 AA batteries not included)</p>
            </ShopCard>
            <ShopCard title="Premium Light Box Bundle" columns="2">
                <span slot="price">£24.99</span>
                <ShopCardCountdown slot="header"/>
                Hello World
            </ShopCard>
        </div>
    </div>

    <div class="my-4 flex flex-col md:flex-row justify-between items-center">
        <h2 class="heading-2">Acrylic Inserts</h2>
        <a disabled class="btn btn-sm btn-primary mt-2 md:mt-0">View All Inserts <i class="fas fa-arrow-right ml-2"></i></a>
    </div>
    <div class="shop-card-wrapper wrapper-small">
        <div style="grid-column: span 4">
            <ShopSectionCountdown style="grid-column: span 2"/>
        </div>
        <!-- <ShopCard title="Premium Light Box Bundle" price="£30" columns="1"> -->
        <!--     Hello World -->
        <!-- </ShopCard> -->
        <!-- <ShopCard title="Premium Light Box Bundle" price="£30" columns="1"> -->
        <!--     <ShopCardCountdown slot="header" date="2022-12-25 09:30:00"/> -->
        <!--     Hello World -->
        <!-- </ShopCard> -->
        <!-- <ShopCard title="Premium Light Box Bundle" price="£30" columns="1"> -->
        <!--     <ShopCardCountdown slot="header" date="2022-12-25 09:30:00"/> -->
        <!--     Hello World -->
        <!-- </ShopCard> -->
        <!-- <ShopCard title="Premium Light Box Bundle" price="£30" columns="1"> -->
        <!--     <ShopCardCountdown slot="header" date="2022-12-25 09:30:00"/> -->
        <!--     Hello World -->
        <!-- </ShopCard> -->
    </div>

    <h2 class="heading-2 my-4">Replacement Parts</h2>
    <div class="shop-card-wrapper wrapper-small">
        <div style="grid-column: span 4">
            <ShopSectionCountdown style="grid-column: span 2"/>
        </div>
    </div>

</ContentWrapper>

<style>
    .shop-card-wrapper {
        @apply grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center;
    }

    .wrapper-small {
        @apply md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
    }

    .product-image-1\/3 {
        @apply w-1/3 object-cover;
        border-radius: inherit;
    }
</style>