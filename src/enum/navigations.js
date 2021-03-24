export const NAVIGATIONS = [
  {
    id: 'home',
    icon: 'fas fa-home',
    title: 'home_page',
    routeName: 'home.index'
  },
  {
    id: 'element_ui',
    icon: 'fas fa-circle',
    title: 'element_ui',
    dropdown: true,
    dropdownItem: [
      {
        id: 'element_ui_input',
        icon: 'fas fa-circle',
        title: 'element_ui_input',
        routeName: 'element_ui.input'
      },
      {
        id: 'element_ui_select',
        icon: 'fas fa-circle',
        title: 'element_ui_select',
        routeName: 'element_ui.select'
      },
      {
        id: 'element_ui_check',
        icon: 'fas fa-circle',
        title: 'element_ui_check',
        routeName: 'element_ui.check'
      },
      {
        id: 'element_ui_date_picker',
        icon: 'fas fa-circle',
        title: 'element_ui_date_picker',
        routeName: 'element_ui.date_picker'
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
