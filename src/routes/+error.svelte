<script>
    import { page } from '$app/stores';
    import "$lib/error/styles.css"
</script>

<div class="error-page">
    <div class="error-bg error-{$page.status}">
        <div class="error-bg-overlay"></div>
        <div class="error-animation"></div>
        <div class="error-content">
            <img src="/error/icons/{$page.status}.svg">
            <span class="error-title">{$page.status} {$page.error.message}</span>
            <div class="error-options">
                <a href="javascript:window.history.go(-1);">
                    <i class="text-xl mr-2 fas fa-arrow-left"></i>
                    <span>Go Back</span>
                </a>
                <a href="/">
                    <i class="text-xl mr-2 fas fa-house"></i>
                    <span>Home</span>
                </a>
            </div>
        </div>
    </div>
</div>

<h1>: </h1>