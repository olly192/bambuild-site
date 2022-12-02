<script>
    import Countdown from "svelte-countdown/src/index.js";
    export let date = false
    export let small = false
</script>

<div class="w-100 mt-2 h-full flex justify-center items-center">
    {#if date}
        <Countdown from={date} dateFormat="YYYY-MM-DD H:m:s" zone="Europe/London" let:remaining>
            {#if remaining.done === false}
                <div class="flex flex-col justify-center items-center">
                    {#if small}
                        <h4 class="heading-4 mb-1">Coming Soon</h4>
                    {:else}
                        <h2 class="heading-2 mb-2">Coming Soon</h2>
                    {/if}
                    <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
                        <div class="flex flex-col">
                            <span class="countdown font-mono text-5xl">
                                <span style="--value:{remaining.days};"></span>
                            </span>days
                        </div>
                        <div class="flex flex-col">
                            <span class="countdown font-mono text-5xl">
                                <span style="--value:{remaining.hours};"></span>
                            </span>hours
                        </div>
                        {#if !small}
                            <div class="flex flex-col">
                                <span class="countdown font-mono text-5xl">
                                    <span style="--value:{remaining.minutes};"></span>
                                </span>min
                            </div>
                            <div class="flex flex-col">
                                <span class="countdown font-mono text-5xl">
                                    <span style="--value:{remaining.seconds};"></span>
                                </span>sec
                            </div>
                        {/if}
                    </div>
                </div>
            {:else}
                <h2 class="heading-2">Coming Soon</h2>
            {/if}
        </Countdown>
    {:else}
        <div class="flex flex-col justify-center items-center">
            <h2 class="heading-2 mb-2">Coming Soon</h2>
            <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div class="flex flex-col">
                    <span class="font-mono text-5xl">
                        <span>??</span>
                    </span>days
                </div>
                <div class="flex flex-col">
                    <span class="font-mono text-5xl">
                        <span>??</span>
                    </span>hours
                </div>
                <div class="flex flex-col">
                    <span class="font-mono text-5xl">
                        <span>??</span>
                    </span>min
                </div>
                <div class="flex flex-col">
                    <span class="font-mono text-5xl">
                        <span>??</span>
                    </span>sec
                </div>
            </div>
        </div>
    {/if}
</div>