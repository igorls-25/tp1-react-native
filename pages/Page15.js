import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

const questions = [
  {
    question: 'Qual o nome do pai do naruto?',
    options: ['Minato', 'Gaara', 'Iruka', 'Jiraya '],
    correctAnswer: 'Minato',
  },
  {
    question: 'Que jogo venceu o GOTY 2023?',
    options: ['Baldurs gate 3', 'Alan Wake 2', 'Mario Wonder', 'Resident Evil 4 remake'],
    correctAnswer: 'Baldurs gate 3',
  },
  {
    question: 'Qual é o nome do protagonista de The Legend of Zelda?',
    options: ['Zelda', 'Link', 'Ganondorf', 'Epona'],
    correctAnswer: 'Link',
  },
  {
    question: 'Qual anime apresenta os Titãs como uma ameaça para a humanidade?',
    options: ['One Piece', 'Attack on Titan', 'Naruto', 'Bleach'],
    correctAnswer: 'Attack on Titan',
  },
  {
    question: 'Qual jogo é conhecido por sua frase icônica: "The cake is a lie"?',
    options: ['Portal', 'Half-Life', 'Team Fortress 2', 'BioShock'],
    correctAnswer: 'Portal',
  },
  {
    question: 'Quem é o criador de One Piece?',
    options: ['Masashi Kishimoto', 'Eiichiro Oda', 'Akira Toriyama', 'Tite Kubo'],
    correctAnswer: 'Eiichiro Oda',
  },
  {
    question: 'Qual é o nome do console lançado pela Sony em 2020?',
    options: ['PlayStation 4', 'PlayStation 5', 'PlayStation 3', 'PlayStation VR'],
    correctAnswer: 'PlayStation 5',
  },
  {
    question: 'Em qual anime encontramos a organização Akatsuki?',
    options: ['Naruto', 'Hunter x Hunter', 'Bleach', 'Demon Slayer'],
    correctAnswer: 'Naruto',
  },
  {
    question: 'Qual jogo popular é ambientado em Night City?',
    options: ['Cyberpunk 2077', 'GTA V', 'Watch Dogs', 'Mass Effect'],
    correctAnswer: 'Cyberpunk 2077',
  },
  {
    question: 'Qual personagem é o principal rival de Goku em Dragon Ball?',
    options: ['Vegeta', 'Piccolo', 'Freeza', 'Cell'],
    correctAnswer: 'Vegeta',
  },
  {
    question: 'Qual jogo é conhecido por seu mundo aberto e pela caçada de monstros épicos?',
    options: ['Monster Hunter', 'The Witcher 3', 'Dark Souls', 'Skyrim'],
    correctAnswer: 'Monster Hunter',
  },
  {
    question: 'Qual o nome do autor da série de livros que inspirou The Witcher?',
    options: ['J.R.R. Tolkien', 'Andrzej Sapkowski', 'George R.R. Martin', 'Brandon Sanderson'],
    correctAnswer: 'Andrzej Sapkowski',
  },
  {
    question: 'Qual é o nome do personagem principal em Death Note?',
    options: ['Light Yagami', 'L', 'Ryuk', 'Near'],
    correctAnswer: 'Light Yagami',
  },
  {
    question: 'Qual franquia é conhecida pela frase "Finish Him"?',
    options: ['Street Fighter', 'Tekken', 'Mortal Kombat', 'Soulcalibur'],
    correctAnswer: 'Mortal Kombat',
  }
];

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswer = (selectedOption) => {
    const isCorrect =
      selectedOption === questions[currentQuestion].correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsQuizFinished(false);
  };

  return (
    <View style={styles.container}>
      {isQuizFinished ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            Você acertou {score} de {questions.length} perguntas!
          </Text>
          <TouchableOpacity style={styles.button} onPress={restartQuiz}>
            <Text style={styles.buttonText}>Reiniciar Quiz</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.quizContainer}>
          <Text style={styles.questionText}>
            {questions[currentQuestion].question}
          </Text>
          <FlatList
            data={questions[currentQuestion].options}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleAnswer(item)}
              >
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
          <Text style={styles.progressText}>
            Questão {currentQuestion + 1} de {questions.length}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
  },
  quizContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
  },
  optionText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  progressText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});
