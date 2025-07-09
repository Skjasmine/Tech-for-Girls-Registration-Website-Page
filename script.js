 let count = 0;
    let isSubmitted = localStorage.getItem("submitted");

    const shareBtn = document.getElementById("shareBtn");
    const submitBtn = document.getElementById("submitBtn");
    const shareCounter = document.getElementById("shareCounter");
    const message = document.getElementById("message");

    if (isSubmitted) {
      disableForm();
      message.textContent = "🎉 Your submission has already been recorded.";
    }

    shareBtn.addEventListener("click", () => {
      if (count < 5) {
        count++;
        shareCounter.textContent = `Click count: ${count}/5`;
        const whatsappMsg = "Hey Buddy, Join Tech For Girls Community 👩‍💻💜\nJoin here: https://chat.whatsapp.com/KotUw1DXAVZ3A0M2k7U9nk?mode=ac_c";

        const encodedMsg = encodeURIComponent(whatsappMsg);
        window.open(`https://wa.me/?text=${encodedMsg}`, "_blank");

        if (count === 5) {
          shareCounter.textContent = "✅ Sharing complete. Please continue.";
          submitBtn.disabled = false;
        }
      }
    });

    document.getElementById("registrationForm").addEventListener("submit", async (e) => {
      e.preventDefault();

      if (count < 5) {
        alert("Please complete 5 shares first!");
        return;
      }

      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const email = document.getElementById("email").value;
      const college = document.getElementById("college").value;
      const file = document.getElementById("screenshot").files[0];

      const fileUrl = await uploadFile(file); // uploads to imgbb

    

      const form = new FormData();
      form.append("name", name);
      form.append("phone", phone);
      form.append("email", email);
      form.append("college", college);
      form.append("screenshot", fileUrl);

     


      fetch("https://script.google.com/macros/s/AKfycbzBLTQ1ymJYooEXifw14nnyVE35ZPKzL2xEme5BcdGR38Kopq4wrproQbrHqyaPkcuU/exec", {
        method: "POST",
        body: form


      }).then(() => {
        message.textContent = "🎉 Your submission has been recorded. Thanks for being part of Tech for Girls!";
        disableForm();
        localStorage.setItem("submitted", "true");
      }).catch(() => {
        alert("Failed to submit form.");
      });
    });

    function disableForm() {
      document.querySelectorAll("input, button, select").forEach(el => {
        el.disabled = true;
      });
    }

    async function uploadFile(file) {
      const form = new FormData();
      form.append("image", file);

      const response = await fetch("https://api.imgbb.com/1/upload?key=0659c8088b41e008ca08a758bbd7ee5f", {
        method: "POST",
        body: form
      });

      const data = await response.json();
      return data.data.url;
    }
