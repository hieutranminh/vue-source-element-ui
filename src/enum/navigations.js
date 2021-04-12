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
        id: 'el_ui_date_picker',
        icon: 'far fa-circle',
        title: 'el_ui_date_picker',
        routeName: 'el_ui.date_picker'
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
