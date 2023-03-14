const TestQuiz = {
    "questions": [{
        // Number - 0
        "id": "Home",
        "text": "Why are you canceling?",
        "type": "multi",
        "options": [
            "DID NOT WORK",
            "DID NOT KNOW IT WAS A SUBSCRIPTION",
            "DOES NOT FIT (TOO LOOSE OR TOO LIGHT)",
        ]
    },
    {
        // Number - 1
        "id": "Did-Not-Work",
        "text": "Tell us why it didn't work",
        "type": "multi",
        "options": [
            "DEVICE IS TOO TIGHT OR FALLS OFF",
            "I STILL CAN'T ACHIEVE/MAINTAIN AN ERECTION",
            "INCOMPATABLE WITH MY HEALTH ISSUES",
        ]
    },
    {
        // Number - 2
        "id": "Resize",
        "text": "Would you like to begin the free resize process?",
        "type": "multi",
        "options": [
            "RESIZE PROCESS",
            "Manage / Cancel Subscription"
        ]
    },
    {
        // Number - 3
        "id": "Care-Advisor",
        "text": "Would you like to schedule an appointment with a care advisor?",
        "type": "multi",
        "options": [
            "CARE ADVISOR",
            "Manage / Cancel Subscription"
        ]
    },
    {
        // Number - 4
        "id": "Did-Not-Know",
        "text": "We're sorry you didn't know about the automatic subscription program -\nwhat would you like to do?",
        "type": "multi",
        "options": [
            "CHANGE TO 6-MONTH CYCLE",
            "Manage / Cancel Subscription"
        ]
    },
    {
        // Number - 5
        "id": "Does-Not-Fit",
        "text": "Tell us a bit more",
        "type": "multi",
        "options": [
            "TOO BIG",
            "TOO SMALL",
            "SOMETHING DOESN'T FEEL RIGHT"
        ]
    },
    {
        // Number - 6
        "id": "Submit",
        "text": "Thanks for your feedback!",
        "type": "multi",
        "options": ["CONFIRM CANCELATION"]
    },
    {
        // Number - 7
        "id": "Thank",
        "text": "Thanks for your feedback!",
        "type": "multi",
        "options": ["CLOSE MENU"]
    },
    {
        // Number - 8
        "id": "Manage30",
        "text": "I would like to...",
        "type": "multi",
        "options": [
            "Get a refund of $30 and keep my existing device",
            "I want a refund, click to speak to customer support"
        ]
    },
    {
        // Number - 9
        "id": "Manage80",
        "text": "I would like to...",
        "type": "multi",
        "options": [
            "I want an $50 refund and keep my current device",
            "I want a refund, schedule a call with customer support"
        ]
    },
    {
        // Number - 10
        "id": "Refund30",
        "text": "By selecting this, you are canceling your subscription and\nreceiving a partial refund of $30. (30 day policy still applies)\nYou will receive a confirmation once your refund and cancellation are processed.",
        "type": "multi",
        "options": ["CONFIRM"]
    },
    {
        // Number - 11
        "id": "Refund80",
        "text": "By selecting this, you are canceling your subscription and\nreceiving a partial refund of $50. (30 day policy still applies)\nYou will receive a confirmation once your refund and cancellation are processed.",
        "type": "multi",
        "options": ["CONFIRM"]
    },
    {
        // Number - 12
        "id": "CallYou",
        "text": "Have Customer Service Contact You",
        "type": "input",
        "options": []
    },
    {
        // Number - 13
        "id": "ScheduleCall",
        "text": "Schedule a call with Customer Support\n(Calls may take up to 24 hours to schedule)",
        "type": "multi",
        "options": ["SCHEDULE CALL"]
    },
    {
        // Number - 14
        "id": "Cancel50",
        "text": "Your order was placed outside the 30 day window for a full refund. You are eligible for a $50 refund with your cancellation.",
        "type": "multi",
        "options": [
            "Accept $50 and Cancel subscription",
            "Contact customer service"
        ]
    },
    {
        // Number - 15
        "id": "ErrorMsg",
        "text": "Oops, something went wrong. Please try again later.",
        "type": "multi",
        "options": [
            "CLOSE MENU"
        ]
    }
]
};

export default TestQuiz;