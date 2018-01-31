export default {
  data() {
    return {
      buttonTypes         : [
        'primary',
        'secondary',
        'success',
        'info',
        'warning',
        'danger',
        'light',
        'dark',
        'link'
      ],
      alertTypes          : [
        'primary',
        'secondary',
        'success',
        'info',
        'warning',
        'danger',
        'light',
        'dark'
      ],
      dismissSecs         : 10,
      dismissCountDown    : 0,
      showDismissibleAlert: false,
      breadcrumbItems     : [{
        text: 'Admin',
        href: '#'
      }, {
        text: 'Manage',
        href: '#'
      }, {
        text  : 'Library',
        active: true
      }],
      slide               : 0,
      sliding             : null,
      placements          : [
        'topright', 'top', 'topleft',
        'bottomright', 'bottom', 'bottomleft',
        'righttop', 'right', 'lefttop',
        'rightbottom', 'left', 'leftbottom',
        'auto'
      ],
      tableData : {
        fields: {
          last_name: {
            label: 'Person last name',
            sortable: true
          },
          first_name: {
            label: 'Person first name',
            sortable: false
          },
          foo: {
            // This key overrides `foo`!
            key: 'age',
            label: 'Person age',
            sortable: true
          }
        },
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      },
      striped: false,
      bordered: false,
      outlined: false,
      small: false,
      hover: false,
      dark: false,
      fixed: false,
      footClone: false,
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ],
      show: true,
      currentPage: 1,
      showAll: false,
      showSection: {
        alerts : false,
        buttons : false,
        breadcrumbs : false,
        cards : false,
        carousels: false,
        dropdowns: false,
        embeds: false,
        forms: false,
        jumbotron: false,
        listGroups: false,
        media: false,
        modals: false,
        navs: false,
        pagination: false,
        popovers: false,
        tables: false,
        tabs: false,
        tooltips: false
      }
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    },
    toggleAll(open) {
      for(let sectionKey of Object.keys(this.showSection)) {
        this.showSection[sectionKey] = open;
      }
    },
    toggleSection(sectionKey) {
      this.showSection[sectionKey] = !this.showSection[sectionKey];
    }
  }
}
