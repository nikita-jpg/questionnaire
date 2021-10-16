export const initialState = {
    indexEraAndSurvey:
        {
            indexEra:0,
            indexSurvey:0
        },
    Eras:[
		{
			russianName: "Эра1",
			description: "Описание Эры1",
			image: {
				imageName: "1.jpg",
				sourceImageLink: "Ссылка на картинку1"
			},
			subset: [
				{
					russianName: "Опрос2",
					description: "ОписаниеОпроса2",
					image: {
						imageName: "2.jpg",
						sourceImageLink: "Ссылка на картинку2"
					},
					subset: [
						{
							idQuestion: 2,
							textQuestion: "Вопрос2",
							image: {
								imageName: "3.jpg",
								sourceImageLink: "Ссылка на картинку3"
							},
							answerOptions: [
								{
									idAnswerOption: 8,
									idQuestion: 2,
									text: "Вариант4",
									score: 1
								},
								{
									idAnswerOption: 7,
									idQuestion: 2,
									text: "Вариант3",
									score: 0
								},
								{
									idAnswerOption: 6,
									idQuestion: 2,
									text: "Вариант2",
									score: 1
								},
								{
									idAnswerOption: 5,
									idQuestion: 2,
									text: "Вариант1",
									score: 0
								}
							],
							userAnswer: {
								idAnswerOption: 6
							}
							// userAnswer: null
						}
					]
				}
			]
		}
	]
}
