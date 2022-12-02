<script>
    import "$lib/error/styles.css"
</script>

<div class="error-page">
    <div class="error-bg error-500">
        <div class="error-bg-overlay"></div>
        <div class="error-animation"></div>
        <div class="error-content">
            <img src="/error/icons/404.svg">
            <span class="error-title">Page Coming Soon</span>
            <span class="error-text">We are currently working on this page, please check back later.</span>
            <div class="error-options">
                <a href="javascript:window.history.go(-1);">
                    <i class="text-xl mr-2 fas fa-arrow-left"></i>
                    <span>Go Back</span>
                </a>
                <a href="/static">
                    <i class="text-xl mr-2 fas fa-house"></i>
                    <span>Home</span>
                </a>
            </div>
        </div>
    </div>
</div>