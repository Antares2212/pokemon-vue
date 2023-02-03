<template>
    <div class="modal-backdrop">
        <div class="modal">
            <slot name="header">
            </slot>

            <slot name="body">
            </slot>

            <slot name="footer">
            </slot>
        </div>
    </div>
    <div class="dialog" :class="{show: show}" v-if="show" @click="hideDialog">
        <div class="dialog__content" @click.stop>
            <div class="dialog__header">
                <div class="dialog__title">
                    {{ title }}
                </div>
            </div>
            <div class="dialog__body">
                <slot></slot>
            </div>
            <div class="dialog__footer">
                <button class="dialog__close btn" @click="hideDialog">
                    Close
                </button>
            </div>
        </div>
    </div>
</template>
<script> 
import toggleMixin from '@/mixins/toggleMixin';

export default {
    props: {
        title: {
            type: String,
            default: () => {}
        }
    },
    name: 'app-dialog',
    mixins: [toggleMixin]
}
</script>
<style>
    .dialog {
        background-color: #00000080;
        bottom: 0;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        transition: opacity .25s ease-in-out;
        z-index: 989;
    }
    
    .dialog.show {
        display: flex;
    }

    .dialog__content {
        border-radius: 0.375rem;
        box-shadow: 0 0 0.75rem #00000080;
        display: flex;
        flex-direction: column;
        margin: auto;
        max-height: 100%;
        max-width: 600px;
        width: 100%;
        opacity: 0;
        pointer-events: auto;
        transform: translateY(-25%);
        transition-duration: .25s;
        transition-property: opacity,transform;
        transition-timing-function: ease-in-out;
    }
    
    .dialog.show .dialog__content {
        opacity: 1;
        transform: translateY(0);
    }

    .dialog__header {
        background-color: #fff;
        border-bottom: 1px solid #e3e3e3;
        border-top-left-radius: 0.375rem;
        border-top-right-radius: 0.375rem;
        flex-shrink: 0;
        padding: 1.125rem 1.25rem;
    }
    
    .dialog__title {    
        color: #24292e;
        display: block;
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 1.3;
        margin: 0;
        text-transform: none;
    }
    
    .dialog__body {
        background-color: #fff;
        overflow-y: auto;
        padding: 1.25rem;
    }

    .dialog__footer {
        background-color: #fff;
        border-bottom-left-radius: 0.375rem;
        border-bottom-right-radius: 0.375rem;
        border-top: 1px solid #e3e3e3;
        display: flex;
        flex-shrink: 0;
        justify-content: flex-end;
        padding: 0.875rem 1.25rem;
    }

    .dialog__close {
        margin-left: auto;
    }
</style>