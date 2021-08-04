export const NAVIGATIONS = [
  {
    id: 'home',
    icon: 'fas fa-home',
    title: 'home_page',
    routeName: 'home.index'
  },
  {
    id: 'el_ui',
    icon: 'fab fa-elementor',
    title: 'el_ui',
    dropdown: true,
    dropdownItems: [
      {
        id: 'el_ui_input',
        icon: 'far fa-circle',
        title: 'el_ui_input',
        routeName: 'el_ui.input'
      },
      {
        id: 'el_ui_select',
        icon: 'far fa-circle',
        title: 'el_ui_select',
        routeName: 'el_ui.select'
      },
      {
        id: 'el_ui_check',
        icon: 'far fa-circle',
        title: 'el_ui_check',
        routeName: 'el_ui.check'
      },
      {
        id: 'el_ui_rate',
        icon: 'far fa-circle',
        title: 'el_ui_rate',
        routeName: 'el_ui.rate'
      },
      {
        id: 'el_ui_time_select_picker',
        icon: 'far fa-circle',
        title: 'el_ui_time_select_picker',
        routeName: 'el_ui.time_select_picker'
      },
      {
        id: 'el_ui_date_picker',
        icon: 'far fa-circle',
        title: 'el_ui_date_picker',
        routeName: 'el_ui.date_picker'
      },
      {
        id: 'el_ui_date_time_picker',
        icon: 'far fa-circle',
        title: 'el_ui_date_time_picker',
        routeName: 'el_ui.date_time_picker'
      },
      {
        id: 'el_ui_upload',
        icon: 'far fa-circle',
        title: 'el_ui_upload',
        routeName: 'el_ui.upload'
      },
      {
        id: 'el_ui_table',
        icon: 'far fa-circle',
        title: 'el_ui_table',
        routeName: 'el_ui.table'
      }
    ]
  },
  {
    id: 'pure_ui',
    icon: 'fab fa-elementor',
    title: 'pure_ui',
    dropdown: true,
    dropdownItems: [
      {
        id: 'pure_ui_input',
        icon: 'far fa-circle',
        title: 'pure_ui_input',
        routeName: 'pure_ui.input'
      },
      {
        id: 'pure_ui_select',
        icon: 'far fa-circle',
        title: 'pure_ui_select',
        routeName: 'pure_ui.select'
      },
      {
        id: 'pure_ui_check',
        icon: 'far fa-circle',
        title: 'pure_ui_check',
        routeName: 'pure_ui.check'
      },
      {
        id: 'pure_ui_date_picker',
        icon: 'far fa-circle',
        title: 'pure_ui_date_picker',
        routeName: 'pure_ui.date_picker'
      },
      {
        id: 'pure_ui_upload',
        icon: 'far fa-circle',
        title: 'pure_ui_upload',
        routeName: 'pure_ui.upload'
      },
      {
        id: 'pure_ui_table',
        icon: 'far fa-circle',
        title: 'pure_ui_table',
        routeName: 'pure_ui.table'
      }
    ]
  },
  {
    id: 'validate_before_submit',
    icon: 'fab fa-wpforms',
    title: 'form',
    dropdown: true,
    dropdownItems: [
      {
        id: 'form_basic',
        icon: 'far fa-circle',
        title: 'form_basic',
        routeName: 'form_submit.basic'
      },
      {
        id: 'form_nested_once',
        icon: 'far fa-circle',
        title: 'form_nested_once',
        routeName: 'form_submit.nested_once'
      },
      {
        id: 'form_nested_twice',
        icon: 'far fa-circle',
        title: 'form_nested_twice',
        routeName: 'form_submit.nested_twice'
      },
      {
        id: 'tabs_form',
        icon: 'far fa-circle',
        title: 'tabs_form',
        routeName: 'form_submit.tabs_form'
      }
    ]
  },
  {
    id: 'editor',
    icon: 'fas fa-file-word',
    title: 'editor_page',
    routeName: 'editor.index'
  }
]
