# 📝 Blockchain To-Do List Application

## 📌 Project Overview

The Blockchain To-Do List Application is a web-based task management system that combines the concept of a traditional to-do list with the fundamental principles of blockchain technology. Instead of storing tasks in a simple array or database, each task is stored as a block in a blockchain, making the data structure secure, transparent, and linked.

This project was developed as part of the **IBM PBEL (Project-Based Experiential Learning) Internship** to understand how blockchain technology works in real-world applications and how it can be integrated with modern web development technologies.

The application allows users to create tasks, mark them as completed, and view task progress while demonstrating important blockchain concepts such as:

- Blocks and Block Creation
- Hash Generation
- Previous Hash Linking
- Data Integrity
- Blockchain Verification
- Immutable Chain Structure

---

# 🎯 Objectives of the Project

The main objectives of this project are:

- To understand the working of blockchain technology.
- To implement blockchain concepts in a real-world application.
- To develop a secure and interactive web application.
- To gain practical experience with Node.js and Express.js.
- To demonstrate how data can be linked using cryptographic hashes.

---

# 🚀 Key Features

### ✅ Add New Tasks
Users can create and store new tasks in the application.

### ✅ Blockchain-Based Storage
Every task is stored as an individual block in the blockchain.

### ✅ Task Completion Tracking
Users can mark tasks as completed and monitor their progress.

### ✅ Blockchain Verification
The application verifies the integrity of the blockchain.

### ✅ Progress Dashboard
Displays:
- Total Tasks
- Completed Tasks
- Progress Percentage

### ✅ User-Friendly Interface
Simple and easy-to-use web interface built with EJS and CSS.

### ✅ Educational Demonstration
Helps beginners understand blockchain concepts through practical implementation.

---

# 🛠 Technologies Used

| Technology | Purpose |
|------------|----------|
| Node.js | Backend Runtime Environment |
| Express.js | Web Application Framework |
| EJS | Template Engine |
| HTML | Page Structure |
| CSS | Styling |
| JavaScript | Application Logic |
| SHA Hashing | Blockchain Security |

---

# 📂 Project Structure

```text
todo-blockchain-dapp/
│
├── app.js
├── blockchain.js
├── package.json
├── package-lock.json
├── views/
│   └── index.ejs
├── public/
│   └── style.css
└── README.md
```

---

# 🔗 Blockchain Architecture

The application follows a simple blockchain architecture.

Each block contains:

- Block Number
- Task Data
- Timestamp
- Previous Hash
- Current Hash

The hash of every block depends on the data stored in that block and the hash of the previous block. This creates a secure chain where altering one block affects all subsequent blocks.

---

# ⚙️ Installation and Setup

## Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/todo-blockchain-dapp.git
```

## Step 2: Open the Project Folder

```bash
cd todo-blockchain-dapp
```

## Step 3: Install Dependencies

```bash
npm install
```

## Step 4: Run the Application

```bash
node app.js
```

## Step 5: Open the Application

Open your browser and visit:

```text
http://localhost:3000
```

---

# 📖 Working of the Application

1. User enters a task.
2. A new block is created.
3. The block stores:
   - Task information
   - Timestamp
   - Previous hash
   - Current hash
4. The blockchain is updated.
5. The application verifies the chain.
6. Users can mark tasks as completed and monitor their progress.

---

# 🌟 Advantages of the Project

- Demonstrates blockchain concepts in a simple manner.
- Provides hands-on learning experience.
- Easy to understand and extend.
- Useful for academic and educational purposes.
- Shows practical implementation of hashes and block linking.

---

# 🔮 Future Enhancements

The following features can be added in future versions:

- User Authentication System
- Database Integration
- Task Categories and Priorities
- Search and Filter Options
- Smart Contract Integration
- Decentralized Deployment
- Cloud Database Storage
- Multi-User Support

---

# 🎓 Learning Outcomes

Through this project, the following concepts were learned:

- Fundamentals of Blockchain Technology
- Web Development using Node.js and Express.js
- Template Rendering using EJS
- Data Structures and Hashing
- Full Stack Application Development
- Problem Solving and Project Implementation Skills

---

# 👩‍💻 Author

**Zehra Warsi**

Developed as part of the **IBM Project-Based Experiential Learning (PBEL) Internship Program**.

---

# 📜 Conclusion

The Blockchain To-Do List Application successfully demonstrates how blockchain principles can be integrated into a practical web application. The project provides a strong foundation for understanding blockchain technology and serves as an excellent educational project for beginners interested in web development and decentralized systems.
