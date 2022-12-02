<script>
    import Alert from '$lib/components/Alert.svelte';
    import ContentWrapper from "$lib/components/ContentWrapper.svelte";
    import HeaderParralax from "$lib/components/HeaderParralax.svelte";
</script>

<ContentWrapper>
    <Alert color="info" dismissable>
        <span class="font-medium">Info alert!</span>
    </Alert>
    <Alert color="success" dismissable>
        <span class="font-medium">Success alert!</span>
    </Alert>
    <Alert color="warning" dismissable>
        <span class="font-medium">Warning alert!</span>
    </Alert>
    <Alert color="danger" dismissable>
        <span class="font-medium">Danger alert!</span>
    </Alert>
    <HeaderParralax/>
</ContentWrapper>