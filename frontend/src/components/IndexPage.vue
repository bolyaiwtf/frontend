<template lang="pug">
  .wrapper
    div(v-if='!mutating')
      message(v-if='message && !errored', :message='message', :hasComment='hasComment')
      message(
        v-else,
        :message='fetchError',
        :hasComment='true',
        :error='true'
      )
    loading(v-else)
    .more-link
      a(
        href='javascript:;'
        @click='fetchMessage',
        :class='{ disabled: moreButton.disabled }'
      )
        i.fa.fa-refresh
        span Kérek még!
</template>

<script>
import axios from 'axios';

import Message from './Message';

export default {
  name: 'index-page',
  components: {
    Message
  },
  data: function () {
    return {
      message: null,
      hasComment: false,
      mutating: true,
      errored: false,
      moreButton: {
        loaded: false,
        disabled: false
      }
    }
  },
  mounted: function () {
    this.fetchMessage();
    this.moreButton.loaded = true;
  },
  computed: {
    fetchError: function () {
      return {
        header: 'Nem sikerült betölteni az üzenetet.',
        comment: 'Kérlek próbáld újra később.'
      };
    }
  },
  methods: {
    fetchMessage() {
      if (this.moreButton.disabled) {
        return;
      }

      this.mutating = true;
      this.errored = false;
      this.moreButton.disabled = true;

      return axios.get('https://api.bolyai.wtf', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(({ data }) => {
          if (data.ok) {
            this.message = data.wtf;
            this.hasComment = data.wtf.comment && !!data.wtf.comment.length
          } else {
            this.errored = true;
          }

          this.mutating = false;
          this.moreButton.disabled = false;
        })
        .catch(err => {
          console.error(err);
          this.errored = true;
          this.mutating = false;
          this.moreButton.disabled = false;
        });
    }
  }
};
</script>

<style lang="scss">
  @import 'src/styles/colors';

  .more-link {
    text-align: center;
    padding: 20px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    a {
      display: inline-block;
      padding: 8px 25px;
      color: #fff;
      font-weight: 600;
      background: $base;
      transition: background .2s linear;
      text-decoration: none;
      border-radius: 25px;

      i {
        margin-right: 10px;
      }

      &:hover {
        background: darken($base, 10%);
      }

      &.disabled {
        background: lighten($base, 15%);
      }
    }
  }
</style>
