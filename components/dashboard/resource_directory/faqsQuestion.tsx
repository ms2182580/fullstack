interface QuestionType {
    number: number;
    date: string;
    question: string;
    answer: string;
    name: string
}

const questions: QuestionType[] = [
    {
        number: 1,
        date: "2025-03-07",
        question: "Can I book an appointment with Mary Jane online?",
        answer: "To make an appointment you can call the number listed or fill out the contact form and someone will reach out to get you scheduled. You do NOT need a referral to book an appointment with Mary Jane.",
        name: "By Leslie S."
    },
    {
        number: 2,
        date: "2025-03-06",
        question: "How can I schedule a consult call with Mary Jane?",
        answer: "No Response yet. What’s your answer ?",
        name: "By Leslie S."
    },
    {
        number: 3,
        date: "2025-03-05",
        question: "Does Mary Jane offer weekend visits?",
        answer: "To make an appointment you can call the number listed or fill out the contact form and someone will reach out to get you scheduled. You do NOT need a referral to book an appointment with Mary Jane.",
        name: "By Leslie S."
    },
    {
        number: 4,
        date: "2025-03-04",
        question: "Is Mary Jane accepting new patients?",
        answer: "Mary Jane generally accepts new patients. You can fill out the contact form or call to schedule an appointment.",
        name: "By Leslie S."
    },
    {
        number: 5,
        date: "2025-03-03",
        question: "Where is Mary Jane’s office located?",
        answer: "Mary Jane’s office is located In NY. Brooklyn Speech Therapy 307 President St Brooklyn, NY",
        name: "By Leslie S."
    }
];

export default questions;
