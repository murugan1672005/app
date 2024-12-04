import { Alert, Button, Container, Paper, Snackbar, TextField, Typography, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React, { useState } from 'react';

const AssignmentPage = () => {
  const [assignment] = useState({
    title: 'AI Assignment',
    description: 'Please submit your final assignment on artificial intelligence for review.',
    questions: [
      {
        question: 'Who is considered the father of artificial intelligence?',
        options: ['Alan Turing', 'John McCarthy', 'Marvin Minsky', 'Arthur Samuel'],
        correctAnswer: 'John McCarthy',
      },
      {
        question: 'What does AI stand for?',
        options: ['Artificial Intelligence', 'Automated Interaction', 'Autonomous Integration', 'Augmented Interface'],
        correctAnswer: 'Artificial Intelligence',
      },
      {
        question: 'Which of the following is a type of machine learning?',
        options: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'All of the above'],
        correctAnswer: 'All of the above',
      },
      {
        question: 'What is a neural network?',
        options: ['A network of neurons in the brain', 'A computational model inspired by the human brain', 'A type of AI hardware', 'A data storage system'],
        correctAnswer: 'A computational model inspired by the human brain',
      },
      {
        question: 'Which programming language is most commonly used for AI and machine learning?',
        options: ['Python', 'Java', 'C++', 'Ruby'],
        correctAnswer: 'Python',
      },
      {
        question: 'What is deep learning?',
        options: ['A subset of machine learning involving neural networks with many layers', 'A type of AI hardware', 'An algorithm for sorting data', 'A way to store large amounts of data'],
        correctAnswer: 'A subset of machine learning involving neural networks with many layers',
      },
      {
        question: 'What is the Turing Test?',
        options: ['A test to determine if a computer can think like a human', 'A benchmark for AI speed', 'A method for sorting algorithms', 'A type of neural network'],
        correctAnswer: 'A test to determine if a computer can think like a human',
      },
      {
        question: 'What is a common application of natural language processing (NLP)?',
        options: ['Speech recognition', 'Image classification', 'Game playing', 'Robotics'],
        correctAnswer: 'Speech recognition',
      },
      {
        question: 'What is reinforcement learning?',
        options: ['A type of machine learning where an agent learns by interacting with its environment', 'A way to store and retrieve data', 'A method for speeding up computations', 'A type of neural network'],
        correctAnswer: 'A type of machine learning where an agent learns by interacting with its environment',
      },
      {
        question: 'Which company developed the AI system known as Watson?',
        options: ['Google', 'Microsoft', 'IBM', 'Amazon'],
        correctAnswer: 'IBM',
      }
    ],
  });

  const [submission, setSubmission] = useState('');
  const [answers, setAnswers] = useState(Array(assignment.questions.length).fill(''));
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the submission and answers to the server
    console.log('Submission:', submission);
    console.log('Answers:', answers);
    setSnackbarMessage('Assignment submitted successfully!');
    setOpenSnackbar(true);
    setSubmission(''); // Clear submission after sending
    setAnswers(Array(assignment.questions.length).fill('')); // Clear answers after sending
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <Container style={{ marginTop: '2rem' }}>
      <Paper style={{ padding: '2rem', textAlign: 'center', color: '#555' }}>
        <Typography variant="h4" gutterBottom>
          {assignment.title}
        </Typography>
        <Typography variant="body1" paragraph>
          {assignment.description}
        </Typography>
        <form onSubmit={handleSubmit}>
          {assignment.questions.map((question, index) => (
            <div key={index} style={{ marginBottom: '1rem', textAlign: 'left' }}>
              <Typography variant="h6">{`${index + 1}. ${question.question}`}</Typography>
              <FormControl component="fieldset">
                <RadioGroup
                  value={answers[index]}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                >
                  {question.options.map((option, optionIndex) => (
                    <FormControlLabel
                      key={optionIndex}
                      value={option}
                      control={<Radio />}
                      label={option}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          ))}
          <TextField
            style={{ marginBottom: '1rem', width: '100%' }}
            label="Your Submission"
            multiline
            rows={6}
            variant="outlined"
            value={submission}
            onChange={(e) => setSubmission(e.target.value)}
            required
          />
          <Button
            style={{ marginTop: '1rem' }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </form>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
        >
          <Alert onClose={handleSnackbarClose} severity="success">
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Paper>
    </Container>
  );
};

export default AssignmentPage;
