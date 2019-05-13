<template lang="pug">
  .box(:class='{ error }')
    h2.title(
      :class='{ "has-comment": hasComment }'
      v-html='message.header'
    )
    p.comment(
      v-if='hasComment',
      v-html='message.comment'
    )
</template>

<script>
export default {
  name: 'message',
  props: {
    message: {
      type: Object,
      required: true
    },
    hasComment: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    }
  }
};
</script>


<style lang="scss">
  @import 'src/styles/colors';

  .box {
    text-align: center;
    width: 500px;
    padding: 15px 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    box-shadow: 0 0 2.2em rgba(0, 0, 0, .25);
    border: 3px solid $base;

    .title {
      color: $base;

      &.has-comment {
        border-bottom: 1px solid $base;
        padding-bottom: 10px;
      }
    }

    img {
      max-width: 100%;
    }

    &.error {
      border: 3px solid $errored;

      .title {
        color: $errored;
      }
    }

    @media only screen and ( max-width: 600px ) {
      border: none;
      position: static;
      transform: none;
      width: auto;
      box-shadow: 0 0 2.2em rgba(0, 0, 0, .15);
    }
  }
</style>
