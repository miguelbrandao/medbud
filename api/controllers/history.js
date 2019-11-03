const Medication = require('../models/medications');
const Record = require('../models/records');

const History = module.exports;

async function follow(questions, yesId, noId, date, answer) {
  if (answer === 'Sim' && yesId !== undefined) {
    const medications = await Medication
      .find({ n_id: yesId })
      .sort({ date: 'desc' })
      .limit(1)
      .exec();

    const records = await Record
      .find({ medication: medications[0].n_id })
      .sort({ date: 'desc' })
      .limit(1)
      .exec();

    if (records.length === 0) {
      return questions;
    }

    questions.push({
      answer: records[0].answer,
      date_a: records[0].date,
      date_q: medications[0].reminderDate,
      question: medications[0].text
    });

    questions = await follow(questions, medications[0].followup_yes, medications[0].followup_no, date, records[0].answer);
  } else if (answer === 'Não' && noId !== undefined) {
    const medications = await Medication
      .find({ n_id: noId })
      .sort({ date: 'desc' })
      .limit(1)
      .exec();

    const records = await Record
      .find({ medication: medications[0].n_id })
      .sort({ date: 'desc' })
      .limit(1)
      .exec();

    if (records.length === 0) {
      return questions;
    }

    questions.push({
      answer: records[0].answer,
      date_a: records[0].date,
      date_q: medications[0].reminderDate,
      question: medications[0].text
    });

    questions = await follow(questions, medications[0].followup_yes, medications[0].followup_no, date, records[0].answer);
  }

  return questions;
}

History.last = async () => {
  const questions = [];

  const medications = await Medication
    .find({ root: true })
    .sort({ date: 'desc' })
    .limit(1)
    .exec();

  const records = await Record
    .find({ medication: medications[0].n_id })
    .sort({ date: 'desc' })
    .limit(1)
    .exec();

  if (records.length === 0) {
    return questions;
  }

  questions.push({
    answer: records[0].answer,
    date_a: records[0].date,
    date_q: medications[0].reminderDate,
    question: medications[0].text
  });

  return await follow(
    questions, medications[0].followup_yes, medications[0].followup_no,
    medications[0].date, records[0].answer
  );
};
