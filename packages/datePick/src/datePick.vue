<template>
  <div class="td-date-pick" :class="{'td-date-pick--input': hasInputElement}">
    <slot :open="open" :close="close" :toggle="toggle" :inputValue="inputValue" :processUserInput="processUserInput" :valueToInputFormat="valueToInputFormat">
      <div v-if="hasInputElement" :class="['td-date-pick--inner-input',{'is-active' : opened}, {'hsa-value': editable && hasInputElement && inputValue}]">
        <input type="text" v-bind="inputAttributes" :readonly="isReadOnly" :value="inputValue" @input="editable && processUserInput($event.target.value)"
          @focus="editable && open()" @click="editable && open()">
        <div :class="['td-input___suffix',]">
          <div v-if="editable && hasInputElement && inputValue" class="td-date-pick--icon td-icon-circle-close" @click="clear"></div>
          <div class="td-date-pick--icon td-icon-date"></div>
        </div>
      </div>

    </slot>
    <transition name="td-date-pick--toggle-calendar">
      <div v-if="opened" class="td-date-pick--outer-wrap" ref="outerWrap" @click="closeViaOverlay" :class="[positionClass, {'td-date-pick-floating': hasInputElement}, {  'td-date-pick-unset--input': !hasInputElement }]">
        <div class="td-date-pick--inner-wrap">
          <header class="td-date-pick--header">
            <button class="td-date-pick--arrow td-date-pick--arrow_year td-date-pick--arrowPrev" :title="prevYearCaption" type="button" @click="increment(-1, 0)">
              <span class="td-icon-d-arrow-left"></span>
            </button>
            <button v-if="activePeriod === 'date'" class="td-date-pick--arrow td-date-pick--arrow_month td-date-pick--arrowPrev" :title="prevMonthCaption" type="button"
              @click="increment(0, -1)">
              <span class="td-icon-arrow-left"></span>
            </button>
            <button v-if="activePeriod === 'date'" class="td-date-pick--arrow td-date-pick--arrow_month td-date-pick--arrowNext" :title="nextMonthCaption" type="button"
              @click="increment(0, 1)">
              <span class="td-icon-arrow-right"></span>
            </button>
            <button class="td-date-pick--arrow td-date-pick--arrow_year td-date-pick--arrowNext" :title="nextYearCaption" type="button" @click="increment(1, 0)">
              <span class="td-icon-d-arrow-right"></span>
            </button>
            <div class="td-date-pick--period-controls">
              <template v-if="activePeriod !== 'year'">
                <!-- period-control  -->
                <div class="td-date-pick--period-control">
                  <button :class="directionClass" :key="currentPeriod.year" type="button" @click="toggleDateType('year')">
                    {{ currentPeriod.year }}<span v-if="labelYear" class="td-date-pick--period-year">{{ labelYear }}</span>
                  </button>
                </div>
                <div class="td-date-pick--period-control">
                  <button :class="directionClass" :key="currentPeriod.month" type="button" @click="toggleDateType('month')">
                    {{ months[currentPeriod.month] }}<span v-if="labelMonth" class="td-date-pick--period-month">{{ labelMonth }}</span>
                  </button>
                </div>
              </template>
              <!-- period-control -->
              <template v-else>
                <div class="td-date-pick--period-control">
                  <button :class="directionClass" :key="currentPeriod.year" type="button" @click="toggleDateType('year')">
                    {{ currentPeriod.year - 6 }}<span v-if="labelYear" class="td-date-pick--period-year">{{ labelYear }}</span> -
                    {{ currentPeriod.year + 5 }}<span v-if="labelYear" class="td-date-pick--period-year">{{ labelYear }}</span>
                  </button>
                </div>
              </template>

            </div>
          </header>

          <!-- picker Year Table -->
          <table v-if="activePeriod === 'year'" class="td-date-pick--table">
            <thead>
              <tr class="td-date-pick--headCell">
                <th colspan="4">
                  <span class="td-date-pick--headCellContent"></span>
                </th>
              </tr>
            </thead>
            <tbody :id="markId" :key="currentPeriod.year" :class="directionClass">
              <tr class="td-date-pick--row" v-for="(anniversary, anniversaryIndex) in currentPeriodYearDates" :key="anniversaryIndex">
                <td class="td-date-pick--cell" v-for="item in anniversary" :class="{
                                        selectable: editable && !item.disabled,
                                        selected: item.selected,
                                        disabled: item.disabled,
                                        today: item.today,
                                        outOfRange: false
                                    }" :data-id="item.dateKey" :key="item.dateKey" @click="editable && selectDateItem(item)">
                  <slot name="cellMonthContent" v-bind:item="item">
                    <div :class="['td-date-pick--cellContent', `cell-type--${activePeriod}`]">{{ item.date.getFullYear() }}</div>
                  </slot>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- picker Month Table -->
          <table v-if="activePeriod === 'month'" class="td-date-pick--table">
            <thead>
              <tr class="td-date-pick--headCell">
                <th colspan="4">
                  <span class="td-date-pick--headCellContent"></span>
                </th>
              </tr>
            </thead>
            <tbody :id="markId" :key="currentPeriod.month" :class="directionClass">
              <tr class="td-date-pick--row" v-for="(quarter, quarterIndex) in currentPeriodMonthDates" :key="quarterIndex">
                <td class="td-date-pick--cell" v-for="item in quarter" :class="{
                                        selectable: editable && !item.disabled,
                                        selected: item.selected,
                                        disabled: item.disabled,
                                        today: item.today,
                                        outOfRange: false
                                    }" :data-id="item.dateKey" :key="item.dateKey" @click="editable && selectDateItem(item)">
                  <slot name="cellMonthContent" v-bind:item="item">
                    <div :class="['td-date-pick--cellContent', `cell-type--${activePeriod}`]">{{ formatLocalMonth(item.date.getMonth() + 1 ) }}</div>
                  </slot>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- picker Date table -->
          <table v-if="activePeriod === 'date'" class="td-date-pick--table">
            <thead>
              <tr>
                <th class="td-date-pick--headCell" v-for="(weekday, weekdayIndex) in weekdaysSorted" :key="weekdayIndex">
                  <span class="td-date-pick--headCellContent">{{weekday}}</span>
                </th>
              </tr>
            </thead>
            <tbody :id="markId" :key="currentPeriod.year + '-' + currentPeriod.month" :class="directionClass">
              <tr class="td-date-pick--row" v-for="(week, weekIndex) in currentPeriodDates" :key="weekIndex">
                <td class="td-date-pick--cell" v-for="item in week" :class="{
                                        selectable: editable && !item.disabled,
                                        selected: item.selected,
                                        disabled: item.disabled,
                                        today: item.today,
                                        outOfRange: item.outOfRange
                                    }" :data-id="item.dateKey" :key="item.dateKey" @click="editable && selectDateItem(item)">
                  <slot name="cellContent" v-bind:item="item">
                    <div :class="['td-date-pick--cellContent', `cell-type--${activePeriod}`]">{{  item.date.getDate() }}</div>
                  </slot>
                </td>
              </tr>
            </tbody>
          </table>

          <div v-if="pickTime && currentTime" class="td-date-pick--timeControls">
            <span class="td-date-pick--timeCaption">{{ setTimeCaption }}</span>
            <div class="td-date-pick--timeUnit">
              <pre><span>{{ currentTime.hoursFormatted }}</span><br></pre>
              <input type="number" pattern="\d*" class="td-date-pick--hoursInput" @input.prevent="inputHours" @focusin="onTimeInputFocus" :disabled="!editable"
                :value="currentTime.hoursFormatted">
            </div>
            <span v-if="pickMinutes" class="td-date-pick--timeSeparator">:</span>
            <div v-if="pickMinutes" class="td-date-pick--timeUnit">
              <pre><span>{{ currentTime.minutesFormatted }}</span><br></pre>
              <input v-if="pickMinutes" type="number" pattern="\d*" class="td-date-pick--minutesInput" @input="inputTime('setMinutes', $event)" @focusin="onTimeInputFocus"
                :disabled="!editable" :value="currentTime.minutesFormatted">
            </div>
            <span v-if="pickSeconds" class="td-date-pick--timeSeparator">:</span>
            <div v-if="pickSeconds" class="td-date-pick--timeUnit">
              <pre><span>{{ currentTime.secondsFormatted }}</span><br></pre>
              <input v-if="pickSeconds" type="number" pattern="\d*" class="td-date-pick--secondsInput" @input="inputTime('setSeconds', $event)" @focusin="onTimeInputFocus"
                :disabled="!editable" :value="currentTime.secondsFormatted">
            </div>
            <button v-if="use12HourClock" type="button" class="td-date-pick--12HourToggleBtn" :disabled="!editable" @click="set12HourClock(currentTime.isPM ? 'AM' : 'PM')">
              {{ currentTime.isPM ? 'PM' : 'AM' }}
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
const formatRE = /,|\.|-| |:|\/|\\/
const dayRE = /D+/
const monthRE = /M+/
const yearRE = /Y+/
const hoursRE = /h+/i
const minutesRE = /m+/
const secondsRE = /s+/
const AMPMClockRE = /A/
const localCn = {
  1: '一',
  2: '二',
  3: '三',
  4: '四',
  5: '五',
  6: '六',
  7: '七',
  8: '八',
  9: '九',
  10: '十',
  11: '十一',
  12: '十二'
}
/**
 * 基于源码
 * vue-date-pick:https://dbrekalo.github.io/vue-date-pick/examples.html#disable-editing-and-picker-ui
 */

