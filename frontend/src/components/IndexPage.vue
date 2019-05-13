<template lang="pug">
  .wrapper
    .box(v-if='message')
      h2.title(:class='{ "has-comment": hasComment }')
      p.comment(v-if='hasComment')
</template>

<script>
import axios from 'axios';

export default {};
</script>
