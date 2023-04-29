<script>
    import ContentWrapper from "$lib/components/ContentWrapper.svelte";
    import { env } from "$env/dynamic/public";

    let image
    let email = ""
    let instructions
    let firstName
    let lastName
    let shippingMethod
    let shippingName
    let shippingForm
    let paymentMethod
    $: emailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/g.test(email)
    let orderNumber = ""
    let step = 0

    let imageCode

    $: if (image) {
        console.log(image[0])
    }

    let imageData = [
        {
            'name': 'BamBuild',
            'items': {
                'custom': { 'image': '/images/keyring-render/blank.png', 'name': 'Custom Keyring', 'large': true},
                'bambuild-circle': { 'image': '/images/keyring-render/bambuild-circle.png', 'name': 'BamBuild Circle', 'large': true},
                'bambuild-heart': { 'image': '/images/keyring-render/bambuild-heart.png', 'name': 'BamBuild Heart', 'large': true}
            }
        },
        {
            'name': 'Summer',
            'items': {
                'daffodill': { 'image': '/images/keyring-render/summer/daffodill.png', 'name': 'Daffodill', 'large': true},
                'sunflower': { 'image': '/images/keyring-render/summer/sunflower.png', 'name': 'Sunflower', 'large': true},
                'rose': { 'image': '/images/keyring-render/summer/rose.png', 'name': 'Rose', 'large': true},
                'rabbit': { 'image': '/images/keyring-render/summer/rabbit.png', 'name': 'Rabbit', 'large': true}
            }
        },
        {
            'name': 'Continents',
            'items': {
                'continent-africa-large': { 'image': '/images/keyring-render/continent/africa-large.png', 'name': 'Africa', 'large': true},
                'continent-africa-small': { 'image': '/images/keyring-render/continent/africa-small.png', 'name': 'Africa', 'large': false},
                'continent-america-large': { 'image': '/images/keyring-render/continent/america-large.png', 'name': 'America', 'large': true},
                'continent-america-small': { 'image': '/images/keyring-render/continent/america-small.png', 'name': 'America', 'large': false},
                'continent-europe-large': { 'image': '/images/keyring-render/continent/europe-large.png', 'name': 'Europe', 'large': true},
                'continent-europe-small': { 'image': '/images/keyring-render/continent/europe-small.png', 'name': 'Europe', 'large': false},
                'continent-asia-large': { 'image': '/images/keyring-render/continent/asia-large.png', 'name': 'Asia', 'large': true},
                'continent-australasia-large': { 'image': '/images/keyring-render/continent/australasia-large.png', 'name': 'Australasia', 'large': true}
            }
        },
        {
            'name': 'Faces',
            'items': {
                'face-sunglasses': { 'image': '/images/keyring-render/emoji/sunglasses.png', 'name': 'Sunglasses Emoji', 'large': false},
                'face-stars': { 'image': '/images/keyring-render/emoji/star.png', 'name': 'Star Eyes Emoji', 'large': false},
                'face-tongue': { 'image': '/images/keyring-render/emoji/tongue.png', 'name': 'Tongue Emoji', 'large': false},
                'face-heart': { 'image': '/images/keyring-render/emoji/heart.png', 'name': 'Heart Eyes Emoji', 'large': false}
            }
        },
        {
            'name': 'Star Signs',
            'items': {
                'starsign-aquarius': { 'image': '/images/keyring-render/starsign/aquarius.png', 'name': 'Aquarius', 'large': false},
                'starsign-aries': { 'image': '/images/keyring-render/starsign/aries.png', 'name': 'Aries', 'large': false},
                'starsign-cancer': { 'image': '/images/keyring-render/starsign/cancer.png', 'name': 'Cancer', 'large': false},
                'starsign-capricorn': { 'image': '/images/keyring-render/starsign/capricorn.png', 'name': 'Capricorn', 'large': false},
                'starsign-gemini': { 'image': '/images/keyring-render/starsign/gemini.png', 'name': 'Gemini', 'large': false},
                'starsign-leo': { 'image': '/images/keyring-render/starsign/leo.png', 'name': 'Leo', 'large': false},
                'starsign-libra': { 'image': '/images/keyring-render/starsign/libra.png', 'name': 'Libra', 'large': false},
                'starsign-pisces': { 'image': '/images/keyring-render/starsign/pisces.png', 'name': 'Pisces', 'large': false},
                'starsign-sagittarius': { 'image': '/images/keyring-render/starsign/sagittarius.png', 'name': 'Sagittarius', 'large': false},
                'starsign-scorpio': { 'image': '/images/keyring-render/starsign/scorpio.png', 'name': 'Scorpio', 'large': false},
                'starsign-taurus': { 'image': '/images/keyring-render/starsign/taurus.png', 'name': 'Taurus', 'large': false},
                'starsign-virgo': { 'image': '/images/keyring-render/starsign/virgo.png', 'name': 'Virgo', 'large': false}
            }
        }
    ]

    function submitOrder() {
        let formData = new FormData()
        formData.append("design", imageCode)
        formData.append("instructions", instructions)
        formData.append("email", email)
        formData.append("firstName", firstName)
        formData.append("lastName", lastName)
        formData.append("shippingMethod", shippingMethod)
        formData.append("shippingDetails", shippingMethod === "0" ? `Deliver to ${shippingName}, Room ${shippingForm}` : "Delivery")
        formData.append("paymentMethod", paymentMethod)

        let endpoint = `${env.PUBLIC_API_URL}/api/order/keyring`
        if (imageCode === "custom") {
            formData.append("image", image[0])
            endpoint = `${env.PUBLIC_API_URL}/api/order-image/keyring`
        }
        console.log("Sending to", endpoint)
        fetch(endpoint, {
            method: "POST",
            body: formData
        }).then(res => {
            if (res.status === 200) {
                res.json().then(data => {
                    console.log(data)
                    orderNumber = data.identifier
                    step = 2
                })
            } else {
                step = 1
            }
        }).catch(() => {
            step = 1
        })
    }
