<script context="module" lang="ts">
    export let image = '';
</script>

<aside class="fixed top-[72px] right-16 z-[-1]">
    <slot>
        <div>
            <img src={image} alt="">
        </div>
    </slot>
    <slot name="additional-content" />
</aside>