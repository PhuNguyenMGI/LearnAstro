<script lang="ts">
    export let src = '';
    export let classes = '';
    let isHidden = false;

    setTimeout(() => {
        isHidden = true;
    }, 5000)
</script>

<aside class={classes}>
    <div class:hidden={isHidden}>
        <slot name="additional-content" />
    </div>
    <slot>
        <div class="">
            <img {src} alt="">
        </div>
    </slot>
</aside>