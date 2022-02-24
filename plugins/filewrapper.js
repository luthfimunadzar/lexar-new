import Vue from 'vue';

const FileWrapper = {
	props: {
  	value: null
  },
	render (h) {
  	return h('b-form-file', {
    	props:	{
      	value: this.value,
        ...this.$attrs
      },
      on: {
      	...this.$listeners,
        input: (val) => {
        	this.$emit('input', [val]); // simulate a filelist value
        }
      }
    })
  }
}

Vue.component('FileWrapper', FileWrapper);