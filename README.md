# vg-quiz
Videogular quiz plugin

## How to use

## Data

The quiz plugin accepts JSON data.  The JSON structure should be as: 
```
	{
		"time": --(int) -> Second to pause the video and show quiz--,
		"params": {
			"index": --(int) -> Quiz index. Must match the order of quiz appearance.--,
			"id": --(long) -> Quiz identificator--,
			"question": --(string) -> Quiz question--,			
			"answers": [
				{
					"id": --(int) -> Answer identificator. Should be unique--,
					"text": --(string) -> Answer text--,
					"isCorrect": --(boolean) -> Only if answer is correct --
			},
			...
		]
		}
	}
```


### Example

```
	{
		"time": 18,
		"params": {
			"index": 2,
			"id": 2,
			"question": "Who was elected president of Spain in 2011?",
			"answers": [
				{
					"id": 1,
					"text": "Mariano Rajoy",
					"isCorrect": true
			},
				{
					"id": 2,
					"text": "Zapatero"
			},
				{
					"id": 3,
					"text": "Pablo Iglesias"
			}
		]
		}
	}
```