const dbCollections = {
    USERS: 'users',
    ADMIN_DETAIL: 'adminDetail',
    PROJECTS: 'projects',
    NOTIFICATIONS_SETTINGS: 'notifications_settings',
    TASKS: 'tasks',
    COMPANY_USERS: 'company_users',
    NOTIFICATIONS: 'notifications',
    COMPANIES: 'companies',
    CURRENCY_LIST: "currency_list",
    SETTINGS: "settings",
    USERS: "users",
    PROJECTS: 'projects',
    TASKS: 'tasks',
    TIMESHEET: "timesheets",
    HISTORY: "history",
    COMMENTS: "comments",
    TEAMS_MANAGEMENT: 'teams_management',
    COMPANY_USERS: "company_users",
    RULES: "rules",
    ESTIMATED_TIME:"estimated_time",
    NOTIFICATIONS: "notifications",
    NOTIFICATIONS_SETTINGS: "notifications_settings",
    TASK_STATUS_TEMPLATES : "task_status_templates",
    TASK_TYPE_TEMPLATES : "task_type_templates",
    PROJECT_TAB_COMPONENTS: "project_tab_components",
    APPS: "apps",
    PROJECT_TEMPLATES : "project_templates",
    PROJECT_MAIN_TEMPLATES : "ProjectTemplate",
    MILESTONE: "milestone",
    WASABICREDENTIALS : "wasabicredentials",
    MAIN_CHATS: "main_chats",
    PROJECT_STATUS_TEMPLATES:"project_status_template",
    USERID: "userId",
    TIMETRACKER_DOWNLOAD: 'timeTrackerDownload',
    MENTIONS:'mentions',
    COMMON:'common',
    GLOBAL:'global',
    
    
    // Extra Collection List
    UPDATE_TYPESENCE_REPO:'update_typesence_repo',
    INVOICES: 'invoices',
    CREDITNOTES: 'creditNotes',
    COLLECTION_INFO: "collection_info",
    SUBSCRIPTIONS: 'subscriptions',
    // SUBSCRIPTIONPRICE:'subscriptionPrice',
    PRICES:"prices",
    SUBSCRIPTIONPLAN: "subscriptionPlan",
    PLANFEATURE: "planFeature",
    PLANFEATUREDISPLAY: "planFeatureDisplay",
    CUSTOM_FIELDS: "customField",
    SPRINTS:"sprints",
    FOLDERS:"folders",
    PRECOMPANIES: 'preCompanies',
}

/** DOCUMENT ID'S NAME WHICH IS USED IN THE "SETTINGS" COLLECTION NAME **/
const settingsCollectionDocs = {
    PROJECT_CATEGORY : "project_category",
    TASK_TYPE: "task_type",
    TASK_STATUS: "task_status",
    PROJECT_STATUS: "project_status",
    TASK_PRIORITIES: "task_priorities",
    PROJECT_MILESTONE_STATUS: "milestone_status",
    ALLOWED_FILE_EXTENSION: 'file_extension',
    COMMON_DATE_FORMAT:'date_format',
    COMPANY_USER_STATUS:'company_user_status',
    ROLES: 'roles',
    DESIGNATIONS: 'designations',
    HOURLY_MILESTONE_RANGE:'hourly_milestone_range',
    HOURLY_MILESTONE_WEEKLY_RANGE:'hourly_milestone_weekly_range'
}

module.exports = {
    dbCollections,
    settingsCollectionDocs
}