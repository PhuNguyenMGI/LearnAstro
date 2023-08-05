<script lang="ts">
    export let src = '';
    export let classes = '';
</script>

<aside class={classes}>
    <slot>
        <div class="">
            <img {src} width=144 height=500 alt="">
        </div>
    </slot>
    <slot name="additional-content" />
</aside>