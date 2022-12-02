<script>
    import { fade } from 'svelte/transition'
    export let color = 'info'
    let icon
    switch (color) {
        case "info":
            icon = "fas fa-info-circle"
            break
        case "success":
            icon = "fas fa-check-circle"
            break;
        case "warning":
            icon = "fas fa-exclamation-triangle"
            break;
        case "danger":
            icon = "fas fa-octagon-xmark"
    }
    export let dismissable = false
    let dismissed
    let dismissTransition
    const closeAlert = () => {
        dismissTransition = true
        dismissed = true
    }
</script>

{#if !dismissed}
    <div transition:fade="{{duration: dismissTransition ? 250 : 0}}" class="alert-box style-{color}" role="alert">
        <div class="flex justify-center items-center mr-2">
            <i class="text-xl {icon}"></i>
        </div>
        <div class="my-2">
            <slot />
        </div>
        {#if dismissable}
            <button type="button" on:click={closeAlert} class="close-button" aria-label="Close">
                <i class="text-lg fas fa-xmark"></i>
            </button>
        {/if}
    </div>
{/if}

<style>
    div.alert-box {
        @apply flex items-center px-4 py-2 mb-4 text-sm rounded-lg;
    }

    div.alert-box > button.close-button {
        @apply flex justify-center items-center w-8 h-8 ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5;
    }

    div.alert-box.style-info    { @apply text-info-800      bg-info-200;    }
    div.alert-box.style-success { @apply text-success-800   bg-success-200; }
    div.alert-box.style-warning { @apply text-warning-800   bg-warning-200; }
    div.alert-box.style-danger  { @apply text-danger-800    bg-danger-200;  }

    div.alert-box.style-info    > button.close-button { @apply bg-info-200      text-info-800       focus:ring-info-400     hover:bg-info-300;      }
    div.alert-box.style-success > button.close-button { @apply bg-success-200   text-success-800    focus:ring-success-400  hover:bg-success-300;   }
    div.alert-box.style-warning > button.close-button { @apply bg-warning-200   text-warning-800    focus:ring-warning-400  hover:bg-warning-300;   }
    div.alert-box.style-danger  > button.close-button { @apply bg-danger-200    text-danger-800     focus:ring-danger-400   hover:bg-danger-300;    }
</style>