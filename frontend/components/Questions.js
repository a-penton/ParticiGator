// JSON object for sample question
export default [
    {
        questionTitle: "AVL ROTATION",
        question: "What is the name of the imbalance shown here?",
        options: [
            {
                id: "0",
                option: "A",
                answer: "Right-Right",
            },
            {
                id: "1",
                option: "B",
                answer: "Left-Left",
            },
            {
                id: "2",
                option: "C",
                answer: "Right-Left",
            },
            {
                id: "3",
                option: "D",
                answer: "Left-Right",
            },


        ],
        correctAnswerIndex: 0,
        image: require('./../assets/images/example1.png'),
        explanation: "In the diagram the root has a right child and the root's right child also has a right child so this is a right-right imbalance. A left roation will be used to fix this imbalance."



        

    }

]