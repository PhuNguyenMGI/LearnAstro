<script context="module" lang="ts">
    export let image = '';
</script>

<div class="sticky top-0">
    <slot>
        <div>
            <img src={image} alt="">
        </div>
    </slot>
    <slot name="additional-content" />
</div>