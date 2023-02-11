<script>
    import ContentWrapper from "$lib/components/ContentWrapper.svelte";
    import ToggleSwitch from "$lib/components/ToggleSwitch.svelte";
    import { env } from "$env/dynamic/public";
    import Alert from "$lib/components/Alert.svelte";

    import {onMount} from "svelte";
    let Carousel;
    onMount(async () => {
        const module = await import('svelte-carousel');
        Carousel = module.default;
    });

    let insertCode = "pre-order" // TODO: Change this after pre-orders are over
    let frontText = "Your Text Here"
    let rightText = "Right End"
    let leftText = "Left End"
    let backText = "Back"
    let frontTextToggle = true
    let rightTextToggle = false
    let leftTextToggle = false
    let backTextToggle = false
    $: frontTextToggle ? frontText = "Your Text Here" : frontText = ""
    $: rightTextToggle ? rightText = "Right End" : rightText = ""
    $: leftTextToggle ? leftText = "Left End" : leftText = ""
    $: backTextToggle ? backText = "Back Text" : backText = ""
    let email = ""
    let firstName
    let lastName
    let shippingMethod
    let shippingName
    let shippingForm
    let errorRetriedSubmit = false
    let errorRetriedSubmitMessage = false
    $: emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/g.test(email)
    let step = 0

    let insertData = {
        // 'insert-1': {
        //     'image': '/images/lightbox/demo1.jpg',
        //     'name': 'Insert 1'
        // },
        // 'insert-2': {
        //     'image': '/images/lightbox/demo2.jpg',
        //     'name': 'Insert 2'
        // }
        'pre-order': {
            'image': '',
            'name': 'Select an insert after pre-orders have finished'
        }
    }

    function formatData() {
        return {
            "engravings": {
                "front": frontTextToggle ? frontText : "",
                "right": rightTextToggle ? rightText : "",
                "left": leftTextToggle ? leftText : "",
                "back": backTextToggle ? backText : ""
            },
            "insertCode": insertCode,
            "email": email,
            "firstName": firstName,
            "lastName": lastName,
            "shippingMethod": shippingMethod,
            "shippingDetails": shippingMethod === "0" ? `Deliver to ${shippingName}, ${shippingForm}` : "Delivery"
        }
    }

    function generateB64Data() {
        return btoa(JSON.stringify(formatData(), null, 4))
    }

    const copyCustomisationCode = async () => {
        try {
            await navigator.clipboard.writeText(generateB64Data());
            console.log('Content copied to clipboard');
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }

    function submitOrder() {
        let data = formatData()
        let endpoint = `${env.PUBLIC_API_URL}/api/order-lightbox/bundle`
        fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => {
            if (res.status === 200) {
                res.json().then(data => {
                    step = 3
                })
            } else {
                step = 2
            }
        }).catch(err => {
            step = 2
        })
    }

    function retrySubmitOrder() {
        errorRetriedSubmit = true
        submitOrder()
        setTimeout(() => {
            errorRetriedSubmitMessage = true
        }, 2000)
    }
</script>

