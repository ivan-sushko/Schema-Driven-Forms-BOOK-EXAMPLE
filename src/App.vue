<template>
  <div id="app" class="container py-4">
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="onSubmit">
          <Renderrer 
            v-for="(element, name) in schema" 
            :key="name" 
            :element="element" 
            v-model="form[name]"
          />

          <pre>{{ form }}</pre>

          <div class="form-group">
            <button 
              type="submit" 
              class="btn btn-primary"
            >Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Renderrer from '@/components/Renderrer';
import { parse } from '@/libraries/Api';
export default {
  name: 'app',
  components: { Renderrer },
  data() {
    return {
      schema: {},
      form: {}
    }
  },
  methods: {
    onSubmit() {
      console.log('Submit clicked');
    }
  },
  created() {
    axios.get('http://localhost:3000/schema')
    .then(response => {
      this.schema = parse(response.data);
    })
    .catch(error => {
      console.log('Network error', error);
    })
  }
}
</script>