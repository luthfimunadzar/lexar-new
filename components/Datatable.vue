<template>
    <div>
        <b-row>
            <b-col md="12">
                <b-form-input
                type="text"
                :class="['big', 'mb-4']"
                placeholder="Search Sub Kelas"
                @input="search"></b-form-input>
            </b-col>
        </b-row>

        <b-table 
            :items="items" 
            :fields="fields" 
            striped 
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            show-empty
            >
            <template slot="pilih" slot-scope="scope">
                <b-form-checkbox
                    :id="scope.item.id.toString()"
                    v-model="tableCheck"
                    :value="scope.item.id"
                    class="check-in-table mb-0"
                    @input="pilihSubClass(tableCheck)"
                >
                </b-form-checkbox>
            </template>
        </b-table>

        <b-pagination
        v-model="meta.current_page"
        :total-rows="meta.total"
        :per-page="meta.per_page"
        size="sm"
        class="mt-3"
        @input="changePage"
        ></b-pagination>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    props: {
        items: {
            type: Array,
            required: true
        },
        fields: {
            type: Array,
            required: true
        },
        meta: {
            required: true
        },
    },
    data() {
        return {
            sortBy: null, 
            sortDesc: false,
            tableCheck: [],
        }
    },
    watch: {
        sortBy(val) {
            this.$emit('sort', {
                sortBy: this.sortBy,
                sortDesc: this.sortDesc
            })
        },
        sortDesc(val) {
            this.$emit('sort', {
                sortBy: this.sortBy,
                sortDesc: this.sortDesc
            })
        }
    },
    methods: {
        loadPerPage(val) {
            this.$emit('per_page', this.meta.per_page)
        },
        changePage(val) {
            this.$emit('pagination', val)
        },
        search: _.debounce(function (e) {
            console.log(e)
            this.$emit('search', e)
        }, 500),
        pilihSubClass(params) {
            this.$emit('checked', this.tableCheck)
        }
    }
}
</script>

