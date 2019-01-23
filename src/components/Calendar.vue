<!--
    Documentation on how to work with
    the calendar component
    https://dbrekalo.github.io/vue-date-pick/getting-started.html
 -->


<template>
  <div class="container pt-4">
    <date-pick
      v-model="date"
      :hasInputElement="false"
      :nextMonthCaption="nextMonthCaption"
      :prevMonthCaption="prevMonthCaption"
      :setTimeCaption="setTimeCaption"
      :weekdays="weekdays"
      :months="months"
    ></date-pick>
  </div>
</template>

<script>
import DatePick from "vue-date-pick";
import "vue-date-pick/dist/vueDatePick.css";

export default {
  components: { DatePick },
  data: () => ({
    date: "2019-01-01",
    nextMonthCaption: "Nästa månad",
    prevMonthCaption: "Föregående månad",
    setTimeCaption: "Sätt tid:",
    weekdays: ["Mån", "Tis", "Ons", "Tor", "Fre", "Lör", "Sön"],
    months: [
      "Januari",
      "Februari",
      "Mars",
      "April",
      "Maj",
      "Juni",
      "Juli",
      "Augusti",
      "September",
      "Oktober",
      "November",
      "December"
    ]
  }),
  watch: {
    date() {
      this.$emit('showDay', this.date);
    }
  },
  methods: {
    // when page gets todays date on load
    getToday() {
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1; //January is 0!
      let yyyy = today.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      return yyyy + "-" + mm + "-" + dd;
    }
  },
  created() {
    this.date = this.getToday();
  }
};
</script>

<style>
.vdpArrowPrev:after {
  border-right-color: #36454f;
}

.vdpArrowNext:after {
  border-left-color: #36454f;
}

.vdpCell.selectable:hover .vdpCellContent,
.vdpCell.selected .vdpCellContent {
  background: #36454f;
}

.vdpCell.today {
  color: #36454f;
}

.vdpTimeUnit > input:hover,
.vdpTimeUnit > input:focus {
  border-bottom-color: #36454f7e;
}
</style>