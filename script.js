let player;
let isPlaying = false;

const taskList = document.getElementById("task-list");
const musicButton = document.getElementById("music-button");
const musicStatus = document.getElementById("music-status");
const musicDisc = document.querySelector(".music-disc");

async function loadData() {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();

    createTaskList(data.tasks);

    document.querySelector(".identity p:nth-child(1)").innerHTML =
      `<span>Nama</span> ${data.student.name}`;
    document.querySelector(".identity p:nth-child(2)").innerHTML =
      `<span>NIM</span> ${data.student.nim}`;

    window.musicId = data.music.youtubeId;
  } catch (error) {
    console.error("Gagal membaca data.json:", error);
    taskList.innerHTML = `<p style="color:#ff6b6b;">Data tugas tidak dapat dimuat.</p>`;
  }
}

function createTaskList(tasks) {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const card = document.createElement("a");
    card.href = task.folder;
    card.className = "task-card";
    card.innerHTML = `
      <span class="task-number">WEEK ${task.week}</span>
      <span class="task-name">${task.title}</span>
      <span class="task-arrow">→</span>
    `;
    taskList.appendChild(card);
  });
}

const youtubeScript = document.createElement("script");
youtubeScript.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(youtubeScript);

function onYouTubeIframeAPIReady() {
  player = new YT.Player("youtube-player", {
    height: "1",
    width: "1",
    videoId: "t5U0rrj0dio",
    playerVars: {
      autoplay: 0,
      controls: 0,
      loop: 1,
      playlist: "t5U0rrj0dio",
      modestbranding: 1
    },
    events: {
      onReady: function () {
        musicStatus.textContent = "Klik Play untuk memulai musik";
      },
      onStateChange: function (event) {
        if (event.data === YT.PlayerState.PLAYING) {
          isPlaying = true;
          musicButton.textContent = "❚❚ Pause";
          musicStatus.textContent = "Musik sedang diputar";
          musicDisc.style.animationPlayState = "running";
        } else if (event.data === YT.PlayerState.PAUSED) {
          isPlaying = false;
          musicButton.textContent = "▶ Play";
          musicStatus.textContent = "Musik dijeda";
          musicDisc.style.animationPlayState = "paused";
        }
      }
    }
  });
}

musicButton.addEventListener("click", function () {
  if (!player) {
    musicStatus.textContent = "Player sedang dimuat...";
    return;
  }

  if (isPlaying) {
    player.pauseVideo();
  } else {
    player.playVideo();
  }
});

loadData();
