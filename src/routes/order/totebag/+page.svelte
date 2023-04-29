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
    $: emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/g.test(email)
    let orderNumber = ""
    let step = 0

    let imageCode

    $: if (image) {
        console.log(image[0])
    }

    let imageData = {
        'polarbear': {
            'image': '/images/totebag/totebag1.jpeg',
            'name': 'Polar Bear'
        },
        'penguin': {
            'image': '/images/totebag/totebag2.jpeg',
            'name': 'Penguin'
        },
        'deer': {
            'image': '/images/totebag/totebag3.jpeg',
            'name': 'Deer'
        },
        'custom': {
            'image': '/images/totebag/blank.jpeg',
            'name': 'Create Your Own Design'
        }
    }

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

        let endpoint = `${env.PUBLIC_API_URL}/api/order/totebag`
        if (imageCode === "custom") {
            formData.append("image", image[0])
            endpoint = `${env.PUBLIC_API_URL}/api/order-image/totebag`
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
        }).catch(err => {
            step = 1
        })
    }
</script>

<ContentWrapper breadcrumb>
    <div class="flex flex-col lg:flex-row items-start md:items-center mb-4 justify-between">
        <h2 class="heading-2">Personalised Tote Bag</h2>
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
                <div id="image-selection">
                    {#each Object.entries(imageData) as [name, data]}
                        <input class="hidden" type="radio" bind:group={imageCode} value={name} id={name}>
                        <label for={name}>
                            {#if data.image}
                                <img src={data.image}>
                            {/if}
                            <span class:mt-1={data.image} class:my-4={!data.image}>{data.name}</span>
                        </label>
                    {/each}
                </div>

                {#if imageCode === "custom"}
                    <h2 class="heading-2 mt-4">Custom Totebag</h2>
                    <div class="mt-2">
                        <div id="keyring-preview">
                            <img src="/images/totebag/blank.jpeg" alt="Tote Bag" class="preview-bag" />
                            <div class="preview-image">
                                {#if image}
                                    <img src={URL.createObjectURL(image[0])} alt="Custom Image" />
                                {/if}
                            </div>
                            <span>Printable Area</span>
                        </div>
                        <input class="mt-2" type="file" accept="image/*" id="file" bind:files={image}>
                    </div>
                    <label class="w-full mt-2 text-sm font-medium text-white">Additional Instructions
                        <input type="text" bind:value={instructions} placeholder="Additional Instructions">
                    </label>
                {/if}

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

                <h2 class="heading-2 mt-4">Shipping</h2>
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
                                    && (imageCode === "custom" ? image : true)
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
                    <a class="link-primary" href="mailto:support@bambuild.ml?subject=Website Order (Totebag)">support@bambuild.ml</a>
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
                       href="https://www.ye-tradingstation.org.uk/product/bambuild-tote-bag">
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
    @apply grid grid-cols-2 md:grid-cols-4 gap-4 mb-4;
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

#bag-preview {
    @apply relative;
}

#bag-preview > span {
    @apply absolute top-[39%] left-[17%] right-[16%] bottom-[11%];
    @apply m-12;
    @apply text-red-600 text-3xl font-bold;
}

#bag-preview > .preview-image {
    @apply absolute top-[39%] left-[17%] right-[16%] bottom-[11%];
    @apply m-8;
    @apply bg-red-400 bg-opacity-25;
    @apply flex flex-col justify-center items-center;
}

#bag-preview > .preview-bag {
    @apply w-full max-h-[80vh];
}

.card-container {
    @apply w-full flex flex-col justify-center items-center;
    min-height: 75vmin;
}

.order-card {
    @apply max-w-4xl p-6 border bg-gray-800 border-gray-700 rounded-lg shadow-md;
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
