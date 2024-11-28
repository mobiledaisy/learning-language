$(document).ready(function () {
    const words = [
      { word: 'apple', translation: 'яблуко' },
      { word: 'banana', translation: 'банан' },
      { word: 'strawberry', translation: 'полуниця' },
      { word: 'cherry', translation: 'вишня' },
      { word: 'orange', translation: 'апельсин' },
      { word: 'melon', translation: 'диня' },
      { word: 'watermelon', translation: 'кавун' },
      { word: 'apricot', translation: 'абрикос' },
      { word: 'plum', translation: 'слива' },
      { word: 'persimmon', translation: 'хурма' },
      { word: 'papaya', translation: 'папая' },
      { word: 'fig', translation: 'інжир' },
      { word: 'date', translation: 'фінік' },
      { word: 'raspberry', translation: 'малина' },
      { word: 'blueberry', translation: 'лохина' },
      { word: 'berry', translation: 'ягода' },
      { word: 'cabbage', translation: 'капуста' },
      { word: 'carrot', translation: 'морква' },
      { word: 'onion', translation: 'цибуля' },
      { word: 'potato', translation: 'картопля' },
      { word: 'eggplant', translation: 'баклажан' },
      { word: 'cucumber', translation: 'огірок' },
      { word: 'asparagus', translation: 'спаржа' },
      { word: 'broccoli', translation: 'броколі' },
      { word: 'cauliflower', translation: 'цвітна капуста' },
      { word: 'brussels sprouts', translation: 'брюссельська капуста' },
      { word: 'celery', translation: 'селера' },
      { word: 'corn', translation: 'кукурудза' },
      { word: 'pumpkin', translation: 'гарбуз' },
      { word: 'radish', translation: 'редис' },
      { word: 'turnip', translation: 'ріпа' },
      { word: 'squash', translation: 'кабачок' },
    ];
   
   
    let currentWordIndex = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let testCompleted = false;
   
   
    function updateUI() {
      if (currentWordIndex < words.length) {
        $('#wordCard').text(words[currentWordIndex].word);
        $('#step').text(`${currentWordIndex + 1}/${words.length}`);
        $('#correctCount').text(correctCount);
        $('#incorrectCount').text(incorrectCount);
        $('#translationInput').val('');
      } else if (!testCompleted) {
        testCompleted = true;
        showKnowledgeLevel();
      }
    }
   
   
    function showKnowledgeLevel() {
      let level;
   
   
      if (correctCount >= 8) {
        level = 'Високий';
      } else if (correctCount >= 5) {
        level = 'Середній';
      } else {
        level = 'Низький';
      }
   
   
      $('#knowledgeLevel').text(`Ваш рівень знань: ${level}`);
      $('#modal').removeClass('hidden');
    }
   
   
    $('#checkButton').on('click', function () {
      if (currentWordIndex < words.length) {
        const userTranslation = $('#translationInput').val().trim().toLowerCase();
        const correctTranslation = words[currentWordIndex].translation.toLowerCase();
   
   
        if (userTranslation === correctTranslation) {
          correctCount++;
        } else {
          incorrectCount++;
        }
   
   
        currentWordIndex++;
        updateUI();
      }
    });
   
   
    $('#prevButton').on('click', function () {
      if (currentWordIndex > 0) {
        currentWordIndex--;
        updateUI();
      }
    });
   
   
    $('#nextButton').on('click', function () {
      if (currentWordIndex < words.length - 1) {
        currentWordIndex++;
        updateUI();
      }
    });
   
   
    $('#showKnowledgeLevel').on('click', showKnowledgeLevel);
   
   
    $('#closeModal').on('click', function () {
      $('#modal').addClass('hidden');
    });
   
   
    updateUI();
   });
   