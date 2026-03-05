# 🎨 Customer Support Zone

This project is a React-based **Customer Support Zone** designed to display customer tickets, track progress, and mark them as resolved. It follows a Figma design and includes additional features like status management, responsiveness, and toast notifications using **React-Toastify**.

---

## 📚 Q&A (Questions in English, Answers in Bangla)

---

### 1️⃣ What is JSX, and why is it used?
**উত্তর:**
JSX (JavaScript XML) হলো একটি সিনট্যাক্স এক্সটেনশন যা React-এ ব্যবহৃত হয়। এটি HTML-এর মতো দেখতে, কিন্তু JavaScript কোডের মধ্যে লেখা যায়। JSX ব্যবহারের ফলে UI তৈরি করা সহজ ও পরিষ্কার হয়।

---

### 2️⃣ What is the difference between State and Props?
**উত্তর:**
- **State**: কম্পোনেন্টের নিজস্ব ডেটা, যা পরিবর্তন হতে পারে।
- **Props**: প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টে ডেটা পাঠানোর উপায়।

State পরিবর্তনশীল, Props অপরিবর্তনীয় (read-only)।

---

### 3️⃣ What is the useState hook, and how does it work?
**উত্তর:**
useState হলো React-এর একটি হুক, যা ফাংশনাল কম্পোনেন্টে state ব্যবহারের সুযোগ দেয়। এটি একটি অ্যারে রিটার্ন করে—প্রথমটি বর্তমান state, দ্বিতীয়টি সেট করার ফাংশন।

```js
const [count, setCount] = useState(0);
```

---

### 4️⃣ How can you share state between components in React?
**উত্তর:**
State শেয়ার করতে হলে, state-টি প্যারেন্ট কম্পোনেন্টে রাখতে হয় এবং সেটি props-এর মাধ্যমে চাইল্ড কম্পোনেন্টে পাঠাতে হয়।

---

### 5️⃣ How is event handling done in React?
**উত্তর:**
React-এ ইভেন্ট হ্যান্ডলিং HTML-এর মতো, তবে camelCase-এ এবং ফাংশন রেফারেন্স দিয়ে করা হয়।

```js
<button onClick={handleClick}>Click Me</button>
```