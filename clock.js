window.addEventListener("DOMContentLoaded", showTime());
    function showTime() { 
        let date = new Date();

        // date.setTime(5000);

        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        let session = "AM";

        if (h == 0){
            h = 12;
        }
        if (h > 12){
            h = h - 12;
            session = "PM";
        }
        if (h < 10){
            h = "0" + h;
        }
        if (m < 10){
            m = "0" + m;
        }
        if (s < 10){
            s = "0" + s;
        }
        h = h < 10 ? "0" + h : h;
        m = m < 10? "0" + m : m;
        s = s < 10? "0" + s : s;

        const time = `${h}:${m}:${s}|${session}`

        document.getElementById("DisplayClock").innerHTML = time;
        setTimeout(showTime, 1000);

        let bg;

        const userName="TheoYanvno";
        const user=document.getElementById("user");

        if(h<8 && session === "AM"){
            bg= `url(https://images.unsplash.com/photo-1490682143684-14369e18dce8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)`;
            user.innerHTML=`Good Morning ${userName}`;
        }
        else if(h<11 && session === "AM"){
            bg= `url(https://media.istockphoto.com/id/1441686656/photo/beautiful-clouds-at-blue-sky.jpg?s=612x612&w=is&k=20&c=CEH_f7KZKzHt711DEZP-zunGZIV2wCJ-n5tFamM22lw=)`;
            user.innerHTML=`Good Day ${userName}`;
        }
        else if(h<8 && session === "PM"){
            bg= `url(https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)`;
            user.innerHTML=`Good Afternoon ${userName}`;
        }
        else if(h<8 && session === "PM"){
            bg= `url(https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1494&q=80)`;
            user.innerHTML=`Good Night ${userName}`;
        }

        const body=document.querySelector("body");

        body.style.background=`${bg} center/cover`;
    }

    document.querySelector(".focus-container input").addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            const focus = document.querySelector(".focus-container input");
            document.querySelector(".focus-container").innerHTML = `<h6>Today:</h6><h1>${focus.value}</h1>`;
        }
    });