document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("container");
    const registerBtn = document.getElementById("Register");
    const loginBtn = document.getElementById("Login");

    registerBtn.addEventListener("click", function (e) {
        e.preventDefault();
        container.classList.add("active");
    });

    loginBtn.addEventListener("click", function (e) {
        e.preventDefault();
        container.classList.remove("active");
    });

});

document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    // ✍️ 1. MACHINE À ÉCRIRE
    // ==============================
    function typeWriter(el, text, speed = 50) {
        let i = 0;
        el.innerHTML = "";
        function typing() {
            if (i < text.length) {
                el.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            }
        }
        typing();
    }

    document.querySelectorAll("h1").forEach(h => {
        const txt = h.innerText;
        typeWriter(h, txt, 40);
    });

    // ==============================
    // 🧲 2. BOUTON MAGNETIQUE
    // ==============================
    document.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("mousemove", (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width/2;
            const y = e.clientY - rect.top - rect.height/2;
            btn.style.transform = `translate(${x/6}px, ${y/6}px)`;
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "translate(0,0)";
        });
    });
    
    // ==============================
    // ✨ 3. INPUT QUI BRILLE EN TAPANT
    // ==============================
    document.querySelectorAll("input,button").forEach(input => {
        input.addEventListener("input,button", () => {
            input.style.boxShadow = "0 0 15px #00ffcc";
            setTimeout(() => input.style.boxShadow = "none", 400);
        });
    });

    // ==============================
    // 🤸 4. ICONES QUI SAUTENT
    // ==============================
    document.querySelectorAll(".social-icons a").forEach((icon,i) => {
        setInterval(() => {
            icon.style.transform = "translateY(-10px)";
            setTimeout(()=> icon.style.transform="translateY(0)",200);
        }, 2000 + i*300);
    });

    // ==============================
    // ❌ 5. SHAKE SI VIDE
    // ==============================
    document.querySelectorAll("form").forEach(form=>{
        form.addEventListener("submit",(e)=>{
            let empty=false;
            form.querySelectorAll("input").forEach(input=>{
                if(input.value===""){
                    empty=true;
                    input.style.animation="shake 0.4s";
                    setTimeout(()=>input.style.animation="",400);
                }
            });
            if(empty) e.preventDefault();
        });
    });

    // ==============================
    // 🌌 6. PARTICULES BACKGROUND
    // ==============================
    for(let i=0;i<30;i++){
        let dot=document.createElement("div");
        dot.className="particle";
        dot.style.left=Math.random()*100+"vw";
        dot.style.top=Math.random()*100+"vh";
        document.body.appendChild(dot);
    }

});
