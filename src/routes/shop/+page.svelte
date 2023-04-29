<script>
import ContentWrapper from "$lib/components/ContentWrapper.svelte";
import ShopCard from "$lib/components/ShopCard.svelte";
import ShopSectionCountdown from "$lib/components/ShopSectionCountdown.svelte";
</script>

<ContentWrapper>
    <h1 class="heading-1">Shop</h1>
    <div class="my-4 flex flex-col md:flex-row justify-between items-center">
        <h2 class="heading-2">Light Box</h2>
    </div>
    <div class="flex justify-center">
        <div class="shop-card-wrapper">
            <ShopCard title="Light Box Bundle" link="/shop/product/lightbox" columns="2">
                <span slot="price">£15</span>
                <div slot="header" class="flex flex-row h-48 rounded-lg">
                    <img src="/images/lightbox/demo1.jpg" alt="Light Box" class="product-image"/>
                    <img src="/images/lightbox/demo2.jpg" alt="Light Box" class="product-image"/>
                    <img src="/images/lightbox/model1.png" alt="Light Box" class="hidden md:block product-image"/>
                </div>
                <p>The BamBuild light box bundle includes our self-assembled light box (with optional personalised engraving), an acrylic insert of your choice, LEDs and a battery box (3 AA batteries not included)</p>
            </ShopCard>
            <ShopCard title="Light Box Replacement Parts" link="mailto:support@bambuild.ml?subject=Replacement%20Parts%20Order" columns="2" linkText="Contact Us">
                <span slot="price">£1 - £5</span>
                <div slot="header" class="flex flex-row h-48 rounded-lg">
                    <img src="/images/lightbox/replacement1.png" alt="Light Box" class="product-image"/>
                    <img src="/images/lightbox/replacement2.png" alt="Light Box" class="product-image"/>
                    <img src="/images/lightbox/replacement3.png" alt="Light Box" class="hidden md:block product-image"/>
                </div>
                <p>
                    Please contact us at
                    <a class="text-primary-500 font-bold" href="mailto:support@bambuild.ml?subject=Replacement%20Parts%20Order">
                        support@bambuild.ml
                    </a>
                    to purchase replacement light box parts.
                </p>
            </ShopCard>
        </div>
    </div>


    <div class="my-4 flex flex-col md:flex-row justify-between items-center">
        <h2 class="heading-2">Custom Items</h2>
    </div>
    <div class="flex justify-center">
        <div class="shop-card-wrapper">
            <ShopCard title="Personalised Tote Bags" link="/shop/product/totebag" columns="2">
                <span slot="price">£5</span>
                <div slot="header" class="flex flex-row h-48 rounded-lg">
                    <img src="/images/totebag/totebag1.jpeg" alt="Light Box" class="product-image"/>
                    <img src="/images/totebag/totebag2.jpeg" alt="Light Box" class="product-image"/>
                    <img src="/images/totebag/totebag3.jpeg" alt="Light Box" class="hidden md:block product-image"/>
                </div>
                <p>Create your own custom printed tote bag.</p>
            </ShopCard>
            <ShopCard title="Custom Keyrings" link="/shop/product/keyring" columns="2">
                <span slot="price">£2 - £2.50</span>
                <div slot="header" class="flex flex-row h-48 rounded-lg">
                    <img src="/images/keyring/keyring9.jpeg" alt="Light Box" class="product-image"/>
                    <img src="/images/keyring/keyring12.jpeg" alt="Light Box" class="product-image"/>
                    <img src="/images/keyring/keyring14.jpeg" alt="Light Box" class="hidden md:block product-image"/>
                </div>
                <p>Create your own custom engraved keyring.</p>
            </ShopCard>
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

    .product-image {
        @apply w-1/2 md:w-1/3 object-cover;
        border-radius: inherit;
    }
</style>