<ContentWrapper breadcrumb>
    <div class="flex flex-col lg:flex-row items-start md:items-center mb-4 justify-between">
        <h2 class="heading-2">Light Box Bundle</h2>
        <ul class="steps steps-vertical md:steps-horizontal">
            <li class="step" class:step-primary={step >= 0}>Customise</li>
            <li class="step" class:step-primary={step >= 1}>Confirm details</li>
            {#if step === 2 }
                <li class="step step-error">Error</li>
            {/if}
            <li class="step" class:step-primary={step >= 3}>Order confirmed</li>
        </ul>
    </div>
    <!-- Order Customisation -->
    {#if step === 0}
        <div id="product-main">
            <div id="preview-container">
                <svelte:component
                        this={Carousel}
                        autoplayDuration={5000}
                        autoplayProgressVisible
                        pauseOnFocus
                >
                    <div class="preview-image-container">
                        <div class="preview-image">
                            <img src="/images/lightbox/model1.png">
                            <div id="preview-text-front" class="preview-text">
                                <span>{frontText}</span>
                            </div>
                            <div id="preview-text-right" class="preview-text">
                                <span>{rightText}</span>
                            </div>
                        </div>
                    </div>
                    <div class="preview-image-container">
                        <div class="preview-image">
                            <img src="/images/lightbox/model2.png">
                            <div id="preview-text-back" class="preview-text">
                                <span>{backText}</span>
                            </div>
                            <div id="preview-text-left" class="preview-text">
                                <span>{leftText}</span>
                            </div>
                        </div>
                    </div>
                </svelte:component>
            </div>
            <div id="options-container">
                <div id="options-card" class="form-control">
                    <h3 class="heading-3">Choose an Insert</h3>
                    <div id="insert-selection">
                        {#each Object.entries(insertData) as [name, data]}
                            <input class="hidden" type="radio" bind:group={insertCode} value={name} id={name}>
                            <label for={name}>
                                {#if data.image}
                                    <img src={data.image}>
                                {/if}
                                <span class:mt-1={data.image} class:my-4={!data.image}>{data.name}</span>
                            </label>
                        {/each}
                    </div>

                    <h3 class="heading-3">Customise Engravings</h3>

                    <div class="flex flex-row items-center justify-between mt-2 mb-1">
                        <h5 class="heading-5">Front Engraving</h5>
                        <ToggleSwitch bind:checked={frontTextToggle}/>
                    </div>
                    <input type="text" id="frontText" bind:value={frontText} disabled={!frontTextToggle}>

                    <div class="flex flex-row items-center justify-between mt-4 mb-1">
                        <h5 class="heading-5">Right Engraving</h5>
                        <ToggleSwitch bind:checked={rightTextToggle}/>
                    </div>
                    <input type="text" id="rightText" bind:value={rightText} disabled={!rightTextToggle}>

                    <div class="flex flex-row items-center justify-between mt-4 mb-1">
                        <h5 class="heading-5">Left Engraving</h5>
                        <ToggleSwitch bind:checked={leftTextToggle}/>
                    </div>
                    <input type="text" id="leftText" bind:value={leftText} disabled={!leftTextToggle}>

                    <div class="flex flex-row items-center justify-between mt-4 mb-1">
                        <h5 class="heading-5">Back Engraving</h5>
                        <ToggleSwitch bind:checked={backTextToggle}/>
                    </div>
                    <input type="text" id="backText" bind:value={backText} disabled={!backTextToggle}>

                    <button class="btn btn-primary mt-4" on:click={() => step = 1} disabled={!insertCode}>
                        Next <i class="ml-2 fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    {/if}
    <!-- Confirm Details -->
    {#if step === 1}
        <div class="card-container">
            <div class="order-card">
                <h1 class="heading-1 mb-0">Confirm Details</h1>
                <p>Please check the details below and confirm that they are correct. By confirming, you accept any responsibility for any errors in the customisation of the product.</p>
                <h2 class="heading-2 mt-4">Engravings</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-4 mt-2">
                    <h6 class="heading-6 col-span-1">Front Engraving</h6>
                    <span class="col-span-1" class:text-gray-500={!frontTextToggle}>{frontTextToggle ? frontText : "None"}</span>
                    <h6 class="heading-6 col-span-1">Right Engraving</h6>
                    <span class="col-span-1" class:text-gray-500={!rightTextToggle}>{rightTextToggle ? rightText : "None"}</span>
                    <h6 class="heading-6 col-span-1">Left Engraving</h6>
                    <span class="col-span-1" class:text-gray-500={!leftTextToggle}>{leftTextToggle ? leftText : "None"}</span>
                    <h6 class="heading-6 col-span-1">Back Engraving</h6>
                    <span class="col-span-1" class:text-gray-500={!backTextToggle}>{backTextToggle ? backText : "None"}</span>
                </div>

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
                <label class="w-full mt-2 text-sm font-medium text-white">Shipping Method
                    <select bind:value={shippingMethod}>
                        <option selected disabled>Select a shipping method</option>
                        <option value="0">In Person - Only available for CSGS students</option>
                        <option value="1" disabled>Royal Mail (+£3.00) - Currently Unavailable</option>
                    </select>
                </label>
                {#if shippingMethod === "0"}
                <div class="flex flex-col md:flex-row gap-4">
                    <label class="w-full mt-2 text-sm font-medium text-white">Student Full Name
                        <input type="text" bind:value={shippingName} placeholder="Full Name">
                    </label>
                    <label class="md:w-1/3 mt-2 text-sm font-medium text-white">Student Form
                        <input type="text" bind:value={shippingForm} placeholder="Form">
                    </label>
                </div>
                {:else if shippingMethod === "1"}
                    <p class="mt-2">
                        Package will be sent by Royal Mail to the address entered on the
                        Young Enterprise Trading Station Website (next page)
                    </p>
                {/if}

                <div class="flex flex-row justify-between">
                    <button class="btn btn-secondary mt-4" on:click={() => step = 0}>
                        <i class="mr-2 fas fa-arrow-left"></i> Back
                    </button>
                    <button class="btn btn-primary mt-4" on:click={submitOrder}
                            disabled={!(emailValid && firstName && lastName && ((shippingMethod === "0" && shippingName && shippingForm) || shippingMethod === "1"))}>
                        Next <i class="ml-2 fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    {/if}
    <!-- Submit order Error -->
    {#if step === 2}
        {#if errorRetriedSubmitMessage}
            <Alert color="danger" dismissable>
                <span class="font-medium">Order submission failed.</span> Please send the customisation code to <a class="link link-danger" href="mailto:support@bambuild.ml?subject=Website Order (Light Box Bundle)">support@bambuild.ml</a>
            </Alert>
        {/if}
        <div class="card-container">
            <div class="order-card">
                <h1 class="order-confirmed-heading">Order Error</h1>
                <p>
                    Your customisations have been saved. However, there was an error submitting your order.
                    Please try again using the retry button at the bottom of the page.
                </p>
                <p>
                    If this does not work, please send the following customisation code to
                    <a class="link-primary" href="mailto:support@bambuild.ml?subject=Website Order (Light Box Bundle)">support@bambuild.ml</a>
                    and we will manually add your customisation options to our database.
                </p>

                <div class="mt-4 mb-2 flex flex-row justify-between items-center">
                    <h4 class="heading-4">Your Customisation Code</h4>
                    <button class="btn btn-sm" on:click={copyCustomisationCode}>
                        <i class="mr-2 fas fa-copy"></i> Copy code
                    </button>
                </div>
                <div class="bg-black p-4 rounded-xl" style="overflow-wrap: anywhere;">
                    <code>{ generateB64Data() }</code>
                </div>

                <div class="flex flex-row justify-between">
                    <button class="btn btn-error mt-4" on:click={retrySubmitOrder} disabled={errorRetriedSubmit}>
                        <i class="mr-2 fas fa-rotate-right"></i> Retry
                    </button>
                    <button class="btn btn-primary mt-4" on:click={() => step = 3}>
                        Next <i class="ml-2 fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    {/if}
    <!-- Order Complete -->
    {#if step === 3}
        <div class="card-container">
            <div class="order-card">
                <div class="flex flex-row relative">
                    <h1 class="order-confirmed-heading">Order<br>Confirmed</h1>
                    <img src="/images/header/5.png" id="order-confirmed-image">
                </div>
                <p class="z-20">
                    Thank you for your order, we will contact you by email ({email}) with any updates.
                </p>

                <div class="social-media-icons">
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
#product-main {
    @apply flex flex-col lg:flex-row;
}

#preview-container {
    @apply w-full p-6 lg:mr-16 border bg-gray-800 border-gray-700 rounded-lg shadow-md;
    @apply overflow-hidden;
    @apply lg:max-h-[75vmin] lg:h-[75vmin];
}

.preview-image-container {
    @apply w-full h-full;
    @apply flex flex-col justify-center items-center;
    @apply lg:max-h-[calc(75vmin-3rem)] lg:h-[calc(75vmin-3rem)]
}

.preview-image > img {
    @apply object-contain;
    @apply lg:max-h-[calc(75vmin-3rem)] lg:h-[calc(75vmin-3rem)]
}

#insert-selection {
    @apply grid grid-cols-1 gap-4 mb-4;
}

#insert-selection > label {
    @apply w-full p-2 pb-1 border bg-gray-800 border-gray-700 rounded-lg shadow-md;
    @apply flex flex-col items-center;
    @apply cursor-pointer;
    @apply transition-colors duration-200 ease-in-out;
}

#insert-selection > label:hover {
    @apply bg-gray-700 border-gray-600;
}

#insert-selection > input:checked + label {
    @apply bg-gray-600 border-gray-500;
}

#insert-selection > label > img {
    @apply rounded aspect-square object-cover;
}

#insert-selection > input {
    @apply hidden;
}

.card-container {
    @apply w-full flex flex-col justify-center items-center;
    min-height: 75vmin;
}

.order-card {
    @apply max-w-lg p-6 border bg-gray-800 border-gray-700 rounded-lg shadow-md;
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

.preview-image {
    @apply relative;
    @apply text-center;
}

.preview-image > img {
    @apply relative;
}

.preview-text {
    @apply absolute font-bold;
    @apply flex items-center justify-center;
    overflow-wrap: anywhere;
    color: saddlebrown;
}

#preview-text-front {
    font-size: calc((25% + 4vmin + 2vw) * 0.5);
    height: 31%;
    width: 52%;
    top: 41.8%;
    left: 9.6%;
    transform: skew(0, 30deg);
}

#preview-text-right {
    font-size: calc((25% + 4vmin + 2vw) * 0.3);
    height: 31%;
    width: 21.5%;
    top: 50.7%;
    left: 69%;
    transform: skew(0, -30deg);
}

#preview-text-back {
    font-size: calc((25% + 4vmin + 2vw) * 0.5);
    height: 31%;
    width: 52%;
    top: 41.8%;
    left: 9.6%;
    transform: skew(0, 30deg);
}

#preview-text-left {
    font-size: calc((25% + 4vmin + 2vw) * 0.3);
    height: 31%;
    width: 21.5%;
    top: 50.7%;
    left: 69%;
    transform: skew(0, -30deg);
}

#options-container {
    @apply w-full lg:w-1/2;
    @apply flex justify-end;
    @apply lg:max-h-[75vmin] lg:h-[75vmin];
}

#options-card {
    @apply lg:max-w-lg w-full mt-8 lg:mt-0 p-6 border bg-gray-800 border-gray-700 rounded-lg shadow-md;
    @apply overflow-scroll;
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
