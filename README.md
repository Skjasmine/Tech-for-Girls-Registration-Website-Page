
# 💜 Tech for Girls: Registration Website

A modern, interactive registration form built for the Tech for Girls community event. This web project allows participants to register with personal details, share on WhatsApp, upload a screenshot, and submit the form — all while storing the data in a connected Google Sheet.

---

## 📝 Features

- ✅ Responsive registration form
- ✅ WhatsApp share button with click counter (5 times)
- ✅ Screenshot/image upload using ImgBB
- ✅ Submit button enabled only after required sharing
- ✅ Data saved to Google Sheets using Google Apps Script
- ✅ Form locked after submission using `localStorage`
- ✅ Clean UI with modern styling and animations

---

## 🖼️ UI Screenshot

> _(Add your hosted webpage screenshot here if needed)_

---

## 📌 Technologies & APIs Used

### 🔹 Frontend
- HTML5, CSS3 (custom styling)
- JavaScript (vanilla)

### 🔹 APIs / External Services
- 📤 **[ImgBB API](https://api.imgbb.com/)** — for uploading and storing user-uploaded screenshots
- 📊 **Google Apps Script Web App** — to receive data from the frontend and store it in a Google Sheet
- 💬 **WhatsApp Web URL API** — to open a pre-filled message for sharing with others
  - Example: `https://wa.me/?text=YOUR_MESSAGE`

---

## ⚙️ How It Works

1. User fills out the form (name, phone, email, college).
2. Clicks the **“Share on WhatsApp”** button 5 times (counter tracks it).
3. Uploads a screenshot (e.g., resume/photo).
4. Once sharing is complete, the **“Register”** button becomes active.
5. On submit:
   - Screenshot is uploaded to ImgBB.
   - All data (name, phone, email, college, screenshot URL) is sent to Google Apps Script Web App.
   - Data is saved into a connected Google Sheet.
6. User sees a success message and the form is disabled.
7. A flag is saved in `localStorage` to prevent resubmission.

---

## 🛠️ Setup Instructions (for developers)

1. Clone the repository.
2. Open `index.html` in your browser (you can use Live Server).
3. Replace:
   - Your **Google Apps Script Web App URL**
   - Your **ImgBB API key**

4. To deploy live:
   - Host on [GitHub Pages](https://pages.github.com/)
   - Share the GitHub Repo + Live URL

---

## 🔒 Submission Lock

- Once submitted, the form is disabled using `localStorage.setItem("submitted", "true")`
- Even after refresh, the user can't submit again.

---

## 📈 Learning Outcomes

- Create interactive and form-based web apps
- Understand file uploads and working with APIs
- Learn how to connect front-end JS with back-end services (like Google Sheets)
- Gain hands-on practice with modern UI/UX concepts

---

## 🔗 Live Demo

> _Add your GitHub Pages live link here_

---

## 🧠 Credits

- Developed as part of the **Tech for Girls Community** initiative.
- UI inspired by Dribbble/Behance styles.
- Thanks to ImgBB and Google Apps Script for powerful free APIs.

---

## 📬 Contact

Made with ❤️ by [Your Name]  
📧 [your.email@example.com]  
🔗 GitHub: [https://github.com/yourusername](https://github.com/yourusername)

