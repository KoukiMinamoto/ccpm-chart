function createSticker () {
    const widget = [{
        "type": "sticker",
        "title": "Enter Task",
        "y": 0.0,
        "x": 0.0,
        "style": {
          "backgroundColor": "#ff00ff"
        }
      },
    {
        "type": "sticker",
        "title": "Date",
        "y": -10,
        "x": -10,
        "style": {
            "backgroundColor": "#ffffff"
        }
    }]

      miro.board.widgets.create(widget)
}