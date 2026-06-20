# To-Do App

A simple and intuitive to-do list application built with vanilla JavaScript. Manage your daily tasks efficiently with persistent data storage.

## Features

- ✅ Create new tasks
- ✅ Mark tasks as completed/uncompleted
- ✅ Update existing tasks
- ✅ Delete tasks
- ✅ Track completed vs pending tasks
- ✅ Persistent storage using localStorage
- ✅ Clean and responsive UI

## Getting Started

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start adding your tasks!

### Usage

1. **Add a Task**: Type your task in the input field and click "Create"
2. **Mark Complete**: Click the checkbox next to a task to mark it as done
3. **Update a Task**: Select a task, edit it in the input field, and click "Update"
4. **Delete a Task**: Click the delete button on any task to remove it

## How It Works

The app stores all data locally in your browser using **localStorage**. No backend server or external API is needed - everything runs in your browser.

### Core Functions

- `saveData()` - Saves tasks to localStorage
- `loadData()` - Loads tasks from browser storage on startup
- `updateStatus()` - Updates task counter (completed vs pending)
- `updateEmptyMessage()` - Shows/hides empty state message

## Technology Stack

- **HTML5** - Markup
- **CSS3** - Styling
- **JavaScript (ES6+)** - Logic
- **localStorage API** - Data Persistence

## Browser Compatibility

Works on all modern browsers that support:
- ES6 JavaScript
- HTML5 localStorage
- CSS3 Flexbox

## File Structure

```
├── index.html      # Main HTML file
├── index.js        # JavaScript functionality
├── style.css       # Styling
└── README.md       # This file
```

## Tips

- Your tasks are automatically saved to your browser's localStorage
- Clearing browser data will remove saved tasks
- Tasks persist even after closing the browser

## Future Enhancements

- Export tasks to CSV/JSON
- Cloud synchronization
- Priority levels
- Due dates
- Dark mode theme

## License

Free to use for personal and commercial projects.
