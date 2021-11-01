export const initialState = {

	CurEraId:1,
	CurSurveyId:1,
	CurQuestionId:1,

	// UserData:{
	// 	isFirstOpen:false
	// },

	Eras:
	[
		{
			idEra:1,
			russianName: "Эра1",
			description: "Описание Эры1",
			image: 
			{
				imageName: "1.jpg",
				sourceImageLink: "Ссылка на картинку1"
			}
		},

		{
			idEra:2,
			russianName: "Эра2",
			description: "Описание Эры2",
			image: 
			{
				imageName: "2.jpg",
				sourceImageLink: "Ссылка на картинку2"
			}
		}
	],

	Surveys:
	[
		{
			idEra:1,
			idSurvey:1,
			russianName: "Опрос1",
			description: "ОписаниеОпроса1",
			image: 
			{
				imageName: "1.jpg",
				sourceImageLink: "Ссылка на картинку1"
			},
		},

		{
			idEra:1,
			idSurvey:2,
			russianName: "Опрос2",
			description: "ОписаниеОпроса2",
			image: 
			{
				imageName: "2.jpg",
				sourceImageLink: "Ссылка на картинку2"
			},
		},

		{
			idEra:2,
			idSurvey:3,
			russianName: "Опрос3",
			description: "ОписаниеОпроса3",
			image: 
			{
				imageName: "3.jpg",
				sourceImageLink: "Ссылка на картинку3"
			},
		}
		
	],

	Questions:
	[
		{
			idSurvey:1,
			idQuestion: 1,
			textQuestion: "Вопрос1",
			image: 
			{
				imageName: "3.jpg",
				sourceImageLink: "Ссылка на картинку3"
			}
		},
		{
			idSurvey:1,
			idQuestion: 2,
			textQuestion: "Вопрос2",
			image: 
			{
				imageName: "3.jpg",
				sourceImageLink: "Ссылка на картинку3"
			}
		},
		{
			idSurvey:2,
			idQuestion: 3,
			textQuestion: "Вопрос2",
			image: 
			{
				imageName: "3.jpg",
				sourceImageLink: "Ссылка на картинку3"
			}
		}
	],

	AnswerOptions:
	[
		{
			idQuestion: 1,
			idAnswerOption: 1,
			text: "Вариант4",
			score: 0
		},
		{
			idQuestion: 1,
			idAnswerOption: 2,
			text: "Вариант4",
			score: 0
		},
		{
			idQuestion: 1,
			idAnswerOption: 3,
			text: "Вариант4",
			score: 1
		},
		{
			idQuestion: 2,
			idAnswerOption: 4,
			text: "Вариант4",
			score: 0
		},
		{
			idQuestion: 2,
			idAnswerOption: 5,
			text: "Вариант4",
			score: 0
		},
		{
			idQuestion: 2,
			idAnswerOption: 6,
			text: "Вариант4",
			score: 1
		},
		{
			idQuestion: 3,
			idAnswerOption: 7,
			text: "Вариант4",
			score: 1
		},
		{
			idQuestion: 3,
			idAnswerOption: 8,
			text: "Вариант4",
			score: 0
		},
		{
			idQuestion: 3,
			idAnswerOption: 9,
			text: "Вариант4",
			score: 0
		},

	],

	UserAnswers:
	[
		{
			idSurvey:1,
			idQuestion:1,
			idAnswerOption:3,
		},
		{
			idSurvey:1,
			idQuestion:2,
			idAnswerOption:6,
		}
	],

	Images:{
		Eras:[],
		Surveys:[],
		CurSurvey:{
			idSurvey:0,
			images:[
				{
					imageName:"",
					data:""
				}
			]
		}
	},

	StaticImages:[
	],

	DynamicImages:{
		CurSurveyImages:{
			idSurvey:
			{
				imageName:"",
				data:""
			}
		}
	}



    // indexEraAndSurvey:
    //     {
    //         indexEra:0,
    //         indexSurvey:0
    //     },
    // Eras:[
	// 	{
	// 		russianName: "Эра1",
	// 		description: "Описание Эры1",
	// 		image: {
	// 			imageName: "1.jpg",
	// 			sourceImageLink: "Ссылка на картинку1"
	// 		},
	// 		subset: [
	// 			{
	// 				russianName: "Опрос2",
	// 				description: "ОписаниеОпроса2",
	// 				image: {
	// 					imageName: "2.jpg",
	// 					sourceImageLink: "Ссылка на картинку2"
	// 				},
	// 				subset: [
	// 					{
	// 						idQuestion: 40,
	// 						textQuestion: "Вопрос2",
	// 						image: {
	// 							imageName: "3.jpg",
	// 							sourceImageLink: "Ссылка на картинку3"
	// 						},
	// 						answerOptions: [
	// 							{
	// 								idAnswerOption: 41,
	// 								idQuestion: 40,
	// 								text: "Вариант4",
	// 								score: 0
	// 							},
	// 							{
	// 								idAnswerOption: 42,
	// 								idQuestion: 40,
	// 								text: "Вариант3",
	// 								score: 0
	// 							},
	// 							{
	// 								idAnswerOption: 90,
	// 								idQuestion: 40,
	// 								text: "Вариант2",
	// 								score: 1
	// 							},
	// 							{
	// 								idAnswerOption: 43,
	// 								idQuestion: 40,
	// 								text: "Вариант1",
	// 								score: 0
	// 							}
	// 						],
	// 						userAnswer: {
	// 							idAnswerOption: 42
	// 						}
	// 						// userAnswer: null
	// 					},
	// 					{
	// 						idQuestion: 44,
	// 						textQuestion: "Вопрос3",
	// 						image: {
	// 							imageName: "3.jpg",
	// 							sourceImageLink: "Ссылка на картинку3"
	// 						},
	// 						answerOptions: [
	// 							{
	// 								idAnswerOption: 45,
	// 								idQuestion: 44,
	// 								text: "Вариант4",
	// 								score: 0
	// 							},
	// 							{
	// 								idAnswerOption: 46,
	// 								idQuestion: 44,
	// 								text: "Вариант3",
	// 								score: 0
	// 							},
	// 							{
	// 								idAnswerOption: 47,
	// 								idQuestion: 44,
	// 								text: "Вариант2",
	// 								score: 1
	// 							},
	// 							{
	// 								idAnswerOption: 48,
	// 								idQuestion: 44,
	// 								text: "Вариант1",
	// 								score: 0
	// 							}
	// 						],
	// 						// userAnswer: {
	// 						// 	idAnswerOption: 9
	// 						// }
	// 						userAnswer: null
	// 					},
	// 					{
	// 						idQuestion: 49,
	// 						textQuestion: "Вопрос4",
	// 						image: {
	// 							imageName: "3.jpg",
	// 							sourceImageLink: "Ссылка на картинку3"
	// 						},
	// 						answerOptions: [
	// 							{
	// 								idAnswerOption: 50,
	// 								idQuestion: 49,
	// 								text: "Вариант4",
	// 								score: 0
	// 							},
	// 							{
	// 								idAnswerOption: 51,
	// 								idQuestion: 49,
	// 								text: "Вариант3",
	// 								score: 0
	// 							},
	// 							{
	// 								idAnswerOption: 52,
	// 								idQuestion: 49,
	// 								text: "Вариант2",
	// 								score: 1
	// 							},
	// 							{
	// 								idAnswerOption: 53,
	// 								idQuestion: 49,
	// 								text: "Вариант1",
	// 								score: 0
	// 							}
	// 						],
	// 						userAnswer: {
	// 							idAnswerOption: 51
	// 						}
	// 						// userAnswer: null
	// 					},
	// 				]
	// 			},
	// 			{
	// 				russianName: "Опрос3",
	// 				description: "ОписаниеОпроса2",
	// 				image: {
	// 					imageName: "2.jpg",
	// 					sourceImageLink: "Ссылка на картинку2"
	// 				},
	// 				subset: [
	// 					{
	// 						idQuestion: 54,
	// 						textQuestion: "Вопрос2 Опрос3",
	// 						image: {
	// 							imageName: "3.jpg",
	// 							sourceImageLink: "Ссылка на картинку3"
	// 						},
	// 						answerOptions: [
	// 							{
	// 								idAnswerOption: 55,
	// 								idQuestion: 54,
	// 								text: "Вариант4",
	// 								score: 0
	// 							},
	// 							{
	// 								idAnswerOption: 56,
	// 								idQuestion: 54,
	// 								text: "Вариант3",
	// 								score: 0
	// 							},
	// 							{
	// 								idAnswerOption: 57,
	// 								idQuestion: 54,
	// 								text: "Вариант2",
	// 								score: 1
	// 							},
	// 							{
	// 								idAnswerOption: 58,
	// 								idQuestion: 54,
	// 								text: "Вариант1",
	// 								score: 0
	// 							}
	// 						],
	// 						userAnswer: {
	// 							idAnswerOption: 58
	// 						}
	// 						// userAnswer: null
	// 					},
	// 					{
	// 						idQuestion: 59,
	// 						textQuestion: "Вопрос3",
	// 						image: {
	// 							imageName: "3.jpg",
	// 							sourceImageLink: "Ссылка на картинку3"
	// 						},
	// 						answerOptions: [
	// 							{
	// 								idAnswerOption: 60,
	// 								idQuestion: 59,
	// 								text: "Вариант4",
	// 								score: 0
	// 							},
	// 							{
	// 								idAnswerOption: 61,
	// 								idQuestion: 59,
	// 								text: "Вариант3",
	// 								score: 0
	// 							},
	// 							{
	// 								idAnswerOption: 62,
	// 								idQuestion: 59,
	// 								text: "Вариант2",
	// 								score: 1
	// 							},
	// 							{
	// 								idAnswerOption: 63,
	// 								idQuestion: 59,
	// 								text: "Вариант1",
	// 								score: 0
	// 							}
	// 						],
	// 						userAnswer: {
	// 							idAnswerOption: 63
	// 						}
	// 						// userAnswer: null
	// 					},
	// 				]
	// 			},
	// 		]
	// 	},
	// 	{
	// 		russianName: "Эра2",
	// 		description: "Описание Эры2",
	// 		image: {
	// 			imageName: "1.jpg",
	// 			sourceImageLink: "Ссылка на картинку1"
	// 		},
	// 		subset: [
	// 			{
	// 				russianName: "Опрос2",
	// 				description: "ОписаниеОпроса2",
	// 				image: {
	// 					imageName: "2.jpg",
	// 					sourceImageLink: "Ссылка на картинку2"
	// 				},
	// 				subset: [
	// 					{
	// 						idQuestion: 64,
	// 						textQuestion: "Вопрос2",
	// 						image: {
	// 							imageName: "3.jpg",
	// 							sourceImageLink: "Ссылка на картинку3"
	// 						},
	// 						answerOptions: [
	// 							{
	// 								idAnswerOption: 65,
	// 								idQuestion: 64,
	// 								text: "Вариант4",
	// 								score: 0
	// 							},
	// 							{
	// 								idAnswerOption: 66,
	// 								idQuestion: 64,
	// 								text: "Вариант3",
	// 								score: 0
	// 							},
	// 							{
	// 								idAnswerOption: 67,
	// 								idQuestion: 64,
	// 								text: "Вариант2",
	// 								score: 1
	// 							},
	// 							{
	// 								idAnswerOption: 68,
	// 								idQuestion: 64,
	// 								text: "Вариант1",
	// 								score: 0
	// 							}
	// 						],
	// 						userAnswer: {
	// 							idAnswerOption: 67
	// 						}
	// 						// userAnswer: null
	// 					},
	// 					{
	// 						idQuestion: 69,
	// 						textQuestion: "Вопрос3",
	// 						image: {
	// 							imageName: "3.jpg",
	// 							sourceImageLink: "Ссылка на картинку3"
	// 						},
	// 						answerOptions: [
	// 							{
	// 								idAnswerOption: 70,
	// 								idQuestion: 69,
	// 								text: "Вариант4",
	// 								score: 0
	// 							},
	// 							{
	// 								idAnswerOption: 71,
	// 								idQuestion: 69,
	// 								text: "Вариант3",
	// 								score: 0
	// 							},
	// 							{
	// 								idAnswerOption: 72,
	// 								idQuestion: 69,
	// 								text: "Вариант2",
	// 								score: 1
	// 							},
	// 							{
	// 								idAnswerOption: 73,
	// 								idQuestion: 69,
	// 								text: "Вариант1",
	// 								score: 0
	// 							}
	// 						],
	// 						// userAnswer: {
	// 						// 	idAnswerOption: 9
	// 						// }
	// 						userAnswer: null
	// 					},
	// 					{
	// 						idQuestion: 74,
	// 						textQuestion: "Вопрос4",
	// 						image: {
	// 							imageName: "3.jpg",
	// 							sourceImageLink: "Ссылка на картинку3"
	// 						},
	// 						answerOptions: [
	// 							{
	// 								idAnswerOption: 75,
	// 								idQuestion: 74,
	// 								text: "Вариант4",
	// 								score: 0
	// 							},
	// 							{
	// 								idAnswerOption: 76,
	// 								idQuestion: 74,
	// 								text: "Вариант3",
	// 								score: 0
	// 							},
	// 							{
	// 								idAnswerOption: 77,
	// 								idQuestion: 74,
	// 								text: "Вариант2",
	// 								score: 1
	// 							},
	// 							{
	// 								idAnswerOption: 78,
	// 								idQuestion: 74,
	// 								text: "Вариант1",
	// 								score: 0
	// 							}
	// 						],
	// 						userAnswer: {
	// 							idAnswerOption: 78
	// 						}
	// 						// userAnswer: null
	// 					},
	// 				]
	// 			},
	// 			{
	// 				russianName: "Опрос3",
	// 				description: "ОписаниеОпроса2",
	// 				image: {
	// 					imageName: "2.jpg",
	// 					sourceImageLink: "Ссылка на картинку2"
	// 				},
	// 				subset: [
	// 					{
	// 						idQuestion: 79,
	// 						textQuestion: "Вопрос2 Опрос3",
	// 						image: {
	// 							imageName: "3.jpg",
	// 							sourceImageLink: "Ссылка на картинку3"
	// 						},
	// 						answerOptions: [
	// 							{
	// 								idAnswerOption: 80,
	// 								idQuestion: 79,
	// 								text: "Вариант4",
	// 								score: 0
	// 							},
	// 							{
	// 								idAnswerOption: 81,
	// 								idQuestion: 79,
	// 								text: "Вариант3",
	// 								score: 0
	// 							},
	// 							{
	// 								idAnswerOption: 82,
	// 								idQuestion: 79,
	// 								text: "Вариант2",
	// 								score: 1
	// 							},
	// 							{
	// 								idAnswerOption: 83,
	// 								idQuestion: 79,
	// 								text: "Вариант1",
	// 								score: 0
	// 							}
	// 						],
	// 						userAnswer: {
	// 							idAnswerOption: 83
	// 						}
	// 						// userAnswer: null
	// 					},
	// 					{
	// 						idQuestion: 84,
	// 						textQuestion: "Вопрос3",
	// 						image: {
	// 							imageName: "3.jpg",
	// 							sourceImageLink: "Ссылка на картинку3"
	// 						},
	// 						answerOptions: [
	// 							{
	// 								idAnswerOption: 85,
	// 								idQuestion: 84,
	// 								text: "Вариант4",
	// 								score: 0
	// 							},
	// 							{
	// 								idAnswerOption: 86,
	// 								idQuestion: 84,
	// 								text: "Вариант3",
	// 								score: 0
	// 							},
	// 							{
	// 								idAnswerOption: 87,
	// 								idQuestion: 84,
	// 								text: "Вариант2",
	// 								score: 1
	// 							},
	// 							{
	// 								idAnswerOption: 88,
	// 								idQuestion: 84,
	// 								text: "Вариант1",
	// 								score: 0
	// 							}
	// 						],
	// 						userAnswer: {
	// 							idAnswerOption: 86
	// 						}
	// 						// userAnswer: null
	// 					},
	// 				]
	// 			},
	// 		]
	// 	}
	// ],


}
