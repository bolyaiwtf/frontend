<template lang="pug">
  .wrapper
    message(
      :message='notFoundMessage',
      :hasComment='true',
      :error='true'
    )
</template>

<script>
import Message from './Message';

export default {
  name: 'not-found-page',
  components: {
    Message
  },
  computed: {
    notFoundMessage: function () {
      return {
        header: 'wtf',
        comment: 'page not found'
      }
    }
  }
};
</script>