</script>

<ContentWrapper breadcrumb>
    <div class="flex flex-col lg:flex-row items-start md:items-center mb-4 justify-between">
        <h2 class="heading-2">Custom Keyring</h2>
        <ul class="steps steps-vertical md:steps-horizontal">
            <li class="step w-32" class:step-primary={step >= 0}>Customise</li>
            {#if step === 1 }
                <li class="step w-32 step-error">Error</li>
            {/if}
            <li class="step w-32" class:step-primary={step >= 2}>Finish order</li>
        </ul>
    </div>
    {#if step === 0}
        <div class="card-container">
            <div class="order-card">
                <h1 class="heading-1 mb-0">Order Details</h1>
                <h2 class="heading-2 mt-4">Image</h2>
                {#each imageData as category}
                    <h3 class="heading-3 mt-4">{category.name}</h3>
                    <div id="image-selection">
                        {#each Object.entries(category.items) as [name, data]}
                            <input class="hidden" type="radio" bind:group={imageCode} value={name} id={name}>
                            <label for={name}>
                                {#if data.image}
                                    <img src={data.image}>
                                {/if}
                                <span class:mt-1={data.image} class:my-4={!data.image}>{data.name}</span>
                                {#if data.large}
                                    <span class="text-xs text-slate-400">Large (£2.50)</span>
                                {:else}
                                    <span class="text-xs text-slate-400">Small (£2)</span>
                                {/if}
                            </label>
                        {/each}
                    </div>
                {/each}

                {#if imageCode === "custom"}
                    <h2 class="heading-2 mt-4">Custom Keyring</h2>
                    <div class="mt-2">
                        <div id="keyring-preview">
                            {#if image}
                                <img src={URL.createObjectURL(image[0])} alt="Custom Image" class="keyring-image" />
                            {/if}
                            <img src="/images/keyring/keyring-template.jpeg" alt="Blank Keyring" class="keyring-template">
                        </div>
                        <input class="mt-2" type="file" accept="image/*" id="file" bind:files={image}>
                    </div>
                {/if}

                <label class="w-full mt-2 text-sm font-medium text-white">Additional Instructions
                    <input type="text" bind:value={instructions} placeholder="Additional Instructions">
                </label>

                <h2 class="heading-2 mt-4">Personal Details</h2>
                <div class="flex gap-4">
                    <label class="w-full mt-2 text-sm font-medium text-white">First Name
                    <input type="text" bind:value={firstName} placeholder="First Name">
                        </label>
                    <label class="w-full mt-2 text-sm font-medium text-white">Last Name
                        <input type="text" bind:value={lastName} placeholder="Last Name">
                    </label>
                </div>
                <label class="w-full mt-2 text-sm font-medium text-white">Email
                    <input type="email" bind:value={email} placeholder="Your Email" data-valid={emailValid}>
                </label>
                <span class="label-text-alt">
                    Your email will be used to confirm your customisation options and to contact you with any updates with your order.
                </span>

                <h2 class="heading-2 mt-4">Delivery</h2>
                <label class="w-full mt-2 text-sm font-medium text-white">Delivery Method
                    <select bind:value={shippingMethod}>
                        <option selected disabled>Select a delivery method</option>
                        <option value="0">In Person - Only available for CSGS students</option>
                        <option value="1">Royal Mail (+£3.00)</option>
                    </select>
                </label>
                {#if shippingMethod === "0"}
                <div class="flex flex-col md:flex-row gap-4">
                    <label class="w-full mt-2 text-sm font-medium text-white">Full Name
                        <input type="text" bind:value={shippingName} placeholder="Full Name">
                    </label>
                    <label class="md:w-1/3 mt-2 text-sm font-medium text-white">Form Room
                        <input type="text" bind:value={shippingForm} placeholder="Form">
                    </label>
                </div>
                {:else if shippingMethod === "1"}
                    <p class="mt-2">
                        Package will be sent by Royal Mail to the address entered on the
                        Young Enterprise Trading Station Website (next page)
                    </p>
                {/if}

                <h2 class="heading-2 mt-4">Payment</h2>
                <label class="w-full mt-2 text-sm font-medium text-white">Payment Method
                    <select bind:value={paymentMethod}>
                        <option selected disabled>Select a payment method</option>
                        <option value="0">In Person - Only available for CSGS students</option>
                        <option value="1">Online</option>
                    </select>
                </label>

                <p class="mt-4">
                    Please check the details below and confirm that they are correct. By confirming, you accept any responsibility for any errors in the customisation of the product.
                </p>
                <div class="flex flex-row justify-end">
                    <button class="btn btn-primary" on:click={submitOrder}
                            disabled={
                                !(
                                    emailValid
                                    && firstName
                                    && lastName
                                    && ((shippingMethod === "0" && shippingName && shippingForm) || shippingMethod === "1")
                                    && paymentMethod
                                    && imageCode
                                    && imageCode !== "custom" || image
                                )
                            }>
                        Next <i class="ml-2 fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    {/if}
    <!-- Submit order Error -->
    {#if step === 1}
        <div class="card-container">
            <div class="order-card">
                <h1 class="order-confirmed-heading">Order Error</h1>
                <p>
                    An error occurred while submitting your order.
                </p>
                <p>
                    Please email your customisation details to
                    <a class="link-primary" href="mailto:support@bambuild.ml?subject=Website Order (Keyring)">support@bambuild.ml</a>
                    and we will manually add your customisation options to our database.
                </p>

                <div class="flex flex-row justify-end">
                    <button class="btn btn-primary mt-4" on:click={() => step = 2}>
                        Next <i class="ml-2 fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    {/if}
    <!-- Order Complete -->
    {#if step === 2}
        <div class="card-container">
            <div class="order-card">
                <div class="flex flex-row relative">
                    <h1 class="order-confirmed-heading">Almost <br class="md:hidden">There</h1>
                    <img src="/images/header/5.png" id="order-confirmed-image">
                </div>
                <h4 class="heading-4">Order Number: {orderNumber}</h4>
                <p class="mt-8 z-20">
                    To complete your order, please follow the instructions below.
                    Online purchases must be made through the Young Enterprise Trading Station.
                    In order to link your order to the customisation options you have selected,
                    please ensure the contact email you enter when checking out is the
                    <b>same as the one you entered in the previous stage</b> ({email}).
                </p>

                <div class="w-full flex flex-col items-center">
                    <a class="btn btn-lg btn-primary mt-4"
                       href="https://www.ye-tradingstation.org.uk/product/bambuild-custom-keyring">
                        Complete Purchase <i class="ml-4 fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </div>

                <div class="social-media-icons mt-4">
                    <a class="btn btn-primary" href="/">
                        <i class="mr-2 fas fa-house"></i> Home Page
                    </a>
                    <a href="https://instagram.com/bambuild.ye" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.tiktok.com/@bambuild.ye" target="_blank">
                        <i class="fab fa-tiktok"></i>
                    </a>
                </div>
            </div>
        </div>
    {/if}
</ContentWrapper>

<style>
#image-selection {
    @apply grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-4;
}

#image-selection > label {
    @apply w-full p-2 pb-1 border bg-gray-800 border-gray-700 rounded-lg shadow-md;
    @apply flex flex-col items-center;
    @apply cursor-pointer;
    @apply transition-colors duration-200 ease-in-out;
}

#image-selection > label:hover {
    @apply bg-gray-700 border-gray-600;
}

#image-selection > input:checked + label {
    @apply bg-gray-600 border-gray-500;
}

#image-selection > label > img {
    @apply rounded object-cover;
}

#image-selection > input {
    @apply hidden;
}

#keyring-preview {
    @apply relative w-full h-[50vmin];
    @apply flex flex-col justify-center items-center;
}

#keyring-preview > img.keyring-template {
    @apply h-[50vmin] rounded-lg object-cover;
}

#keyring-preview > img.keyring-image {
    @apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[30%];
    @apply h-[25vmin] w-[25vmin] rounded-lg object-cover;
}

.card-container {
    @apply w-full flex flex-col justify-center items-center;
    min-height: 75vmin;
}

.order-card {
    @apply max-w-6xl p-6 border bg-gray-800 border-gray-700 rounded-lg shadow-md;
}

.order-confirmed-heading {
    @apply text-5xl font-extrabold leading-none text-white md:text-6xl z-20;
}

.social-media-icons {
    @apply flex flex-row justify-center items-center z-20 gap-4;
}

.social-media-icons > a:not(.btn) {
    @apply bg-accent-500 rounded-full w-10 h-10;
    @apply text-black text-2xl;
    @apply flex justify-center items-center;
}

#order-confirmed-image {
    @apply absolute -top-12 -right-4 z-10;
    @apply w-48 h-48 md:w-64 md:h-64;
}

.preview-image > img {
    @apply relative;
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

input.order-number {
    @apply text-4xl text-center font-medium;
}

input:disabled {
    @apply bg-gray-900 text-gray-500;
}

input:not(:placeholder-shown)[data-valid=false] {
    @apply border-red-800 ring ring-2 ring-red-800;
}
</style>
