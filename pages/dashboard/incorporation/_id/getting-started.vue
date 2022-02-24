<template>
    <div>
        <b-row>
            <b-col md="8" lg="6" offset-md="2" offset-lg="3" class="guide">
                <h3 class="dashboard-title">Getting Started</h3>

                <h5>
                    <i class="fa fa-circle mr-2"></i> Step 1
                </h5>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus gravida quis blandit turpis cursus. Pharetra magna ac placerat vestibulum. Ornare suspendisse sed nisi lacus sed. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices.
                </p>

                <vue-plyr>
                    <div data-plyr-provider="youtube" data-plyr-embed-id="bTqVqk7FSmY"></div>
                </vue-plyr>

                <p>
                    Mauris vitae ultricies leo integer malesuada nunc vel. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Mollis aliquam ut porttitor leo. Eget duis at tellus at urna condimentum. Congue quisque egestas diam in arcu cursus euismod quis. At lectus urna duis convallis convallis tellus id interdum velit. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean.
                </p>

                <ul>
                    <li>
                        Facilisis volutpat est velit egestas dui id ornare arcu.
                    </li>
                    <li>
                        Ac orci phasellus egestas tellus rutrum.
                    </li>
                    <li>
                        Vitae suscipit tellus mauris a diam.
                    </li>
                    <li>
                        Consequat id porta nibh venenatis cras sed
                    </li>
                    <li>
                        Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero.
                    </li>
                </ul>

                <h5>
                    <i class="fa fa-circle mr-2"></i> Step 2
                </h5>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus gravida quis blandit turpis cursus. Pharetra magna ac placerat vestibulum. Ornare suspendisse sed nisi lacus sed. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices.
                </p>

                <ul>
                    <li>
                        Facilisis volutpat est velit egestas dui id ornare arcu.
                    </li>
                    <li>
                        Ac orci phasellus egestas tellus rutrum.
                    </li>
                    <li>
                        Vitae suscipit tellus mauris a diam.
                    </li>
                    <li>
                        Consequat id porta nibh venenatis cras sed
                    </li>
                    <li>
                        Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero.
                    </li>
                </ul>

                
            </b-col>
        </b-row>
    </div>
</template>

<script>
import _ from "lodash";

export default {
    layout: 'dashboard-with-sidebar',
    middleware: 'auth',
    asyncData(){
        return {

        }
    },
    mounted(){
    },
    watch: {

    },
    created(){

    },
    methods: {
        async getMatrix() {
            
        },
    }
}
</script>

