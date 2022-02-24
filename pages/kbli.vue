<template>
  <div>
    <!-- Hero Inner -->
    <!-- <div class="inner-hero" style="background-image: url('/lexar/usaha.jpg'); background-position: center center;">
            <b-container>
                <b-row>
                    <b-col>
                        <h3>KBLI</h3>
                        <h5>Klasifikasi Baku Lapangan Usaha Indonesia</h5>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <div class="kbli-wrap white-panel">
            <b-container>
                <b-row>
                    <b-col lg="8" class="my-1">
                        <form action="">
                            <b-form-group
                            label="Filter"
                            label-cols-sm="2"
                            label-for="filterInput"
                            class="mb-0"
                            >
                                <b-row>
                                    <b-col lg="3">
                                        <select v-model="searchBy" class="form-control filter-code">
                                            <option value="judul">Judul</option>
                                            <option value="code">Code</option>
                                        </select>
                                    </b-col>
                                    <b-col lg="9">
                                        <b-input-group size="sm">
                                            <b-form-input
                                            v-model="filter"
                                            type="search"
                                            id="filterInput"
                                            placeholder="Type to Search"
                                            :disabled="showSpinner"
                                            ></b-form-input>
                                            <b-input-group-append>
                                                <b-button @click="search(filter)" type="submit" :disabled="showSpinner">Search</b-button>
                                            </b-input-group-append>
                                            <b-spinner label="Spinning" :class="[showSpinner ? 'd-block' : 'd-none', 'mt-2', 'ml-3']"></b-spinner>
                                        </b-input-group>
                                    </b-col>
                                </b-row>
                            </b-form-group>
                        </form>
                    </b-col>
                    <b-col lg="12">
                        <b-table 
                        striped
                        :items="dataKbli"
                        :filter-debounce="200"
                        :fields="fieldTable"
                        :current-page="currentPage"
                        :per-page="perPage"
                        :sort-by.sync="sortBy"
                        :sort-desc.sync="sortDesc"
                        :sort-direction="sortDirection"
                        @filtered="onFiltered"
                        >
                        </b-table>
                    </b-col>
                    <b-col md="4" offset-md="4">
                        <b-pagination
                        v-model="currentPage"
                        :total-rows="totalRows"
                        :per-page="perPage"
                        align="fill"
                        size="sm"
                        class="my-0"
                        ></b-pagination>
                    </b-col>
                </b-row>
            </b-container>
        </div> -->
  </div>
</template>

<script>
export default {
  // async asyncData ({ app }) {
  //     let tempKbli = await app.$matrix.getKbli();
  //     return {
  //         dataKbli: tempKbli.data
  //     }
  // },
  data() {
    return {
      dataKbli: {},
      fieldTable: [
        { key: "code", label: "Kode", sortable: false },
        { key: "title", label: "Judul", sortable: true },
        { key: "detail", label: "Uraian", sortable: true },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 20,
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      searchInput: "",
      searchBy: "judul",
      filter: null,
      showSpinner: false,
    };
  },
  mounted() {
    // Set the initial number of items
    //   this.totalRows = this.dataKbli.length
  },
  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    async search(params) {
      this.showSpinner = true;

      let tempKbli = null;
      if (this.searchBy === "judul") {
        tempKbli = await this.$matrix.searchKbli(params);
        this.dataKbli = tempKbli.data;
      } else {
        tempKbli = await this.$matrix.searchKbliByCode(params);

        this.dataKbli = this.isArray(tempKbli.data)
          ? tempKbli.data
          : [tempKbli.data];
      }

      this.showSpinner = false;
    },
    isArray(value) {
      return value && typeof value === "object" && value.constructor === Array;
    },
  },
  head() {
    return {
      title: "Klasifikasi Baku Lapangan Usaha Indonesia | LEXAR",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Klasifikasi Baku Lapangan Usaha Indonesia.",
        },
        {
          hid: "og:title",
          name: "og:title",
          content: "Klasifikasi Baku Lapangan Usaha Indonesia | LEXAR",
        },
        {
          hid: "og:description",
          name: "og:description",
          content: "Klasifikasi Baku Lapangan Usaha Indonesia.",
        },
      ],
    };
  },
};
</script>
