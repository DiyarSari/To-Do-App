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

## API Reference

### Browser Storage API - localStorage

This app uses the **HTML5 localStorage API** for data persistence.

#### Saving Data

```javascript
saveData();
```

Saves all tasks to localStorage with their text and completion status.

**Storage Format:**
```javascript
{
  "text": "Task description",
  "done": false
}
```

#### Loading Data

```javascript
loadData();
```

Retrieves all previously saved tasks from localStorage on page load.

#### localStorage Methods Used

| Method | Description |
|--------|-------------|
| `localStorage.setItem(key, value)` | Stores data as JSON string |
| `localStorage.getItem(key)` | Retrieves stored JSON data |
| `JSON.stringify()` | Converts objects to JSON string for storage |
| `JSON.parse()` | Converts JSON string back to JavaScript objects |

### DOM Manipulation API

The app uses standard DOM methods:

- `document.getElementById()` - Access HTML elements
- `addEventListener()` - Handle user interactions
- `appendChild()` - Add tasks to the list
- `createElement()` - Create new task elements
- `querySelector()` - Select specific elements within tasks

### Status Tracking API

```javascript
updateStatus();
```

Calculates and displays:
- Total tasks
- Completed tasks
- Pending tasks

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
