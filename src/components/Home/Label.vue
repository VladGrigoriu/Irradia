<template>
    <div class="label">
        {{ label }}
    </div>
</template>

<script>
export default {
    props: {
        label: String
    }
}
</script>

<style>
.label{
    border-radius: 20px;
    padding: 5px 20px;
    background-color: transparent;
    border: 1px solid var(--text-color-contrast);
    height: auto !important;
    width: fit-content;
    margin-top: 10px !important;
    font-size: 13px;
    grid-column: auto !important;
    justify-self: end;
    align-self: end;
    position: relative;
}
</style>