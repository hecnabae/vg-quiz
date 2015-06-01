# vg-quiz
Videogular quiz plugin

## How to use

### 1 Add quiz directives to your source

```
<videogular vg-theme="controller.config.theme" vg-player-ready="controller.onPlayerReady($API)" vg-cue-points="controller.config.cuePoints" class="quizvideo-container">
	<vg-media vg-src="controller.config.sources">
	</vg-media>


	<vg-controls>
		<vg-play-pause-button></vg-play-pause-button>
		<vg-time-display>{{ currentTime | date:'mm:ss' }}</vg-time-display>
		<vg-scrub-bar>
			<vg-scrub-bar-current-time></vg-scrub-bar-current-time>
		</vg-scrub-bar>
		<vg-time-display>{{ timeLeft | date:'mm:ss' }}</vg-time-display>
		<vg-volume>
			<vg-mute-button></vg-mute-button>
			<vg-volume-bar></vg-volume-bar>
		</vg-volume>
		<vg-fullscreen-button></vg-fullscreen-button>
	</vg-controls>

	<vg-overlay-play></vg-overlay-play>
	<vg-poster vg-url='controller.config.plugins.poster'></vg-poster>
	<vg-quiz></vg-quiz>
</videogular>
```

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
			{...}]
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
				}]
		}
	}
```