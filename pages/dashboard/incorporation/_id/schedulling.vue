<template>
    <div>
        <b-row>
            <b-col md="10" offset-md="1">
                <h3 class="dashboard-title">{{ $t('schedulling') }}</h3>
                <no-ssr>
                    <full-calendar :config="config" :events="events" @day-click="eventSelected"/>
                </no-ssr>

                <div class="text-center">
                  <button class="btn btn-secondary w-50 big rounded-shadow mt-5" v-b-modal.modal-ty>{{ $t('continue') }}</button>
                </div>

                <b-modal ref="modal-sign" hide-footer class="text-center">
                    <h2 class="font-weight-bold mb-4">Scheduling for Signing</h2>
                    <b-form-group
                        label="Signing Date"
                        label-for="input-tanggal-ttd"
                    >
                      <h3 class="view">
                        {{ dayShow }}
                      </h3>
                    </b-form-group>
                    
                    <b-form-group
                        label="Signing Location"
                        label-for="input-tempat-ttd"
                    >
                      <b-form-input
                      id="input-tempat-ttd"
                      v-model="sign.tempat_ttd"
                      type="text"
                      placeholder="Menara Mandiri"
                      ></b-form-input>
                    </b-form-group>

                    <button class="btn btn-secondary" @click.prevent="setSign">Submit</button>
                </b-modal>

                <b-modal id="modal-ty" hide-footer class="text-center" size="xl">
                    <h2 class="font-weight-bold mb-4">Thank You,</h2>
                    <p class="email-text">Your incorporation request has been done, please wait for the process, we will inform you about all the process through email</p>
                    <nuxt-link :to="localePath('dashboard')" class="btn btn-primary">Back to Dashboard</nuxt-link>
                </b-modal>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import SidebarDashboard from "~/components/SidebarDashboard.vue";
import moment from 'moment';

export default {
  layout: "dashboard-with-sidebar",
  middleware: 'auth',
  components: {
    SidebarDashboard
  },
  async asyncData({app}){
    const tempCalendar = await app.$matrix.getCalendar();
    const tempEvent = tempCalendar.data.map(obj => {
      var rObj = {};
      rObj["id"] = obj.idmatrix;
      rObj["start"] = moment(obj.tanggal_ttd).format('DD/MM/YYYY');
      rObj["title"] = obj.nama_perseroan;
      rObj["classNames"] = ['unclickable'];
      return rObj
    })

    return{
      events: tempEvent,
    }
  },
  mounted(){
    this.sign.idmatrix = this.$route.params.id;
  },
  data() {
    return {
      nilai: 90,
      max: 100,
      events: [],
      dayShow: "",
			config: {
        defaultView: 'month',
        droppable: false,
        editable: false, 
        selectable: false,
        formatDate: 'DD/MM/YYYY',
				eventRender: function(event, element) {
        	console.log(event)
        },
        // validRange: function(nowDate) {
        //   return {
        //     start: nowDate.add(14, 'days')
        //   };
        // },    
        header: {
          right: '',
        }
      },
      sign: {
        idmatrix: null,
        tanggal_ttd: "",
        tempat_ttd: "",
      }
    };
  },
  methods: {
		eventSelected(date, event, view) {
      // day-click(date, jsEvent, view) - Triggered on dayClick()
      //console.log(date.format('YYYY-DD-MM')) // formatted date, ini bikin sesuai dengan format yg buat sheila
      // console.log(event) // moment date 
      // console.log(event) // object event
      //console.log(view)  //object view

      // var events = $('#calendar').fullCalendar('clientEvents');

      if(date === moment().add(14, 'days') || date.isAfter(moment().add(14, 'days'))){
        this.sign.tanggal_ttd = date.format('DD/MM/YYYY');
        this.dayShow = date.format('DD MMM YYYY');
        this.$refs['modal-sign'].show();
      } else {
        this.$toast.error("You can Sign 14 days after you create your PT!").goAway(2000);
      }
    },
    async setSign(){
      try{ 
        await this.$matrix.setSign(this.sign);
        this.$refs['modal-sign'].hide();
        this.$toast.success("Your Data Sign has been Saved!").goAway(2000);
        setInterval(window.location.reload(true), 2000)
      } catch(error) {
        console.log(error)
        this.$toast.error(error.response.data.message).goAway(2000);
      }
    }
  }
};
</script>


