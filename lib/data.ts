export const siteData = {
  "tasks": [
    {
      "id": 1,
      "title": "Design new landing page",
      "description": "Create wireframes and mockups for the new landing page",
      "status": "in-progress",
      "priority": "high",
      "dueDate": "2024-01-15",
      "assignee": "John Doe",
      "projectId": 1,
      "tags": [
        "design",
        "frontend"
      ],
      "createdAt": "2024-01-10"
    },
    {
      "id": 2,
      "title": "Implement user authentication",
      "description": "Add login and registration functionality",
      "status": "pending",
      "priority": "medium",
      "dueDate": "2024-01-20",
      "assignee": "Jane Smith",
      "projectId": 1,
      "tags": [
        "backend",
        "security"
      ],
      "createdAt": "2024-01-08"
    },
    {
      "id": 3,
      "title": "Write API documentation",
      "description": "Document all REST API endpoints",
      "status": "completed",
      "priority": "low",
      "dueDate": "2024-01-12",
      "assignee": "Bob Johnson",
      "projectId": 2,
      "tags": [
        "documentation"
      ],
      "createdAt": "2024-01-05"
    },
    {
      "id": 4,
      "title": "Setup CI/CD pipeline",
      "description": "Configure automated testing and deployment",
      "status": "overdue",
      "priority": "high",
      "dueDate": "2024-01-08",
      "assignee": "Alice Brown",
      "projectId": 2,
      "tags": [
        "devops",
        "automation"
      ],
      "createdAt": "2024-01-03"
    }
  ],
  "projects": [
    {
      "id": 1,
      "name": "Website Redesign",
      "description": "Complete redesign of the company website",
      "status": "active",
      "startDate": "2024-01-01",
      "endDate": "2024-02-28",
      "color": "#3B82F6",
      "taskCount": 15,
      "completedTasks": 8
    },
    {
      "id": 2,
      "name": "Mobile App",
      "description": "Development of the mobile application",
      "status": "active",
      "startDate": "2024-01-15",
      "endDate": "2024-04-30",
      "color": "#10B981",
      "taskCount": 22,
      "completedTasks": 5
    },
    {
      "id": 3,
      "name": "Marketing Campaign",
      "description": "Q1 marketing campaign preparation",
      "status": "planning",
      "startDate": "2024-02-01",
      "endDate": "2024-03-31",
      "color": "#F59E0B",
      "taskCount": 8,
      "completedTasks": 0
    }
  ],
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "role": "Developer",
      "avatar": "/avatars/john.jpg",
      "tasksAssigned": 8,
      "tasksCompleted": 6
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@example.com",
      "role": "Designer",
      "avatar": "/avatars/jane.jpg",
      "tasksAssigned": 6,
      "tasksCompleted": 4
    },
    {
      "id": 3,
      "name": "Bob Johnson",
      "email": "bob@example.com",
      "role": "QA Engineer",
      "avatar": "/avatars/bob.jpg",
      "tasksAssigned": 5,
      "tasksCompleted": 5
    },
    {
      "id": 4,
      "name": "Alice Brown",
      "email": "alice@example.com",
      "role": "DevOps",
      "avatar": "/avatars/alice.jpg",
      "tasksAssigned": 5,
      "tasksCompleted": 3
    }
  ],
  "settings": {
    "theme": "light",
    "language": "en",
    "notifications": {
      "email": true,
      "push": false,
      "desktop": true
    },
    "defaultView": "table",
    "tasksPerPage": 25,
    "autoSave": true
  }
};

export const navigation = {
  "main": [
    {
      "label": "Dashboard",
      "route": "/",
      "icon": "home",
      "active": true
    },
    {
      "label": "All Tasks",
      "route": "/tasks",
      "icon": "list",
      "badge": "24"
    },
    {
      "label": "Projects",
      "route": "/projects",
      "icon": "folder"
    },
    {
      "label": "Calendar",
      "route": "/calendar",
      "icon": "calendar"
    },
    {
      "label": "Settings",
      "route": "/settings",
      "icon": "settings"
    }
  ],
  "footer": [
    {
      "label": "Help & Support",
      "route": "/help",
      "icon": "help"
    },
    {
      "label": "Privacy Policy",
      "route": "/privacy",
      "icon": "shield"
    },
    {
      "label": "Terms of Service",
      "route": "/terms",
      "icon": "document"
    }
  ]
};