// Объект беса с параметрами
let demon = {
  hunger: 50,
  mood: 50,
};

// Функция обновления статистики и эмоций
function updateStats() {
  // 1. Обновляем цифры на экране
  document.getElementById("hunger").textContent = demon.hunger;
  document.getElementById("mood").textContent = demon.mood;

  // 2. Меняем эмоцию беса
  const demonElement = document.getElementById("demon");
  
  if (demon.hunger <= 0 || demon.mood <= 0) {
    demonElement.textContent = "💀"; // Бес умер
    alert("Бес умер от твоего безразличия! Начни заново.");
    resetGame();
    return; // Прекращаем выполнение
  } 
  else if (demon.hunger < 20) {
    demonElement.textContent = "😡"; // Злой от голода
    // Внутри функции updateStats(), в блок if (demon.hunger < 20):
demonElement.style.transform = "scale(1.1)";
setTimeout(() => { demonElement.style.transform = "scale(1)"; }, 300);
  } 
  else if (demon.mood < 30) {
    demonElement.textContent = "😠"; // Грустный
  } 
  else if (demon.mood > 70) {
    demonElement.textContent = "😈"; // Довольный
  } 
  else {
    demonElement.textContent = "👹"; // Нормальный
  }
}

// Функция кормления
function feed() {
  demon.hunger += 20;
  if (demon.hunger > 100) demon.hunger = 100;
  updateStats();
}

// Функция игры
function play() {
  demon.mood += 15;
  demon.hunger -= 5; // Игра тратит силы
  if (demon.mood > 100) demon.mood = 100;
  updateStats();
}

// Функция уборки
function clean() {
  demon.mood += 10;
  if (demon.mood > 100) demon.mood = 100;
  updateStats();
}

// Таймер ухудшения состояний (каждые 3 секунды)
setInterval(() => {
  demon.hunger -= 5;
  demon.mood -= 3;
  updateStats();
}, 3000);

// Сброс игры
function resetGame() {
  demon.hunger = 50;
  demon.mood = 50;
  updateStats();
}

// Запуск игры при загрузке страницы
updateStats();