import { PRE_MARK } from '../../settings'
export default {
  name: `${PRE_MARK}DatePick`,
  props: {
    value: {
      type: String,
      default: ''
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    displayFormat: {
      type: String
    },
    editable: {
      type: Boolean,
      default: true
    },
    hasInputElement: {
      type: Boolean,
      default: true
    },
    inputAttributes: {
      type: Object
    },
    selectableYearRange: {
      type: [Number, Object, Function],
      default: 40
    },
    startPeriod: {
      type: Object
    },
    parseDate: {
      type: Function
    },
    formatDate: {
      type: Function
    },
    pickTime: {
      type: Boolean,
      default: false
    },
    pickMinutes: {
      type: Boolean,
      default: true
    },
    pickSeconds: {
      type: Boolean,
      default: false
    },
    use12HourClock: {
      type: Boolean,
      default: false
    },
    isDateDisabled: {
      type: Function,
      default: () => false
    },
    nextYearCaption: {
      type: String,
      default: 'Next year'
    },
    prevYearCaption: {
      type: String,
      default: 'Previous year'
    },
    nextMonthCaption: {
      type: String,
      default: 'Next month'
    },
    prevMonthCaption: {
      type: String,
      default: 'Previous month'
    },
    setTimeCaption: {
      type: String,
      default: 'Set time:'
    },
    mobileBreakpointWidth: {
      type: Number,
      default: 500
    },
    weekdays: {
      type: Array,
      default: () => ['一', '二', '三', '四', '五', '六', '日']
    },
    labelMonth: {
      type: String,
      default: '月'
    },
    labelYear: {
      type: String,
      default: '年'
    },
    months: {
      type: Array,
      default: () => ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    },
    startWeekOnSunday: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      markId: '_$dateCalendar',
      inputValue: this.valueToInputFormat(this.value),
      direction: undefined,
      positionClass: undefined,
      opened: !this.hasInputElement,
      activePeriod: 'date',
      currentPeriod: this.startPeriod || this.getPeriodFromValue(this.value, this.format)
    }
  },

  computed: {
    valueDate() {
      const value = this.value
      const format = this.format

      return value ? this.parseDateString(value, format) : undefined
    },

    isReadOnly() {
      return !this.editable || (this.inputAttributes && this.inputAttributes.readonly)
    },

    isValidValue() {
      const valueDate = this.valueDate

      return this.value ? Boolean(valueDate) : true
    },

    currentPeriodYearDates() {
      const { year, month, date: dd } = this.currentPeriod
      const years = []
      const today = new Date()
      const date = new Date(year + 6, month, dd)
      const appendYearCount = new Date(date).getFullYear()
      for (let i = appendYearCount - 12; i < appendYearCount; i++) {
        const yearDate = new Date(date)
        yearDate.setFullYear(i)
        years.push({ date: yearDate })
      }
      // define day states
      years.forEach(year => {
        year.disabled = this.isDateDisabled(year.date)
        year.today = areSameDates(year.date, today)
        year.dateKey = [year.date.getFullYear(), year.date.getMonth() + 1, year.date.getDate()].join('-')
        year.selected = this.valueDate ? areSameDates(year.date, this.valueDate) : false
      })
      return chunkArray(years, 4)
    },

    currentPeriodMonthDates() {
      const { year, month, date: dd } = this.currentPeriod
      const months = []
      const today = new Date()
      const date = new Date(year, 0, dd)
      const appendMonthCount = 11

      for (let i = 0; i <= appendMonthCount; i++) {
        const monthDate = new Date(date)
        monthDate.setMonth(i)
        months.push({ date: monthDate })
      }

      // define day states
      months.forEach(month => {
        month.disabled = this.isDateDisabled(month.date)
        month.today = areSameDates(month.date, today)
        month.dateKey = [month.date.getFullYear(), month.date.getMonth() + 1, month.date.getDate()].join('-')
        month.selected = this.valueDate ? areSameDates(month.date, this.valueDate) : false
      })
      return chunkArray(months, 4)
    },

    currentPeriodDates() {
      const { year, month } = this.currentPeriod
      const days = []
      const date = new Date(year, month, 1)
      const today = new Date()
      const firstDayIndex = date.getDay()
      const prependDaysCount = this.startWeekOnSunday ? firstDayIndex : firstDayIndex === 0 ? 6 : firstDayIndex - 1

      if (prependDaysCount) {
        for (let i = prependDaysCount; i > 0; i--) {
          const prevDate = new Date(date)
          prevDate.setDate(-(i - 1))
          days.push({ outOfRange: true, date: prevDate })
        }
      }

      while (date.getMonth() === month) {
        days.push({ date: new Date(date) })
        date.setDate(date.getDate() + 1)
      }

      // append next month dates
      const daysLeft = days.length % 7
      if (daysLeft > 0) {
        const total = 7 - daysLeft
        for (let i = 1; i <= total; i++) {
          const nextDate = new Date(date)
          nextDate.setDate(i)
          days.push({ outOfRange: true, date: nextDate })
        }
      }

      // keep total 42 count
      if (days.length < 42) {
        for (let i = 1; i <= 7; i++) {
          const nextDate = new Date(date)
          nextDate.setDate(i)
          days.push({ outOfRange: true, date: nextDate })
        }
      }

      // define day states
      days.forEach(day => {
        day.disabled = this.isDateDisabled(day.date)
        day.today = areSameDates(day.date, today)
        day.dateKey = [day.date.getFullYear(), day.date.getMonth() + 1, day.date.getDate()].join('-')
        day.selected = this.valueDate ? areSameDates(day.date, this.valueDate) : false
      })

      return chunkArray(days, 7)
    },

    yearRange() {
      const currentYear = this.currentPeriod.year
      const userRange = this.selectableYearRange
      const userRangeType = typeof userRange

      let yearsRange = []

      if (userRangeType === 'number') {
        yearsRange = range(currentYear - userRange, currentYear + userRange)
      } else if (userRangeType === 'object') {
        yearsRange = range(userRange.from, userRange.to)
      } else if (userRangeType === 'function') {
        yearsRange = userRange(this)
      }

      if (yearsRange.indexOf(currentYear) < 0) {
        yearsRange.push(currentYear)
        yearsRange = yearsRange.sort()
      }

      return yearsRange
    },

    currentTime() {
      const currentDate = this.valueDate

      if (!currentDate) {
        return undefined
      }

      const hours = currentDate.getHours()
      const minutes = currentDate.getMinutes()
      const seconds = currentDate.getSeconds()

      return {
        hours,
        minutes,
        seconds,
        isPM: isPM(hours),
        hoursFormatted: (this.use12HourClock ? to12HourClock(hours) : hours).toString(),
        minutesFormatted: paddNum(minutes, 2),
        secondsFormatted: paddNum(seconds, 2)
      }
    },

    directionClass() {
      return this.direction ? `td-date-pick--${this.direction}Direction` : undefined
    },

    weekdaysSorted() {
      if (this.startWeekOnSunday) {
        const weekdays = this.weekdays.slice()
        weekdays.unshift(weekdays.pop())
        return weekdays
      } else {
        return this.weekdays
      }
    }
  },

  watch: {
    value(value) {
      if (this.isValidValue) {
        this.inputValue = this.valueToInputFormat(value)
        this.currentPeriod = this.getPeriodFromValue(value, this.format)
      }
    },

    currentPeriod(currentPeriod, oldPeriod) {
      const currentDate = new Date(currentPeriod.year, currentPeriod.month).getTime()
      const oldDate = new Date(oldPeriod.year, oldPeriod.month).getTime()

      this.direction = currentDate !== oldDate ? (currentDate > oldDate ? 'next' : 'prev') : undefined

      if (currentDate !== oldDate) {
        this.$emit('periodChange', {
          year: currentPeriod.year,
          month: currentPeriod.month,
          date: currentPeriod.date
        })
      }
    }
  },

  beforeDestroy() {
    this.removeCloseEvents()
    this.teardownPosition()
  },

  methods: {
    valueToInputFormat(value) {
      return !this.displayFormat
        ? value
        : this.formatDateToString(this.parseDateString(value, this.format), this.displayFormat) || value
    },

    getPeriodFromValue(dateString, format) {
      const date = this.parseDateString(dateString, format) || new Date()
      return { month: date.getMonth(), year: date.getFullYear(), date: date.getDate() }
    },

    parseDateString(dateString, dateFormat) {
      return !dateString
        ? undefined
        : this.parseDate
          ? this.parseDate(dateString, dateFormat)
          : this.parseSimpleDateString(dateString, dateFormat)
    },

    formatDateToString(date, dateFormat) {
      return !date
        ? ''
        : this.formatDate
          ? this.formatDate(date, dateFormat)
          : this.formatSimpleDateToString(date, dateFormat)
    },

    parseSimpleDateString(dateString, dateFormat) {
      let day, month, year, hours, minutes, seconds

      const dateParts = dateString.split(formatRE)
      const formatParts = dateFormat.split(formatRE)
      const partsSize = formatParts.length

      for (let i = 0; i < partsSize; i++) {
        if (formatParts[i].match(dayRE)) {
          day = parseInt(dateParts[i], 10)
        } else if (formatParts[i].match(monthRE)) {
          month = parseInt(dateParts[i], 10)
        } else if (formatParts[i].match(yearRE)) {
          year = parseInt(dateParts[i], 10)
        } else if (formatParts[i].match(hoursRE)) {
          hours = parseInt(dateParts[i], 10)
        } else if (formatParts[i].match(minutesRE)) {
          minutes = parseInt(dateParts[i], 10)
        } else if (formatParts[i].match(secondsRE)) {
          seconds = parseInt(dateParts[i], 10)
        }
      }

      const resolvedDate = new Date([paddNum(year, 4), paddNum(month, 2), paddNum(day, 2)].join('-'))

      if (isNaN(resolvedDate)) {
        return undefined
      } else {
        const date = new Date(year, month - 1, day)

        ;[
          [year, 'setFullYear'],
          [hours, 'setHours'],
          [minutes, 'setMinutes'],
          [seconds, 'setSeconds']
        ].forEach(([value, method]) => {
          typeof value !== 'undefined' && date[method](value)
        })

        return date
      }
    },

    formatSimpleDateToString(date, dateFormat) {
      return dateFormat
        .replace(yearRE, match => Number(date.getFullYear().toString().slice(-match.length)))
        .replace(monthRE, match => paddNum(date.getMonth() + 1, match.length))
        .replace(dayRE, match => paddNum(date.getDate(), match.length))
        .replace(hoursRE, match =>
          paddNum(AMPMClockRE.test(dateFormat) ? to12HourClock(date.getHours()) : date.getHours(), match.length)
        )
        .replace(minutesRE, match => paddNum(date.getMinutes(), match.length))
        .replace(secondsRE, match => paddNum(date.getSeconds(), match.length))
        .replace(AMPMClockRE, match => (isPM(date.getHours()) ? 'PM' : 'AM'))
    },

    increment(incrementYear = 0, incrementMonth = 0) {
      const refDate = new Date(this.currentPeriod.year, this.currentPeriod.month, this.currentPeriod.date)

      if (this.activePeriod === 'year') {
        incrementYear = incrementYear > 0 ? 12 : -12
      }
      const incrementDate = new Date(
        refDate.getFullYear() + incrementYear,
        refDate.getMonth() + incrementMonth,
        refDate.getDate()
      )

      this.currentPeriod = {
        month: incrementDate.getMonth(),
        year: incrementDate.getFullYear(),
        date: incrementDate.getDate()
      }
    },

    formatLocalMonth(month) {
      return localCn[month] + this.labelMonth
    },

    processUserInput(userText) {
      const userDate = this.parseDateString(userText, this.displayFormat || this.format)

      this.inputValue = userText

      this.$emit('input', userDate ? this.formatDateToString(userDate, this.format) : userText)
    },

    toggle() {
      return this.opened ? this.close() : this.open()
    },

    open() {
      if (!this.opened) {
        this.opened = true
        this.currentPeriod = this.startPeriod || this.getPeriodFromValue(this.value, this.format)
        this.addCloseEvents()
        this.setupPosition()
      }
      this.direction = undefined
    },

    toggleDateType(type) {
      this.removeCloseEvents()

      if (this.activePeriod === type) {
        this.activePeriod = 'date'
      } else {
        this.activePeriod = type
      }
      this.addCloseEvents()
    },

    close() {
      if (this.opened) {
        this.activePeriod = 'date'
        this.opened = false
        this.direction = undefined
        this.removeCloseEvents()
        this.teardownPosition()
      }
    },

    closeViaOverlay(e) {
      if (this.hasInputElement && e.target === this.$refs.outerWrap) {
        this.close()
      }
    },
    addCloseEvents() {
      if (!this.closeEventListener) {
        this.closeEventListener = e => this.inspectCloseEvent(e)
        ;['click', 'keyup', 'focusin'].forEach(eventName =>
          document.addEventListener(eventName, this.closeEventListener)
        )
      }
    },

    inspectCloseEvent(event) {
      if (event.keyCode) {
        // 当前操作非日期的 不关闭页面
        if (this.activePeriod !== 'date') return
        event.keyCode === 27 && this.close()
      } else if (!(event.target === this.$el) && !this.$el.contains(event.target)) {
        if (existParentNodeId(event.target, this.markId) || !this.hasInputElement) return
        this.close()
      }
    },

    removeCloseEvents() {
      if (this.closeEventListener) {
        ;['click', 'keyup', 'focusin'].forEach(eventName =>
          document.removeEventListener(eventName, this.closeEventListener)
        )

        delete this.closeEventListener
      }
    },

    setupPosition() {
      if (!this.positionEventListener) {
        this.positionEventListener = () => this.positionFloater()
        window.addEventListener('resize', this.positionEventListener)
      }

      this.positionFloater()
    },

    positionFloater() {
      const inputRect = this.$el.getBoundingClientRect()

      let verticalClass = 'td-date-pick--positionTop'
      let horizontalClass = 'td-date-pick--positionLeft'

      const calculate = () => {
        const rect = this.$refs.outerWrap.getBoundingClientRect()
        const floaterHeight = rect.height
        const floaterWidth = rect.width

        if (window.innerWidth > this.mobileBreakpointWidth) {
          // vertical
          if (
            inputRect.top + inputRect.height + floaterHeight > window.innerHeight &&
            inputRect.top - floaterHeight > 0
          ) {
            verticalClass = 'td-date-pick--positionBottom'
          }

          // horizontal
          if (inputRect.left + floaterWidth > window.innerWidth) {
            horizontalClass = 'td-date-pick--positionRight'
          }

          this.positionClass = ['td-date-pick--positionReady', verticalClass, horizontalClass].join(' ')
        } else {
          this.positionClass = 'td-date-pick--positionFixed'
        }
      }

      this.$refs.outerWrap ? calculate() : this.$nextTick(calculate)
    },

    teardownPosition() {
      if (this.positionEventListener) {
        this.positionClass = undefined
        window.removeEventListener('resize', this.positionEventListener)
        delete this.positionEventListener
      }
    },

    clear() {
      this.$emit('input', '')
    },

    selectDateItem(item) {
      if (!item.disabled) {
        const newDate = new Date(item.date)

        if (this.currentTime) {
          newDate.setHours(this.currentTime.hours)
          newDate.setMinutes(this.currentTime.minutes)
          newDate.setSeconds(this.currentTime.seconds)
        }

        this.$emit('input', this.formatDateToString(newDate, this.format))
        if (this.hasInputElement && !this.pickTime) {
          if (this.activePeriod === 'date') {
            this.close()
          } else {
            this.activePeriod = 'date'
          }
        } else {
          this.activePeriod = 'date'
        }
      }
    },

    set12HourClock(value) {
      const currentDate = new Date(this.valueDate)
      const currentHours = currentDate.getHours()

      currentDate.setHours(value === 'PM' ? currentHours + 12 : currentHours - 12)

      this.$emit('input', this.formatDateToString(currentDate, this.format))
    },

    inputHours(event) {
      const currentDate = new Date(this.valueDate)
      const currentHours = currentDate.getHours()
      const targetValue = parseInt(event.target.value, 10) || 0
      const minHours = this.use12HourClock ? 1 : 0
      const maxHours = this.use12HourClock ? 12 : 23
      const numValue = boundNumber(targetValue, minHours, maxHours)

      currentDate.setHours(this.use12HourClock ? to24HourClock(numValue, isPM(currentHours)) : numValue)
      event.target.value = paddNum(numValue, 1)
      this.$emit('input', this.formatDateToString(currentDate, this.format))
    },

    inputTime(method, event) {
      const currentDate = new Date(this.valueDate)
      // eslint-disable-next-line
      const targetValue = parseInt(event.target.value) || 0
      const numValue = boundNumber(targetValue, 0, 59)

      event.target.value = paddNum(numValue, 2)
      currentDate[method](numValue)

      this.$emit('input', this.formatDateToString(currentDate, this.format))
    },

    onTimeInputFocus(event) {
      event.target.select && event.target.select()
    }
  }
}

function existParentNodeId(node, parentId) {
  if (!node) return false
  if (node.id === parentId) {
    return node
  } else {
    return existParentNodeId(node.parentNode, parentId)
  }
}

function paddNum(num, padsize) {
  return typeof num !== 'undefined'
    ? num.toString().length > padsize
      ? num
      : new Array(padsize - num.toString().length + 1).join('0') + num
    : undefined
}

function chunkArray(inputArray, chunkSize) {
  const results = []

  while (inputArray.length) {
    results.push(inputArray.splice(0, chunkSize))
  }

  return results
}

function areSameDates(date1, date2) {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  )
}

function range(start, end) {
  const results = []

  for (let i = start; i <= end; i++) {
    results.push(i)
  }
  return results
}

function to12HourClock(hours) {
  const remainder = hours % 12
  return remainder === 0 ? 12 : remainder
}

function to24HourClock(hours, PM) {
  return PM ? (hours === 12 ? hours : hours + 12) : hours === 12 ? 0 : hours
}

function isPM(hours) {
  return hours >= 12
}

function boundNumber(value, min, max) {
  return Math.min(Math.max(value, min), max)
}
</script>
